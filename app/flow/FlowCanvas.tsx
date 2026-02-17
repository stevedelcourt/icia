'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 8000

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)
  const timeRef = useRef(0)
  const velocitiesRef = useRef<Float32Array | null>(null)
  
  const permutation = useMemo(() => {
    const p = []
    for (let i = 0; i < 256; i++) p[i] = i
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[p[i], p[j]] = [p[j], p[i]]
    }
    return [...p, ...p]
  }, [])
  
  const { positions, colors, velocities } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)
    
    const accentColor = new THREE.Color('#BF4D43')
    const secondaryColor = new THREE.Color('#264653')
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      
      const t = Math.random()
      const color = new THREE.Color().lerpColors(accentColor, secondaryColor, t)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    velocitiesRef.current = velocities
    return { positions, colors, velocities }
  }, [])
  
  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)
  const lerp = (a: number, b: number, t: number) => a + t * (b - a)
  const grad = (hash: number, x: number, y: number, z: number) => {
    const h = hash & 15
    const u = h < 8 ? x : y
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
  }
  
  const noise = (x: number, y: number, z: number) => {
    const X = Math.floor(x) & 255
    const Y = Math.floor(y) & 255
    const Z = Math.floor(z) & 255
    const xf = x - Math.floor(x)
    const yf = y - Math.floor(y)
    const zf = z - Math.floor(z)
    const u = fade(xf), v = fade(yf), w = fade(zf)
    const A = permutation[X] + Y, AA = permutation[A] + Z, AB = permutation[A + 1] + Z
    const B = permutation[X + 1] + Y, BA = permutation[B] + Z, BB = permutation[B + 1] + Z
    return lerp(
      lerp(
        lerp(grad(permutation[AA], xf, yf, zf), grad(permutation[BA], xf - 1, yf, zf), u),
        lerp(grad(permutation[AB], xf, yf - 1, zf), grad(permutation[BB], xf - 1, yf - 1, zf), u),
        v
      ),
      lerp(
        lerp(grad(permutation[AA + 1], xf, yf, zf - 1), grad(permutation[BA + 1], xf - 1, yf, zf - 1), u),
        lerp(grad(permutation[AB + 1], xf, yf - 1, zf - 1), grad(permutation[BB + 1], xf - 1, yf - 1, zf - 1), u),
        v
      ),
      w
    )
  }
  
  const curlNoise = (x: number, y: number, z: number) => {
    const e = 0.1
    const n1 = noise(x - e, y, z) - noise(x + e, y, z)
    const n2 = noise(x, y - e, z) - noise(x, y + e, z)
    const n3 = noise(x, y, z - e) - noise(x, y, z + e)
    const d = 1 / (2 * e)
    return [n2 * d - n3 * d, n3 * d - n1 * d, n1 * d - n2 * d]
  }
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [positions, colors])
  
  useFrame((_, delta) => {
    if (!pointsRef.current || !velocitiesRef.current) return
    
    timeRef.current += delta * 0.3
    const posAttr = pointsRef.current.geometry.attributes.position
    const posArray = posAttr.array as Float32Array
    const velArray = velocitiesRef.current
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const ix = i * 3
      const iy = i * 3 + 1
      const iz = i * 3 + 2
      
      let x = posArray[ix]
      let y = posArray[iy]
      let z = posArray[iz]
      
      const scale = 0.15
      const curl = curlNoise(x * scale + timeRef.current, y * scale, z * scale)
      
      const speed = 2
      velArray[ix] += curl[0] * speed * delta
      velArray[iy] += curl[1] * speed * delta
      velArray[iz] += curl[2] * speed * delta
      
      velArray[ix] *= 0.98
      velArray[iy] *= 0.98
      velArray[iz] *= 0.98
      
      x += velArray[ix]
      y += velArray[iy]
      z += velArray[iz]
      
      const bound = 10
      if (Math.abs(x) > bound) { x = (Math.random() - 0.5) * 20; velArray[ix] = 0 }
      if (Math.abs(y) > bound) { y = (Math.random() - 0.5) * 20; velArray[iy] = 0 }
      if (Math.abs(z) > bound) { z = (Math.random() - 0.5) * 20; velArray[iz] = 0 }
      
      posArray[ix] = x
      posArray[iy] = y
      posArray[iz] = z
    }
    
    posAttr.needsUpdate = true
  })
  
  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function CameraRig() {
  const { camera } = useThree()
  const timeRef = useRef(0)
  
  useFrame((_, delta) => {
    timeRef.current += delta * 0.1
    camera.position.x = Math.sin(timeRef.current * 0.5) * 3
    camera.position.y = Math.cos(timeRef.current * 0.3) * 2
    camera.lookAt(0, 0, 0)
  })
  
  return null
}

export default function FlowCanvas() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#0a0a0a' }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#0a0a0a']} />
        <fog attach="fog" args={['#0a0a0a', 8, 25]} />
        <Particles />
        <CameraRig />
      </Canvas>
    </div>
  )
}
