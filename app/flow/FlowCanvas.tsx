'use client'

import { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const COUNT = 120000

const VERTEX_SHADER = `
uniform float uTime;
uniform float uSize;
uniform float uFocus;
uniform float uBlur;
uniform float uStrength;
uniform float uFrequency;

attribute float aSize;

vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}

float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);
  const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));
  vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);
  vec3 l=1.-g;
  vec3 i1=min(g.xyz,l.zxy);
  vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;
  vec3 x2=x0-i2+C.yyy;
  vec3 x3=x0-D.yyy;
  i=mod(i,289.);
  vec4 p=permute(permute(permute(
    i.z+vec4(0.,i1.z,i2.z,1.))
    +i.y+vec4(0.,i1.y,i2.y,1.))
    +i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=1./7.;
  vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);
  vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;
  vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);
  vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;
  vec4 s1=floor(b1)*2.+1.;
  vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;
  vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);
  vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);
  vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=1.79284291400159-0.85373472095314*vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);
  m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

vec3 curlNoise(vec3 p){
  float e = 0.1;
  float nx1 = snoise(p + vec3(e,0.,0.));
  float nx2 = snoise(p - vec3(e,0.,0.));
  float ny1 = snoise(p + vec3(0.,e,0.));
  float ny2 = snoise(p - vec3(0.,e,0.));
  float nz1 = snoise(p + vec3(0.,0.,e));
  float nz2 = snoise(p - vec3(0.,0.,e));
  float x = ny1 - ny2 - (nz1 - nz2);
  float y = nz1 - nz2 - (nx1 - nx2);
  float z = nx1 - nx2 - (ny1 - ny2);
  return vec3(x,y,z) / (2.0 * e);
}

varying float vDistance;
varying float vBlur;

void main(){
  vec3 p = position;
  
  float t = uTime * 0.15;
  
  vec3 curl = curlNoise(p * uFrequency + t);
  p += curl * uStrength;
  
  vec4 mvPosition = modelViewMatrix * vec4(p, 1.);
  
  vDistance = abs(uFocus - -mvPosition.z);
  vBlur = vDistance * uBlur;
  
  gl_PointSize = uSize * aSize * (200.0 / -mvPosition.z);
  gl_PointSize += vBlur * 2.0;
  
  gl_Position = projectionMatrix * mvPosition;
}
`

const FRAGMENT_SHADER = `
varying float vDistance;
varying float vBlur;

void main(){
  float d = length(gl_PointCoord - vec2(0.5));
  
  float blur = smoothstep(0.5, 0.0, d);
  blur = mix(blur, smoothstep(0.7, 0.0, d), min(vBlur * 0.3, 1.0));
  
  float alpha = blur * 0.5;
  alpha *= (1.04 - clamp(vDistance * 0.8, 0.0, 1.0));
  
  gl_FragColor = vec4(vec3(1.0), alpha);
}
`

function getSpherePositions(count: number, radius: number): { positions: Float32Array, sizes: Float32Array } {
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  for (let i = 0; i < count; i++) {
    const r = Math.cbrt(Math.random()) * radius
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(2 * Math.random() - 1)
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = r * Math.cos(phi)
    sizes[i] = 0.3 + Math.random() * 1.4
  }
  return { positions, sizes }
}

function Slider({ label, value, onChange, min, max, step = 0.01 }: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
}) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px', fontSize: '11px' }}>
        <span style={{ color: '#888' }}>{label}</span>
        <span style={{ color: '#fff', fontFamily: 'monospace', background: '#333', padding: '1px 6px', borderRadius: '3px' }}>{value.toFixed(2)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{
          width: '100%',
          height: '6px',
          appearance: 'none',
          WebkitAppearance: 'none',
          background: '#444',
          borderRadius: '3px',
          cursor: 'pointer',
          outline: 'none'
        }}
      />
    </div>
  )
}

export default function FlowCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const speedRef = useRef(8.1)
  
  const [settings, setSettings] = useState({
    focus: 5.16,
    speed: 8.1,
    size: 0.25,
    strength: 0.19,
    frequency: 1.2,
    blur: 15
  })
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)
    
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#000000')
    
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 4
    
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.autoRotate = true
    controls.autoRotateSpeed = 0.5
    controls.enableZoom = true
    controls.zoomSpeed = 0.1
    
    const { positions, sizes } = getSpherePositions(COUNT, 1.2)
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
    
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: settings.size },
        uFocus: { value: settings.focus },
        uBlur: { value: settings.blur },
        uStrength: { value: settings.strength },
        uFrequency: { value: settings.frequency }
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
    
    materialRef.current = material
    
    const points = new THREE.Points(geometry, material)
    scene.add(points)
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    
    let animationId: number
    
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      material.uniforms.uTime.value += 0.016 * speedRef.current
      controls.update()
      renderer.render(scene, camera)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      controls.dispose()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      materialRef.current = null
    }
  }, [])
  
  useEffect(() => {
    speedRef.current = settings.speed
    if (materialRef.current) {
      const u = materialRef.current.uniforms
      u.uFocus.value = settings.focus
      u.uSize.value = settings.size
      u.uBlur.value = settings.blur
      u.uStrength.value = settings.strength
      u.uFrequency.value = settings.frequency
    }
  }, [settings])
  
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000000', overflow: 'hidden' }}>
      <div 
        ref={containerRef} 
        style={{ width: '100%', height: '100%' }}
      />
      
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        background: 'rgba(0,0,0,0.8)',
        padding: '16px',
        borderRadius: '8px',
        width: '200px',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '12px',
        zIndex: 1000
      }}>
        <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '12px', fontSize: '14px' }}>Controls</div>
        
        <Slider
          label="Focus"
          value={settings.focus}
          onChange={(v) => setSettings(s => ({ ...s, focus: v }))}
          min={3}
          max={7}
        />
        
        <Slider
          label="Speed"
          value={settings.speed}
          onChange={(v) => setSettings(s => ({ ...s, speed: v }))}
          min={0.1}
          max={20}
        />
        
        <Slider
          label="Size"
          value={settings.size}
          onChange={(v) => setSettings(s => ({ ...s, size: v }))}
          min={0.1}
          max={1}
        />
        
        <Slider
          label="Blur"
          value={settings.blur}
          onChange={(v) => setSettings(s => ({ ...s, blur: v }))}
          min={1}
          max={40}
        />
        
        <Slider
          label="Curl"
          value={settings.strength}
          onChange={(v) => setSettings(s => ({ ...s, strength: v }))}
          min={0.01}
          max={0.5}
        />
        
        <Slider
          label="Frequency"
          value={settings.frequency}
          onChange={(v) => setSettings(s => ({ ...s, frequency: v }))}
          min={0.5}
          max={3}
        />
      </div>
    </div>
  )
}
