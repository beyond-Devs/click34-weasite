'use client'
import React, { useEffect, useRef } from 'react'
import { ArrowRight, TrendingUp, BarChart2, Globe } from 'lucide-react'
import { AngolaMap } from '../ui/AngolaMap';

/* ─── Brand palette ─────────────────────────────────────────────── */
const C = {
  navy:    '#151F59',
  navyDk:  '#161F64',
  amber:   '#E07B39',
  ink:     '#0F1623',
  muted:   '#5C6880',
  paper:   '#F6F7FB',
  white:   '#FFFFFF',
  gridLine:'rgba(21,31,89,0.06)',
}

/* ─── Network canvas animation ──────────────────────────────────── */
interface Particle {
  x: number; y: number
  vx: number; vy: number
  r: number
  color: string
}

function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    let W = 0, H = 0

    const COLORS = ['#151F59', '#161F64', '#1a2680', '#2230a0']
    const COUNT  = 72
    const CONNECT_DIST = 160
    const particles: Particle[] = []

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          r: Math.random() < 0.18 ? 4.5 : Math.random() < 0.5 ? 2.8 : 1.8,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Update positions
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = W + 20
        if (p.x > W + 20) p.x = -20
        if (p.y < -20) p.y = H + 20
        if (p.y > H + 20) p.y = -20
      }

      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.28
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(21,31,89,${alpha})`
            ctx.lineWidth = 0.9
            ctx.stroke()
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        const isLarge = p.r > 3
        // outer glow ring for large dots
        if (isLarge) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r + 5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(21,31,89,0.06)`
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = isLarge
          ? `rgba(21,31,89,0.55)`
          : `rgba(21,31,89,0.35)`
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const ro = new ResizeObserver(() => { resize(); init() })
    ro.observe(canvas)
    resize()
    init()
    draw()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        display: 'block',
      }}
    />
  )
}

/* ─── Sparkline helper ──────────────────────────────────────────── */
const spark = (vals: number[], w = 116, h = 28) => {
  const min = Math.min(...vals), max = Math.max(...vals)
  return vals.map((v, i) => {
    const x = (i / (vals.length - 1)) * w
    const y = h - ((v - min) / (max - min || 1)) * h
    return `${x},${y}`
  }).join(' ')
}

/* ─── Data ──────────────────────────────────────────────────────── */
const DATA_CARDS = [
  { label:'GDP Growth',   region:'Sub-Saharan', value:'+6.2%', trend:'+0.8%', up:true,  vals:[3,4,3.5,5,4.8,6,5.5,6.2]     },
  { label:'Active Users', region:'East Africa', value:'2.4M',  trend:'+12%',  up:true,  vals:[1,1.2,1.5,1.4,1.8,2,2.2,2.4] },
  { label:'Transactions', region:'West Africa', value:'18.7B', trend:'-1.2%', up:false, vals:[22,20,19,21,18,19,18.5,18.7]  },
]

const MAP_DOTS = [
  { cx:50, cy:32, r:4,   label:'Lagos'         },
  { cx:57, cy:55, r:3.5, label:'Nairobi'       },
  { cx:36, cy:42, r:3,   label:'Accra'         },
  { cx:55, cy:72, r:4,   label:'Johannesburg'  },
  { cx:42, cy:20, r:2.5, label:'Dakar'         },
  { cx:66, cy:45, r:3,   label:'Dar es Salaam' },
  { cx:46, cy:64, r:2.5, label:'Lusaka'        },
]

