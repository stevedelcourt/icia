'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sky as SkyImpl, Cloud, Clouds } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'

function CameraAnimation() {
  const { camera } = useThree()
  
  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.15
    const x = Math.sin(t) * 8
    const y = -10 + Math.sin(t * 0.7) * 3
    const z = 10 + Math.cos(t * 0.5) * 2
    
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
      cloud0.current.rotation.y -= delta
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
          <Cloud {...config} bounds={[6, 1, 1]} color="#eed0d0" seed={2} position={[15, 0, 0]} />
          <Cloud {...config} bounds={[6, 1, 1]} color="#d0e0d0" seed={3} position={[-15, 0, 0]} />
          <Cloud {...config} bounds={[6, 1, 1]} color="#a0b0d0" seed={4} position={[0, 0, -12]} />
          <Cloud {...config} bounds={[6, 1, 1]} color="#c0c0dd" seed={5} position={[0, 0, 12]} />
          <Cloud
            concentrate="outside"
            growth={100}
            color="#ffccdd"
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

function BlinkingArrow() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(v => !v)
    }, 600)
    return () => clearInterval(interval)
  }, [])

  const scrollToContent = () => {
    const hero = document.getElementById('hero-section')
    if (hero) {
      const next = hero.nextElementSibling
      if (next) {
        next.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <button
      onClick={scrollToContent}
      className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-white/20 backdrop-blur-sm rounded-full p-4 transition-opacity"
      style={{ opacity: visible ? 1 : 0.3 }}
      aria-label="Scroll down"
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="white" 
        strokeWidth="2"
      >
        <path d="M12 5v14M5 12l7 7 7-7" />
      </svg>
    </button>
  )
}

export function HeroBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  return (
    <>
      <div 
        id="hero-section"
        className="absolute inset-0 w-full h-screen overflow-hidden"
        style={{ zIndex: 0, background: '#87CEEB' }}
      >
        <Canvas
          camera={{ position: [0, -10, 10], fov: 75 }}
          dpr={isMobile ? 1 : 1.5}
          gl={{ antialias: false, alpha: true }}
        >
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
        </Canvas>
      </div>
      <BlinkingArrow />
    </>
  )
}
