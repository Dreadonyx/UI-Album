import { useState } from 'react';

const INK = '#1d1a16';
const TERRA = '#b4532a';

function Colonnade() {
  return (
    <svg viewBox="0 0 220 250" width="220" height="250" aria-hidden="true" style={{ display: 'block' }}>
      <rect width="220" height="250" fill="#e9d9bd" />
      <circle cx="160" cy="62" r="34" fill="#e3a44a" />
      <rect y="150" width="220" height="100" fill="#cf8a5c" />
      {[0, 1, 2, 3].map(i => {
        const x = 14 + i * 50;
        return (
          <g key={i}>
            <path d={`M${x} 250 V112 A22 22 0 0 1 ${x + 44} 112 V250 Z`} fill={TERRA} />
            <path d={`M${x + 8} 250 V116 A14 14 0 0 1 ${x + 36} 116 V250 Z`} fill="#3f2a1d" />
            <path d={`M${x + 8} 250 L${x + 36} 196 V250 Z`} fill="#6b4630" opacity="0.6" />
          </g>
        );
      })}
      <rect y="96" width="220" height="6" fill="#8f3f1f" />
      <rect y="232" width="220" height="18" fill="#8f3f1f" opacity="0.5" />
    </svg>
  );
}

export default function HeroEditorial() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div style={{ width: '600px', height: '400px', background: '#f3efe6', color: INK, fontFamily: "'Lora', serif", padding: '18px 28px', display: 'flex', flexDirection: 'column' }}>
      <header style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderBottom: `1px solid ${INK}`, paddingBottom: '8px' }}>
        <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', letterSpacing: '0.5px' }}>The Atlas</span>
        <nav style={{ display: 'flex', gap: '14px', fontFamily: "'Inter', sans-serif", fontSize: '9px', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
          <span>Architecture</span><span>Design</span><span>Travel</span><span>Archive</span>
        </nav>
        <button onClick={() => setSubscribed(s => !s)} style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', letterSpacing: '1.2px', textTransform: 'uppercase', padding: '5px 10px', border: `1px solid ${INK}`, background: subscribed ? INK : 'transparent', color: subscribed ? '#f3efe6' : INK, cursor: 'pointer' }}>
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </header>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: "'Inter', sans-serif", fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: '#6b6357', padding: '6px 0', borderBottom: `1px solid ${INK}33` }}>
        <span>Issue 12</span><span>Autumn 2026</span><span>Porto · Lisbon · Seville</span>
      </div>

      <div style={{ flex: 1, display: 'flex', gap: '26px', paddingTop: '18px' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: TERRA, marginBottom: '8px' }}>Architecture</div>
          <h1 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: '48px', lineHeight: 0.98, letterSpacing: '-0.5px', marginBottom: '12px' }}>
            Quiet buildings for <em>loud</em> cities
          </h1>
          <p style={{ fontSize: '12px', lineHeight: 1.6, color: '#4a443b', marginBottom: '12px' }}>
            Across the Iberian south, a generation of architects is answering heat and noise with thick walls, deep shade and courtyards built for doing nothing at all.
          </p>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: '#6b6357', marginBottom: 'auto' }}>
            Words by <b style={{ color: INK }}>Inês Duarte</b> · Illustrations by <b style={{ color: INK }}>Kenji Mori</b> · 14 min read
          </div>
          <a href="#story" onClick={e => e.preventDefault()} style={{ alignSelf: 'flex-start', fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: INK, textDecoration: 'none', borderBottom: `1.5px solid ${INK}`, paddingBottom: '2px' }}>Read the story →</a>
        </div>
        <figure style={{ margin: 0, width: '220px' }}>
          <Colonnade />
          <figcaption style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: '#6b6357', marginTop: '6px' }}>Fig. 1 — Casa do Pátio, Seville. Arcade facing the afternoon sun.</figcaption>
        </figure>
      </div>
    </div>
  );
}
