import * as THREE from 'three'
import { useMemo, useState, useRef } from 'react'
import { createPortal, useFrame, extend } from '@react-three/fiber'
import { SimulationMaterial } from './shaders/simulationMaterial'
import { DofPointsMaterial } from './shaders/dofPointsMaterial'

extend({ SimulationMaterial, DofPointsMaterial })

export function Particles({ speed, fov, aperture, focus, curl, radius, wobble, size = 512 }: {
  speed: number
  fov: number
  aperture: number
  focus: number
  curl: number
  radius: number
  wobble: number
  size?: number
}) {
  const simRef = useRef<any>(null)
  const renderRef = useRef<any>(null)
  
  const [scene] = useState(() => new THREE.Scene())
  const [camera] = useState(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1))
  
  const [positions] = useState(() => new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0
  ]))
  const [uvs] = useState(() => new Float32Array([
    0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0
  ]))
  
  const target = useMemo(() => new THREE.WebGLRenderTarget(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType
  }), [size])
  
  const particles = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      particles[i * 3 + 0] = (i % size) / size
      particles[i * 3 + 1] = i / size / size
    }
    return particles
  }, [size])

  useFrame((state) => {
    state.gl.setRenderTarget(target)
    state.gl.clear()
    state.gl.render(scene, camera)
    state.gl.setRenderTarget(null)
    
    if (renderRef.current && simRef.current) {
      renderRef.current.uniforms.positions.value = target.texture
      renderRef.current.uniforms.uTime.value = state.clock.elapsedTime
      renderRef.current.uniforms.uFocus.value = THREE.MathUtils.lerp(renderRef.current.uniforms.uFocus.value, focus, 0.1)
      renderRef.current.uniforms.uFov.value = THREE.MathUtils.lerp(renderRef.current.uniforms.uFov.value, fov, 0.1)
      renderRef.current.uniforms.uBlur.value = THREE.MathUtils.lerp(renderRef.current.uniforms.uBlur.value, (5.6 - aperture) * 9, 0.1)
      
      simRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed
      simRef.current.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(simRef.current.uniforms.uCurlFreq.value, curl, 0.1)
      simRef.current.uniforms.uRadius.value = radius
      simRef.current.uniforms.uWobble.value = wobble
    }
  })

  return (
    <>
      {createPortal(
        <mesh>
          {/* @ts-ignore */}
          <simulationMaterial ref={simRef} />
          {/* @ts-ignore */}
          <bufferGeometry>
            {/* @ts-ignore */}
            <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
            {/* @ts-ignore */}
            <bufferAttribute attach="attributes-uv" count={uvs.length / 2} array={uvs} itemSize={2} />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points>
        {/* @ts-ignore */}
        <dofPointsMaterial ref={renderRef} />
        {/* @ts-ignore */}
        <bufferGeometry>
          {/* @ts-ignore */}
          <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        </bufferGeometry>
      </points>
    </>
  )
}
