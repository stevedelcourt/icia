'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Detailed, OrbitControls, Environment, BakeShadows } from '@react-three/drei'
import * as THREE from 'three'

const positions = [...Array(800)].map(() => ({
  position: [40 - Math.random() * 80, 40 - Math.random() * 80, 40 - Math.random() * 80] as [number, number, number],
  rotation: [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2] as [number, number, number],
}))

function Bust(props: { position: [number, number, number]; rotation: [number, number, number] }) {
  const { nodes, materials } = useGLTF('/models/bust-1-d.glb') as any
  return (
    <Detailed distances={[0, 15, 25, 35, 100]} {...props}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Mesh_0001?.geometry}
        material={materials?.default}
        material-envMapIntensity={0.25}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Mesh_0001?.geometry}
        material={materials?.default}
        material-envMapIntensity={0.25}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Mesh_0001?.geometry}
        material={materials?.default}
        material-envMapIntensity={0.25}
      />
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.Mesh_0001?.geometry}
        material={materials?.default}
        material-envMapIntensity={0.25}
      />
      <group />
    </Detailed>
  )
}

function Scene() {
  return (
    <>
      {positions.map((props, i) => (
        <Bust key={i} {...props} />
      ))}
      <OrbitControls zoomSpeed={0.075} />
      <pointLight position={[0, 0, 0]} intensity={0.5} />
      <spotLight intensity={2.5} position={[50, 50, 50]} castShadow />
      <Environment preset="city" />
      <BakeShadows />
    </>
  )
}

export default function CloudsPage() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#f0f0f0' }}>
      <Suspense fallback={
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate3d(-50%, -50%, 0)',
          fontFamily: 'system-ui, sans-serif',
          color: '#202020'
        }}>
          loading...
        </div>
      }>
        <Canvas
          shadows
          frameloop="demand"
          camera={{ position: [0, 0, 40] }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  )
}
