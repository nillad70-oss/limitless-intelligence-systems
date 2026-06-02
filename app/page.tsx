'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const platforms = [
  { name: 'Limitless Healthcare AI™', desc: 'AI innovation & workforce solutions for healthcare organizations', color: '#0F6E56', bg: 'rgba(15,110,86,.08)', border: 'rgba(15,110,86,.2)', url: 'https://limitlesshealthcareai.com', icon: '🏥' },
  { name: 'VDASR.ai™', desc: 'AI-powered home health documentation & clinical intelligence', color: '#185FA5', bg: 'rgba(24,95,165,.08)', border: 'rgba(24,95,165,.2)', url: 'https://vdasr-ai.web.app', icon: '📋' },
  { name: 'NillaFlow Studio™', desc: 'AI-powered digital income & creator economy platform', color: '#C89B3C', bg: 'rgba(200,155,60,.08)', border: 'rgba(200,155,60,.25)', url: 'https://nillaflowstudio.app', icon: '✨' },
  { name: 'NOCAiS™', desc: 'Nursing operations command AI system for LTC leadership', color: '#BA7517', bg: 'rgba(186,117,23,.08)', border: 'rgba(186,117,23,.2)', url: '#', icon: '⚡' },
]

const transformations = [
  { icon: '🏥', title: 'Healthcare Workers', before: '3 hrs charting daily', after: '30 min with AI' },
  { icon: '👩‍👧', title: 'Busy Moms', before: 'Overwhelmed, exhausted', after: 'More time, more peace' },
  { icon: '💼', title: 'Entrepreneurs', before: 'Working 60-hr weeks', after: 'Automated income' },
  { icon: '🔍', title: 'Job Seekers', before: 'Getting ignored', after: 'Landing interviews' },
  { icon: '⚡', title: 'Small Business', before: 'Buried in admin', after: 'Running like a CEO' },
  { icon: '✍️', title: 'Content Creators', before: "Creator's block weekly", after: 'Consistent income' },
]

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const nodes: { x: number; y: number; vx: number; vy: number; r: number; pulse: number }[] = []
    for (let i = 0; i < 55; i++) {
      nodes.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.5 + 0.5, pulse: Math.random() * Math.PI * 2 })
    }

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy; n.pulse += .018
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 130) {
            ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(10,32,64,${.2 * (1 - dist / 130)})`; ctx.lineWidth = .6; ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        const glow = Math.sin(n.pulse) * .5 + .5
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + glow * .8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(10,32,64,${.3 + glow * .3})`; ctx.fill()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <main style={{ fontFamily:'system-ui,sans-serif', background:'#FDFAF4' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&display=swap');
        .hl { font-family:'Playfair Display',Georgia,serif; }
        .glass-light { background:rgba(255,255,255,.7); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border:1px solid rgba(200,155,60,.2); }
        .glass-warm { background:rgba(253,250,244,.85); backdrop-filter:blur(20px); -webkit-backdrop-filter:blur(20px); border:1px solid rgba(200,155,60,.25); }
        .gold-shadow { box-shadow:0 4px 32px rgba(200,155,60,.12), 0 1px 0 rgba(200,155,60,.2); }
        .gold-glow { box-shadow:0 0 40px rgba(200,155,60,.15), 0 8px 32px rgba(200,155,60,.08); }
        .pd { width:8px; height:8px; border-radius:50%; animation:pulse 2s infinite; }
        .pdg { width:8px; height:8px; background:#22C55E; border-radius:50%; animation:pulse 2s infinite; }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .fc { animation:float 4s ease-in-out infinite; }
        .fc2 { animation:float2 5s ease-in-out infinite 1s; }
        .nl { font-size:13px; color:#8A7A6A; text-decoration:none; font-weight:400; letter-spacing:.04em; transition:color .2s; }
        .nl:hover { color:#C89B3C; }
        .pc { transition:all .3s; cursor:pointer; text-decoration:none; display:block; }
        .pc:hover { transform:translateY(-6px); }
        .tc { transition:all .25s; }
        .tc:hover { transform:translateY(-4px); box-shadow:0 8px 32px rgba(200,155,60,.12); }
        .eq-box { background:linear-gradient(135deg,rgba(253,250,244,.9),rgba(245,239,224,.9)); backdrop-filter:blur(12px); border:1px solid rgba(200,155,60,.25); border-radius:16px; padding:20px 24px; }
      `}</style>

      {/* NAV */}
      <nav style={{ background:'rgba(253,250,244,.95)', backdropFilter:'blur(20px)', WebkitBackdropFilter:'blur(20px)', borderBottom:'1px solid rgba(200,155,60,.15)', padding:'0 5%', height:'64px', display:'flex', alignItems:'center', justifyContent:'space-between', position:'sticky', top:0, zIndex:100, boxShadow:'0 1px 20px rgba(200,155,60,.08)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
          <div style={{ width:'34px', height:'34px', background:'linear-gradient(135deg,#C89B3C,#E8C26A)', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'14px', fontWeight:700, color:'#FDFAF4', fontFamily:'Playfair Display,serif', boxShadow:'0 0 16px rgba(200,155,60,.25)' }}>L</div>
          <div style={{ fontFamily:'Playfair Display,serif', fontSize:'15px', fontWeight:700, color:'#1C1410' }}>Limitless <span style={{ color:'#C89B3C' }}>Intelligence Systems™</span></div>
        </div>
        <div style={{ display:'flex', gap:'32px' }}>
          {['Solutions','About','Platforms','Community'].map(l => <a key={l} href={`#${l.toLowerCase()}`} className="nl">{l}</a>)}
        </div>
        <button style={{ background:'linear-gradient(135deg,#C89B3C,#E8C26A)', color:'#FDFAF4', border:'none', padding:'10px 22px', borderRadius:'8px', fontSize:'13px', fontWeight:700, cursor:'pointer', boxShadow:'0 4px 16px rgba(200,155,60,.25)' }}>
          Get Started Free
        </button>
      </nav>

      {/* HERO — Light with gold neural network */}
      <section style={{ position:'relative', minHeight:'100vh', overflow:'hidden', display:'grid', gridTemplateColumns:'1fr 1fr', alignItems:'stretch', background:'linear-gradient(160deg,#FDFAF4 0%,#F5EFE0 50%,#EDE0C4 100%)' }}>
        <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', zIndex:0, opacity:1 }} />
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 50% 60% at 15% 50%,rgba(200,155,60,.06) 0%,transparent 60%)', zIndex:1 }} />

        {/* LEFT */}
        <div style={{ padding:'80px 5%', position:'relative', zIndex:2, display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:'8px', background:'rgba(200,155,60,.1)', border:'1px solid rgba(200,155,60,.3)', borderRadius:'20px', padding:'6px 16px', fontSize:'11px', fontWeight:600, color:'#8A6520', textTransform:'uppercase', letterSpacing:'.12em', marginBottom:'28px', width:'fit-content' }}>
            <span className="pd" style={{ background:'#C89B3C' }} />
            The Practical AI Movement
          </div>
          <h1 className="hl" style={{ fontSize:'clamp(36px,5vw,64px)', fontWeight:700, lineHeight:1.05, color:'#1C1410', marginBottom:'8px' }}>AI That Works</h1>
          <h1 className="hl" style={{ fontSize:'clamp(36px,5vw,64px)', fontWeight:700, fontStyle:'italic', lineHeight:1.05, color:'#C89B3C', marginBottom:'24px' }}>for Real Life.</h1>
          <p style={{ fontSize:'17px', color:'#4A3828', lineHeight:1.75, marginBottom:'20px', maxWidth:'460px', fontWeight:300 }}>
            Empowering nurses, moms, entrepreneurs, and everyday people to use AI to save time, reduce burnout, and build new income.
          </p>

          {/* EQUATION */}
          <div className="eq-box" style={{ marginBottom:'32px', maxWidth:'460px' }}>
            <div style={{ fontSize:'10px', fontWeight:700, color:'#C89B3C', textTransform:'uppercase', letterSpacing:'.14em', marginBottom:'10px' }}>The Limitless Equation™</div>
            <div style={{ display:'flex', alignItems:'center', gap:'10px', flexWrap:'wrap' }}>
              {['AI','+','Skills','+','Knowledge','=','Scalable Income'].map((item,i) => (
                <span key={i} className="hl" style={{ fontSize:['AI','Skills','Knowledge','Scalable Income'].includes(item)?'clamp(16px,2vw,26px)':'20px', fontWeight:700, color:['AI','Skills','Knowledge','Scalable Income'].includes(item)?'#C89B3C':'rgba(28,20,16,.3)' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display:'flex', gap:'12px', flexWrap:'wrap', marginBottom:'36px' }}>
            <button style={{ background:'linear-gradient(135deg,#C89B3C,#E8C26A)', color:'#FDFAF4', border:'none', padding:'14px 32px', borderRadius:'10px', fontSize:'15px', fontWeight:700, cursor:'pointer', boxShadow:'0 6px 24px rgba(200,155,60,.3)' }}>Explore AI Solutions</button>
            <button style={{ background:'#fff', color:'#1C1410', border:'1.5px solid rgba(200,155,60,.35)', padding:'14px 32px', borderRadius:'10px', fontSize:'15px', fontWeight:500, cursor:'pointer' }}>Join the Community</button>
          </div>

          <div style={{ display:'flex', gap:'28px', flexWrap:'wrap', paddingTop:'28px', borderTop:'1px solid rgba(200,155,60,.2)' }}>
            {[['27+','Years Clinical Experience'],['4','AI Platforms Built'],['∞','Lives Transformed']].map(([n,d]) => (
              <div key={n}>
                <div className="hl" style={{ fontSize:'28px', fontWeight:700, color:'#C89B3C', lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:'11px', color:'#8A7A6A', marginTop:'4px', letterSpacing:'.04em' }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PHOTO */}
        <div style={{ position:'relative', overflow:'hidden', zIndex:2, minHeight:'100vh' }}>
          <Image src="/images/founder-hero.jpg" alt="Leonilla Addeh — Founder" fill style={{ objectFit:'cover', objectPosition:'50% 5%' }} priority />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right,#F5EFE0 0%,transparent 20%,transparent 80%,#EDE0C4 100%)' }} />
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,#EDE0C4 0%,transparent 25%)' }} />

          {/* Floating cards — glass on light */}
          <div className="fc glass-light gold-shadow" style={{ position:'absolute', bottom:'120px', left:'20px', borderRadius:'16px', padding:'16px 20px', minWidth:'160px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'8px' }}>
              <span className="pdg" />
              <span style={{ fontSize:'11px', color:'#6B8A7A', fontWeight:600, textTransform:'uppercase', letterSpacing:'.08em' }}>Live System</span>
            </div>
            <div className="hl" style={{ fontSize:'20px', fontWeight:700, color:'#C89B3C', lineHeight:1 }}>VDASR.ai™</div>
            <div style={{ fontSize:'11px', color:'#8A7A6A', marginTop:'4px' }}>AI home health platform</div>
          </div>

          <div className="fc2 glass-light gold-shadow" style={{ position:'absolute', top:'120px', right:'20px', borderRadius:'16px', padding:'16px 20px', minWidth:'148px' }}>
            <div style={{ fontSize:'10px', color:'#8A7A6A', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'6px' }}>Time Saved Weekly</div>
            <div className="hl" style={{ fontSize:'32px', fontWeight:700, color:'#C89B3C', lineHeight:1 }}>12+ hrs</div>
            <div style={{ fontSize:'11px', color:'#8A7A6A', marginTop:'4px' }}>with AI documentation</div>
          </div>

          <div style={{ position:'absolute', bottom:'40px', left:'50%', transform:'translateX(-50%)', background:'rgba(253,250,244,.92)', backdropFilter:'blur(12px)', border:'1px solid rgba(200,155,60,.25)', borderRadius:'12px', padding:'10px 22px', textAlign:'center', whiteSpace:'nowrap', boxShadow:'0 4px 20px rgba(200,155,60,.12)' }}>
            <div className="hl" style={{ fontSize:'16px', fontWeight:700, color:'#1C1410' }}>Leonilla Addeh</div>
            <div style={{ fontSize:'11px', color:'#C89B3C', marginTop:'2px' }}>Founder & CEO · RN, MSN-Ed · AI Architect</div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background:'linear-gradient(135deg,#C89B3C,#E8C26A)', padding:'13px 0', overflow:'hidden' }}>
        <div className="marquee-track" style={{ display:'flex', whiteSpace:'nowrap' }}>
          {['AI for Nurses','AI for Moms','AI for Healthcare','AI for Entrepreneurs','AI for Productivity','AI for Digital Income','AI for Real Life','AI for Nurses','AI for Moms','AI for Healthcare','AI for Entrepreneurs','AI for Productivity','AI for Digital Income','AI for Real Life'].map((t,i) => (
            <span key={i} style={{ fontSize:'12px', fontWeight:700, color:'#FDFAF4', letterSpacing:'.1em', textTransform:'uppercase', padding:'0 32px', opacity:.9 }}>
              {t} <span style={{ opacity:.4 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ECOSYSTEM */}
      <section id="platforms" style={{ padding:'96px 5%', background:'#FFFFFF', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 50% at 50% 50%,rgba(200,155,60,.04) 0%,transparent 70%)', pointerEvents:'none' }} />
        <div style={{ textAlign:'center', marginBottom:'64px', position:'relative', zIndex:1 }}>
          <p style={{ fontSize:'11px', fontWeight:600, color:'#C89B3C', textTransform:'uppercase', letterSpacing:'.2em', marginBottom:'12px' }}>The Ecosystem</p>
          <h2 className="hl" style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:700, color:'#1C1410', marginBottom:'16px' }}>
            One mission.<br /><span style={{ color:'#C89B3C', fontStyle:'italic' }}>Four intelligent platforms.</span>
          </h2>
          <p style={{ fontSize:'16px', color:'#6B5A4A', maxWidth:'500px', margin:'0 auto', lineHeight:1.7, fontWeight:300 }}>
            Limitless Intelligence Systems™ is the parent ecosystem powering AI transformation across healthcare, productivity, and digital income.
          </p>
        </div>

        <div style={{ maxWidth:'900px', margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:'40px' }}>
            <div className="gold-shadow" style={{ display:'inline-block', background:'linear-gradient(135deg,#1C1410,#2C2010)', borderRadius:'20px', padding:'18px 40px', position:'relative' }}>
              <div className="hl" style={{ fontSize:'18px', fontWeight:700, color:'#E8C26A' }}>Limitless Intelligence Systems™</div>
              <div style={{ fontSize:'11px', color:'rgba(232,194,106,.5)', marginTop:'4px', letterSpacing:'.06em' }}>PARENT ECOSYSTEM · AI INNOVATION HUB</div>
              <div style={{ position:'absolute', bottom:'-20px', left:'50%', width:'1px', height:'20px', background:'linear-gradient(to bottom,rgba(200,155,60,.5),transparent)', transform:'translateX(-50%)' }} />
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'20px' }}>
            {platforms.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="pc" style={{ background:p.bg, borderRadius:'18px', padding:'28px 22px', border:`1px solid ${p.border}`, position:'relative', overflow:'hidden', boxShadow:'0 2px 16px rgba(0,0,0,.04)' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg,transparent,${p.color},transparent)` }} />
                <div style={{ fontSize:'28px', marginBottom:'14px' }}>{p.icon}</div>
                <div className="hl" style={{ fontSize:'16px', fontWeight:700, color:'#1C1410', marginBottom:'8px', lineHeight:1.2 }}>{p.name}</div>
                <p style={{ fontSize:'12px', color:'#6B5A4A', lineHeight:1.6, marginBottom:'16px' }}>{p.desc}</p>
                <div style={{ display:'flex', alignItems:'center', gap:'6px', fontSize:'12px', fontWeight:600, color:p.color }}>
                  <span className="pd" style={{ background:p.color }} />
                  Visit Platform →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATIONS */}
      <section id="solutions" style={{ padding:'96px 5%', background:'#FDFAF4' }}>
        <p style={{ fontSize:'11px', fontWeight:600, color:'#C89B3C', textTransform:'uppercase', letterSpacing:'.2em', marginBottom:'12px' }}>Real Life AI Transformations</p>
        <h2 className="hl" style={{ fontSize:'clamp(28px,4vw,46px)', fontWeight:700, color:'#1C1410', marginBottom:'12px' }}>
          Finally… AI that makes<br /><span style={{ color:'#C89B3C', fontStyle:'italic' }}>sense for your life</span>
        </h2>
        <p style={{ fontSize:'16px', color:'#6B5A4A', maxWidth:'500px', lineHeight:1.7, fontWeight:300, marginBottom:'48px' }}>No jargon. No overwhelm. Real AI tools built for people doing the real work.</p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'18px' }}>
          {transformations.map(t => (
            <div key={t.title} className="tc" style={{ background:'#fff', borderRadius:'16px', padding:'28px', border:'1px solid rgba(200,155,60,.15)', boxShadow:'0 2px 16px rgba(200,155,60,.06)' }}>
              <div style={{ fontSize:'28px', marginBottom:'14px' }}>{t.icon}</div>
              <h3 className="hl" style={{ fontSize:'18px', fontWeight:700, color:'#1C1410', marginBottom:'16px' }}>{t.title}</h3>
              <div style={{ display:'flex', alignItems:'center', gap:'8px', padding:'12px 0', borderTop:'1px solid rgba(200,155,60,.12)' }}>
                <span style={{ fontSize:'12px', color:'#B09080', textDecoration:'line-through' }}>{t.before}</span>
                <span style={{ color:'#C89B3C', fontWeight:700, fontSize:'14px' }}>→</span>
                <span style={{ fontSize:'12px', fontWeight:700, color:'#0F6E56' }}>{t.after}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT — ONE dark section for drama */}
      <section id="about" style={{ padding:'96px 5%', background:'linear-gradient(135deg,#1C1410 0%,#2C1F0A 100%)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 60% 60% at 80% 50%,rgba(200,155,60,.08) 0%,transparent 60%)', pointerEvents:'none' }} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'72px', alignItems:'center', maxWidth:'1100px', margin:'0 auto', position:'relative', zIndex:1 }}>
          <div style={{ position:'relative' }}>
            <div className="gold-glow" style={{ borderRadius:'24px', overflow:'hidden', aspectRatio:'3/4', position:'relative', background:'#2C2010' }}>
              <Image src="/images/founder-about.jpg" alt="Leonilla Addeh — AI architect" fill style={{ objectFit:'cover', objectPosition:'50% 5%' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,rgba(28,20,16,.5) 0%,transparent 40%)' }} />
            </div>
            <div className="glass-warm" style={{ position:'absolute', top:'20px', right:'-16px', borderRadius:'12px', padding:'10px 16px', fontSize:'12px', fontWeight:600, color:'#1C1410' }}>
              RN, MSN-Ed <span style={{ color:'#C89B3C' }}>· AI Architect</span>
            </div>
            <div style={{ position:'absolute', bottom:'-16px', left:'-16px', background:'linear-gradient(135deg,#C89B3C,#E8C26A)', color:'#1C1410', borderRadius:'14px', padding:'14px 20px', boxShadow:'0 0 30px rgba(200,155,60,.3)' }}>
              <div style={{ fontSize:'10px', fontWeight:700, opacity:.7, marginBottom:'2px', textTransform:'uppercase', letterSpacing:'.08em' }}>Experience</div>
              <div className="hl" style={{ fontSize:'24px', fontWeight:700, lineHeight:1 }}>27 Years</div>
            </div>
          </div>
          <div>
            <p style={{ fontSize:'11px', fontWeight:600, color:'#C89B3C', textTransform:'uppercase', letterSpacing:'.2em', marginBottom:'12px' }}>The Founder</p>
            <h2 className="hl" style={{ fontSize:'clamp(28px,3.5vw,44px)', fontWeight:700, color:'#F8F6F2', marginBottom:'24px', lineHeight:1.1 }}>
              Leonilla Addeh<br /><span style={{ color:'#C89B3C', fontStyle:'italic' }}>Nurse. Innovator. Builder.</span>
            </h2>
            <div style={{ background:'rgba(200,155,60,.08)', borderRadius:'12px', padding:'16px 20px', marginBottom:'20px', borderLeft:'3px solid #C89B3C' }}>
              <p style={{ fontSize:'16px', color:'rgba(248,246,242,.75)', fontStyle:'italic', lineHeight:1.6, margin:0, fontFamily:'Georgia,serif' }}>
                &ldquo;I spent 27 years as a nurse. I watched brilliant people get left behind by technology. So I built the tools I wished existed.&rdquo;
              </p>
            </div>
            <p style={{ fontSize:'15px', color:'rgba(248,246,242,.55)', lineHeight:1.8, marginBottom:'32px', fontWeight:300 }}>
              27 years of nursing experience across field nursing, auditing, surveying, and healthcare leadership — now powering an AI ecosystem that serves nurses, entrepreneurs, moms, and everyday professionals. Faith-aligned. Purpose-driven. Built for legacy.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
              {[['🏥','Clinical AI','Healthcare documentation & operations'],['⚡','Automation','Workflows that work while you sleep'],['📚','Education','AI for non-tech professionals'],['✝️','Faith-Aligned','Purpose over profit, always']].map(([icon,label,sub]) => (
                <div key={label} style={{ background:'rgba(200,155,60,.06)', borderRadius:'10px', padding:'14px 16px', border:'1px solid rgba(200,155,60,.15)' }}>
                  <div style={{ fontSize:'16px', marginBottom:'6px' }}>{icon}</div>
                  <div style={{ fontSize:'13px', fontWeight:600, color:'#F8F6F2' }}>{label}</div>
                  <div style={{ fontSize:'11px', color:'rgba(248,246,242,.35)', marginTop:'2px' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL */}
      <section id="community" style={{ background:'#F5EFE0', padding:'96px 5%', textAlign:'center' }}>
        <p style={{ fontSize:'11px', fontWeight:600, color:'#C89B3C', textTransform:'uppercase', letterSpacing:'.2em', marginBottom:'12px' }}>Weekly AI Intelligence</p>
        <h2 className="hl" style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:700, color:'#1C1410', marginBottom:'16px' }}>
          Get Practical AI Tips<br /><span style={{ color:'#C89B3C', fontStyle:'italic' }}>Delivered Every Week</span>
        </h2>
        <p style={{ fontSize:'16px', color:'#6B5A4A', maxWidth:'480px', margin:'0 auto 40px', lineHeight:1.7, fontWeight:300 }}>
          Simple AI strategies that help you save time, work smarter, and grow — no tech background required.
        </p>
        <div style={{ display:'flex', maxWidth:'440px', margin:'0 auto', border:'1.5px solid rgba(200,155,60,.35)', borderRadius:'10px', overflow:'hidden', background:'#fff' }}>
          <input type="email" placeholder="Enter your email address" style={{ flex:1, padding:'14px 18px', background:'transparent', border:'none', outline:'none', color:'#1C1410', fontSize:'14px', fontFamily:'inherit' }} />
          <button style={{ background:'linear-gradient(135deg,#C89B3C,#E8C26A)', color:'#FDFAF4', border:'none', padding:'14px 24px', fontSize:'13px', fontWeight:700, cursor:'pointer', whiteSpace:'nowrap' }}>Subscribe Free</button>
        </div>
        <p style={{ fontSize:'12px', color:'#A09080', marginTop:'12px' }}>No spam. No fluff. Unsubscribe anytime.</p>
      </section>

      {/* CTA — Dark accent section */}
      <section style={{ background:'#1C1410', padding:'96px 5%', textAlign:'center' }}>
        <p style={{ fontSize:'11px', fontWeight:600, color:'#C89B3C', textTransform:'uppercase', letterSpacing:'.2em', marginBottom:'16px' }}>The Future Belongs to the AI-Ready</p>
        <h2 className="hl" style={{ fontSize:'clamp(32px,5vw,60px)', fontWeight:700, color:'#F8F6F2', marginBottom:'20px', lineHeight:1.05 }}>
          Build once.<br /><span style={{ color:'#C89B3C', fontStyle:'italic' }}>Scale forever.</span>
        </h2>
        <p style={{ fontSize:'18px', color:'rgba(248,246,242,.55)', maxWidth:'500px', margin:'0 auto 48px', lineHeight:1.7, fontWeight:300 }}>
          The AI revolution is here. Don&apos;t get left behind — get positioned to lead it.
        </p>
        <button style={{ background:'linear-gradient(135deg,#C89B3C,#E8C26A)', color:'#1C1410', border:'none', padding:'18px 52px', borderRadius:'10px', fontSize:'16px', fontWeight:700, cursor:'pointer', letterSpacing:'.04em', boxShadow:'0 6px 32px rgba(200,155,60,.3)' }}>
          Start Your AI Journey Free →
        </button>
        <p style={{ fontSize:'13px', color:'rgba(248,246,242,.3)', marginTop:'20px', fontWeight:300 }}>Faith-aligned · Built by a nurse · For real people</p>
      </section>

      <footer style={{ background:'#150F0A', padding:'36px 5%', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px', borderTop:'1px solid rgba(200,155,60,.12)' }}>
        <div className="hl" style={{ fontSize:'16px', fontWeight:700, color:'#F8F6F2' }}>Limitless Intelligence Systems™</div>
        <div style={{ fontSize:'12px', color:'rgba(248,246,242,.2)', letterSpacing:'.04em' }}>Empowering Human Potential Through Practical AI · © 2026</div>
      </footer>
    </main>
  )
}
