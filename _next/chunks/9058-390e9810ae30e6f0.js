"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9058],{9672:function(e,t,a){let n;a.d(t,{ZJ:function(){return S},lc:function(){return M}});var o=a(1119),r=a(2265),i=a(1448),c=a(3639);let l=e=>e===Object(e)&&!Array.isArray(e)&&"function"!=typeof e;function s(e,t){let a=(0,c.z)(e=>e.gl),n=(0,c.D)(i.TextureLoader,l(e)?Object.values(e):e);if((0,r.useLayoutEffect)(()=>{null==t||t(n)},[t]),(0,r.useEffect)(()=>{"initTexture"in a&&(Array.isArray(n)?n:[n]).forEach(a.initTexture)},[a,n]),!l(e))return n;{let t=Object.keys(e),a={};return t.forEach(e=>Object.assign(a,{[e]:n[t.indexOf(e)]})),a}}s.preload=e=>c.D.preload(i.TextureLoader,e),s.clear=e=>c.D.clear(i.TextureLoader,e);var u={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let f=new Uint8Array(16),d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));var m=function(e,t,a){if(u.randomUUID&&!t&&!e)return u.randomUUID();let o=(e=e||{}).random||(e.rng||function(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(f)})();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){a=a||0;for(let e=0;e<16;++e)t[a+e]=o[e];return t}return function(e,t=0){return d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]}(o)};let v="https://rawcdn.githack.com/pmndrs/drei-assets/9225a9f1fbd449d9411125c2f419b843d0308c9f/cloud.png",p=new i.Matrix4,h=new i.Vector3,g=new i.Quaternion,y=new i.Vector3,x=new i.Quaternion,E=new i.Vector3,w=r.createContext(null),M=r.forwardRef(({children:e,material:t=i.MeshLambertMaterial,texture:a=v,range:n,limit:l=200,...u},f)=>{var d,m;let M;let b=r.useMemo(()=>class extends t{constructor(){super(),this.onBeforeCompile=e=>{e.vertexShader=`attribute float opacity;
               varying float vOpacity;
              `+e.vertexShader.replace("#include <fog_vertex>",`#include <fog_vertex>
                 vOpacity = opacity;
                `),e.fragmentShader=`varying float vOpacity;
              `+e.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
                 gl_FragColor = vec4(outgoingLight, diffuseColor.a * vOpacity);
                `)}}},[t]);(0,c.e)({CloudMaterial:b});let S=r.useRef(null),R=r.useRef([]),C=r.useMemo(()=>new Float32Array(Array.from({length:l},()=>1)),[l]),P=r.useMemo(()=>new Float32Array(Array.from({length:l},()=>[1,1,1]).flat()),[l]),A=s(a),T=0,D=0,_=new i.Quaternion,U=new i.Vector3(0,0,1),z=new i.Vector3;(0,c.A)((e,t)=>{for(T=e.clock.getElapsedTime(),p.copy(S.current.matrixWorld).invert(),e.camera.matrixWorld.decompose(y,x,E),D=0;D<R.current.length;D++)(M=R.current[D]).ref.current.matrixWorld.decompose(h,g,E),h.add(z.copy(M.position).applyQuaternion(g)),g.copy(x).multiply(_.setFromAxisAngle(U,M.rotation+=t*M.rotationFactor)),E.addScalar(M.volume+(1+Math.sin(T*M.density*M.speed))/2*M.growth),M.matrix.compose(h,g,E).premultiply(p),M.dist=h.distanceTo(y);for(R.current.sort((e,t)=>t.dist-e.dist),D=0;D<R.current.length;D++)M=R.current[D],C[D]=M.opacity*(M.dist<M.fade-1?M.dist/M.fade:1),S.current.setMatrixAt(D,M.matrix),S.current.setColorAt(D,M.color);S.current.geometry.attributes.opacity.needsUpdate=!0,S.current.instanceMatrix.needsUpdate=!0,S.current.instanceColor&&(S.current.instanceColor.needsUpdate=!0)}),r.useLayoutEffect(()=>{let e=Math.min(l,void 0!==n?n:l,R.current.length);S.current.count=e,S.current.instanceMatrix.updateRange.count=16*e,S.current.instanceColor&&(S.current.instanceColor.updateRange.count=3*e),S.current.geometry.attributes.opacity.updateRange.count=e});let I=[null!==(d=A.image.width)&&void 0!==d?d:1,null!==(m=A.image.height)&&void 0!==m?m:1],V=Math.max(I[0],I[1]);return I=[I[0]/V,I[1]/V],r.createElement("group",(0,o.Z)({ref:f},u),r.createElement(w.Provider,{value:R},e,r.createElement("instancedMesh",{matrixAutoUpdate:!1,ref:S,args:[null,null,l]},r.createElement("instancedBufferAttribute",{usage:i.DynamicDrawUsage,attach:"instanceColor",args:[P,3]}),r.createElement("planeGeometry",{args:[...I]},r.createElement("instancedBufferAttribute",{usage:i.DynamicDrawUsage,attach:"attributes-opacity",args:[C,1]})),r.createElement("cloudMaterial",{key:t.name,map:A,transparent:!0,depthWrite:!1}))))}),b=r.forwardRef(({opacity:e=1,speed:t=0,bounds:a=[5,1,1],segments:n=20,color:l="#ffffff",fade:s=10,volume:u=6,growth:f=4,concentrate:d="inside",seed:v=Math.random(),...p},h)=>{function g(){let e=1e4*Math.sin(v++);return e-Math.floor(e)}let y=r.useContext(w),x=r.useRef(null),[E]=r.useState(()=>m()),M=r.useMemo(()=>[...Array(n)].map((e,t)=>({segments:n,bounds:new i.Vector3(1,1,1),position:new i.Vector3,uuid:E,index:t,ref:x,dist:0,matrix:new i.Matrix4,color:new i.Color,rotation:Math.PI/n*t})),[n,E]);return r.useLayoutEffect(()=>{M.forEach((o,r)=>{(0,c.j)(o,{color:l,speed:t,growth:f,opacity:e,fade:s,bounds:a,density:Math.max(.5,g()),rotationFactor:Math.max(.2,.5*g())*t}),n>1&&o.position.copy(o.bounds).multiply({x:2*g()-1,y:2*g()-1,z:2*g()-1});let i=Math.abs(o.position.x),m=Math.abs(o.position.y),v=Math.abs(o.position.z),p=Math.max(i,m,v);o.length="inside"===d?1:-1,i===p&&(o.length-=i/o.bounds.x),m===p&&(o.length-=m/o.bounds.y),v===p&&(o.length-=v/o.bounds.z),o.volume=Math.max(.25,o.length)*u})},[d,a,s,l,e,f,u,v,n,t]),r.useLayoutEffect(()=>(y.current=[...y.current,...M],()=>{y.current=y.current.filter(e=>e.uuid!==E)}),[M]),r.useImperativeHandle(h,()=>x.current,[]),r.createElement("group",(0,o.Z)({ref:x},p))}),S=r.forwardRef((e,t)=>r.useContext(w)?r.createElement(b,(0,o.Z)({ref:t},e)):r.createElement(M,null,r.createElement(b,(0,o.Z)({ref:t},e))))},697:function(e,t,a){a.d(t,{q:function(){return d}});var n=a(1119),o=a(2265),r=a(1448),i=a(9074),c=Object.defineProperty,l=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t,a)=>(l(e,"symbol"!=typeof t?t+"":t,a),a);let u=(()=>{let e={uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new r.Vector3},up:{value:new r.Vector3(0,1,0)}},vertexShader:`
      uniform vec3 sunPosition;
      uniform float rayleigh;
      uniform float turbidity;
      uniform float mieCoefficient;
      uniform vec3 up;

      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      // constants for atmospheric scattering
      const float e = 2.71828182845904523536028747135266249775724709369995957;
      const float pi = 3.141592653589793238462643383279502884197169;

      // wavelength of used primaries, according to preetham
      const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
      // this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
      // (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
      const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

      // mie stuff
      // K coefficient for the primaries
      const float v = 4.0;
      const vec3 K = vec3( 0.686, 0.678, 0.666 );
      // MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
      const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

      // earth shadow hack
      // cutoffAngle = pi / 1.95;
      const float cutoffAngle = 1.6110731556870734;
      const float steepness = 1.5;
      const float EE = 1000.0;

      float sunIntensity( float zenithAngleCos ) {
        zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
        return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
      }

      vec3 totalMie( float T ) {
        float c = ( 0.2 * T ) * 10E-18;
        return 0.434 * c * MieConst;
      }

      void main() {

        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vWorldPosition = worldPosition.xyz;

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        gl_Position.z = gl_Position.w; // set z to camera.far

        vSunDirection = normalize( sunPosition );

        vSunE = sunIntensity( dot( vSunDirection, up ) );

        vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

        float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

      // extinction (absorbtion + out scattering)
      // rayleigh coefficients
        vBetaR = totalRayleigh * rayleighCoefficient;

      // mie coefficients
        vBetaM = totalMie( turbidity ) * mieCoefficient;

      }
    `,fragmentShader:`
      varying vec3 vWorldPosition;
      varying vec3 vSunDirection;
      varying float vSunfade;
      varying vec3 vBetaR;
      varying vec3 vBetaM;
      varying float vSunE;

      uniform float mieDirectionalG;
      uniform vec3 up;

      const vec3 cameraPos = vec3( 0.0, 0.0, 0.0 );

      // constants for atmospheric scattering
      const float pi = 3.141592653589793238462643383279502884197169;

      const float n = 1.0003; // refractive index of air
      const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

      // optical length at zenith for molecules
      const float rayleighZenithLength = 8.4E3;
      const float mieZenithLength = 1.25E3;
      // 66 arc seconds -> degrees, and the cosine of that
      const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

      // 3.0 / ( 16.0 * pi )
      const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
      // 1.0 / ( 4.0 * pi )
      const float ONE_OVER_FOURPI = 0.07957747154594767;

      float rayleighPhase( float cosTheta ) {
        return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
      }

      float hgPhase( float cosTheta, float g ) {
        float g2 = pow( g, 2.0 );
        float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
        return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
      }

      void main() {

        vec3 direction = normalize( vWorldPosition - cameraPos );

      // optical length
      // cutoff angle at 90 to avoid singularity in next formula.
        float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
        float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
        float sR = rayleighZenithLength * inverse;
        float sM = mieZenithLength * inverse;

      // combined extinction factor
        vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

      // in scattering
        float cosTheta = dot( direction, vSunDirection );

        float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
        vec3 betaRTheta = vBetaR * rPhase;

        float mPhase = hgPhase( cosTheta, mieDirectionalG );
        vec3 betaMTheta = vBetaM * mPhase;

        vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
        Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

      // nightsky
        float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
        float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
        vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
        vec3 L0 = vec3( 0.1 ) * Fex;

      // composition + solar disc
        float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
        L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

        vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

        vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

        gl_FragColor = vec4( retColor, 1.0 );

      #include <tonemapping_fragment>
      #include <${i.i>=154?"colorspace_fragment":"encodings_fragment"}>

      }
    `},t=new r.ShaderMaterial({name:"SkyShader",fragmentShader:e.fragmentShader,vertexShader:e.vertexShader,uniforms:r.UniformsUtils.clone(e.uniforms),side:r.BackSide,depthWrite:!1});class a extends r.Mesh{constructor(){super(new r.BoxGeometry(1,1,1),t)}}return s(a,"SkyShader",e),s(a,"material",t),a})();function f(e,t,a=new r.Vector3){let n=2*Math.PI*(t-.5);return a.x=Math.cos(n),a.y=Math.sin(Math.PI*(e-.5)),a.z=Math.sin(n),a}let d=o.forwardRef(({inclination:e=.6,azimuth:t=.1,distance:a=1e3,mieCoefficient:i=.005,mieDirectionalG:c=.8,rayleigh:l=.5,turbidity:s=10,sunPosition:d=f(e,t),...m},v)=>{let p=o.useMemo(()=>new r.Vector3().setScalar(a),[a]),[h]=o.useState(()=>new u);return o.createElement("primitive",(0,n.Z)({object:h,ref:v,"material-uniforms-mieCoefficient-value":i,"material-uniforms-mieDirectionalG-value":c,"material-uniforms-rayleigh-value":l,"material-uniforms-sunPosition-value":d,"material-uniforms-turbidity-value":s,scale:p},m))})},9074:function(e,t,a){a.d(t,{i:function(){return n}});let n=parseInt(a(1448).REVISION.replace(/\D+/g,""))}}]);