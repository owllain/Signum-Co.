const VERTEX = `#version 300 es
out vec2 vUv;
void main(){
  vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));
  vUv=p;
  gl_Position=vec4(p*2.0-1.0,0.0,1.0);
}`;

const FRAGMENT = `#version 300 es
precision highp float;
uniform float uAspect;
uniform float uPixel;
uniform float uDepth;
uniform vec3 uCell;
uniform float uThick;
uniform float uDot;
uniform float uScanZ;
uniform float uScanAlpha;
uniform float uReveal;
uniform float uTime;
in vec2 vUv;
out vec4 outColor;

const vec3 LINE_COLOR = vec3(0.1176, 0.2275, 0.5412);
const vec3 SCAN_COLOR = vec3(0.8784, 0.7412, 0.2824);
const vec3 CORE_COLOR = vec3(0.9575, 0.9094, 0.7488);

float hash(vec2 p){
  vec3 q=fract(vec3(p.xyx)*0.1031);
  q+=dot(q,q.yzx+33.33);
  return fract((q.x+q.y)*q.z);
}
vec2 hash2(vec2 p){
  vec3 q=fract(vec3(p.xyx)*vec3(0.1031,0.103,0.0973));
  q+=dot(q,q.yzx+33.33);
  return fract((q.xx+q.yz)*q.zy);
}
float lines(float across,float period,float fa){
  float u=across/period;
  float du=fa/period;
  float d=abs(fract(u+0.5)-0.5)/max(du,1e-5);
  float cov=clamp(uThick+0.5-d,0.0,1.0);
  float mean=min(1.0,2.0*uThick*du);
  return mix(cov,mean,smoothstep(0.1,0.4,du));
}
float depthFade(float z){
  float n=clamp(z/uDepth,0.0,1.0);
  return mix(1.0,(exp(-3.0*n)-0.0497871)/0.9502129,0.68);
}
vec3 project(vec3 eye,vec3 o,int face,float plane){
  vec3 d=o-eye;
  float t=face==0?(plane-o.x)/d.x:(face==1?(plane-o.y)/d.y:(plane-o.z)/d.z);
  return o+d*t;
}
void trace(vec3 o,vec3 d,out int face,out float plane,out vec3 h){
  float sx=d.x>0.0?0.5*uAspect:-0.5*uAspect;
  float sy=d.y>0.0?0.5:-0.5;
  float tx=abs(d.x)>1e-6?(sx-o.x)/d.x:1e9;
  float ty=abs(d.y)>1e-6?(sy-o.y)/d.y:1e9;
  float t=(uDepth-o.z)/d.z;
  face=2;plane=uDepth;
  if(tx<t){face=0;plane=sx;t=tx;}
  if(ty<t){face=1;plane=sy;t=ty;}
  h=o+d*t;
}
vec2 faceUv(vec3 h,int face){
  if(face==0)return vec2(h.z,h.y+0.5);
  if(face==1)return vec2(h.x+0.5*uAspect,h.z);
  return vec2(h.x+0.5*uAspect,h.y+0.5);
}
void over(inout vec4 acc,vec3 col,float a){
  a=clamp(a,0.0,1.0);
  acc=vec4(col*a,a)+acc*(1.0-a);
}
void main(){
  vec3 eye=vec3(0.0,0.0,-1.25);
  vec3 p=vec3((vUv.x-0.5)*uAspect,vUv.y-0.5,0.0);
  vec3 d=p-eye;
  int face;float plane;vec3 h;
  trace(p,d,face,plane,h);
  vec3 hx=project(eye,p+vec3(uPixel,0.0,0.0),face,plane);
  vec3 hy=project(eye,p+vec3(0.0,uPixel,0.0),face,plane);
  vec2 uv=faceUv(h,face);
  vec2 ux=faceUv(hx,face)-uv;
  vec2 uy=faceUv(hy,face)-uv;
  vec2 foot=vec2(length(vec2(ux.x,uy.x)),length(vec2(ux.y,uy.y)));
  vec2 cell=face==0?uCell.zy:(face==1?uCell.xz:uCell.xy);
  float minor=max(lines(uv.x,cell.x,foot.x),lines(uv.y,cell.y,foot.y));
  float major=max(lines(uv.x,cell.x*4.0,foot.x),lines(uv.y,cell.y*4.0,foot.y));
  float grid=max(minor*0.75,major);
  float fade=depthFade(h.z);
  float reveal=smoothstep(uReveal,uReveal-0.2,h.z);
  float zFoot=face==0?foot.x:(face==1?foot.y:0.0);
  float width=max(0.006,zFoot*1.1);
  float dz=h.z-uScanZ;
  float core=exp(-dz*dz/(width*width))*(face==2?0.45:1.0)*uScanAlpha;
  float behind=-dz;
  float trail=exp(-max(behind,0.0)/0.59)*smoothstep(-width,width*0.5,behind)*uScanAlpha;
  float spill=exp(-dz*dz/0.05)*uScanAlpha;

  vec4 color=vec4(0.0);
  vec2 gaps=face==0?vec2(0.5-abs(h.y),uDepth-h.z):(face==1?vec2(0.5*uAspect-abs(h.x),uDepth-h.z):vec2(0.5*uAspect-abs(h.x),0.5-abs(h.y)));
  vec2 crease=1.0-exp(-max(gaps,0.0)/0.16);
  float occlusion=crease.x*crease.y;
  float lamp=1.0/(1.0+h.z*h.z*0.9);
  float tilt=face==1?(plane<0.0?1.1:0.85):(face==2?0.8:1.0);
  over(color,vec3(1.0),lamp*tilt*occlusion*0.0825*reveal*fade);
  over(color,SCAN_COLOR,(spill*0.5+trail*0.12)*reveal*fade*0.2625*occlusion);

  float far=fade*reveal;
  float lit=grid*(core*1.2+trail*0.75)*far;
  float sheen=(core*0.14+spill*0.05+trail*0.03)*far;
  over(color,LINE_COLOR,grid*far);
  over(color,SCAN_COLOR,sheen);
  over(color,SCAN_COLOR,lit);
  over(color,CORE_COLOR,core*far*0.9);
  float energy=core*far*0.9+lit*0.5;

  vec2 spacing=cell/2.5;
  vec2 q=uv/spacing;
  vec2 id=floor(q);
  vec2 seed=id+vec2(float(face)*13.7+plane*5.3,float(face)*3.1);
  vec2 delta=(q-id-(0.2+0.6*hash2(seed)))*spacing;
  float det=ux.x*uy.y-ux.y*uy.x;
  vec2 s=vec2(delta.x*uy.y-delta.y*uy.x,ux.x*delta.y-ux.y*delta.x)/det;
  float radius=uDot*mix(1.0,0.55,clamp(h.z/uDepth,0.0,1.0));
  float spot=clamp(radius+0.5-length(s),0.0,1.0);
  float gap=min(spacing.x/foot.x,spacing.y/foot.y);
  float r=hash(seed+7.7);
  float dots=spot*smoothstep(5.0,10.0,gap)*smoothstep(0.25,0.6,r)*(0.3+0.7*r*r);
  float hot=core*2.5;
  float warm=trail*trail*1.3;
  float spark=dots*(hot+warm)*far;
  over(color,mix(SCAN_COLOR,CORE_COLOR,clamp(hot/max(hot+warm,1e-4),0.0,1.0)),spark);
  energy=clamp(energy+spark*0.9,0.0,1.0);

  vec4 bloom=vec4(SCAN_COLOR*energy*0.72,min(1.0,energy*0.72));
  outColor=color+bloom*(1.0-color.a);
}`;

