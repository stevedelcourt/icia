'use client'

import { useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'

const PARTICLE_COUNT = 6000

export default function FlowCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene
    camera: THREE.PerspectiveCamera
    renderer: THREE.WebGLRenderer
    particles: THREE.Points
    velocities: Float32Array
    time: number
  } | null>(null)
  
  const permutation = useMemo(() => {
    const p: number[] = []
    for (let i = 0; i < 256; i++) p[i] = i
    for (let i = 255; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[p[i], p[j]] = [p[j], p[i]]
    }
    return [...p, ...p]
  }, [])
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#0a0a0a')
    scene.fog = new THREE.Fog('#0a0a0a', 8, 25)
    
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 15
    
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    
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
    
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    
    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    
    sceneRef.current = { scene, camera, renderer, particles, velocities, time: 0 }
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])
  
  useEffect(() => {
    if (!sceneRef.current) return
    
    const { scene, camera, renderer, particles, velocities } = sceneRef.current
    let animationId: number
    
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
    
    const curlNoise = (x: number, y: number, z: number, t: number) => {
      const e = 0.1
      const n1 = noise(x - e, y, z) - noise(x + e, y, z)
      const n2 = noise(x, y - e, z) - noise(x, y + e, z)
      const n3 = noise(x, y, z - e) - noise(x, y, z + e)
      const d = 1 / (2 * e)
      return [n2 * d - n3 * d, n3 * d - n1 * d, n1 * d - n2 * d]
    }
    
    let lastTime = performance.now()
    
    const animate = () => {
      const currentTime = performance.now()
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1)
      lastTime = currentTime
      
      sceneRef.current!.time += delta * 0.3
      const time = sceneRef.current!.time
      
      const posAttr = particles.geometry.attributes.position
      const posArray = posAttr.array as Float32Array
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const ix = i * 3
        const iy = i * 3 + 1
        const iz = i * 3 + 2
        
        let x = posArray[ix]
        let y = posArray[iy]
        let z = posArray[iz]
        
        const scale = 0.15
        const curl = curlNoise(x * scale + time, y * scale, z * scale, time)
        
        const speed = 2
        velocities[ix] += curl[0] * speed * delta
        velocities[iy] += curl[1] * speed * delta
        velocities[iz] += curl[2] * speed * delta
        
        velocities[ix] *= 0.98
        velocities[iy] *= 0.98
        velocities[iz] *= 0.98
        
        x += velocities[ix]
        y += velocities[iy]
        z += velocities[iz]
        
        const bound = 10
        if (Math.abs(x) > bound) { x = (Math.random() - 0.5) * 20; velocities[ix] = 0 }
        if (Math.abs(y) > bound) { y = (Math.random() - 0.5) * 20; velocities[iy] = 0 }
        if (Math.abs(z) > bound) { z = (Math.random() - 0.5) * 20; velocities[iz] = 0 }
        
        posArray[ix] = x
        posArray[iy] = y
        posArray[iz] = z
      }
      
      posAttr.needsUpdate = true
      
      camera.position.x = Math.sin(time * 0.05) * 3
      camera.position.y = Math.cos(time * 0.03) * 2
      camera.lookAt(0, 0, 0)
      
      renderer.render(scene, camera)
      animationId = requestAnimationFrame(animate)
    }
    
    animate()
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [permutation])
  
  return (
    <div 
      ref={containerRef} 
      style={{ width: '100vw', height: '100vh', background: '#0a0a0a', overflow: 'hidden' }}
    />
  )
}
