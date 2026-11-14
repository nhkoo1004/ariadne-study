(() => {
  const main = document.querySelector('main');
  const svg = document.getElementById('journey');
  const track = document.getElementById('journey-track');
  const thread = document.getElementById('journey-thread');
  const glow = document.getElementById('journey-glow');
  const stars = document.getElementById('journey-stars');
  const arrival = document.querySelector('.arrival-map');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let length = 0, nodes = [], queued = false, originY = 0;
  const point = (el) => {const r=el.getBoundingClientRect(); return {x:r.left,y:r.top+scrollY-originY,width:r.width,height:r.height};};
  function layout() {
    const mr=main.getBoundingClientRect(); originY=mr.top+scrollY;
    const w=main.clientWidth,h=main.scrollHeight,mobile=w<=700;
    svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
    svg.style.height=h+'px';
    const wrap=point(document.querySelector('.hero'));
    const gutter=mobile?20:Math.max(18,wrap.x+16);
    const hero=point(document.querySelector('.hero'));
    const art=point(document.querySelector('.sky-map'));
    let anchors=[];
    if(mobile) anchors.push({x:gutter,y:48});
    else anchors.push({x:art.x+art.width*420/540,y:art.y+art.height*365/540},{x:gutter,y:hero.y+hero.height-12});
    nodes=Array.from(main.querySelectorAll('h2')).map(el=>{const r=point(el);return {x:gutter,y:r.y+17};});
    anchors.push(...nodes);
    const end=point(arrival); const endPoint={x:end.x+end.width*10/240,y:end.y+end.height*60/90};
    anchors.push({x:gutter,y:endPoint.y-22},endPoint);
    let d=`M ${anchors[0].x} ${anchors[0].y}`;
    for(let i=1;i<anchors.length;i++) {
      const a=anchors[i-1],b=anchors[i],mid=(a.y+b.y)/2;
      if(mobile&&a.x===b.x)d+=` L ${b.x} ${b.y}`;
      else if(a.x===b.x) d+=` C ${a.x-11} ${mid} ${b.x+11} ${mid} ${b.x} ${b.y}`;
      else d+=` C ${a.x} ${mid} ${b.x} ${mid} ${b.x} ${b.y}`;
    }
    [track,thread,glow].forEach(p=>p.setAttribute('d',d));
    length=thread.getTotalLength();
    [thread,glow].forEach(p=>p.style.strokeDasharray=length);
    stars.innerHTML=nodes.map(n=>`<g class="journey-node" transform="translate(${n.x} ${n.y})"><circle r="3.3"/><path d="M-9 0H9M0-9V9"/></g>`).join('');
    update();
  }
  function update() {
    queued=false;
    const maxScroll=document.documentElement.scrollHeight-innerHeight;
    const complete=motion.matches||scrollY>=maxScroll-3;
    const y=scrollY+innerHeight*.68-originY;
    let low=0,high=length;
    if(!complete)for(let i=0;i<18;i++){const m=(low+high)/2;if(thread.getPointAtLength(m).y<y)low=m;else high=m;}
    const drawn=complete?length:(low+high)/2;
    [thread,glow].forEach(p=>p.style.strokeDashoffset=length-drawn);
    [...stars.children].forEach((g,i)=>g.classList.toggle('is-lit',complete||nodes[i].y<=y));
    arrival.classList.toggle('arrived',drawn>=length-.5);
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
  addEventListener('scroll',schedule,{passive:true});
  addEventListener('resize',layout);
  motion.addEventListener('change',update);
  new ResizeObserver(layout).observe(main);
  document.fonts.ready.then(layout);
  layout();
})();
