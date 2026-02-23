'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Sky as SkyImpl, Cloud, Clouds, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'

function Sky() {
  const ref = useRef<THREE.Group>(null)
  const cloud0 = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 5) / 4
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 5) / 4
    }
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
    </>
  )
}

export default function FluffyPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#87CEEB' }}>
      <Canvas camera={{ position: [0, -10, 10], fov: 75 }}>
        <Sky />
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
        <OrbitControls autoRotate autoRotateSpeed={0.2} />
      </Canvas>
    </div>
  )
}