function initGridScan(container: HTMLElement) {
  const canvas = container.querySelector<HTMLCanvasElement>('canvas');
  const gl = canvas?.getContext('webgl2', {
    alpha: true,
    premultipliedAlpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'high-performance',
  });
  if (!canvas || !gl) return;

  const compile = (type: number, src: string) => {
    const sh = gl.createShader(type);
    if (!sh) return null;
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
  };
  const vs = compile(gl.VERTEX_SHADER, VERTEX);
  const fs = compile(gl.FRAGMENT_SHADER, FRAGMENT);
  const prog = gl.createProgram();
  if (!vs || !fs || !prog) return;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;

  const u = (name: string) => gl.getUniformLocation(prog, name);
  const uniforms = {
    uAspect: u('uAspect'),
    uPixel: u('uPixel'),
    uDepth: u('uDepth'),
    uCell: u('uCell'),
    uThick: u('uThick'),
    uDot: u('uDot'),
    uScanZ: u('uScanZ'),
    uScanAlpha: u('uScanAlpha'),
    uReveal: u('uReveal'),
    uTime: u('uTime'),
  };

  const vao = gl.createVertexArray();
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  let introClock = reduce ? 1 : 0;
  let time = 0;
  let last = 0;
  let width = 1;
  let height = 1;
  let ratio = 1;

  const draw = () => {
    const aspect = width / height;
    const cy = 0.125;
    const cx = aspect / Math.max(1, Math.round(aspect / cy));
    const roomDepth = Math.max(cy, Math.round(3.2 / cy) * cy);
    let scanZ = roomDepth * 0.72;
    let scanAlpha = 0.26;
    if (introClock < 1) {
      scanZ = introClock * (roomDepth + 0.4) - 0.2;
      scanAlpha = Math.min(1, introClock * 6) * (1 - Math.max(0, introClock - 0.85) / 0.15);
    }
    gl.bindVertexArray(vao);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.useProgram(prog);
    gl.uniform1f(uniforms.uAspect, aspect);
    gl.uniform1f(uniforms.uPixel, 1 / canvas.height);
    gl.uniform1f(uniforms.uDepth, roomDepth);
    gl.uniform3f(uniforms.uCell, cx, cy, cy);
    gl.uniform1f(uniforms.uThick, ratio * 0.5);
    gl.uniform1f(uniforms.uDot, 1.8 * ratio);
    gl.uniform1f(uniforms.uScanZ, scanZ);
    gl.uniform1f(uniforms.uScanAlpha, scanAlpha);
    gl.uniform1f(uniforms.uReveal, introClock < 1 ? scanZ + 0.05 : 1e4);
    gl.uniform1f(uniforms.uTime, time);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  const frame = (now: number) => {
    const dt = last ? Math.min(0.05, Math.max(0.001, (now - last) / 1000)) : 1 / 60;
    last = now;
    time += dt;
    if (introClock < 1) introClock = Math.min(1, introClock + dt / 2.0);
    draw();
    if (introClock < 1) requestAnimationFrame(frame);
  };

  const resize = () => {
    width = Math.max(1, container.clientWidth);
    height = Math.max(1, container.clientHeight);
    ratio = Math.min(1.15, window.devicePixelRatio || 1);
    canvas.width = Math.max(1, Math.round(width * ratio));
    canvas.height = Math.max(1, Math.round(height * ratio));
    draw();
  };

  new ResizeObserver(resize).observe(container);
  resize();
  if (introClock < 1) requestAnimationFrame(frame);
}

const el = document.querySelector<HTMLElement>('[data-grid-scan]');
if (el) {
  const start = () => initGridScan(el);
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(start, { timeout: 600 });
  } else {
    setTimeout(start, 60);
  }
}

