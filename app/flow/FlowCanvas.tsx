'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

const CURL_GLSL = `
vec4 permute(vec4 x){return mod(((x*34.)+1.)*x,289.);}

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
 vec4 norm=1.7928429-0.8537347*
  vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3));
 p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
 vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),
                     dot(x2,x2),dot(x3,x3)),0.);
 m=m*m;
 return 42.*dot(m*m,
  vec4(dot(p0,x0),dot(p1,x1),
       dot(p2,x2),dot(p3,x3)));
}

vec3 curlNoise(vec3 p){
 float e=0.1;
 float nx1=snoise(p+vec3(e,0,0));
 float nx2=snoise(p-vec3(e,0,0));
 float ny1=snoise(p+vec3(0,e,0));
 float ny2=snoise(p-vec3(0,e,0));
 float nz1=snoise(p+vec3(0,0,e));
 float nz2=snoise(p-vec3(0,0,e));
 float x=ny1-ny2-(nz1-nz2);
 float y=nz1-nz2-(nx1-nx2);
 float z=nx1-nx2-(ny1-ny2);
 return normalize(vec3(x,y,z));
}
`

const SIM_FRAG = (size: number, curlFreq: number, curlStrength: number) => `
uniform float uTime;
uniform sampler2D uPositions;
${CURL_GLSL}

void main(){
  vec2 uv=gl_FragCoord.xy/${size.toFixed(1)};
  vec3 pos=texture2D(uPositions,uv).xyz;
  vec3 v=curlNoise(pos*${curlFreq.toFixed(2)}+uTime*0.15);
  pos+=v*${curlStrength.toFixed(4)};
  if(length(pos)>3.0)pos=normalize(pos)*0.5;
  gl_FragColor=vec4(pos,1.);
}
`

const RENDER_VERT = `
uniform sampler2D uPositions;
uniform float uFocus;
uniform float uBlur;
uniform float uSize;

attribute float aSize;

varying float vDistance;
varying float vBlur;

void main(){
  vec3 pos=texture2D(uPositions,uv).xyz;
  vec4 mv=modelViewMatrix*vec4(pos,1.);
  
  vDistance=abs(uFocus-(-mv.z));
  vBlur=vDistance*uBlur;
  
  gl_PointSize=uSize*aSize*(300./-mv.z);
  gl_PointSize+=vBlur*2.0;
  
  gl_Position=projectionMatrix*mv;
}
`

const RENDER_FRAG = `
varying float vDistance;
varying float vBlur;

void main(){
  float d=length(gl_PointCoord-vec2(0.5));
  float blur=smoothstep(0.5,0.0,d);
  blur=mix(blur,smoothstep(0.7,0.0,d),min(vBlur*0.3,1.0));
  float alpha=blur*0.5;
  alpha*=(1.04-clamp(vDistance*0.8,0.0,1.0));
  gl_FragColor=vec4(vec3(1.),alpha);
}
`

function getParticleData(count: number, radius: number) {
  const positions = new Float32Array(count * 4)
  const sizes = new Float32Array(count)
  
  for (let i = 0; i < count; i++) {
    const r = Math.random() * radius
    const a = Math.random() * Math.PI * 2
    const b = Math.random() * Math.PI
    
    positions[i * 4] = Math.sin(b) * Math.cos(a) * r
    positions[i * 4 + 1] = Math.sin(b) * Math.sin(a) * r
    positions[i * 4 + 2] = Math.cos(b) * r
    positions[i * 4 + 3] = 1
    
    sizes[i] = 0.3 + Math.random() * 1.4
  }
  
  return { positions, sizes }
}

