import * as THREE from 'three'
import { extend } from '@react-three/fiber'

class DofPointsMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: `
        uniform sampler2D positions;
        uniform float uTime;
        uniform float uFocus;
        uniform float uFov;
        uniform float uBlur;
        varying float vDistance;
        varying vec3 vPos;
        varying float vShell;
        void main() {
          vec4 posData = texture2D(positions, position.xy);
          vec3 pos = posData.rgb;
          vShell = posData.a;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          vDistance = abs(uFocus - -mvPosition.z);
          vPos = pos;
          gl_PointSize = (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur * 2.0;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        uniform float uTime;
        varying float vDistance;
        varying vec3 vPos;
        varying float vShell;
        
        void main() {
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          if (dot(cxy, cxy) > 1.0) discard;
          
          float dist = length(vPos);
          float brightness = 1.0 - (dist / 120.0) * 0.4;
          brightness = clamp(brightness, 0.5, 1.0);
          
          float shellFade = 0.7 + vShell * 0.3;
          
          float alpha = (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)) * brightness * shellFade;
          
          gl_FragColor = vec4(vec3(brightness), alpha * 0.85);
        }
      `,
      uniforms: {
        positions: { value: null },
        uTime: { value: 0 },
        uFocus: { value: 5.1 },
        uFov: { value: 50 },
        uBlur: { value: 30 },
        uOpacity: { value: 1 }
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false
    })
  }
}

extend({ DofPointsMaterial })

export { DofPointsMaterial }