/* ─── Hero ──────────────────────────────────────────────────────── */
export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" style={{
      position:'relative', minHeight:'100vh',
      display:'flex', alignItems:'center',
      overflow:'hidden', background:C.paper,
      fontFamily:"'Sora',sans-serif",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        @keyframes fadeUp    { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:none} }
        @keyframes pulseRing { 0%{r:6;opacity:.55} 100%{r:26;opacity:0} }
        @keyframes blink     { 0%,100%{opacity:1}  50%{opacity:.2} }
        @keyframes lineGrow  { from{stroke-dashoffset:220} to{stroke-dashoffset:0} }
      `}</style>

      {/* ── Animated network background ── */}
      <NetworkCanvas />

      {/* ── Subtle top gradient wash so text is readable ── */}
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        background:`radial-gradient(ellipse 70% 60% at 28% 50%, rgba(246,247,251,0.72) 0%, transparent 80%)`,
      }}/>

      {/* ── Ambient glow ── */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
        <div style={{
          position:'absolute', top:'20%', left:'10%',
          width:460, height:340, borderRadius:'50%',
          background:`radial-gradient(circle, rgba(21,31,89,0.07) 0%, transparent 70%)`,
          filter:'blur(55px)',
        }}/>
        <div style={{
          position:'absolute', bottom:'15%', right:'30%',
          width:260, height:260, borderRadius:'50%',
          background:`radial-gradient(circle, ${C.amber}14 0%, transparent 70%)`,
          filter:'blur(50px)',
        }}/>
      </div>

      {/* ── Floating data cards ── */}
      <div
        className="sm:hidden flex flex-col gap-[10px]"
       style={{
        position:'absolute', right:'0%', top:'50%', transform:'translateY(-50%)',
        display:'flex', flexDirection:'column', gap:10, zIndex:5,
        pointerEvents:'none',
        width: 700,
        height: 'auto'
      }}>
        {/* {DATA_CARDS.map((c, i) => (
          <div key={c.label} style={{
            background:'rgba(255,255,255,0.92)',
            backdropFilter:'blur(14px)',
            border:`1px solid rgba(21,31,89,0.10)`,
            borderLeft:`3px solid ${c.up ? C.navy : C.amber}`,
            borderRadius:10, padding:'9px 13px', width:186,
            boxShadow:'0 3px 22px rgba(21,31,89,0.08)',
            animation:`fadeUp .45s ease ${0.85 + i * 0.14}s both`,
          }}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div>
                <div style={{fontSize:9.5,color:C.muted,textTransform:'uppercase',letterSpacing:'0.07em',fontFamily:"'DM Mono',monospace"}}>
                  {c.region}
                </div>
                <div style={{fontSize:11,color:C.ink,fontWeight:600,marginTop:1}}>{c.label}</div>
              </div>
              <div style={{fontSize:13,fontWeight:700,color:c.up?C.navy:C.amber,fontFamily:"'DM Mono',monospace"}}>
                {c.value}
              </div>
            </div>
            <svg width="116" height="26" style={{display:'block',margin:'7px 0 3px'}}>
              <polyline
                points={spark(c.vals)}
                fill="none" stroke={c.up ? C.navy : C.amber}
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{strokeDasharray:220, animation:`lineGrow 1.1s ease ${1.05+i*.14}s both`}}
              />
              <circle
                cx={(116/(c.vals.length-1))*(c.vals.length-1)}
                cy={26-((c.vals[c.vals.length-1]-Math.min(...c.vals))/(Math.max(...c.vals)-Math.min(...c.vals)||1))*26}
                r="2.5" fill={c.up?C.navy:C.amber}
              />
            </svg>
            <div style={{fontSize:9.5,color:c.up?C.navy:C.amber,fontFamily:"'DM Mono',monospace",fontWeight:500}}>
              {c.trend} this qtr
            </div>
          </div>
        ))}

        <div style={{
          background:'rgba(255,255,255,0.92)',
          backdropFilter:'blur(14px)',
          border:`1px solid rgba(21,31,89,0.10)`,
          borderRadius:10, padding:'10px 13px', width:186,
          boxShadow:'0 3px 22px rgba(21,31,89,0.08)',
          animation:`fadeUp .45s ease 1.28s both`, marginTop:2,
        }}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:7}}>
            <span style={{fontSize:11,fontWeight:600,color:C.ink}}>Live Coverage</span>
            <span style={{width:7,height:7,borderRadius:'50%',background:'#22c55e',display:'inline-block',animation:'blink 1.4s infinite'}}/>
          </div>
          <svg viewBox="0 0 100 82" style={{width:'100%'}}>
            <ellipse cx="47" cy="40" rx="27" ry="33" fill={`rgba(21,31,89,0.05)`} stroke={`rgba(21,31,89,0.18)`} strokeWidth="1.2"/>
            <path d="M70 28 Q81 33 78 44 Q73 47 68 41" fill={`rgba(21,31,89,0.05)`} stroke={`rgba(21,31,89,0.18)`} strokeWidth="1.2"/>
            <path d="M41 71 L47 81 L53 71" fill={`rgba(21,31,89,0.05)`} stroke={`rgba(21,31,89,0.18)`} strokeWidth="1.2"/>
            {MAP_DOTS.map((d, i) => (
              <React.Fragment key={d.label}>
                <circle cx={d.cx} cy={d.cy} r={d.r+7} fill="none" stroke={C.navy} strokeWidth="0.7" opacity="0.22"
                  style={{animation:`pulseRing 3s ${i*.44}s ease-out infinite`,transformOrigin:`${d.cx}px ${d.cy}px`}}/>
                <circle cx={d.cx} cy={d.cy} r={d.r} fill={C.navy} opacity="0.75"/>
              </React.Fragment>
            ))}
          </svg>
          <div style={{fontSize:10,color:C.muted,fontFamily:"'DM Mono',monospace",marginTop:4}}>
            {MAP_DOTS.length} active markets
          </div>
        </div> */}
        <AngolaMap />
      </div>

      {/* ── Main text — left-anchored ── */}
      <div style={{
        position:'relative', zIndex:10,
        maxWidth:640,
        paddingLeft:'clamp(28px, 6vw, 80px)',
        paddingRight:24,
        paddingTop:40,
        paddingBottom:40,
      }}>

        {/* Eyebrow */}
        {/* <div style={{animation:'fadeUp .5s ease .08s both', marginBottom:22}}>
          <span style={{
            display:'inline-flex', alignItems:'center', gap:7,
            background:`rgba(21,31,89,0.07)`, border:`1px solid rgba(21,31,89,0.16)`,
            borderRadius:100, padding:'5px 14px',
            fontSize:11, fontWeight:600, color:C.navy,
            letterSpacing:'0.07em', textTransform:'uppercase',
            fontFamily:"'DM Mono',monospace",
          }}>
            <span style={{width:7,height:7,borderRadius:'50%',background:C.navy,animation:'blink 1.4s infinite'}}/>
            Análise de Dados · África
          </span>
        </div> */}

        {/* H1 */}
        <h1 style={{
          margin:'0 0 18px',
          fontSize:'clamp(2.2rem, 4.6vw, 3.7rem)',
          fontWeight:800, lineHeight:1.09,
          color:C.ink, letterSpacing:'-0.03em',
          animation:'fadeUp .5s ease .22s both',
        }}>
          Transforme sua visão<br/>
          <span style={{
            background:`linear-gradient(118deg, ${C.navy} 20%, #2a3db0)`,
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          }}>em realidade</span>{' '}
          <span style={{color:C.amber}}></span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize:'1.02rem', color:C.muted, lineHeight:1.75,
          maxWidth:490, margin:'0 0 34px',
          animation:'fadeUp .5s ease .37s both', fontWeight:300,
        }}>
          Plataforma de analytics em tempo real cobrindo 54 mercados.
          Decisões mais inteligentes com dados estruturados, dashboards
          geo-contextuais e relatórios preditivos.
        </p>

        {/* CTAs */}
        <div style={{display:'flex',flexWrap:'wrap',gap:12,animation:'fadeUp .5s ease .52s both'}}>
          <button
            onClick={() => scrollTo('#services')}
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:C.navy, color:'#fff', border:'none', borderRadius:8,
              padding:'13px 26px', fontSize:'0.93rem', fontWeight:600,
              cursor:'pointer', boxShadow:`0 8px 26px rgba(21,31,89,0.30)`,
              transition:'transform .14s, box-shadow .14s',
            }}
            className='rounded-full'
            onMouseEnter={e => {
              const b = e.currentTarget as HTMLButtonElement
              b.style.transform='translateY(-2px)'
              b.style.boxShadow=`0 14px 34px rgba(21,31,89,0.42)`
            }}
            onMouseLeave={e => {
              const b = e.currentTarget as HTMLButtonElement
              b.style.transform='none'
              b.style.boxShadow=`0 8px 26px rgba(21,31,89,0.30)`
            }}
          >
            Ver Serviços <ArrowRight size={16}/>
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'transparent', color:C.ink,
              border:`1.5px solid rgba(21,31,89,0.20)`, borderRadius:8,
              padding:'13px 26px', fontSize:'0.93rem', fontWeight:600,
              cursor:'pointer', transition:'border-color .14s, color .14s',
            }}
            onMouseEnter={e => {
              const b = e.currentTarget as HTMLButtonElement
              b.style.borderColor=C.navy; b.style.color=C.navy
            }}
            onMouseLeave={e => {
              const b = e.currentTarget as HTMLButtonElement
              b.style.borderColor='rgba(21,31,89,0.20)'; b.style.color=C.ink
            }}
          >
            Fale Connosco
          </button>
        </div>

        {/* Stats */}
        <div style={{
          marginTop:50, display:'flex', flexWrap:'wrap', gap:'26px 42px',
          animation:'fadeUp .5s ease .67s both',
        }}>
          {[
            { icon:<TrendingUp size={14}/>, value:'54',    label:'Mercados cobertos'   },
            { icon:<BarChart2 size={14}/>,  value:'2.4M',  label:'Pontos de dados/dia' },
            { icon:<Globe size={14}/>,      value:'99.8%', label:'Uptime garantido'    },
          ].map(s => (
            <div key={s.label}>
              <div style={{
                display:'flex', alignItems:'center', gap:6,
                color:C.navy, fontFamily:"'DM Mono',monospace",
                fontSize:'1.5rem', fontWeight:700, letterSpacing:'-0.04em',
              }}>
                {s.icon}{s.value}
              </div>
              <div style={{fontSize:11,color:C.muted,marginTop:2,letterSpacing:'0.01em'}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}