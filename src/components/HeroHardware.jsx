import { Fragment, useEffect, useState } from 'react';

const ORANGE = '#ff5a1f';
const FINISHES = [
  { id: 'silver', label: 'Aluminium', body: '#d9d9d6', edge: '#b9b9b5', text: '#2a2a2a' },
  { id: 'black', label: 'Graphite', body: '#2b2b2c', edge: '#161617', text: '#e8e8e6' },
];
const SPECS = [['Recording', '32-bit float'], ['Tracks', '4 × XLR / TRS'], ['Battery', '18 h'], ['Weight', '140 g']];

function Device({ finish, recording, level }) {
  return (
    <svg viewBox="0 0 220 260" width="220" height="260" aria-hidden="true">
      <ellipse cx="112" cy="248" rx="86" ry="8" fill="rgba(0,0,0,0.12)" />
      <rect x="24" y="14" width="176" height="228" rx="22" fill={finish.edge} />
      <rect x="20" y="10" width="176" height="228" rx="22" fill={finish.body} />
      {/* screen */}
      <rect x="38" y="28" width="140" height="62" rx="6" fill="#0d0d0d" />
      {Array.from({ length: 28 }, (_, i) => {
        const h = 6 + Math.abs(Math.sin(i * 0.7 + level)) * (recording ? 30 : 10);
        return <rect key={i} x={46 + i * 4.5} y={59 - h / 2} width="2.4" height={h} rx="1" fill={recording ? ORANGE : '#5a5a5a'} />;
      })}
      <text x="44" y="40" fontFamily="DM Mono, monospace" fontSize="7" fill="#8a8a8a">{recording ? 'REC 00:12' : 'READY'}</text>
      <circle cx="168" cy="38" r="3" fill={recording ? ORANGE : '#3a3a3a'} />
      {/* knob */}
      <circle cx="148" cy="148" r="34" fill={ORANGE} />
      <circle cx="148" cy="148" r="26" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      <rect x="146" y="120" width="4" height="14" rx="2" fill="#fff" transform={`rotate(${recording ? 60 : -30} 148 148)`} />
      {/* buttons */}
      {[0, 1, 2, 3].map(i => <rect key={i} x={38 + (i % 2) * 34} y={118 + Math.floor(i / 2) * 34} width="26" height="26" rx="5" fill={i === 0 && recording ? ORANGE : finish.edge} />)}
      {/* grille */}
      {Array.from({ length: 6 }, (_, r) => Array.from({ length: 14 }, (_, c) => <circle key={`${r}-${c}`} cx={40 + c * 10} cy={196 + r * 6} r="1.4" fill={finish.edge} />))}
      <text x="38" y="230" fontFamily="DM Mono, monospace" fontSize="7" fill={finish.text} opacity="0.6">OK-1</text>
    </svg>
  );
}

export default function HeroHardware() {
  const [finish, setFinish] = useState(FINISHES[0]);
  const [recording, setRecording] = useState(false);
  const [level, setLevel] = useState(0);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    if (!recording) return;
    const t = setInterval(() => setLevel(l => l + 0.6), 120);
    return () => clearInterval(t);
  }, [recording]);

  return (
    <div style={{ width: '600px', height: '400px', background: '#ecebe7', color: '#1a1a1a', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <nav style={{ display: 'flex', alignItems: 'center', height: '42px', padding: '0 26px', fontFamily: "'DM Mono', monospace", fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 700, letterSpacing: '2px' }}>OKTAV</span>
        <span style={{ display: 'flex', gap: '18px', marginLeft: '30px', color: '#6b6b6b' }}><span>Products</span><span>Field notes</span><span>Support</span></span>
        <span style={{ marginLeft: 'auto' }}>Cart ({cart})</span>
      </nav>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '0 26px', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#6b6b6b', marginBottom: '10px' }}>OK-1 / FIELD RECORDER</div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '40px', fontWeight: 600, lineHeight: 1, letterSpacing: '-1.5px', marginBottom: '16px' }}>Pocket-sized.<br />Studio-grade.</h1>
          <dl style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '18px', rowGap: '5px', fontFamily: "'DM Mono', monospace", fontSize: '10px', marginBottom: '16px', paddingTop: '10px', borderTop: '1px solid #c9c8c3' }}>
            {SPECS.map(([k, v]) => <Fragment key={k}><dt style={{ color: '#6b6b6b' }}>{k}</dt><dd style={{ margin: 0 }}>{v}</dd></Fragment>)}
          </dl>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            {FINISHES.map(f => (
              <button key={f.id} onClick={() => setFinish(f)} aria-label={f.label} aria-pressed={finish.id === f.id} style={{ width: '20px', height: '20px', borderRadius: '50%', background: f.body, border: `1px solid ${f.edge}`, boxShadow: finish.id === f.id ? '0 0 0 2px #ecebe7, 0 0 0 3px #1a1a1a' : 'none', cursor: 'pointer', padding: 0 }} />
            ))}
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#6b6b6b' }}>{finish.label}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button onClick={() => setCart(c => c + 1)} style={{ height: '36px', padding: '0 18px', border: 'none', borderRadius: '4px', background: ORANGE, color: '#fff', fontFamily: "'DM Mono', monospace", fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', cursor: 'pointer' }}>Pre-order · $449</button>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#6b6b6b' }}>Ships December 2026</span>
          </div>
        </div>

        <button onClick={() => setRecording(r => !r)} aria-pressed={recording} aria-label={recording ? 'Stop demo recording' : 'Start demo recording'} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', position: 'relative' }}>
          <Device finish={finish} recording={recording} level={level} />
          <span style={{ position: 'absolute', right: '28px', bottom: '-10px', fontFamily: "'DM Mono', monospace", fontSize: '9px', color: '#6b6b6b' }}>{recording ? 'Tap to stop' : 'Tap to record'}</span>
        </button>
      </div>
    </div>
  );
}
