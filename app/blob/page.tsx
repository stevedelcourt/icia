'use client'

import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { CameraShake } from '@react-three/drei'
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

function CameraController({ onZoomChange }: { onZoomChange: (z: number) => void }) {
  const { camera, gl } = useThree()
  
  useEffect(() => {
    const canvas = gl.domElement
    
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const zoomSpeed = 0.001
      const direction = e.deltaY > 0 ? 1 : -1
      const currentDistance = camera.position.length()
      const newDistance = Math.max(2, Math.min(15, currentDistance + direction * currentDistance * zoomSpeed * Math.abs(e.deltaY)))
      
      camera.position.normalize().multiplyScalar(newDistance)
    }
    
    let isDragging = false
    let previousMousePosition = { x: 0, y: 0 }
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true
      previousMousePosition = { x: e.clientX, y: e.clientY }
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      
      const deltaX = e.clientX - previousMousePosition.x
      const deltaY = e.clientY - previousMousePosition.y
      
      const rotationSpeed = 0.005
      
      const spherical = new THREE.Spherical()
      spherical.setFromVector3(camera.position)
      spherical.theta -= deltaX * rotationSpeed
      spherical.phi -= deltaY * rotationSpeed
      spherical.phi = Math.max(0.1, Math.min(Math.PI - 0.1, spherical.phi))
      
      camera.position.setFromSpherical(spherical)
      camera.lookAt(0, 0, 0)
      
      previousMousePosition = { x: e.clientX, y: e.clientY }
    }
    
    const handleMouseUp = () => {
      isDragging = false
    }
    
    canvas.addEventListener('wheel', handleWheel, { passive: false })
    canvas.addEventListener('mousedown', handleMouseDown)
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseup', handleMouseUp)
    canvas.addEventListener('mouseleave', handleMouseUp)
    
    return () => {
      canvas.removeEventListener('wheel', handleWheel)
      canvas.removeEventListener('mousedown', handleMouseDown)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseup', handleMouseUp)
      canvas.removeEventListener('mouseleave', handleMouseUp)
    }
  }, [camera, gl])
  
  useFrame(() => {
    const dist = camera.position.length()
    onZoomChange(dist)
  })
  
  return null
}

function Scene({ settings }: { settings: any }) {
  return (
    <>
      <CameraShake
        yawFrequency={0.3}
        maxYaw={0.02}
        pitchFrequency={0.3}
        maxPitch={0.02}
        rollFrequency={0.2}
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
    speed: 8,
    aperture: 3.0,
    fov: 60,
    curl: 0.12,
    radius: 45,
    wobble: 0.8
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
        <CameraController onZoomChange={setZoom} />
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
        
        <div style={{ marginBottom: '10px', padding: '6px', background: '#1a1a1a', borderRadius: '4px' }}>
          <div style={{ color: '#6af', fontSize: '10px' }}>ZOOM</div>
          <div style={{ color: '#fff', fontFamily: 'monospace', fontSize: '14px' }}>{zoom.toFixed(2)}</div>
        </div>
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px', marginTop: '10px' }}>CAMERA</div>
        <Slider label="Focus" value={settings.focus} onChange={(v) => setSettings(s => ({ ...s, focus: v }))} min={3} max={8} step={0.05} />
        <Slider label="Aperture" value={settings.aperture} onChange={(v) => setSettings(s => ({ ...s, aperture: v }))} min={1} max={5.6} step={0.1} />
        <Slider label="FOV" value={settings.fov} onChange={(v) => setSettings(s => ({ ...s, fov: v }))} min={20} max={150} step={1} />
        
        <div style={{ color: '#666', fontSize: '9px', marginBottom: '6px', marginTop: '10px' }}>SHAPE</div>
        <Slider label="Radius" value={settings.radius} onChange={(v) => setSettings(s => ({ ...s, radius: v }))} min={20} max={80} step={1} />
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
