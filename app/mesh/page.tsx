'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

declare global {
  interface Number {
    clamp(min: number, max: number): number
  }
}

if (typeof Number.prototype.clamp === 'undefined') {
  Number.prototype.clamp = function (min: number, max: number) {
    return Math.min(Math.max(this as number, min), max)
  }
}

function mobileCheck() {
  if (typeof navigator !== 'undefined') {
    return (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 600
    )
  }
  return null
}

function rn(start: number, end: number) {
  if (start == null) start = 0
  if (end == null) end = 1
  return start + Math.random() * (end - start)
}

function ri(start: number, end: number) {
  if (start == null) start = 0
  if (end == null) end = 1
  return Math.floor(start + Math.random() * (end - start + 1))
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

function getBrightness(threeColor: THREE.Color) {
  return 0.299 * threeColor.r + 0.587 * threeColor.g + 0.114 * threeColor.b
}

function clearThreeObject(obj: THREE.Object3D) {
  while (obj.children && obj.children.length > 0) {
    clearThreeObject(obj.children[0])
    obj.remove(obj.children[0])
  }
  const geometry = (obj as any).geometry
  const material = (obj as any).material
  if (geometry) geometry.dispose()
  if (material) {
    if (typeof material.dispose === 'function') {
      material.dispose()
    }
  }
}

interface MeshParams {
  color: number
  backgroundColor: number
  points: number
  maxDistance: number
  spacing: number
  showDots: boolean
  mouseControls: boolean
  touchControls: boolean
}

const defaultParams: MeshParams = {
  color: 0xc5c5c5,
  backgroundColor: 0x241e2d,
  points: 20,
  maxDistance: 25,
  spacing: 80,
  showDots: true,
  mouseControls: true,
  touchControls: true,
}

interface VantaEffectOptions {
  mouseControls?: boolean
  touchControls?: boolean
  gyroControls?: boolean
  minHeight?: number
  minWidth?: number
  scale?: number
  scaleMobile?: number
  color?: number
  backgroundColor?: number
  points?: number
  maxDistance?: number
  spacing?: number
  showDots?: boolean
  speed?: number
  forceAnimate?: boolean
  el?: HTMLElement
}

class VantaNET {
  el: HTMLElement
  options: VantaEffectOptions
  renderer: THREE.WebGLRenderer | null = null
  scene: THREE.Scene | null = null
  camera: THREE.PerspectiveCamera | null = null
  width = 0
  height = 0
  scale = 1
  mouseX = 0
  mouseY = 0
  t = 0
  t2 = 0
  prevNow = 0
  req: number | null = null

  points: THREE.Mesh[] = []
  linesMesh: THREE.LineSegments | null = null
  linePositions: Float32Array | null = null
  lineColors: Float32Array | null = null
  blending: 'additive' | 'subtractive' = 'subtractive'
  cont: THREE.Group | null = null
  spot: THREE.SpotLight | null = null
  rayCaster: THREE.Raycaster | null = null
  rcMouseX = 0
  rcMouseY = 0

  private windowMouseMoveWrapper: (e: MouseEvent) => void
  private windowTouchWrapper: (e: TouchEvent) => void
  private resizeBound: () => void
  private animationLoopBound: () => void

  constructor(userOptions: VantaEffectOptions & { el: HTMLElement }) {
    const defaultOptions: VantaEffectOptions = {
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0xff3f81,
      backgroundColor: 0x23153c,
      points: 10,
      maxDistance: 20,
      spacing: 15,
      showDots: true,
    }

    this.options = { ...defaultOptions, ...userOptions }
    this.el = this.options.el as HTMLElement

    this.windowMouseMoveWrapper = this.handleMouseMove.bind(this)
    this.windowTouchWrapper = this.handleTouch.bind(this)
    this.resizeBound = this.resize.bind(this)
    this.animationLoopBound = this.loop.bind(this)
    this.triggerMouseMove = this.triggerMouseMove.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)

    this.prepareEl()
    this.initThree()
    this.setSize()
    this.resize()
    this.init()
    this.initMouse()
    this.loop()

    const ad = window.addEventListener
    ad('resize', this.resizeBound)
    window.requestAnimationFrame(this.resizeBound)

    if (this.options.mouseControls) {
      ad('scroll', this.windowMouseMoveWrapper as any)
      ad('mousemove', this.windowMouseMoveWrapper as any)
    }
    if (this.options.touchControls) {
      ad('touchstart', this.windowTouchWrapper as any)
      ad('touchmove', this.windowTouchWrapper as any)
    }
  }

  prepareEl() {
    for (let i = 0; i < this.el.children.length; i++) {
      const child = this.el.children[i] as HTMLElement
      if (getComputedStyle(child).position === 'static') {
        child.style.position = 'relative'
      }
      if (getComputedStyle(child).zIndex === 'auto') {
        child.style.zIndex = '1'
      }
    }
    if (getComputedStyle(this.el).position === 'static') {
      this.el.style.position = 'relative'
    }
  }

  initThree() {
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.el.appendChild(this.renderer.domElement)
    Object.assign(this.renderer.domElement.style, {
      position: 'absolute',
      zIndex: '0',
      top: '0',
      left: '0',
      background: '',
    })
    this.renderer.domElement.classList.add('vanta-canvas')

    this.scene = new THREE.Scene()
  }

  getCanvasRect() {
    const canvas = this.renderer?.domElement
    if (!canvas) return false
    return canvas.getBoundingClientRect()
  }

  handleMouseMove(e: MouseEvent) {
    const rect = this.getCanvasRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
      this.mouseX = x
      this.mouseY = y
      this.triggerMouseMove(x, y)
    }
  }

  handleTouch(e: TouchEvent) {
    const rect = this.getCanvasRect()
    if (!rect) return
    if (e.touches.length === 1) {
      const x = e.touches[0].clientX - rect.left
      const y = e.touches[0].clientY - rect.top
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        this.mouseX = x
        this.mouseY = y
        this.triggerMouseMove(x, y)
      }
    }
  }

  triggerMouseMove(x: number, y: number) {
    const xNorm = x / this.width
    const yNorm = y / this.height
    this.onMouseMove(xNorm, yNorm)
  }

  setSize() {
    this.scale = this.options.scale || 1
    if (mobileCheck() && this.options.scaleMobile) {
      this.scale = this.options.scaleMobile
    }
    this.width = Math.max(this.el.offsetWidth, this.options.minWidth || 200)
    this.height = Math.max(this.el.offsetHeight, this.options.minHeight || 200)
  }

  initMouse() {
    if (!this.mouseX && !this.mouseY) {
      this.mouseX = this.width / 2
      this.mouseY = this.height / 2
      this.triggerMouseMove(this.mouseX, this.mouseY)
    }
  }

  resize() {
    this.setSize()
    if (this.camera) {
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
    }
    if (this.renderer) {
      this.renderer.setSize(this.width, this.height)
      this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)
    }
  }

  isOnScreen() {
    const elHeight = this.el.offsetHeight
    const elRect = this.el.getBoundingClientRect()
    const scrollTop = window.pageYOffset || (document.documentElement?.scrollTop ?? 0)
    const offsetTop = elRect.top + scrollTop
    const minScrollTop = offsetTop - window.innerHeight
    const maxScrollTop = offsetTop + elHeight
    return minScrollTop <= scrollTop && scrollTop <= maxScrollTop
  }

  loop() {
    this.t = this.t || 0
    this.t2 = this.t2 || 0

    const now = performance.now()
    if (this.prevNow) {
      let elapsedTime = (now - this.prevNow) / (1000 / 60)
      elapsedTime = Math.max(0.2, Math.min(elapsedTime, 5))
      this.t += elapsedTime
      this.t2 += (this.options.speed || 1) * elapsedTime
    }
    this.prevNow = now

    if (this.isOnScreen() || this.options.forceAnimate) {
      this.onUpdate()
      if (this.scene && this.camera && this.renderer) {
        this.renderer.render(this.scene, this.camera)
        this.renderer.setClearColor(
          this.options.backgroundColor || 0x000000,
          1
        )
      }
    }
    this.req = window.requestAnimationFrame(this.loop)
  }

  init() {
    this.cont = new THREE.Group()
    this.cont.position.set(0, 0, 0)
    this.scene!.add(this.cont)

    let n = this.options.points || 10
    let spacing = this.options.spacing || 15
    if (mobileCheck()) {
      n = ~~(n * 0.75)
      spacing = ~~(spacing * 0.65)
    }

    const numPoints = n * n * 2
    this.linePositions = new Float32Array(numPoints * numPoints * 3)
    this.lineColors = new Float32Array(numPoints * numPoints * 3)

    const colorB = getBrightness(new THREE.Color(this.options.color || 0xff3f81))
    const bgB = getBrightness(new THREE.Color(this.options.backgroundColor || 0x23153c))
    this.blending = colorB > bgB ? 'additive' : 'subtractive'

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(this.linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    )
    geometry.setAttribute(
      'color',
      new THREE.BufferAttribute(this.lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    )
    geometry.computeBoundingSphere()
    geometry.setDrawRange(0, 0)
    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending:
        this.blending === 'additive' ? THREE.AdditiveBlending : THREE.NormalBlending,
      transparent: true,
    })

    this.linesMesh = new THREE.LineSegments(geometry, material)
    this.cont.add(this.linesMesh)

    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n; j++) {
        const y = ri(-3, 3)
        const x = (i - n / 2) * spacing + ri(-5, 5)
        let z = (j - n / 2) * spacing + ri(-5, 5)
        if (i % 2) {
          z += spacing * 0.5
        }

        this.genPoint(x, y - ri(5, 15), z)
        this.genPoint(x + ri(-5, 5), y + ri(5, 15), z + ri(-5, 5))
      }
    }

    this.camera = new THREE.PerspectiveCamera(25, this.width / this.height, 0.01, 10000)
    this.camera.position.set(50, 100, 150)
    this.scene!.add(this.camera)

    const ambience = new THREE.AmbientLight(0xffffff, 0.75)
    this.scene!.add(ambience)

    this.spot = new THREE.SpotLight(0xffffff, 1)
    this.spot.position.set(0, 200, 0)
    this.spot.distance = 400
    this.spot.target = this.cont
    this.scene!.add(this.spot)
  }

  genPoint(x: number, y: number, z: number) {
    let sphere: any
    if (!this.points) {
      this.points = []
    }
    if (this.options.showDots) {
      const geom = new THREE.SphereGeometry(0.25, 12, 12)
      const mat = new THREE.MeshLambertMaterial({
        color: this.options.color || 0xff3f81,
      })
      sphere = new THREE.Mesh(geom, mat)
    } else {
      sphere = new THREE.Object3D()
    }
    this.cont!.add(sphere)
    sphere.position.set(x, y, z)
    sphere.ox = x
    sphere.oy = y
    sphere.oz = z
    sphere.r = rn(-2, 2)
    this.points.push(sphere)
  }

  onMouseMove(x: number, y: number) {
    const c = this.camera
    if (!c) return
    const pos: any = c.position
    if (!(c as any).oy) {
      (c as any).oy = pos.y
      (c as any).ox = pos.x
      (c as any).oz = pos.z
    }
    const ang = Math.atan2((c as any).oz, (c as any).ox)
    const dist = Math.sqrt((c as any).oz * (c as any).oz + (c as any).ox * (c as any).ox)
    const tAng = ang + (x - 0.5) * 2
    ;(c as any).tz = dist * Math.sin(tAng)
    ;(c as any).tx = dist * Math.cos(tAng)
    ;(c as any).ty = (c as any).oy + (y - 0.5) * 50

    this.rcMouseX = x * 2 - 1
    this.rcMouseY = -y * 2 + 1
  }

  onUpdate() {
    const c = this.camera
    if (!c) return

    if (Math.abs((c as any).tx - c.position.x) > 0.01) {
      const diff = (c as any).tx - c.position.x
      c.position.x += diff * 0.02
    }
    if (Math.abs((c as any).ty - c.position.y) > 0.01) {
      const diff = (c as any).ty - c.position.y
      c.position.y += diff * 0.02
    }
    c.lookAt(new THREE.Vector3(0, 0, 0))

    let vertexpos = 0
    let colorpos = 0
    let numConnected = 0

    const bgColor = new THREE.Color(this.options.backgroundColor || 0x23153c)
    const color = new THREE.Color(this.options.color || 0xff3f81)
    const diffColor = color.clone().sub(bgColor)

    if (!this.rayCaster) {
      this.rayCaster = new THREE.Raycaster()
    }
    this.rayCaster.setFromCamera(
      new THREE.Vector2(this.rcMouseX, this.rcMouseY),
      this.camera!
    )

    for (let i = 0; i < this.points.length; i++) {
      const p = this.points[i]
      if (!p) continue

      const distToMouse = this.rayCaster.ray.distanceToPoint(p.position)
      const distClamp = clamp(distToMouse as number, 5, 15)
      p.scale.setScalar(clamp((15 - distClamp) * 0.25, 1, 100))

      const pAny = p as any
      if (pAny.r !== 0) {
        let ang = Math.atan2(p.position.z, p.position.x)
        const dist = Math.sqrt(p.position.z * p.position.z + p.position.x * p.position.x)
        ang += 0.00025 * pAny.r
        p.position.x = dist * Math.cos(ang)
        p.position.z = dist * Math.sin(ang)
      }

      for (let j = i; j < this.points.length; j++) {
        const p2 = this.points[j]
        if (!p2) continue

        const dx = p.position.x - p2.position.x
        const dy = p.position.y - p2.position.y
        const dz = p.position.z - p2.position.z
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < (this.options.maxDistance || 20)) {
          let lineColor
          const alpha = clamp((1.0 - dist / (this.options.maxDistance || 20)) * 2, 0, 1)
          if (this.blending === 'additive') {
            lineColor = new THREE.Color(0x000000).lerp(diffColor, alpha)
          } else {
            lineColor = bgColor.clone().lerp(color, alpha)
          }

          if (this.linePositions && this.lineColors) {
            this.linePositions[vertexpos++] = p.position.x
            this.linePositions[vertexpos++] = p.position.y
            this.linePositions[vertexpos++] = p.position.z
            this.linePositions[vertexpos++] = p2.position.x
            this.linePositions[vertexpos++] = p2.position.y
            this.linePositions[vertexpos++] = p2.position.z

            this.lineColors[colorpos++] = lineColor.r
            this.lineColors[colorpos++] = lineColor.g
            this.lineColors[colorpos++] = lineColor.b
            this.lineColors[colorpos++] = lineColor.r
            this.lineColors[colorpos++] = lineColor.g
            this.lineColors[colorpos++] = lineColor.b
          }

          numConnected++
        }
      }
    }

    if (this.linesMesh) {
      this.linesMesh.geometry.setDrawRange(0, numConnected * 2)
      ;(
        this.linesMesh.geometry.attributes.position as THREE.BufferAttribute
      ).needsUpdate = true
      ;(this.linesMesh.geometry.attributes.color as THREE.BufferAttribute).needsUpdate =
        true
    }
  }

  setOptions(userOptions: Partial<VantaEffectOptions>) {
    Object.assign(this.options, userOptions)
    if (userOptions.color && this.points) {
      this.points.forEach((p) => {
        const mat = p.material as THREE.MeshLambertMaterial
        if (mat) {
          mat.color = new THREE.Color(userOptions.color)
        }
      })
    }
    this.triggerMouseMove(this.mouseX, this.mouseY)
  }

  destroy() {
    const rm = window.removeEventListener
    rm('touchstart', this.windowTouchWrapper as any)
    rm('touchmove', this.windowTouchWrapper as any)
    rm('scroll', this.windowMouseMoveWrapper as any)
    rm('mousemove', this.windowMouseMoveWrapper as any)
    rm('resize', this.resizeBound)
    if (this.req) {
      window.cancelAnimationFrame(this.req)
    }

    if (this.scene) {
      clearThreeObject(this.scene)
    }
    if (this.renderer) {
      if (this.renderer.domElement) {
        this.el.removeChild(this.renderer.domElement)
      }
      this.renderer = null
      this.scene = null
    }
  }
}

