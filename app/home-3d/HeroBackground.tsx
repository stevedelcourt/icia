'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sky as SkyImpl, Cloud, Clouds } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useEffect, useState, Suspense } from 'react'

function CameraAnimation() {
  const { camera } = useThree()
  
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.12
    const x = Math.sin(t) * 10
    const y = -15 + Math.sin(t * 0.7) * 4
    const z = 15 + Math.cos(t * 0.5) * 3
    
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, x, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, y, 0.02)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, z, 0.02)
    camera.lookAt(0, 0, 0)
  })
  
  return null
}

function CloudScene() {
  const ref = useRef<THREE.Group>(null)
  const cloud0 = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (cloud0.current) {
      cloud0.current.rotation.y -= delta * 0.3
    }
  })

  const config = {
    seed: 1,
    segments: 20,
    volume: 6,
    opacity: 0.8,
    fade: 10,
    growth: 4,
    speed: 0.1
  }

  return (
    <>
      <SkyImpl />
      <group ref={ref}>
        <Clouds material={THREE.MeshLambertMaterial} limit={400}>
          <Cloud ref={cloud0} {...config} bounds={[6, 1, 1]} color="white" />
          <Cloud {...config} bounds={[6, 1, 1]} color="#D92A1C" seed={2} position={[15, 0, 0]} />
          <Cloud {...config} bounds={[6, 1, 1]} color="#7B3FA0" seed={3} position={[-15, 0, 0]} />
          <Cloud {...config} bounds={[6, 1, 1]} color="#002456" seed={4} position={[0, 0, -12]} />
          <Cloud {...config} bounds={[6, 1, 1]} color="#5C2E7B" seed={5} position={[0, 0, 12]} />
          <Cloud
            concentrate="outside"
            growth={100}
            color="#D92A1C"
            opacity={1.25}
            seed={0.3}
            bounds={200}
            volume={200}
          />
        </Clouds>
      </group>
      <CameraAnimation />
    </>
  )
}

function FallbackBackground() {
  return (
    <div 
      className="absolute inset-0"
      style={{ 
        background: 'linear-gradient(to bottom, #0a1628 0%, #1a0a28 50%, #0a1628 100%)' 
      }} 
    />
  )
}

export function HeroBackground() {
  const [isMobile, setIsMobile] = useState(false)
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    
    try {
      const canvas = document.createElement('canvas')
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      if (!gl) setWebglSupported(false)
    } catch {
      setWebglSupported(false)
    }
  }, [])

  if (!webglSupported) {
    return <FallbackBackground />
  }

  return (
    <div 
      id="hero-section"
      className="absolute inset-0 w-full h-screen overflow-hidden"
      style={{ zIndex: 0, background: '#0a1628' }}
    >
      <Canvas
        camera={{ position: [0, -15, 15], fov: 75 }}
        dpr={isMobile ? 1 : 1.5}
        gl={{ 
          antialias: false, 
          alpha: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false
        }}
        onCreated={({ gl }) => {
          gl.setClearColor('#0a1628')
        }}
      >
        <Suspense fallback={null}>
          <CloudScene />
          <ambientLight intensity={Math.PI / 1.5} />
          <spotLight
            position={[0, 40, 0]}
            decay={0}
            distance={45}
            penumbra={1}
            intensity={100}
          />
          <spotLight
            position={[-20, 0, 10]}
            color="red"
            angle={0.15}
            decay={0}
            penumbra={-1}
            intensity={30}
          />
          <spotLight
            position={[20, -10, 10]}
            color="red"
            angle={0.2}
            decay={0}
            penumbra={-1}
            intensity={20}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
