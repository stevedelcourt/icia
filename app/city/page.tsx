'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function CityPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    let animationId: number

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)

    if (window.innerWidth > 800) {
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      renderer.shadowMap.needsUpdate = true
    }

    container.appendChild(renderer.domElement)

    const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 500)
    camera.position.set(0, 2, 14)

    const scene = new THREE.Scene()
    const city = new THREE.Object3D()
    const smoke = new THREE.Object3D()
    const town = new THREE.Object3D()

    let createCarPos = true
    const uSpeed = 0.001

    const setcolor = 0xF02050
    scene.background = new THREE.Color(setcolor)
    scene.fog = new THREE.Fog(setcolor, 10, 16)

    const mathRandom = (num = 8) => -Math.random() * num + Math.random() * num

    let setTintNum = true
    const setTintColor = () => {
      setTintNum = !setTintNum
      return 0x000000
    }

    const init = () => {
      const segments = 2
      for (let i = 1; i < 100; i++) {
        const geometry = new THREE.BoxGeometry(1, 0, 0, segments, segments, segments)
        const material = new THREE.MeshStandardMaterial({
          color: setTintColor(),
          wireframe: false,
          side: THREE.DoubleSide
        })
        const wmaterial = new THREE.MeshLambertMaterial({
          color: 0xFFFFFF,
          wireframe: true,
          transparent: true,
          opacity: 0.03,
          side: THREE.DoubleSide
        })

        const cube = new THREE.Mesh(geometry, material)
        const wire = new THREE.Mesh(geometry, wmaterial)
        const floor = new THREE.Mesh(geometry, material)

        cube.add(wire)
        cube.castShadow = true
        cube.receiveShadow = true
        cube.userData.rotationValue = 0.1 + Math.abs(mathRandom(8))

        floor.scale.y = 0.05
        cube.scale.y = 0.1 + Math.abs(mathRandom(8))

        const cubeWidth = 0.9
        cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth)
        cube.position.x = Math.round(mathRandom())
        cube.position.z = Math.round(mathRandom())

        floor.position.set(cube.position.x, 0, cube.position.z)

        town.add(floor)
        town.add(cube)
      }

      const gmaterial = new THREE.MeshToonMaterial({ color: 0xFFFF00, side: THREE.DoubleSide })
      const gparticular = new THREE.CircleGeometry(0.01, 3)
      const aparticular = 5

      for (let h = 1; h < 300; h++) {
        const particular = new THREE.Mesh(gparticular, gmaterial)
        particular.position.set(mathRandom(aparticular), mathRandom(aparticular), mathRandom(aparticular))
        particular.rotation.set(mathRandom(), mathRandom(), mathRandom())
        smoke.add(particular)
      }

      const pmaterial = new THREE.MeshPhongMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
        opacity: 0.9,
        transparent: true
      })
      const pgeometry = new THREE.PlaneGeometry(60, 60)
      const pelement = new THREE.Mesh(pgeometry, pmaterial)
      pelement.rotation.x = -90 * Math.PI / 180
      pelement.position.y = -0.001
      pelement.receiveShadow = true

      city.add(pelement)
    }

    const mouse = { x: 0, y: 0 }

    const onMouseMove = (event: MouseEvent) => {
      event.preventDefault()
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    const onDocumentTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault()
        mouse.x = event.touches[0].pageX - window.innerWidth / 2
        mouse.y = event.touches[0].pageY - window.innerHeight / 2
      }
    }

    const onDocumentTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault()
        mouse.x = event.touches[0].pageX - window.innerWidth / 2
        mouse.y = event.touches[0].pageY - window.innerHeight / 2
      }
    }

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 4)
    const lightFront = new THREE.SpotLight(0xFFFFFF, 20, 10)
    const lightBack = new THREE.PointLight(0xFFFFFF, 0.5)

    lightFront.rotation.x = 45 * Math.PI / 180
    lightFront.rotation.z = -45 * Math.PI / 180
    lightFront.position.set(5, 5, 5)
    lightFront.castShadow = true
    lightFront.shadow.mapSize.width = 6000
    lightFront.shadow.mapSize.height = 6000
    lightFront.penumbra = 0.1
    lightBack.position.set(0, 6, 0)

    smoke.position.y = 2

    scene.add(ambientLight)
    city.add(lightFront)
    scene.add(lightBack)
    scene.add(city)
    city.add(smoke)
    city.add(town)

    const gridHelper = new THREE.GridHelper(60, 120, 0xFF0000, 0x000000)
    city.add(gridHelper)

    const cityCars: THREE.Mesh[] = []

    const createCars = (cScale = 2, cPos = 20, cColor = 0xFFFF00) => {
      const cMat = new THREE.MeshToonMaterial({ color: cColor, side: THREE.DoubleSide })
      const cGeo = new THREE.BoxGeometry(1, cScale / 40, cScale / 40)
      const cElem = new THREE.Mesh(cGeo, cMat)
      const cAmp = 3

      if (createCarPos) {
        createCarPos = false
        cElem.position.x = -cPos
        cElem.position.z = mathRandom(cAmp)

        let direction = 1
        cElem.userData.animate = () => {
          cElem.position.x += direction * 0.1
          if (cElem.position.x > cPos) direction = -1
          if (cElem.position.x < -cPos) direction = 1
        }
      } else {
        createCarPos = true
        cElem.position.x = mathRandom(cAmp)
        cElem.position.z = -cPos
        cElem.rotation.y = 90 * Math.PI / 180

        let direction = 1
        cElem.userData.animate = () => {
          cElem.position.z += direction * 0.08
          if (cElem.position.z > cPos) direction = -1
          if (cElem.position.z < -cPos) direction = 1
        }
      }

      cElem.receiveShadow = true
      cElem.castShadow = true
      cElem.position.y = Math.abs(mathRandom(5))
      city.add(cElem)
      cityCars.push(cElem)
    }

    const generateLines = () => {
      for (let i = 0; i < 60; i++) {
        createCars(0.1, 20)
      }
    }

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      city.rotation.y -= ((mouse.x * 8) - camera.rotation.y) * uSpeed
      city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed
      if (city.rotation.x < -0.05) city.rotation.x = -0.05
      else if (city.rotation.x > 1) city.rotation.x = 1

      smoke.rotation.y += 0.01
      smoke.rotation.x += 0.01

      town.children.forEach((object) => {
        if (object.userData.animate) {
          object.userData.animate()
        }
      })

      camera.lookAt(city.position)
      renderer.render(scene, camera)
    }

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', onWindowResize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchstart', onDocumentTouchStart)
    window.addEventListener('touchmove', onDocumentTouchMove)

    generateLines()
    init()
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', onWindowResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchstart', onDocumentTouchStart)
      window.removeEventListener('touchmove', onDocumentTouchMove)
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full bg-black" style={{ cursor: 'crosshair' }}>
      <div className="fixed top-[42%] left-0 right-0 text-center text-white pointer-events-none z-10 select-none">
        <h1 className="text-3xl md:text-5xl font-bold relative inline-block">
          Lab City 3D
          <span className="absolute -top-1 -right-16 text-xs font-normal">Three JS</span>
        </h1>
        <p className="text-sm text-white/50 mt-2">– Back to the red –</p>
      </div>
      <div className="fixed bottom-[3%] left-0 right-0 text-center text-white/60 text-xs pointer-events-none z-10">
        <a href="https://dribbble.com/victorvergara" target="_blank" rel="noopener noreferrer" className="pointer-events-auto hover:text-white">
          dribbble.com/victorvergara
        </a>
      </div>
    </div>
  )
}
