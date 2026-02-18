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

vec3 curl(vec3 p) {
  const float e = 0.1;
  float n1 = snoise(vec3(p.x, p.y + e, p.z)) - snoise(vec3(p.x, p.y - e, p.z));
  float n2 = snoise(vec3(p.x, p.y, p.z + e)) - snoise(vec3(p.x, p.y, p.z - e));
  float n3 = snoise(vec3(p.x + e, p.y, p.z)) - snoise(vec3(p.x - e, p.y, p.z));
  float n4 = snoise(vec3(p.x, p.y, p.z + e)) - snoise(vec3(p.x, p.y, p.z - e));
  float n5 = snoise(vec3(p.x + e, p.y, p.z)) - snoise(vec3(p.x - e, p.y, p.z));
  float n6 = snoise(vec3(p.x, p.y + e, p.z)) - snoise(vec3(p.x, p.y - e, p.z));
  return vec3(n1 - n2, n3 - n4, n5 - n6) / (2.0 * e);
}
`

function getShellPoint(
  v: THREE.Vector3, 
  shellIndex: number, 
  shellCount: number,
  shellSpread: number,
  data: Float32Array, 
  offset: number
) {
  const shellRadius = ((shellIndex + 0.5) / shellCount) * shellSpread + 20
  const theta = Math.random() * Math.PI * 2
  const phi = Math.acos(2 * Math.random() - 1)
  
  const x = shellRadius * Math.sin(phi) * Math.cos(theta)
  const y = shellRadius * Math.sin(phi) * Math.sin(theta)
  const z = shellRadius * Math.cos(phi)
  
  const jitter = shellRadius * 0.1
  v.set(
    x + (Math.random() - 0.5) * jitter,
    y + (Math.random() - 0.5) * jitter,
    z + (Math.random() - 0.5) * jitter
  )
  
  v.toArray(data, offset)
  data[offset + 3] = shellIndex / shellCount
}

function getShells(count: number, shellCount: number, shellSpread: number) {
  const data = new Float32Array(count * 4)
  const p = new THREE.Vector3()
  const particlesPerShell = Math.floor(count / shellCount)
  
  for (let i = 0; i < count; i++) {
    const shellIndex = Math.min(Math.floor(i / particlesPerShell), shellCount - 1)
    getShellPoint(p, shellIndex, shellCount, shellSpread, data, i * 4)
  }
  return data
}

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor({ shellCount = 5, shellSpread = 80 }: { shellCount?: number; shellSpread?: number } = {}) {
    const positionsTexture = new THREE.DataTexture(
      getShells(512 * 512, shellCount, shellSpread),
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
        uniform float uCurlFreq;
        uniform float uPulseSpeed;
        uniform float uPulseAmount;
        uniform float uRotationSpeed;
        varying vec2 vUv;
        
        ${CURL_NOISE_GLSL}
        
        void main() {
          vec4 data = texture2D(positions, vUv);
          vec3 pos = data.rgb;
          float shellIndex = data.a;
          
          float t = uTime * 0.015;
          
          float dist = length(pos);
          vec3 dir = normalize(pos);
          
          float pulse = sin(t * uPulseSpeed + dist * 0.05) * uPulseAmount;
          pos += dir * pulse;
          
          float shellRotation = uRotationSpeed * (1.0 + shellIndex * 0.5);
          float angle = t * shellRotation;
          float c = cos(angle);
          float s = sin(angle);
          mat3 rotY = mat3(c, 0.0, s, 0.0, 1.0, 0.0, -s, 0.0, c);
          mat3 rotX = mat3(1.0, 0.0, 0.0, 0.0, c, -s, 0.0, s, c);
          pos = rotY * rotX * pos;
          
          vec3 curlOffset = curl(pos * uCurlFreq + t * 0.1) * 0.5;
          pos += curlOffset * (1.0 - shellIndex * 0.3);
          
          gl_FragColor = vec4(pos, shellIndex);
        }
      `,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uCurlFreq: { value: 0.08 },
        uPulseSpeed: { value: 1.0 },
        uPulseAmount: { value: 2.0 },
        uRotationSpeed: { value: 0.3 }
      }
    })
  }
}

extend({ SimulationMaterial })

export { SimulationMaterial }
