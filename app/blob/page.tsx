'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, CameraShake } from '@react-three/drei'
import { useState, useEffect } from 'react'
import * as THREE from 'three'
import { Particles } from './Particles'

function Slider({ label, value, onChange, min, max, step = 0.01 }: {
  label: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step?: number
}) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px', fontSize: '10px' }}>
        <span style={{ color: '#888' }}>{label}</span>
        <span style={{ color: '#fff', fontFamily: 'monospace', background: '#333', padding: '1px 5px', borderRadius: '2px', fontSize: '9px' }}>{value.toFixed(2)}</span>
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
          height: '4px',
          appearance: 'none',
          WebkitAppearance: 'none',
          background: '#444',
          borderRadius: '2px',
          cursor: 'pointer',
          outline: 'none'
        }}
      />
    </div>
  )
}

function Scene({ settings }: { settings: any }) {
  return (
    <>
      <OrbitControls 
        makeDefault 
        enablePan={false}
        enableZoom={true}
        zoomSpeed={0.5}
        minDistance={2}
        maxDistance={10}
        rotateSpeed={0.5}
      />
      <CameraShake
        yawFrequency={0.2}
        maxYaw={0.01}
        pitchFrequency={0.2}
        maxPitch={0.01}
        rollFrequency={0.1}
        maxRoll={0.01}
        intensity={0.05}
      />
      <Particles {...settings} />
    </>
  )
}

export default function BlobCanvas() {
  const [settings, setSettings] = useState({
    focus: 3.5,
    speed: 8,
    aperture: 3.0,
    fov: 60,
    curl: 0.12,
    radius: 1.2,
    wobble: 0.8
  })
  
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#181820' }}>
      <Canvas
        key={isMobile ? 'mobile' : 'desktop'}
        linear
        dpr={isMobile ? 1.5 : 2}
        camera={{ fov: 25, position: [0, 0, 5] }}
        gl={(canvas) => new THREE.WebGL1Renderer({ 
          canvas, 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance'
        })}
      >
        <Scene settings={settings} />
      </Canvas>
      
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        background: 'rgba(0,0,0,0.85)',
        padding: '14px',
        borderRadius: '8px',
        width: '180px',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '11px',
        zIndex: 1000
      }}>
        <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px', fontSize: '13px', borderBottom: '1px solid #333', paddingBottom: '8px' }}>
          Amoeba Controls
        </div>
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px' }}>CAMERA</div>
        <Slider label="Focus" value={settings.focus} onChange={(v) => setSettings(s => ({ ...s, focus: v }))} min={2} max={6} step={0.05} />
        <Slider label="Aperture" value={settings.aperture} onChange={(v) => setSettings(s => ({ ...s, aperture: v }))} min={1} max={5.6} step={0.1} />
        <Slider label="FOV" value={settings.fov} onChange={(v) => setSettings(s => ({ ...s, fov: v }))} min={20} max={150} step={1} />
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px', marginTop: '10px' }}>SHAPE</div>
        <Slider label="Radius" value={settings.radius} onChange={(v) => setSettings(s => ({ ...s, radius: v }))} min={0.5} max={2.5} step={0.05} />
        <Slider label="Wobble" value={settings.wobble} onChange={(v) => setSettings(s => ({ ...s, wobble: v }))} min={0} max={2} step={0.05} />
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px', marginTop: '10px' }}>ANIMATION</div>
        <Slider label="Speed" value={settings.speed} onChange={(v) => setSettings(s => ({ ...s, speed: v }))} min={0.1} max={20} step={0.1} />
        <Slider label="Curl" value={settings.curl} onChange={(v) => setSettings(s => ({ ...s, curl: v }))} min={0.01} max={0.5} step={0.01} />
        
        <div style={{ marginTop: '10px', padding: '6px', background: '#1a1a1a', borderRadius: '4px', fontSize: '9px', color: '#666' }}>
          <div>Drag to rotate</div>
          <div>Scroll to zoom</div>
        </div>
      </div>
    </div>
  )
}
