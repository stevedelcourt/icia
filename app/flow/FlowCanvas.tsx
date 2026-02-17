'use client'

import { useRef, useMemo, useState, useEffect, useCallback } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const VERTEX_SHADER = `
uniform sampler2D positions;
uniform float uTime;
uniform float uFocus;
uniform float uFov;
uniform float uBlur;
varying float vDistance;
void main() { 
  vec3 pos = texture2D(positions, position.xy).xyz;
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vDistance = abs(uFocus - -mvPosition.z);
  gl_PointSize = (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur * 2.0;
}
`

const FRAGMENT_SHADER = `
uniform float uOpacity;
varying float vDistance;
void main() {
  vec2 cxy = 2.0 * gl_PointCoord - 1.0;
  if (dot(cxy, cxy) > 1.0) discard;
  gl_FragColor = vec4(vec3(1.0), (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
}
`

const SIM_VERTEX_SHADER = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const SIM_FRAGMENT_SHADER = `
uniform sampler2D positions;
uniform float uTime;
uniform float uCurlFreq;
varying vec2 vUv;

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
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
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
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

vec3 curl(vec3 p) {
  const float e = 0.1;
  vec3 dx = vec3(e, 0.0, 0.0);
  vec3 dy = vec3(0.0, e, 0.0);
  vec3 dz = vec3(0.0, 0.0, e);
  float n1 = snoise(p + dy) - snoise(p - dy);
  float n2 = snoise(p + dz) - snoise(p - dz);
  float n3 = snoise(p + dx) - snoise(p - dx);
  float n4 = snoise(p + dz) - snoise(p - dz);
  float n5 = snoise(p + dx) - snoise(p - dx);
  float n6 = snoise(p + dy) - snoise(p - dy);
  return normalize(vec3(n1 - n2, n3 - n4, n5 - n6));
}

void main() {
  float t = uTime * 0.015;
  vec3 pos = texture2D(positions, vUv).rgb;
  vec3 curlPos = texture2D(positions, vUv).rgb;
  pos = curl(pos * uCurlFreq + t);
  curlPos = curl(curlPos * uCurlFreq + t);
  curlPos += curl(curlPos * uCurlFreq * 2.0) * 0.5;
  curlPos += curl(curlPos * uCurlFreq * 4.0) * 0.25;
  curlPos += curl(curlPos * uCurlFreq * 8.0) * 0.125;
  curlPos += curl(pos * uCurlFreq * 16.0) * 0.0625;
  float noise = snoise(pos + t);
  gl_FragColor = vec4(mix(pos, curlPos, noise), 1.0);
}
`

class DofPointsMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        positions: { value: null },
        uTime: { value: 0 },
        uFocus: { value: 5.1 },
        uFov: { value: 50 },
        uBlur: { value: 30 },
        uOpacity: { value: 1 }
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false
    })
  }
}

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(positionsTexture: THREE.DataTexture) {
    super({
      vertexShader: SIM_VERTEX_SHADER,
      fragmentShader: SIM_FRAGMENT_SHADER,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uCurlFreq: { value: 0.25 }
      }
    })
  }
}

extend({ DofPointsMaterial, SimulationMaterial })

function getPoint(v: THREE.Vector3, size: number, data: Float32Array, offset: number) {
  v.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1)
  if (v.length() > 1) return getPoint(v, size, data, offset)
  v.normalize().multiplyScalar(size)
  data[offset] = v.x
  data[offset + 1] = v.y
  data[offset + 2] = v.z
  data[offset + 3] = 1
}

function getSphere(count: number, size: number) {
  const data = new Float32Array(count * 4)
  const p = new THREE.Vector3()
  for (let i = 0; i < count * 4; i += 4) {
    getPoint(p, size, data, i)
  }
  return data
}

function Particles({ speed = 100, fov = 20, aperture = 1.8, focus = 5.1, curl = 0.25, size = 512 }: {
  speed?: number
  fov?: number
  aperture?: number
  focus?: number
  curl?: number
  size?: number
}) {
  const simRef = useRef<SimulationMaterial>(null)
  const renderRef = useRef<DofPointsMaterial>(null)
  const scene = useState(() => new THREE.Scene())[0]
  const camera = useState(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1))[0]
  
  const positions = useMemo(() => new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]), [])
  const uvs = useMemo(() => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]), [])
  
  const target = useMemo(() => new THREE.WebGLRenderTarget(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType
  }), [size])
  
  const particles = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      particles[i * 3 + 0] = (i % size) / size
      particles[i * 3 + 1] = i / size / size
    }
    return particles
  }, [size])
  
  const simMaterial = useMemo(() => {
    const positionsTexture = new THREE.DataTexture(getSphere(512 * 512, 128), 512, 512, THREE.RGBAFormat, THREE.FloatType)
    positionsTexture.needsUpdate = true
    return new SimulationMaterial(positionsTexture)
  }, [])
  
  const renderMaterial = useMemo(() => new DofPointsMaterial(), [])
  
  const simGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
    return geo
  }, [positions, uvs])
  
  const particlesGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(particles, 3))
    return geo
  }, [particles])
  
  useFrame((state) => {
    state.gl.setRenderTarget(target)
    state.gl.clear()
    
    const simMesh = new THREE.Mesh(simGeometry, simMaterial)
    scene.add(simMesh)
    state.gl.render(scene, camera)
    scene.remove(simMesh)
    
    state.gl.setRenderTarget(null)
    
    renderMaterial.uniforms.positions.value = target.texture
    renderMaterial.uniforms.uTime.value = state.clock.elapsedTime
    renderMaterial.uniforms.uFocus.value = THREE.MathUtils.lerp(renderMaterial.uniforms.uFocus.value, focus, 0.1)
    renderMaterial.uniforms.uFov.value = THREE.MathUtils.lerp(renderMaterial.uniforms.uFov.value, fov, 0.1)
    renderMaterial.uniforms.uBlur.value = THREE.MathUtils.lerp(renderMaterial.uniforms.uBlur.value, (5.6 - aperture) * 9, 0.1)
    simMaterial.uniforms.uTime.value = state.clock.elapsedTime * speed
    simMaterial.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(simMaterial.uniforms.uCurlFreq.value, curl, 0.1)
  })
  
  return (
    <points>
      <primitive object={renderMaterial} attach="material" />
      <primitive object={particlesGeometry} attach="geometry" />
    </points>
  )
}

function Scene() {
  return (
    <>
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} zoomSpeed={0.1} />
      <Particles speed={1.4} fov={60} aperture={3.4} focus={6.37} curl={0.36} />
    </>
  )
}

export default function FlowCanvas() {
  const [gl, setGl] = useState<THREE.WebGL1Renderer | null>(null)
  
  useEffect(() => {
    const renderer = new THREE.WebGL1Renderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    setGl(renderer)
    
    return () => {
      renderer.dispose()
    }
  }, [])
  
  if (!gl) {
    return (
      <div style={{ 
        width: '100vw', 
        height: '100vh', 
        background: '#181820',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#666'
      }}>
        Loading...
      </div>
    )
  }
  
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#181820' }}>
      <Canvas
        gl={gl}
        linear
        dpr={2}
        camera={{ fov: 25, position: [0, 0, 6] }}
        style={{ background: '#181820' }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
