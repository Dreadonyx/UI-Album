import { useState, useEffect, useCallback, useRef } from 'react';

// ─── Categories ──────────────────────────────────────────────
const CATEGORIES = [
  'All', 'Navigation', 'Hero', 'Dashboard', 'Forms', 'Landing', 'Cards'
];

// ─── Live Mini Components ────────────────────────────────────

function NeonNavbar() {
  const [active, setActive] = useState(1);
  const links = ['Home', 'Projects', 'About', 'Contact'];
  return (
    <div style={{
      width: '600px', height: '360px',
      background: 'linear-gradient(180deg, #0a0a1a 0%, #0d0f1a 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'flex-start', padding: '0',
      fontFamily: "'DM Mono', monospace",
    }}>
      <nav style={{
        width: '100%', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '20px 32px',
        borderBottom: '1px solid rgba(0,255,136,0.08)',
        background: 'rgba(0,0,0,0.3)',
      }}>
        <div style={{
          fontSize: '18px', fontWeight: 700,
          fontFamily: "'Playfair Display', serif",
          color: '#00ff88',
          textShadow: '0 0 20px rgba(0,255,136,0.5)',
        }}>◈ NEON</div>
        <div style={{ display: 'flex', gap: '8px' }}>
          {links.map((l, i) => (
            <button key={l} onClick={(e) => { e.stopPropagation(); setActive(i); }} style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: '12px', padding: '8px 18px',
              background: active === i ? 'rgba(0,255,136,0.12)' : 'transparent',
              border: active === i ? '1px solid rgba(0,255,136,0.4)' : '1px solid transparent',
              borderRadius: '6px', color: active === i ? '#00ff88' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: active === i ? '0 0 15px rgba(0,255,136,0.15)' : 'none',
              position: 'relative',
            }}>
              {l}
              {active === i && <div style={{
                position: 'absolute', bottom: '-1px', left: '20%', right: '20%',
                height: '2px', background: '#00ff88',
                boxShadow: '0 0 10px #00ff88, 0 0 20px rgba(0,255,136,0.3)',
                borderRadius: '2px',
              }} />}
            </button>
          ))}
        </div>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00ff88 0%, #00aa55 100%)',
          boxShadow: '0 0 15px rgba(0,255,136,0.3)',
        }} />
      </nav>
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '12px',
      }}>
        <div style={{
          fontSize: '32px', fontFamily: "'Playfair Display', serif",
          fontWeight: 700, color: '#f0eef5',
        }}>{links[active]}</div>
        <div style={{
          width: '60px', height: '3px', background: '#00ff88',
          borderRadius: '3px', boxShadow: '0 0 12px #00ff88',
        }} />
        <div style={{
          fontSize: '11px', color: 'rgba(255,255,255,0.25)',
          letterSpacing: '3px', textTransform: 'uppercase',
        }}>Active Section</div>
      </div>
    </div>
  );
}

function GlassHero() {
  return (
    <div style={{
      width: '600px', height: '360px',
      background: 'linear-gradient(135deg, #1a0533 0%, #0d1b3e 40%, #0a2540 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      fontFamily: "'Lora', serif",
    }}>
      {/* Gradient blobs */}
      <div style={{
        position: 'absolute', width: '200px', height: '200px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.5) 0%, transparent 70%)',
        top: '-40px', right: '-20px', filter: 'blur(30px)',
      }} />
      <div style={{
        position: 'absolute', width: '160px', height: '160px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)',
        bottom: '-30px', left: '10%', filter: 'blur(25px)',
      }} />
      <div style={{
        position: 'absolute', width: '120px', height: '120px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
        top: '30%', left: '-20px', filter: 'blur(20px)',
      }} />
      {/* Glass card */}
      <div style={{
        position: 'relative', zIndex: 1,
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '20px', padding: '36px 40px',
        textAlign: 'center', maxWidth: '420px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: '10px',
          textTransform: 'uppercase', letterSpacing: '3px',
          color: 'rgba(139,92,246,0.8)', marginBottom: '12px',
        }}>Introducing</div>
        <h2 style={{
          fontFamily: "'Playfair Display', serif", fontSize: '28px',
          fontWeight: 700, color: '#ffffff', lineHeight: 1.2,
          marginBottom: '12px',
        }}>The Future of<br/>Design Systems</h2>
        <p style={{
          fontSize: '13px', color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.6, marginBottom: '20px',
        }}>
          Craft beautiful interfaces with glassmorphic components that adapt to any context.
        </p>
        <button style={{
          fontFamily: "'DM Mono', monospace", fontSize: '11px',
          padding: '12px 32px', borderRadius: '10px',
          background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
          color: '#fff', border: 'none', cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(139,92,246,0.4)',
          letterSpacing: '1px', textTransform: 'uppercase',
        }}>Get Started →</button>
      </div>
    </div>
  );
}

