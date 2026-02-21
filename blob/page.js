(()=>{var e={};e.id=2870,e.ids=[2870],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5603:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>u}),r(9657),r(1506),r(5866);var i=r(3191),o=r(8716),n=r(7922),s=r.n(n),a=r(5231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["blob",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9657)),"/Users/stv/icia/app/blob/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,1506)),"/Users/stv/icia/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/stv/icia/app/blob/page.tsx"],p="/blob/page",d={require:r,loadChunk:()=>Promise.resolve()},m=new i.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/blob/page",pathname:"/blob",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},7603:(e,t,r)=>{Promise.resolve().then(r.bind(r,6297))},7687:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},2763:()=>{},6297:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var i=r(326),o=r(8303),n=r(2688),s=r(7577),a=r(8454),l=Object.defineProperty,u=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t,r)=>(u(e,"symbol"!=typeof t?t+"":t,r),r);class p{constructor(e=Math){c(this,"grad3",[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]]),c(this,"grad4",[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]]),c(this,"p",[]),c(this,"perm",[]),c(this,"simplex",[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]),c(this,"dot",(e,t,r)=>e[0]*t+e[1]*r),c(this,"dot3",(e,t,r,i)=>e[0]*t+e[1]*r+e[2]*i),c(this,"dot4",(e,t,r,i,o)=>e[0]*t+e[1]*r+e[2]*i+e[3]*o),c(this,"noise",(e,t)=>{let r,i,o;let n=.5*(Math.sqrt(3)-1)*(e+t),s=Math.floor(e+n),a=Math.floor(t+n),l=(3-Math.sqrt(3))/6,u=(s+a)*l,c=e-(s-u),p=t-(a-u),d=0,m=1;c>p&&(d=1,m=0);let x=c-d+l,v=p-m+l,h=c-1+2*l,f=p-1+2*l,g=255&s,y=255&a,b=this.perm[g+this.perm[y]]%12,z=this.perm[g+d+this.perm[y+m]]%12,j=this.perm[g+1+this.perm[y+1]]%12,w=.5-c*c-p*p;w<0?r=0:(w*=w,r=w*w*this.dot(this.grad3[b],c,p));let M=.5-x*x-v*v;M<0?i=0:(M*=M,i=M*M*this.dot(this.grad3[z],x,v));let F=.5-h*h-f*f;return F<0?o=0:(F*=F,o=F*F*this.dot(this.grad3[j],h,f)),70*(r+i+o)}),c(this,"noise3d",(e,t,r)=>{let i,o,n,s,a,l,u,c,p,d;let m=1/3*(e+t+r),x=Math.floor(e+m),v=Math.floor(t+m),h=Math.floor(r+m),f=1/6*(x+v+h),g=e-(x-f),y=t-(v-f),b=r-(h-f);g>=y?y>=b?(a=1,l=0,u=0,c=1,p=1,d=0):(g>=b?(a=1,l=0,u=0):(a=0,l=0,u=1),c=1,p=0,d=1):y<b?(a=0,l=0,u=1,c=0,p=1,d=1):g<b?(a=0,l=1,u=0,c=0,p=1,d=1):(a=0,l=1,u=0,c=1,p=1,d=0);let z=g-a+1/6,j=y-l+1/6,w=b-u+1/6,M=g-c+1/6*2,F=y-p+1/6*2,P=b-d+1/6*2,C=g-1+1/6*3,A=y-1+1/6*3,S=b-1+1/6*3,I=255&x,_=255&v,q=255&h,R=this.perm[I+this.perm[_+this.perm[q]]]%12,T=this.perm[I+a+this.perm[_+l+this.perm[q+u]]]%12,D=this.perm[I+c+this.perm[_+p+this.perm[q+d]]]%12,k=this.perm[I+1+this.perm[_+1+this.perm[q+1]]]%12,B=.6-g*g-y*y-b*b;B<0?i=0:(B*=B,i=B*B*this.dot3(this.grad3[R],g,y,b));let U=.6-z*z-j*j-w*w;U<0?o=0:(U*=U,o=U*U*this.dot3(this.grad3[T],z,j,w));let W=.6-M*M-F*F-P*P;W<0?n=0:(W*=W,n=W*W*this.dot3(this.grad3[D],M,F,P));let G=.6-C*C-A*A-S*S;return G<0?s=0:(G*=G,s=G*G*this.dot3(this.grad3[k],C,A,S)),32*(i+o+n+s)}),c(this,"noise4d",(e,t,r,i)=>{let o,n,s,a,l,u,c,p,d,m,x,v,h,f,g,y,b;let z=this.grad4,j=this.simplex,w=this.perm,M=(5-Math.sqrt(5))/20,F=(Math.sqrt(5)-1)/4*(e+t+r+i),P=Math.floor(e+F),C=Math.floor(t+F),A=Math.floor(r+F),S=Math.floor(i+F),I=(P+C+A+S)*M,_=e-(P-I),q=t-(C-I),R=r-(A-I),T=i-(S-I),D=(_>q?32:0)+(_>R?16:0)+(q>R?8:0)+(_>T?4:0)+(q>T?2:0)+(R>T?1:0);u=j[D][0]>=3?1:0,c=j[D][1]>=3?1:0,p=j[D][2]>=3?1:0,d=j[D][3]>=3?1:0,m=j[D][0]>=2?1:0,x=j[D][1]>=2?1:0,v=j[D][2]>=2?1:0,h=j[D][3]>=2?1:0,f=j[D][0]>=1?1:0,g=j[D][1]>=1?1:0,y=j[D][2]>=1?1:0,b=j[D][3]>=1?1:0;let k=_-u+M,B=q-c+M,U=R-p+M,W=T-d+M,G=_-m+2*M,E=q-x+2*M,N=R-v+2*M,O=T-h+2*M,V=_-f+3*M,L=q-g+3*M,$=R-y+3*M,H=T-b+3*M,X=_-1+4*M,Y=q-1+4*M,Z=R-1+4*M,J=T-1+4*M,K=255&P,Q=255&C,ee=255&A,et=255&S,er=w[K+w[Q+w[ee+w[et]]]]%32,ei=w[K+u+w[Q+c+w[ee+p+w[et+d]]]]%32,eo=w[K+m+w[Q+x+w[ee+v+w[et+h]]]]%32,en=w[K+f+w[Q+g+w[ee+y+w[et+b]]]]%32,es=w[K+1+w[Q+1+w[ee+1+w[et+1]]]]%32,ea=.6-_*_-q*q-R*R-T*T;ea<0?o=0:(ea*=ea,o=ea*ea*this.dot4(z[er],_,q,R,T));let el=.6-k*k-B*B-U*U-W*W;el<0?n=0:(el*=el,n=el*el*this.dot4(z[ei],k,B,U,W));let eu=.6-G*G-E*E-N*N-O*O;eu<0?s=0:(eu*=eu,s=eu*eu*this.dot4(z[eo],G,E,N,O));let ec=.6-V*V-L*L-$*$-H*H;ec<0?a=0:(ec*=ec,a=ec*ec*this.dot4(z[en],V,L,$,H));let ep=.6-X*X-Y*Y-Z*Z-J*J;return ep<0?l=0:(ep*=ep,l=ep*ep*this.dot4(z[es],X,Y,Z,J)),27*(o+n+s+a+l)});for(let t=0;t<256;t++)this.p[t]=Math.floor(256*e.random());for(let e=0;e<512;e++)this.perm[e]=this.p[255&e]}}let d=s.forwardRef(({intensity:e=1,decay:t,decayRate:r=.65,maxYaw:i=.1,maxPitch:o=.1,maxRoll:n=.1,yawFrequency:l=.1,pitchFrequency:u=.1,rollFrequency:c=.1},d)=>{let m=(0,a.z)(e=>e.camera),x=(0,a.z)(e=>e.controls),v=s.useRef(e),h=s.useRef(m.rotation.clone()),[f]=s.useState(()=>new p),[g]=s.useState(()=>new p),[y]=s.useState(()=>new p),b=()=>{(v.current<0||v.current>1)&&(v.current=v.current<0?0:1)};return s.useImperativeHandle(d,()=>({getIntensity:()=>v.current,setIntensity:e=>{v.current=e,b()}}),[]),s.useEffect(()=>{if(x){let e=()=>void(h.current=m.rotation.clone());return x.addEventListener("change",e),e(),()=>void x.removeEventListener("change",e)}},[m,x]),(0,a.A)((e,s)=>{let a=Math.pow(v.current,2),p=i*a*f.noise(e.clock.elapsedTime*l,1),d=o*a*g.noise(e.clock.elapsedTime*u,1),x=n*a*y.noise(e.clock.elapsedTime*c,1);m.rotation.set(h.current.x+d,h.current.y+p,h.current.z+x),t&&v.current>0&&(v.current-=r*s,b())}),null});var m=r(5797);let x=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

