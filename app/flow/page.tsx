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

function Scene({ settings }: { settings: any }) {
  return (
    <>
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} zoomSpeed={0.1} />
      <CameraShake
        yawFrequency={1}
        maxYaw={0.05}
        pitchFrequency={1}
        maxPitch={0.05}
        rollFrequency={0.5}
        maxRoll={0.5}
        intensity={0.2}
      />
      <Particles {...settings} />
    </>
  )
}

export default function FlowCanvas() {
  const [settings, setSettings] = useState({
    focus: 5.16,
    speed: 8.1,
    aperture: 3.4,
    fov: 60,
    curl: 0.19
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
        camera={{ fov: 25, position: [0, 0, 6] }}
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
        padding: '16px',
        borderRadius: '8px',
        width: '200px',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '12px',
        zIndex: 1000
      }}>
        <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '12px', fontSize: '14px' }}>
          Controls
        </div>
        
        <Slider label="Focus" value={settings.focus} onChange={(v) => setSettings(s => ({ ...s, focus: v }))} min={3} max={7} step={0.01} />
        <Slider label="Speed" value={settings.speed} onChange={(v) => setSettings(s => ({ ...s, speed: v }))} min={0.1} max={100} step={0.1} />
        <Slider label="Aperture" value={settings.aperture} onChange={(v) => setSettings(s => ({ ...s, aperture: v }))} min={1} max={5.6} step={0.1} />
        <Slider label="FOV" value={settings.fov} onChange={(v) => setSettings(s => ({ ...s, fov: v }))} min={0} max={200} step={1} />
        <Slider label="Curl" value={settings.curl} onChange={(v) => setSettings(s => ({ ...s, curl: v }))} min={0.01} max={0.5} step={0.01} />
      </div>
    </div>
  )
}
