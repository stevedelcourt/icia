import * as THREE from 'three'
import { extend } from '@react-three/fiber'

const CURL_NOISE_GLSL = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`

function getCellParticles(count: number, cellRadius: number, membraneRatio: number = 0.2) {
  const data = new Float32Array(count * 4)
  const membraneCount = Math.floor(count * membraneRatio)
  
  for (let i = 0; i < count; i++) {
    const isMembrane = i < membraneCount
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    
    let radius: number
    if (isMembrane) {
      radius = cellRadius * (0.95 + Math.random() * 0.1)
    } else {
      radius = cellRadius * Math.pow(Math.random(), 0.5) * 0.9
    }
    
    const x = radius * Math.sin(phi) * Math.cos(theta)
    const y = radius * Math.sin(phi) * Math.sin(theta)
    const z = radius * Math.cos(phi)
    
    data[i * 4 + 0] = x
    data[i * 4 + 1] = y
    data[i * 4 + 2] = z
    data[i * 4 + 3] = isMembrane ? 1.0 : 0.0
  }
  
  return data
}

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor({ cellRadius = 1.5 }: { cellRadius?: number } = {}) {
    const positionsTexture = new THREE.DataTexture(
      getCellParticles(512 * 512, cellRadius, 0.25),
      512,
      512,
      THREE.RGBAFormat,
      THREE.FloatType
    )
    positionsTexture.needsUpdate = true

    super({
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D positions;
        uniform float uTime;
        uniform float uWobbleSpeed;
        uniform float uWobbleAmount;
        uniform float uPulseSpeed;
        uniform float uPulseAmount;
        varying vec2 vUv;
        
        ${CURL_NOISE_GLSL}
        
        void main() {
          vec4 data = texture2D(positions, vUv);
          vec3 pos = data.rgb;
          float isMembrane = data.a;
          
          float t = uTime;
          float dist = length(pos);
          vec3 dir = normalize(pos);
          
          float pulse = sin(t * uPulseSpeed) * uPulseAmount * 0.1;
          float breathe = 1.0 + pulse;
          
          float wobblePhase = dist * 2.0 + t * uWobbleSpeed;
          float wobbleX = snoise(vec3(wobblePhase, t * 0.3, 0.0)) * uWobbleAmount;
          float wobbleY = snoise(vec3(0.0, wobblePhase, t * 0.3)) * uWobbleAmount;
          float wobbleZ = snoise(vec3(t * 0.3, 0.0, wobblePhase)) * uWobbleAmount;
          
          float membraneWobble = isMembrane * 1.5;
          vec3 wobble = vec3(wobbleX, wobbleY, wobbleZ) * membraneWobble;
          
          pos = pos * breathe + wobble;
          
          float turbulence = snoise(pos * 0.5 + t * 0.1) * 0.02 * (1.0 - isMembrane);
          pos += vec3(turbulence);
          
          gl_FragColor = vec4(pos, isMembrane);
        }
      `,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uWobbleSpeed: { value: 1.0 },
        uWobbleAmount: { value: 0.15 },
        uPulseSpeed: { value: 0.5 },
        uPulseAmount: { value: 0.3 }
      }
    })
  }
}

extend({ SimulationMaterial })

export { SimulationMaterial }