function DashboardWidget() {
  const data = [65, 40, 80, 55, 90, 72, 48];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const maxVal = Math.max(...data);
  return (
    <div style={{
      width: '600px', height: '360px',
      background: 'linear-gradient(135deg, #0a0f1a 0%, #0d1420 100%)',
      padding: '28px 32px',
      fontFamily: "'DM Mono', monospace",
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Top stats row */}
      <div style={{
        display: 'flex', gap: '16px', marginBottom: '24px',
      }}>
        {[
          { label: 'Revenue', val: '$12.4k', change: '+14%', color: '#10b981' },
          { label: 'Users', val: '2,847', change: '+8%', color: '#8b5cf6' },
          { label: 'Orders', val: '384', change: '+22%', color: '#f59e0b' },
        ].map(s => (
          <div key={s.label} style={{
            flex: 1, background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '12px', padding: '16px',
          }}>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.3)', marginBottom: '6px',
              textTransform: 'uppercase', letterSpacing: '1px' }}>{s.label}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <span style={{ fontSize: '20px', fontWeight: 600, color: '#f0eef5' }}>{s.val}</span>
              <span style={{ fontSize: '10px', color: s.color }}>{s.change}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Chart label */}
      <div style={{
        fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '14px',
        textTransform: 'uppercase', letterSpacing: '1px',
      }}>Weekly Performance</div>
      {/* Bar chart */}
      <div style={{
        flex: 1, display: 'flex', alignItems: 'flex-end',
        gap: '12px', paddingBottom: '24px', position: 'relative',
      }}>
        {data.map((v, i) => (
          <div key={i} style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '8px',
          }}>
            <div style={{
              width: '100%', borderRadius: '6px 6px 2px 2px',
              height: `${(v / maxVal) * 140}px`,
              background: `linear-gradient(180deg, ${v === maxVal ? '#10b981' : '#8b5cf6'} 0%, ${v === maxVal ? 'rgba(16,185,129,0.3)' : 'rgba(139,92,246,0.3)'} 100%)`,
              boxShadow: v === maxVal ? '0 0 15px rgba(16,185,129,0.2)' : 'none',
              transition: 'height 0.6s cubic-bezier(0.16,1,0.3,1)',
              animation: `fadeSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s both`,
            }} />
            <span style={{
              fontSize: '9px', color: 'rgba(255,255,255,0.25)',
              textTransform: 'uppercase',
            }}>{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NeumorphicForm() {
  const [focused, setFocused] = useState(null);
  const [values, setValues] = useState({ name: '', email: '', msg: '' });
  const fields = [
    { key: 'name', label: 'Full Name', type: 'text' },
    { key: 'email', label: 'Email Address', type: 'email' },
    { key: 'msg', label: 'Message', type: 'textarea' },
  ];
  return (
    <div style={{
      width: '600px', height: '360px',
      background: '#1a1a2e',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Lora', serif",
    }}>
      <div style={{
        width: '380px',
        background: '#1a1a2e',
        borderRadius: '20px', padding: '32px',
        boxShadow: '8px 8px 20px #111125, -8px -8px 20px #232340',
      }}>
        <h3 style={{
          fontFamily: "'Playfair Display', serif", fontSize: '20px',
          fontWeight: 700, color: '#f0eef5', marginBottom: '24px',
          textAlign: 'center',
        }}>Get in Touch</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {fields.map(f => (
            <div key={f.key} style={{ position: 'relative' }}>
              <label style={{
                position: 'absolute',
                left: '16px',
                top: focused === f.key || values[f.key] ? '6px' : f.type === 'textarea' ? '14px' : '14px',
                fontSize: focused === f.key || values[f.key] ? '9px' : '12px',
                fontFamily: "'DM Mono', monospace",
                color: focused === f.key ? '#ec4899' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.25s ease',
                pointerEvents: 'none',
                letterSpacing: '0.5px',
              }}>{f.label}</label>
              {f.type === 'textarea' ? (
                <textarea
                  onClick={e => e.stopPropagation()}
                  onFocus={() => setFocused(f.key)}
                  onBlur={() => setFocused(null)}
                  onChange={e => { e.stopPropagation(); setValues(v => ({ ...v, [f.key]: e.target.value })); }}
                  value={values[f.key]}
                  style={{
                    width: '100%', height: '60px', resize: 'none',
                    background: 'transparent',
                    border: 'none', borderBottom: `2px solid ${focused === f.key ? '#ec4899' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '8px',
                    padding: '22px 16px 8px',
                    fontSize: '13px', fontFamily: "'Lora', serif",
                    color: '#f0eef5', outline: 'none',
                    boxShadow: focused === f.key
                      ? 'inset 3px 3px 8px #111125, inset -3px -3px 8px #232340, 0 0 15px rgba(236,72,153,0.1)'
                      : 'inset 3px 3px 8px #111125, inset -3px -3px 8px #232340',
                    transition: 'all 0.3s ease',
                  }}
                />
              ) : (
                <input
                  type={f.type}
                  onClick={e => e.stopPropagation()}
                  onFocus={() => setFocused(f.key)}
                  onBlur={() => setFocused(null)}
                  onChange={e => { e.stopPropagation(); setValues(v => ({ ...v, [f.key]: e.target.value })); }}
                  value={values[f.key]}
                  style={{
                    width: '100%', height: '44px',
                    background: 'transparent',
                    border: 'none', borderBottom: `2px solid ${focused === f.key ? '#ec4899' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '8px',
                    padding: '18px 16px 4px',
                    fontSize: '13px', fontFamily: "'Lora', serif",
                    color: '#f0eef5', outline: 'none',
                    boxShadow: focused === f.key
                      ? 'inset 3px 3px 8px #111125, inset -3px -3px 8px #232340, 0 0 15px rgba(236,72,153,0.1)'
                      : 'inset 3px 3px 8px #111125, inset -3px -3px 8px #232340',
                    transition: 'all 0.3s ease',
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <button style={{
          marginTop: '20px', width: '100%',
          fontFamily: "'DM Mono', monospace", fontSize: '11px',
          padding: '12px', borderRadius: '10px', border: 'none',
          background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
          color: '#fff', cursor: 'pointer', letterSpacing: '1.5px',
          textTransform: 'uppercase',
          boxShadow: '4px 4px 12px #111125, -4px -4px 12px #232340, 0 4px 20px rgba(236,72,153,0.3)',
        }}>Send Message</button>
      </div>
    </div>
  );
}

function BrutalistLanding() {
  return (
    <div style={{
      width: '600px', height: '360px',
      background: '#f5e642',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between', padding: '0',
      fontFamily: "'DM Mono', monospace",
      overflow: 'hidden', position: 'relative',
    }}>
      {/* Top bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 28px',
        borderBottom: '3px solid #000',
      }}>
        <span style={{ fontSize: '14px', fontWeight: 700, color: '#000' }}>BRUT.CO</span>
        <div style={{ display: 'flex', gap: '16px' }}>
          {['Work', 'Info', 'Contact'].map(l => (
            <span key={l} style={{
              fontSize: '11px', color: '#000', textDecoration: 'underline',
              textUnderlineOffset: '3px', cursor: 'pointer',
            }}>{l}</span>
          ))}
        </div>
      </div>
      {/* Main typographic area */}
      <div style={{ padding: '20px 28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{
          fontSize: '48px', fontWeight: 900,
          fontFamily: "'Playfair Display', serif",
          color: '#000', lineHeight: 0.95,
          letterSpacing: '-2px',
          textTransform: 'uppercase',
        }}>
          Design<br/>Without<br/>Rules.
        </div>
        <div style={{
          marginTop: '16px', fontSize: '11px', color: 'rgba(0,0,0,0.5)',
          maxWidth: '280px', lineHeight: 1.5,
        }}>
          Break conventions. Embrace chaos. Build what matters with raw, unfiltered intention.
        </div>
      </div>
      {/* Bottom bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '14px 28px',
        borderTop: '3px solid #000',
        background: '#000', color: '#f5e642',
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>Est. 2024</span>
        <button style={{
          fontFamily: "'DM Mono', monospace", fontSize: '10px',
          padding: '8px 20px', border: '2px solid #f5e642',
          background: 'transparent', color: '#f5e642',
          cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase',
        }}>Enter ↗</button>
      </div>
    </div>
  );
}

function EditorialGrid() {
  return (
    <div style={{
      width: '600px', height: '360px',
      background: '#0c0c14',
      padding: '24px', display: 'flex', gap: '16px',
      fontFamily: "'Lora', serif",
    }}>
      {/* Left large card */}
      <div style={{
        flex: 1.2, background: 'linear-gradient(180deg, #1a1a2e 0%, #12121f 100%)',
        borderRadius: '14px', padding: '24px',
        border: '1px solid rgba(255,255,255,0.06)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{
            fontFamily: "'DM Mono', monospace", fontSize: '9px',
            textTransform: 'uppercase', letterSpacing: '2px',
            color: 'rgba(244,114,182,0.7)', marginBottom: '10px',
          }}>Featured Essay</div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif", fontSize: '20px',
            fontWeight: 700, color: '#f0eef5', lineHeight: 1.25,
            marginBottom: '12px',
          }}>The Art of<br/>Digital Minimalism</h3>
          <p style={{
            fontSize: '11px', color: 'rgba(255,255,255,0.3)',
            lineHeight: 1.6, fontStyle: 'italic',
          }}>
            "Less is not more. Less is the foundation<br/>upon which more becomes possible."
          </p>
        </div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
          }} />
          <div>
            <div style={{ fontSize: '11px', color: '#f0eef5', fontWeight: 500 }}>Elena Vasquez</div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.25)',
            }}>12 min read</div>
          </div>
        </div>
      </div>
      {/* Right column */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column', gap: '12px',
      }}>
        {[
          { cat: 'Typography', title: 'Serif Revival in Web Design', author: 'M. Chen', color: '#a78bfa' },
          { cat: 'Layout', title: 'Asymmetric Grids That Work', author: 'J. Park', color: '#06b6d4' },
          { cat: 'Motion', title: 'Reduce, Refine, Animate', author: 'S. Ali', color: '#f59e0b' },
        ].map((item, i) => (
          <div key={i} style={{
            flex: 1, background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '12px', padding: '16px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
          }}>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '8px',
              textTransform: 'uppercase', letterSpacing: '1.5px',
              color: item.color, opacity: 0.7, marginBottom: '6px',
            }}>{item.cat}</div>
            <div style={{
              fontFamily: "'Playfair Display', serif", fontSize: '13px',
              fontWeight: 600, color: '#e0ddd8', lineHeight: 1.3,
              marginBottom: '6px',
            }}>{item.title}</div>
            <div style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.2)',
            }}>{item.author}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Seed Data with Component References ─────────────────────
const SEED_CARDS = [
  {
    id: 1,
    title: 'Neon Navigation Bar',
    category: 'Navigation',
    accent: '#00ff88',
    palette: ['#00ff88', '#0a0a1a', '#00aa55', '#0d0f1a', '#1a2a1a'],
    tags: ['Navbar', 'Glow', 'Interactive'],
    component: NeonNavbar,
    code: `.neon-nav {
  background: rgba(0,0,0,0.3);
  border-bottom: 1px solid rgba(0,255,136,0.08);
  padding: 20px 32px;
}
.neon-nav .active-link {
  color: #00ff88;
  background: rgba(0,255,136,0.12);
  border: 1px solid rgba(0,255,136,0.4);
  box-shadow: 0 0 15px rgba(0,255,136,0.15);
}
.neon-nav .indicator {
  height: 2px;
  background: #00ff88;
  box-shadow: 0 0 10px #00ff88;
}`,
  },
  {
    id: 2,
    title: 'Glassmorphism Hero',
    category: 'Hero',
    accent: '#8b5cf6',
    palette: ['#8b5cf6', '#06b6d4', '#ec4899', '#1a0533', '#0d1b3e'],
    tags: ['Glass', 'Backdrop-blur', 'CTA'],
    component: GlassHero,
    code: `.glass-hero {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}
.glass-cta {
  background: linear-gradient(135deg, #8b5cf6, #6d28d9);
  box-shadow: 0 4px 20px rgba(139,92,246,0.4);
  border-radius: 10px;
}`,
  },
  {
    id: 3,
    title: 'Dashboard Stat Widget',
    category: 'Dashboard',
    accent: '#10b981',
    palette: ['#10b981', '#8b5cf6', '#f59e0b', '#0a0f1a', '#0d1420'],
    tags: ['Charts', 'KPI', 'Animated Bars'],
    component: DashboardWidget,
    code: `.stat-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 12px;
}
.bar-chart .bar {
  background: linear-gradient(180deg, #8b5cf6, rgba(139,92,246,0.3));
  border-radius: 6px 6px 2px 2px;
  transition: height 0.6s cubic-bezier(0.16,1,0.3,1);
}
.bar-chart .bar.max {
  background: linear-gradient(180deg, #10b981, rgba(16,185,129,0.3));
  box-shadow: 0 0 15px rgba(16,185,129,0.2);
}`,
  },
  {
    id: 4,
    title: 'Neumorphic Form',
    category: 'Forms',
    accent: '#ec4899',
    palette: ['#ec4899', '#be185d', '#1a1a2e', '#232340', '#111125'],
    tags: ['Neumorphism', 'Float Labels', 'Soft UI'],
    component: NeumorphicForm,
    code: `.neu-input {
  background: transparent;
  border-bottom: 2px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  box-shadow: inset 3px 3px 8px #111125,
              inset -3px -3px 8px #232340;
}
.neu-input:focus {
  border-color: #ec4899;
  box-shadow: inset 3px 3px 8px #111125,
              inset -3px -3px 8px #232340,
              0 0 15px rgba(236,72,153,0.1);
}
.neu-button {
  background: linear-gradient(135deg, #ec4899, #be185d);
  box-shadow: 4px 4px 12px #111125,
              -4px -4px 12px #232340;
}`,
  },
  {
    id: 5,
    title: 'Brutalist Landing',
    category: 'Landing',
    accent: '#f5e642',
    palette: ['#f5e642', '#000000', '#ffffff', '#333333', '#f5e642'],
    tags: ['Brutalism', 'Bold Type', 'Yellow'],
    component: BrutalistLanding,
    code: `.brut-hero {
  background: #f5e642;
  font-family: 'Playfair Display', serif;
}
.brut-heading {
  font-size: 48px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -2px;
  line-height: 0.95;
  color: #000;
}
.brut-footer {
  background: #000;
  color: #f5e642;
  border-top: 3px solid #000;
}`,
  },
  {
    id: 6,
    title: 'Editorial Magazine Grid',
    category: 'Cards',
    accent: '#f472b6',
    palette: ['#f472b6', '#a78bfa', '#06b6d4', '#f59e0b', '#0c0c14'],
    tags: ['Serif', 'Pull Quotes', 'Grid'],
    component: EditorialGrid,
    code: `.editorial-card {
  background: linear-gradient(180deg, #1a1a2e, #12121f);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 14px;
}
.editorial-quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: rgba(255,255,255,0.3);
}
.editorial-meta {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
}`,
  },
];

// ─── Toast Component ─────────────────────────────────────────
function Toast({ message, visible, exiting }) {
  if (!visible && !exiting) return null;
  return (
    <div style={{
      position: 'fixed', bottom: '32px', left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, rgba(139,92,246,0.9), rgba(99,60,200,0.95))',
      color: '#fff', fontFamily: "'DM Mono', monospace",
      fontSize: '13px', fontWeight: 500, padding: '12px 28px',
      borderRadius: '40px', zIndex: 9999,
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(139,92,246,0.4)',
      boxShadow: '0 8px 32px rgba(139,92,246,0.3)',
      letterSpacing: '0.5px',
      animation: exiting
        ? 'toastSlideOut 0.3s ease-in forwards'
        : 'toastSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
    }}>
      ✓ {message}
    </div>
  );
}

// ─── Vinyl Disc Icon ─────────────────────────────────────────
function VinylDisc() {
  return (
    <div style={{
      width: '56px', height: '56px', borderRadius: '50%',
      background: 'conic-gradient(from 0deg, #1a1a2e, #8b5cf6, #1a1a2e, #6d28d9, #1a1a2e, #8b5cf6, #1a1a2e)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'spinVinyl 4s linear infinite',
      boxShadow: '0 0 20px rgba(139,92,246,0.25)',
      flexShrink: 0,
    }}>
      <div style={{
        width: '16px', height: '16px', borderRadius: '50%',
        background: '#07070f',
        border: '2px solid rgba(139,92,246,0.5)',
      }} />
    </div>
  );
}

// ─── Stat Card ───────────────────────────────────────────────
function StatCard({ count }) {
  return (
    <div style={{
      background: 'rgba(139,92,246,0.08)',
      border: '1px solid rgba(139,92,246,0.2)',
      borderRadius: '14px', padding: '10px 22px',
      display: 'flex', alignItems: 'center', gap: '10px',
      animation: 'pulseGlow 3s ease-in-out infinite',
    }}>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: '24px',
        fontWeight: 500, color: '#a78bfa', lineHeight: 1,
      }}>{count}</span>
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: '11px',
        color: 'rgba(167,139,250,0.6)', textTransform: 'uppercase',
        letterSpacing: '1.5px', lineHeight: 1.2,
      }}>Components<br/>Curated</span>
    </div>
  );
}

