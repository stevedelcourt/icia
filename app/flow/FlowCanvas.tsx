'use client'

import { useRef, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
  float n1 = snoise(p + vec3(0.0, e, 0.0)) - snoise(p + vec3(0.0, -e, 0.0));
  float n2 = snoise(p + vec3(0.0, 0.0, e)) - snoise(p + vec3(0.0, 0.0, -e));
  float n3 = snoise(p + vec3(e, 0.0, 0.0)) - snoise(p + vec3(-e, 0.0, 0.0));
  float n4 = snoise(p + vec3(0.0, 0.0, e)) - snoise(p + vec3(0.0, 0.0, -e));
  float n5 = snoise(p + vec3(e, 0.0, 0.0)) - snoise(p + vec3(-e, 0.0, 0.0));
  float n6 = snoise(p + vec3(0.0, e, 0.0)) - snoise(p + vec3(0.0, -e, 0.0));
  vec3 c = vec3(n1 - n2, n3 - n4, n5 - n6);
  float len = length(c);
  return len > 0.0 ? c / len : vec3(0.0);
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

export default function FlowCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const SIZE = 512
    const settings = {
      focus: 6.37,
      speed: 1.4,
      aperture: 3.4,
      fov: 60,
      curl: 0.36
    }
    
    const renderer = new THREE.WebGL1Renderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 6
    
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5
    controls.zoomSpeed = 0.1
    
    const simScene = new THREE.Scene()
    const simCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1)
    
    const positionsTexture = new THREE.DataTexture(getSphere(SIZE * SIZE, 128), SIZE, SIZE, THREE.RGBAFormat, THREE.FloatType)
    positionsTexture.needsUpdate = true
    
    const simMaterial = new THREE.ShaderMaterial({
      vertexShader: SIM_VERTEX_SHADER,
      fragmentShader: SIM_FRAGMENT_SHADER,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uCurlFreq: { value: settings.curl }
      }
    })
    
    const simGeometry = new THREE.BufferGeometry()
    simGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]), 3))
    simGeometry.setAttribute('uv', new THREE.BufferAttribute(new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]), 2))
    
    const simMesh = new THREE.Mesh(simGeometry, simMaterial)
    simScene.add(simMesh)
    
    const target = new THREE.WebGLRenderTarget(SIZE, SIZE, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType
    })
    
    const renderMaterial = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        positions: { value: null },
        uTime: { value: 0 },
        uFocus: { value: settings.focus },
        uFov: { value: settings.fov },
        uBlur: { value: (5.6 - settings.aperture) * 9 }
      },
      transparent: true,
      depthWrite: false
    })
    
    const particles = new Float32Array(SIZE * SIZE * 3)
    for (let i = 0; i < SIZE * SIZE; i++) {
      particles[i * 3] = (i % SIZE) / SIZE
      particles[i * 3 + 1] = Math.floor(i / SIZE) / SIZE
      particles[i * 3 + 2] = 0
    }
    
    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3))
    
    const points = new THREE.Points(particlesGeometry, renderMaterial)
    scene.add(points)
    
    let time = 0
    let currentFocus = settings.focus
    let currentFov = settings.fov
    let currentBlur = (5.6 - settings.aperture) * 9
    let currentCurl = settings.curl
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    
    let animationId: number
    let lastTime = performance.now()
    
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      const now = performance.now()
      const delta = (now - lastTime) / 1000
      lastTime = now
      time += delta
      
      renderer.setRenderTarget(target)
      renderer.clear()
      renderer.render(simScene, simCamera)
      renderer.setRenderTarget(null)
      
      renderMaterial.uniforms.positions.value = target.texture
      renderMaterial.uniforms.uTime.value = time
      renderMaterial.uniforms.uFocus.value = THREE.MathUtils.lerp(renderMaterial.uniforms.uFocus.value, currentFocus, 0.1)
      renderMaterial.uniforms.uFov.value = THREE.MathUtils.lerp(renderMaterial.uniforms.uFov.value, currentFov, 0.1)
      renderMaterial.uniforms.uBlur.value = THREE.MathUtils.lerp(renderMaterial.uniforms.uBlur.value, currentBlur, 0.1)
      
      simMaterial.uniforms.uTime.value = time * settings.speed
      simMaterial.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(simMaterial.uniforms.uCurlFreq.value, currentCurl, 0.1)
      
      controls.update()
      renderer.render(scene, camera)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      controls.dispose()
      renderer.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])
  
  return (
    <div 
      ref={containerRef} 
      style={{ width: '100vw', height: '100vh', background: '#181820', overflow: 'hidden' }}
    />
  )
}
