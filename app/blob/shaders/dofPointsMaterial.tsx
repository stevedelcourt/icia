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
        varying float vIsMembrane;
        void main() {
          vec4 posData = texture2D(positions, position.xy);
          vec3 pos = posData.rgb;
          vIsMembrane = posData.a;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          vDistance = abs(uFocus - -mvPosition.z);
          vPos = pos;
          
          float baseSize = vIsMembrane > 0.5 ? 1.5 : 1.0;
          gl_PointSize = (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur * baseSize;
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uFocus;
        uniform float uBlurAmount;
        varying float vDistance;
        varying vec3 vPos;
        varying float vIsMembrane;
        
        void main() {
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          if (dot(cxy, cxy) > 1.0) discard;
          
          float distFromCenter = length(vPos);
          
          float depthFactor = smoothstep(0.0, 3.0, vDistance);
          float alpha = 1.0 - depthFactor * 0.7;
          
          float brightness = 0.85 + (1.0 - distFromCenter * 0.3) * 0.15;
          brightness = clamp(brightness, 0.6, 1.0);
          
          if (vIsMembrane > 0.5) {
            brightness *= 1.1;
            alpha *= 1.1;
          }
          
          gl_FragColor = vec4(vec3(brightness), alpha * 0.8);
        }
      `,
      uniforms: {
        positions: { value: null },
        uTime: { value: 0 },
        uFocus: { value: 3.5 },
        uFov: { value: 60 },
        uBlur: { value: 15 },
        uBlurAmount: { value: 0.5 }
      },
      transparent: true,
      blending: THREE.NormalBlending,
      depthWrite: false
    })
  }
}

extend({ DofPointsMaterial })

export { DofPointsMaterial }
