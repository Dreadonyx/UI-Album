import { useState } from 'react';
import Icon from './Icon';

const BLUE = '#2453ff';
const RANGES = {
  '30d': { revenue: '$482,190', delta: '+18.2%', roas: '4.2x', share: 38, points: [22, 30, 27, 38, 35, 46, 44, 58, 54, 66] },
  '90d': { revenue: '$1.31M', delta: '+31.6%', roas: '3.9x', share: 34, points: [12, 18, 25, 22, 34, 40, 38, 52, 61, 70] },
};
const LOGOS = [['Northwind', 700, 'Inter'], ['lumen', 500, 'Space Grotesk'], ['ORBIT', 800, 'Inter'], ['Patchwork', 400, 'Instrument Serif'], ['Kestrel', 600, 'Inter']];

function Chart({ points }) {
  const w = 200;
  const h = 70;
  const max = 75;
  const xy = points.map((v, i) => [(i / (points.length - 1)) * w, h - (v / max) * h]);
  const line = xy.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none" aria-hidden="true" style={{ display: 'block' }}>
      {[0.33, 0.66].map(f => <line key={f} x1="0" x2={w} y1={h * f} y2={h * f} stroke="#eef0f4" />)}
      <path d={`${line} L${w} ${h} L0 ${h} Z`} fill={BLUE} fillOpacity="0.08" />
      <path d={line} fill="none" stroke={BLUE} strokeWidth="2" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroAnalytics() {
  const [range, setRange] = useState('30d');
  const d = RANGES[range];

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', color: '#0b1220', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <nav style={{ display: 'flex', alignItems: 'center', height: '44px', padding: '0 24px', fontSize: '11px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '7px', fontWeight: 700, fontSize: '13px' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="8" width="3.5" height="7" rx="1" fill={BLUE} /><rect x="6.25" y="4" width="3.5" height="11" rx="1" fill={BLUE} /><rect x="11.5" y="1" width="3.5" height="14" rx="1" fill="#0b1220" /></svg>
          Metric
        </span>
        <span style={{ display: 'flex', gap: '16px', marginLeft: '28px', color: '#5b6474' }}><span>Product</span><span>Solutions</span><span>Customers</span><span>Pricing</span></span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: '#5b6474' }}>Sign in</span>
          <button style={{ height: '28px', padding: '0 12px', borderRadius: '7px', border: 'none', background: '#0b1220', color: '#fff', fontFamily: 'inherit', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Book a demo</button>
        </span>
      </nav>

      <div style={{ flex: 1, display: 'flex', gap: '20px', padding: '18px 24px 0' }}>
        <div style={{ width: '262px', paddingTop: '8px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontWeight: 500, color: '#3b4252', padding: '3px 8px', borderRadius: '999px', border: '1px solid #e4e7ee' }}>
            <span style={{ fontWeight: 600, color: BLUE }}>New</span> Forecasts for every channel
          </span>
          <h1 style={{ fontSize: '33px', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1.2px', margin: '12px 0 10px' }}>Know which campaigns actually pay off.</h1>
          <p style={{ fontSize: '12px', lineHeight: 1.6, color: '#5b6474', marginBottom: '16px' }}>Metric connects your ad spend, CRM and billing data to show revenue per channel, not just clicks.</p>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
            <button style={{ height: '34px', padding: '0 14px', borderRadius: '8px', border: 'none', background: BLUE, color: '#fff', fontFamily: 'inherit', fontSize: '12px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Start free trial</button>
            <button style={{ height: '34px', padding: '0 12px', borderRadius: '8px', border: '1px solid #e4e7ee', background: '#fff', color: '#0b1220', fontFamily: 'inherit', fontSize: '12px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
              <Icon name="play" size={10} fill="currentColor" /> Watch demo
            </button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px', color: '#5b6474' }}>
            <span style={{ display: 'flex', gap: '1px' }}>{[0, 1, 2, 3, 4].map(i => <Icon key={i} name="star" size={11} color="#f5a524" fill="#f5a524" />)}</span>
            4.8 from 1,200+ reviews · 14-day trial, no card
          </div>
        </div>

        <div style={{ flex: 1, position: 'relative', borderRadius: '14px', background: '#f4f6fa', minWidth: 0 }}>
          <div style={{ position: 'absolute', left: '16px', right: '16px', top: '16px', padding: '12px 14px', borderRadius: '10px', background: '#fff', border: '1px solid #e9ecf2', boxShadow: '0 1px 2px rgba(11,18,32,0.04), 0 8px 24px rgba(11,18,32,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '10px', color: '#5b6474' }}>Revenue attributed</span>
              <span style={{ display: 'flex', padding: '2px', borderRadius: '6px', background: '#f4f6fa' }}>
                {Object.keys(RANGES).map(k => (
                  <button key={k} onClick={() => setRange(k)} aria-pressed={range === k} style={{ padding: '2px 7px', borderRadius: '4px', border: 'none', background: range === k ? '#fff' : 'transparent', boxShadow: range === k ? '0 1px 2px rgba(11,18,32,0.1)' : 'none', fontFamily: 'inherit', fontSize: '9px', fontWeight: 600, color: range === k ? '#0b1220' : '#5b6474', cursor: 'pointer' }}>{k}</button>
                ))}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '8px' }}>
              <span style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.5px', fontVariantNumeric: 'tabular-nums' }}>{d.revenue}</span>
              <span style={{ fontSize: '10px', fontWeight: 600, color: '#0e9f6e' }}>{d.delta}</span>
            </div>
            <Chart points={d.points} />
          </div>

          <div style={{ position: 'absolute', left: '-14px', bottom: '22px', width: '150px', padding: '10px 12px', borderRadius: '10px', background: '#fff', border: '1px solid #e9ecf2', boxShadow: '0 12px 30px rgba(11,18,32,0.1)' }}>
            <div style={{ fontSize: '9px', color: '#5b6474', marginBottom: '4px' }}>Top channel</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: 600, marginBottom: '6px' }}><span>Paid search</span><span>{d.share}%</span></div>
            <div style={{ height: '5px', borderRadius: '5px', background: '#eef0f4' }}><div style={{ height: '100%', width: `${d.share}%`, borderRadius: '5px', background: BLUE, transition: 'width 0.4s' }} /></div>
          </div>

          <div style={{ position: 'absolute', right: '16px', bottom: '22px', width: '112px', padding: '10px 12px', borderRadius: '10px', background: '#0b1220', color: '#fff', boxShadow: '0 12px 30px rgba(11,18,32,0.2)' }}>
            <div style={{ fontSize: '9px', color: '#9aa3b2', marginBottom: '2px' }}>Blended ROAS</div>
            <div style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.5px' }}>{d.roas}</div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px' }}>
        {LOGOS.map(([name, weight, font]) => <span key={name} style={{ fontFamily: `'${font}'`, fontWeight: weight, fontSize: '14px', color: '#a3aab8' }}>{name}</span>)}
      </div>
    </div>
  );
}