export default function MeshPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<VantaNET | null>(null)
  const [params, setParams] = useState<MeshParams>(defaultParams)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (!containerRef.current) return

    effectRef.current = new VantaNET({
      el: containerRef.current,
      ...params,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
    })

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy()
      }
    }
  }, [])

  useEffect(() => {
    if (effectRef.current) {
      effectRef.current.setOptions(params)
    }
  }, [params])

  const handleChange = (key: keyof MeshParams, value: number | boolean) => {
    setParams((prev) => ({ ...prev, [key]: value }))
  }

  const colorToHex = (num: number) => '#' + num.toString(16).padStart(6, '0')
  const hexToColor = (hex: string) => parseInt(hex.replace('#', ''), 16)

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            ICIA
          </h1>
          <p className="text-xl text-white/60 font-light tracking-widest uppercase">
            Institut Collectif de l'IA
          </p>
        </div>
      </div>

      <div
        className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
          isOpen ? 'w-72' : 'w-12'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-2 right-2 w-8 h-8 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center text-white"
        >
          {isOpen ? '✕' : '⚙'}
        </button>

        {isOpen && (
          <div className="bg-black/80 backdrop-blur-md rounded-lg p-4 pt-10 text-white space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-wider border-b border-white/20 pb-2">
              Mesh Controls
            </h3>

            <div>
              <label className="text-xs text-white/60 block mb-1">
                Background Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={colorToHex(params.backgroundColor)}
                  onChange={(e) =>
                    handleChange('backgroundColor', hexToColor(e.target.value))
                  }
                  className="w-full h-8 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={colorToHex(params.backgroundColor)}
                  onChange={(e) =>
                    handleChange('backgroundColor', hexToColor(e.target.value))
                  }
                  className="w-20 bg-white/10 rounded px-2 text-xs font-mono"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/60 block mb-1">
                Point Color
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={colorToHex(params.color)}
                  onChange={(e) =>
                    handleChange('color', hexToColor(e.target.value))
                  }
                  className="w-full h-8 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={colorToHex(params.color)}
                  onChange={(e) =>
                    handleChange('color', hexToColor(e.target.value))
                  }
                  className="w-20 bg-white/10 rounded px-2 text-xs font-mono"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-white/60 block mb-1">
                Points: {params.points}
              </label>
              <input
                type="range"
                min="5"
                max="50"
                value={params.points}
                onChange={(e) =>
                  handleChange('points', parseInt(e.target.value))
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="text-xs text-white/60 block mb-1">
                Max Distance: {params.maxDistance}
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={params.maxDistance}
                onChange={(e) =>
                  handleChange('maxDistance', parseInt(e.target.value))
                }
                className="w-full"
              />
            </div>

            <div>
              <label className="text-xs text-white/60 block mb-1">
                Spacing: {params.spacing}
              </label>
              <input
                type="range"
                min="20"
                max="200"
                value={params.spacing}
                onChange={(e) =>
                  handleChange('spacing', parseInt(e.target.value))
                }
                className="w-full"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={params.showDots}
                  onChange={(e) => handleChange('showDots', e.target.checked)}
                  className="rounded"
                />
                Dots
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={params.mouseControls}
                  onChange={(e) => handleChange('mouseControls', e.target.checked)}
                  className="rounded"
                />
                Mouse
              </label>
              <label className="flex items-center gap-2 text-xs cursor-pointer">
                <input
                  type="checkbox"
                  checked={params.touchControls}
                  onChange={(e) => handleChange('touchControls', e.target.checked)}
                  className="rounded"
                />
                Touch
              </label>
            </div>

            <button
              onClick={() => setParams(defaultParams)}
              className="w-full py-2 bg-white/10 hover:bg-white/20 rounded text-xs uppercase tracking-wider transition-colors"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