// ─── Category Filter ─────────────────────────────────────────
function CategoryFilter({ active, onChange }) {
  return (
    <div style={{
      display: 'flex', gap: '10px', overflowX: 'auto',
      padding: '4px 0 16px 0', scrollbarWidth: 'none',
    }}>
      {CATEGORIES.map(cat => {
        const isActive = cat === active;
        return (
          <button key={cat} onClick={() => onChange(cat)} style={{
            flexShrink: 0, fontFamily: "'DM Mono', monospace",
            fontSize: '12px', fontWeight: isActive ? 500 : 400,
            letterSpacing: '0.5px', padding: '8px 20px',
            borderRadius: '40px',
            border: isActive ? '1px solid rgba(139,92,246,0.6)' : '1px solid rgba(255,255,255,0.08)',
            background: isActive
              ? 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,60,200,0.15))'
              : 'rgba(255,255,255,0.03)',
            color: isActive ? '#c4b5fd' : 'rgba(255,255,255,0.4)',
            cursor: 'pointer', transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }
            }}
          >{cat}</button>
        );
      })}
    </div>
  );
}

// ─── Live Preview Card ───────────────────────────────────────
function LiveFlipCard({ card, index, onCopy }) {
  const [flipped, setFlipped] = useState(false);
  const PreviewComponent = card.component;

  return (
    <div
      style={{
        perspective: '1200px', width: '100%', height: '420px',
        cursor: 'pointer',
        animation: `fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s both`,
      }}
      onClick={() => setFlipped(f => !f)}
    >
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>
        {/* ── Front Face: Live Component Preview ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
          background: '#0a0a14',
          display: 'flex', flexDirection: 'column',
        }}>
          {/* Scaled preview container */}
          <div style={{
            flex: 1, overflow: 'hidden', position: 'relative',
            borderRadius: '20px 20px 0 0',
          }}>
            <div style={{
              width: '600px', height: '360px',
              transform: 'scale(0.58)',
              transformOrigin: 'top left',
              pointerEvents: flipped ? 'none' : 'auto',
            }}>
              <PreviewComponent />
            </div>
          </div>
          {/* Bottom bar with title */}
          <div style={{
            padding: '14px 20px',
            borderTop: `1px solid ${card.accent}20`,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '14px', fontWeight: 600, color: '#f0eef5',
            }}>{card.title}</span>
            <span style={{
              fontFamily: "'DM Mono', monospace", fontSize: '9px',
              color: 'rgba(255,255,255,0.2)', letterSpacing: '1px',
              textTransform: 'uppercase',
            }}>Flip →</span>
          </div>
        </div>

        {/* ── Back Face: Details ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg, #0d0d1a, #111128)',
          borderRadius: '20px',
          border: `1px solid ${card.accent}40`,
          padding: '28px',
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: `inset 0 0 30px ${card.accent}08, 0 0 30px ${card.accent}10`,
        }}>
          {/* Accent border glow */}
          <div style={{
            position: 'absolute', inset: '-1px', borderRadius: '20px',
            background: `linear-gradient(135deg, ${card.accent}20, transparent, ${card.accent}10)`,
            pointerEvents: 'none', zIndex: 0,
          }} />

          <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Title + Category */}
            <div style={{ marginBottom: '16px' }}>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: '10px',
                textTransform: 'uppercase', letterSpacing: '2px',
                color: card.accent, background: `${card.accent}15`,
                padding: '4px 12px', borderRadius: '20px',
                border: `1px solid ${card.accent}30`,
              }}>{card.category}</span>
              <h4 style={{
                fontFamily: "'Playfair Display', serif", fontSize: '22px',
                fontWeight: 700, color: '#f0eef5', lineHeight: 1.2,
                marginTop: '12px',
              }}>{card.title}</h4>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
              {card.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: "'DM Mono', monospace", fontSize: '10px',
                  color: 'rgba(255,255,255,0.35)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '4px 10px', borderRadius: '20px',
                }}>{tag}</span>
              ))}
            </div>

            {/* Color Palette */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                fontFamily: "'DM Mono', monospace", fontSize: '9px',
                color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase',
                letterSpacing: '1.5px', marginBottom: '8px',
              }}>Color Palette</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                {card.palette.map((c, i) => (
                  <div key={i} style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: c,
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: `0 2px 8px ${c}30`,
                  }} />
                ))}
              </div>
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Copy Button */}
            <button
              onClick={e => {
                e.stopPropagation();
                onCopy(card.code);
              }}
              style={{
                alignSelf: 'stretch',
                fontFamily: "'DM Mono', monospace", fontSize: '11px',
                fontWeight: 500, letterSpacing: '1px',
                textTransform: 'uppercase',
                color: card.accent,
                background: `${card.accent}12`,
                border: `1px solid ${card.accent}35`,
                borderRadius: '10px', padding: '12px 22px',
                cursor: 'pointer', transition: 'all 0.25s ease',
                textAlign: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${card.accent}25`;
                e.currentTarget.style.boxShadow = `0 0 20px ${card.accent}20`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${card.accent}12`;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              ⎘ Copy CSS / Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [toast, setToast] = useState({ visible: false, exiting: false, message: '' });

  const filtered = activeCategory === 'All'
    ? SEED_CARDS
    : SEED_CARDS.filter(c => c.category === activeCategory);

  const handleCopy = useCallback((text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast({ visible: true, exiting: false, message: 'Copied to clipboard' });
      setTimeout(() => {
        setToast(t => ({ ...t, exiting: true }));
        setTimeout(() => setToast({ visible: false, exiting: false, message: '' }), 300);
      }, 2000);
    });
  }, []);

  return (
    <div style={{
      position: 'relative', zIndex: 1,
      minHeight: '100vh', padding: '0 clamp(20px, 4vw, 64px)',
    }}>
      {/* Radial Gradient Mesh BG */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 80% 60% at 20% 10%, rgba(99,60,200,0.12) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 30%, rgba(139,92,246,0.08) 0%, transparent 55%),
          radial-gradient(ellipse 70% 40% at 50% 90%, rgba(88,28,135,0.1) 0%, transparent 50%),
          radial-gradient(ellipse 50% 50% at 10% 60%, rgba(109,40,217,0.06) 0%, transparent 50%)
        `,
      }} />

      {/* Header */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '20px',
        paddingTop: 'clamp(32px, 5vh, 56px)', paddingBottom: '24px',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        marginBottom: '28px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <VinylDisc />
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800, color: '#f0eef5',
              lineHeight: 1.1, letterSpacing: '-1px',
            }}>UI Album</h1>
            <p style={{
              fontFamily: "'DM Mono', monospace", fontSize: '11px',
              color: 'rgba(255,255,255,0.25)', letterSpacing: '2px',
              textTransform: 'uppercase', marginTop: '4px',
            }}>Live Component Showcase</p>
          </div>
        </div>
        <StatCard count={filtered.length} />
      </header>

      {/* Category Filter */}
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      {/* Card Grid */}
      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '24px', paddingBottom: '64px', paddingTop: '12px',
      }}>
        {filtered.map((card, i) => (
          <LiveFlipCard
            key={`${activeCategory}-${card.id}`}
            card={card} index={i} onCopy={handleCopy}
          />
        ))}
        {filtered.length === 0 && (
          <div style={{
            gridColumn: '1 / -1', textAlign: 'center', padding: '80px 20px',
          }}>
            <p style={{
              fontFamily: "'Playfair Display', serif", fontSize: '22px',
              color: 'rgba(255,255,255,0.2)', fontStyle: 'italic',
            }}>No components in this category yet.</p>
          </div>
        )}
      </main>

      {/* Toast */}
      <Toast message={toast.message} visible={toast.visible} exiting={toast.exiting} />
    </div>
  );
}