function CurlParticles({ settings, size }: { settings: any; size: number }) {
  const { gl } = useThree()
  const count = size * size
  
  const simScene = useMemo(() => new THREE.Scene(), [])
  const simCam = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1), [])
  
  const simMat = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPositions: { value: null }
    },
    vertexShader: `void main(){gl_Position=vec4(position,1.);}`,
    fragmentShader: SIM_FRAG(size, settings.frequency, settings.strength)
  }), [size, settings.frequency, settings.strength])
  
  const rt1 = useMemo(() => new THREE.WebGLRenderTarget(size, size, {
    type: THREE.FloatType,
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    depthBuffer: false,
    stencilBuffer: false
  }), [size])
  
  const rt2 = useMemo(() => rt1.clone(), [rt1])
  
  useMemo(() => {
    const { positions } = getParticleData(count, 1.2)
    const tex = new THREE.DataTexture(positions, size, size, THREE.RGBAFormat, THREE.FloatType)
    tex.needsUpdate = true
    gl.setRenderTarget(rt1)
    gl.clear()
    simMat.uniforms.uPositions.value = tex
    gl.render(simScene, simCam)
    gl.setRenderTarget(null)
  }, [gl, simScene, simCam, simMat, count, size, rt1])
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const uvs = new Float32Array(count * 2)
    const sizes = new Float32Array(count)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = 0
      positions[i * 3 + 1] = 0
      positions[i * 3 + 2] = 0
      uvs[i * 2] = (i % size) / (size - 1)
      uvs[i * 2 + 1] = Math.floor(i / size) / (size - 1)
      sizes[i] = 0.3 + Math.random() * 1.4
    }
    
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
    geo.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1))
    return geo
  }, [count, size])
  
  const renderMat = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
      uPositions: { value: null },
      uFocus: { value: settings.focus },
      uBlur: { value: settings.blur },
      uSize: { value: settings.size }
    },
    vertexShader: RENDER_VERT,
    fragmentShader: RENDER_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }), [])
  
  const pointsRef = useRef<THREE.Points>(null)
  const flipRef = useRef(false)
  const speedRef = useRef(settings.speed)
  
  useEffect(() => {
    speedRef.current = settings.speed
  }, [settings.speed])
  
  useEffect(() => {
    if (pointsRef.current) {
      const u = (pointsRef.current.material as THREE.ShaderMaterial).uniforms
      u.uFocus.value = settings.focus
      u.uBlur.value = settings.blur
      u.uSize.value = settings.size
    }
  }, [settings.focus, settings.blur, settings.size])
  
  useFrame((state) => {
    simMat.uniforms.uTime.value = state.clock.elapsedTime * speedRef.current
    
    const flip = flipRef.current
    simMat.uniforms.uPositions.value = flip ? rt1.texture : rt2.texture
    gl.setRenderTarget(flip ? rt2 : rt1)
    gl.render(simScene, simCam)
    gl.setRenderTarget(null)
    
    if (pointsRef.current) {
      (pointsRef.current.material as THREE.ShaderMaterial).uniforms.uPositions.value = 
        flip ? rt2.texture : rt1.texture
    }
    
    flipRef.current = !flip
  })
  
  return (
    <points ref={pointsRef} geometry={geometry}>
      <primitive object={renderMat} attach="material" />
    </points>
  )
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

function Scene({ settings, size }: { settings: any; size: number }) {
  return (
    <>
      <color attach="background" args={['#000000']} />
      <OrbitControls 
        makeDefault 
        autoRotate 
        autoRotateSpeed={0.5} 
        zoomSpeed={0.1}
        enableDamping
        dampingFactor={0.05}
      />
      <CurlParticles settings={settings} size={size} />
    </>
  )
}

export default function FlowCanvas() {
  const [settings, setSettings] = useState({
    focus: 5.16,
    speed: 8.1,
    size: 0.25,
    strength: 0.01,
    frequency: 1.2,
    blur: 15
  })
  
  const [particleSize, setParticleSize] = useState(256)
  
  useEffect(() => {
    const checkMobile = () => {
      setParticleSize(window.innerWidth < 768 ? 128 : 256)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000000', overflow: 'hidden' }}>
      <Canvas 
        key={particleSize}
        camera={{ position: [0, 0, 4], fov: 50 }} 
        dpr={particleSize === 128 ? [1, 1.5] : [1, 2]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        <Scene settings={settings} size={particleSize} />
      </Canvas>
      
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
        <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '12px', fontSize: '14px' }}>
          Controls
          <span style={{ float: 'right', color: '#666', fontSize: '10px' }}>{particleSize * particleSize} particles</span>
        </div>
        
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
          min={0.001}
          max={0.05}
          step={0.001}
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
