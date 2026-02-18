'use client'

import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { OrbitControls, CameraShake } from '@react-three/drei'
import { useState, useEffect, useRef } from 'react'
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

function CameraInfo({ onZoomChange }: { onZoomChange: (z: number) => void }) {
  const { camera } = useThree()
  const controlsRef = useRef<any>(null)
  
  useFrame(() => {
    if (controlsRef.current) {
      const dist = camera.position.length()
      onZoomChange(dist)
    }
  })
  
  return (
    <OrbitControls 
      ref={controlsRef}
      makeDefault 
      autoRotate={false} 
      zoomSpeed={0.5} 
      enableDamping
      dampingFactor={0.05}
    />
  )
}

function Scene({ settings }: { settings: any }) {
  return (
    <>
      <CameraShake
        yawFrequency={0.5}
        maxYaw={0.02}
        pitchFrequency={0.5}
        maxPitch={0.02}
        rollFrequency={0.3}
        maxRoll={0.02}
        intensity={0.1}
      />
      <Particles {...settings} />
    </>
  )
}

export default function BlobCanvas() {
  const [settings, setSettings] = useState({
    focus: 5.5,
    speed: 5,
    aperture: 2.5,
    fov: 60,
    curl: 0.06,
    shellCount: 6,
    shellSpread: 70,
    pulseSpeed: 0.8,
    pulseAmount: 3,
    rotationSpeed: 0.25
  })
  
  const [zoom, setZoom] = useState(6)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0a0a0f' }}>
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
        <CameraInfo onZoomChange={setZoom} />
        <Scene settings={settings} />
      </Canvas>
      
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        background: 'rgba(0,0,0,0.9)',
        padding: '14px',
        borderRadius: '8px',
        width: '180px',
        fontFamily: 'system-ui, sans-serif',
        fontSize: '11px',
        zIndex: 1000,
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '10px', fontSize: '13px', borderBottom: '1px solid #333', paddingBottom: '8px' }}>
          Blob Controls
        </div>
        
        <div style={{ marginBottom: '10px', padding: '6px', background: '#1a1a1a', borderRadius: '4px' }}>
          <div style={{ color: '#6af', fontSize: '10px' }}>ZOOM</div>
          <div style={{ color: '#fff', fontFamily: 'monospace', fontSize: '14px' }}>{zoom.toFixed(2)}</div>
        </div>
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px', marginTop: '10px' }}>CAMERA</div>
        <Slider label="Focus" value={settings.focus} onChange={(v) => setSettings(s => ({ ...s, focus: v }))} min={3} max={10} step={0.01} />
        <Slider label="Aperture" value={settings.aperture} onChange={(v) => setSettings(s => ({ ...s, aperture: v }))} min={1} max={5.6} step={0.1} />
        <Slider label="FOV" value={settings.fov} onChange={(v) => setSettings(s => ({ ...s, fov: v }))} min={20} max={150} step={1} />
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px', marginTop: '10px' }}>ANIMATION</div>
        <Slider label="Speed" value={settings.speed} onChange={(v) => setSettings(s => ({ ...s, speed: v }))} min={0.1} max={20} step={0.1} />
        <Slider label="Curl" value={settings.curl} onChange={(v) => setSettings(s => ({ ...s, curl: v }))} min={0.01} max={0.3} step={0.01} />
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px', marginTop: '10px' }}>SHELLS</div>
        <Slider label="Shell Count" value={settings.shellCount} onChange={(v) => setSettings(s => ({ ...s, shellCount: Math.round(v) }))} min={2} max={12} step={1} />
        <Slider label="Shell Spread" value={settings.shellSpread} onChange={(v) => setSettings(s => ({ ...s, shellSpread: v }))} min={30} max={120} step={1} />
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px', marginTop: '10px' }}>PULSE</div>
        <Slider label="Pulse Speed" value={settings.pulseSpeed} onChange={(v) => setSettings(s => ({ ...s, pulseSpeed: v }))} min={0.1} max={3} step={0.1} />
        <Slider label="Pulse Amount" value={settings.pulseAmount} onChange={(v) => setSettings(s => ({ ...s, pulseAmount: v }))} min={0} max={10} step={0.5} />
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px', marginTop: '10px' }}>ROTATION</div>
        <Slider label="Rotation Speed" value={settings.rotationSpeed} onChange={(v) => setSettings(s => ({ ...s, rotationSpeed: v }))} min={0} max={1} step={0.01} />
      </div>
    </div>
  )
}
