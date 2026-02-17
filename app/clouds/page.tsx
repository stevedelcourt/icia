'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Detailed, OrbitControls, ContactShadows } from '@react-three/drei'

const COUNT = 100
const positions = [...Array(COUNT)].map(() => ({
  position: [20 - Math.random() * 40, 20 - Math.random() * 40, 20 - Math.random() * 40] as [number, number, number],
  rotation: [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2] as [number, number, number],
  scale: 0.5 + Math.random() * 0.5
}))

function Bust({ position, rotation, scale }: { position: [number, number, number]; rotation: [number, number, number]; scale: number }) {
  const { nodes, materials } = useGLTF('/models/bust-1-d.glb') as any
  
  return (
    <Detailed distances={[0, 10, 20, 40]} position={position} rotation={rotation} scale={scale}>
      <mesh geometry={nodes.Mesh_0001?.geometry} material={materials?.default} />
      <mesh geometry={nodes.Mesh_0001?.geometry} material={materials?.default} />
      <mesh geometry={nodes.Mesh_0001?.geometry} material={materials?.default} />
      <group />
    </Detailed>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {positions.map((props, i) => (
        <Bust key={i} {...props} />
      ))}
      
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={0.5}
        zoomSpeed={0.5}
        minDistance={5}
        maxDistance={100}
      />
      
      <ContactShadows position={[0, -20, 0]} opacity={0.3} scale={100} blur={2} />
    </>
  )
}

export default function CloudsPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'linear-gradient(to bottom, #1a1a2e, #16213e)' }}>
      <Suspense fallback={
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate3d(-50%, -50%, 0)',
          fontFamily: 'system-ui, sans-serif',
          color: '#fff'
        }}>
          loading...
        </div>
      }>
        <Canvas camera={{ position: [0, 0, 50], fov: 50 }}>
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}