vec3 curl(vec3 p) {
  const float e = 0.1;
  float n1 = snoise(vec3(p.x, p.y + e, p.z)) - snoise(vec3(p.x, p.y - e, p.z));
  float n2 = snoise(vec3(p.x, p.y, p.z + e)) - snoise(vec3(p.x, p.y, p.z - e));
  float n3 = snoise(vec3(p.x + e, p.y, p.z)) - snoise(vec3(p.x - e, p.y, p.z));
  float n4 = snoise(vec3(p.x, p.y, p.z + e)) - snoise(vec3(p.x, p.y, p.z - e));
  float n5 = snoise(vec3(p.x + e, p.y, p.z)) - snoise(vec3(p.x - e, p.y, p.z));
  float n6 = snoise(vec3(p.x, p.y + e, p.z)) - snoise(vec3(p.x, p.y - e, p.z));
  return vec3(n1 - n2, n3 - n4, n5 - n6) / (2.0 * e);
}
`;class v extends m.ShaderMaterial{constructor(){let e=new m.DataTexture(function(e,t){let r=new Float32Array(1048576);new m.Vector3;for(let e=0;e<262144;e++)!function(e,t,r,i){let o=2*Math.PI*Math.random(),n=Math.acos(2*Math.random()-1),s=1.5*Math.cbrt(Math.random());r[i+0]=s*Math.sin(n)*Math.cos(o),r[i+1]=s*Math.sin(n)*Math.sin(o),r[i+2]=s*Math.cos(n),r[i+3]=0}(0,0,r,4*e);return r}(0,0),512,512,m.RGBAFormat,m.FloatType);e.needsUpdate=!0,super({vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D positions;
        uniform float uTime;
        uniform float uCurlFreq;
        uniform float uRadius;
        uniform float uWobble;
        varying vec2 vUv;
        
        ${x}
        
        void main() {
          float t = uTime * 0.015;
          vec3 pos = texture2D(positions, vUv).rgb;
          
          vec3 curlPos = pos;
          curlPos = curl(curlPos * uCurlFreq + t);
          curlPos += curl(curlPos * uCurlFreq * 2.0) * 0.5;
          curlPos += curl(curlPos * uCurlFreq * 4.0) * 0.25;
          
          vec3 result = curlPos;
          
          float dist = length(result);
          vec3 dir = normalize(result + 0.001);
          
          float nx = snoise(vec3(dir.y * 3.0, dir.z * 3.0, t * 0.3)) * uWobble;
          float ny = snoise(vec3(dir.x * 3.0 + 100.0, dir.z * 3.0, t * 0.3)) * uWobble;
          float nz = snoise(vec3(dir.x * 3.0 + 200.0, dir.y * 3.0, t * 0.3)) * uWobble;
          
          vec3 organicDir = normalize(dir + vec3(nx, ny, nz) * 0.3);
          
          float radiusVar = snoise(organicDir * 2.0 + t * 0.2) * uWobble * 0.3;
          float targetRadius = uRadius * (1.0 + radiusVar);
          
          result = organicDir * min(dist, targetRadius);
          
          gl_FragColor = vec4(result, 1.0);
        }
      `,uniforms:{positions:{value:e},uTime:{value:0},uCurlFreq:{value:.15},uRadius:{value:1.2},uWobble:{value:1}}})}}(0,a.e)({SimulationMaterial:v});class h extends m.ShaderMaterial{constructor(){super({vertexShader:`
        uniform sampler2D positions;
        uniform float uTime;
        uniform float uFocus;
        uniform float uFov;
        uniform float uBlur;
        varying float vDistance;
        void main() {
          vec3 pos = texture2D(positions, position.xy).xyz;
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          vDistance = abs(uFocus - -mvPosition.z);
          gl_PointSize = (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur * 2.0;
        }
      `,fragmentShader:`
        uniform float uOpacity;
        varying float vDistance;
        void main() {
          vec2 cxy = 2.0 * gl_PointCoord - 1.0;
          if (dot(cxy, cxy) > 1.0) discard;
          gl_FragColor = vec4(vec3(1.0), (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
        }
      `,uniforms:{positions:{value:null},uTime:{value:0},uFocus:{value:5.1},uFov:{value:50},uBlur:{value:30},uOpacity:{value:1}},transparent:!0,blending:m.NormalBlending,depthWrite:!1})}}function f({speed:e,fov:t,aperture:r,focus:o,curl:n,radius:l,wobble:u,size:c=512}){let p=(0,s.useRef)(null),d=(0,s.useRef)(null),[x]=(0,s.useState)(()=>new m.Scene),[v]=(0,s.useState)(()=>new m.OrthographicCamera(-1,1,1,-1,1/9007199254740992,1)),[h]=(0,s.useState)(()=>new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0])),[f]=(0,s.useState)(()=>new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0])),g=(0,s.useMemo)(()=>new m.WebGLRenderTarget(c,c,{minFilter:m.NearestFilter,magFilter:m.NearestFilter,format:m.RGBAFormat,type:m.FloatType}),[c]),y=(0,s.useMemo)(()=>{let e=c*c,t=new Float32Array(3*e);for(let r=0;r<e;r++)t[3*r+0]=r%c/c,t[3*r+1]=r/c/c;return t},[c]);return(0,a.A)(i=>{i.gl.setRenderTarget(g),i.gl.clear(),i.gl.render(x,v),i.gl.setRenderTarget(null),d.current&&p.current&&(d.current.uniforms.positions.value=g.texture,d.current.uniforms.uTime.value=i.clock.elapsedTime,d.current.uniforms.uFocus.value=m.MathUtils.lerp(d.current.uniforms.uFocus.value,o,.1),d.current.uniforms.uFov.value=m.MathUtils.lerp(d.current.uniforms.uFov.value,t,.1),d.current.uniforms.uBlur.value=m.MathUtils.lerp(d.current.uniforms.uBlur.value,(5.6-r)*9,.1),p.current.uniforms.uTime.value=i.clock.elapsedTime*e,p.current.uniforms.uCurlFreq.value=m.MathUtils.lerp(p.current.uniforms.uCurlFreq.value,n,.1),p.current.uniforms.uRadius.value=l,p.current.uniforms.uWobble.value=u)}),(0,i.jsxs)(i.Fragment,{children:[(0,a.g)((0,i.jsxs)("mesh",{children:[i.jsx("simulationMaterial",{ref:p}),(0,i.jsxs)("bufferGeometry",{children:[i.jsx("bufferAttribute",{attach:"attributes-position",count:h.length/3,array:h,itemSize:3}),i.jsx("bufferAttribute",{attach:"attributes-uv",count:f.length/2,array:f,itemSize:2})]})]}),x),(0,i.jsxs)("points",{children:[i.jsx("dofPointsMaterial",{ref:d}),i.jsx("bufferGeometry",{children:i.jsx("bufferAttribute",{attach:"attributes-position",count:y.length/3,array:y,itemSize:3})})]})]})}function g({label:e,value:t,onChange:r,min:o,max:n,step:s=.01}){return(0,i.jsxs)("div",{style:{marginBottom:"8px"},children:[(0,i.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"2px",fontSize:"10px"},children:[i.jsx("span",{style:{color:"#888"},children:e}),i.jsx("span",{style:{color:"#fff",fontFamily:"monospace",background:"#333",padding:"1px 5px",borderRadius:"2px",fontSize:"9px"},children:t.toFixed(2)})]}),i.jsx("input",{type:"range",min:o,max:n,step:s,value:t,onChange:e=>r(parseFloat(e.target.value)),style:{width:"100%",height:"4px",appearance:"none",WebkitAppearance:"none",background:"#444",borderRadius:"2px",cursor:"pointer",outline:"none"}})]})}function y({settings:e}){return(0,i.jsxs)(i.Fragment,{children:[i.jsx(n.z,{makeDefault:!0,enablePan:!1,enableZoom:!0,zoomSpeed:.5,minDistance:2,maxDistance:10,rotateSpeed:.5}),i.jsx(d,{yawFrequency:.2,maxYaw:.01,pitchFrequency:.2,maxPitch:.01,rollFrequency:.1,maxRoll:.01,intensity:.05}),i.jsx(f,{...e})]})}function b(){let[e,t]=(0,s.useState)({focus:3.5,speed:8,aperture:3,fov:60,curl:.12,radius:1.2,wobble:.8}),[r,n]=(0,s.useState)(!1);return(0,i.jsxs)("div",{style:{width:"100vw",height:"100vh",background:"#181820"},children:[i.jsx(o.Xz,{linear:!0,dpr:r?1.5:2,camera:{fov:25,position:[0,0,5]},gl:e=>new m.WebGL1Renderer({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),children:i.jsx(y,{settings:e})},r?"mobile":"desktop"),(0,i.jsxs)("div",{style:{position:"fixed",top:"20px",left:"20px",background:"rgba(0,0,0,0.85)",padding:"14px",borderRadius:"8px",width:"180px",fontFamily:"system-ui, sans-serif",fontSize:"11px",zIndex:1e3},children:[i.jsx("div",{style:{color:"#fff",fontWeight:"bold",marginBottom:"10px",fontSize:"13px",borderBottom:"1px solid #333",paddingBottom:"8px"},children:"Amoeba Controls"}),i.jsx("div",{style:{color:"#666",fontSize:"9px",marginBottom:"6px"},children:"CAMERA"}),i.jsx(g,{label:"Focus",value:e.focus,onChange:e=>t(t=>({...t,focus:e})),min:2,max:6,step:.05}),i.jsx(g,{label:"Aperture",value:e.aperture,onChange:e=>t(t=>({...t,aperture:e})),min:1,max:5.6,step:.1}),i.jsx(g,{label:"FOV",value:e.fov,onChange:e=>t(t=>({...t,fov:e})),min:20,max:150,step:1}),i.jsx("div",{style:{color:"#666",fontSize:"9px",marginBottom:"6px",marginTop:"10px"},children:"SHAPE"}),i.jsx(g,{label:"Radius",value:e.radius,onChange:e=>t(t=>({...t,radius:e})),min:.5,max:2.5,step:.05}),i.jsx(g,{label:"Wobble",value:e.wobble,onChange:e=>t(t=>({...t,wobble:e})),min:0,max:2,step:.05}),i.jsx("div",{style:{color:"#666",fontSize:"9px",marginBottom:"6px",marginTop:"10px"},children:"ANIMATION"}),i.jsx(g,{label:"Speed",value:e.speed,onChange:e=>t(t=>({...t,speed:e})),min:.1,max:20,step:.1}),i.jsx(g,{label:"Curl",value:e.curl,onChange:e=>t(t=>({...t,curl:e})),min:.01,max:.5,step:.01}),(0,i.jsxs)("div",{style:{marginTop:"10px",padding:"6px",background:"#1a1a1a",borderRadius:"4px",fontSize:"9px",color:"#666"},children:[i.jsx("div",{children:"Drag to rotate"}),i.jsx("div",{children:"Scroll to zoom"})]})]})]})}(0,a.e)({DofPointsMaterial:h}),(0,a.e)({SimulationMaterial:v,DofPointsMaterial:h})},9657:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});let i=(0,r(8570).createProxy)(String.raw`/Users/stv/icia/app/blob/page.tsx#default`)},1506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>l});var i=r(9510),o=r(8188),n=r.n(o),s=r(8732),a=r.n(s);r(7272);let l={metadataBase:new URL("https://icia.fr"),title:{default:"ICIA - Institut Collectif de l'IA",template:"%s | ICIA"},description:"Un projet fran\xe7ais pour que chacun et chaque organisation puisse b\xe9n\xe9ficier concr\xe8tement de l'intelligence artificielle.",keywords:["IA","intelligence artificielle","formation IA","accompagnement IA","think tank IA","France"],authors:[{name:"Institut Collectif de l'IA"}],openGraph:{type:"website",locale:"fr_FR",url:"https://icia.fr",siteName:"ICIA",title:"ICIA - Institut Collectif de l'IA",description:"Un projet fran\xe7ais pour que chacun et chaque organisation puisse b\xe9n\xe9ficier concr\xe8tement de l'intelligence artificielle.",images:[{url:"/og-image.jpg",width:1200,height:630,alt:"Institut Collectif de l'IA"}]},twitter:{card:"summary_large_image",title:"ICIA - Institut Collectif de l'IA",description:"Un projet fran\xe7ais pour que chacun et chaque organisation puisse b\xe9n\xe9ficier concr\xe8tement de l'intelligence artificielle."}};function u({children:e}){return i.jsx("html",{lang:"fr",className:`${n().variable} ${a().variable}`,children:i.jsx("body",{className:"antialiased bg-bg text-text font-sans",children:e})})}},7272:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[8948,3873,8303,2688],()=>r(5603));module.exports=i})();