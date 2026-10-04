import { useId, useState } from 'react';

const SERIES = {
  '7D': [42, 48, 45, 61, 58, 72, 80],
  '30D': [30, 34, 33, 40, 38, 45, 52, 49, 55, 60, 58, 66, 71, 69, 78],
  '90D': [20, 26, 24, 31, 35, 33, 42, 47, 45, 53, 58, 62, 60, 70, 76, 74, 82, 88],
};
const W = 520;
const H = 190;
const PAD = 8;

function toPoints(data) {
  const max = Math.max(...data) * 1.1;
  return data.map((v, i) => [PAD + (i / (data.length - 1)) * (W - PAD * 2), H - (v / max) * (H - 20)]);
}

function smoothPath(pts) {
  return pts.reduce((d, [x, y], i) => {
    if (i === 0) return `M ${x} ${y}`;
    const [px, py] = pts[i - 1];
    const cx = (px + x) / 2;
    return `${d} C ${cx} ${py}, ${cx} ${y}, ${x} ${y}`;
  }, '');
}

export default function AreaChart() {
  const [range, setRange] = useState('30D');
  const [hover, setHover] = useState(null);
  const gradientId = `ua-area-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;
  const data = SERIES[range];
  const pts = toPoints(data);
  const line = smoothPath(pts);
  const area = `${line} L ${pts[pts.length - 1][0]} ${H} L ${pts[0][0]} ${H} Z`;
  const current = hover ?? data.length - 1;
  const delta = (((data[data.length - 1] - data[0]) / data[0]) * 100).toFixed(1);

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * W;
    const i = Math.round(((x - PAD) / (W - PAD * 2)) * (data.length - 1));
    setHover(Math.min(Math.max(i, 0), data.length - 1));
  };

  return (
    <div style={{ width: '600px', height: '400px', background: '#0b0f17', padding: '24px 40px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
        <div>
          <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Monthly recurring revenue</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px' }}>
            <span style={{ fontSize: '30px', fontWeight: 700, color: '#f8fafc', fontVariantNumeric: 'tabular-nums' }}>${(data[current] * 1.37).toFixed(1)}k</span>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#34d399', padding: '2px 8px', borderRadius: '999px', background: 'rgba(52,211,153,0.12)' }}>▲ {delta}%</span>
          </div>
        </div>
        <div style={{ display: 'flex', padding: '3px', borderRadius: '9px', background: '#151b26' }}>
          {Object.keys(SERIES).map(k => (
            <button key={k} onClick={() => { setRange(k); setHover(null); }} style={{
              padding: '5px 10px', borderRadius: '7px', border: 'none', fontSize: '11px', fontWeight: 600, fontFamily: "'DM Mono', monospace", cursor: 'pointer',
              background: range === k ? '#263042' : 'transparent', color: range === k ? '#f8fafc' : '#64748b',
            }}>{k}</button>
          ))}
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H + 24}`} width="100%" style={{ display: 'block', overflow: 'visible', cursor: 'crosshair' }} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75, 1].map(f => (
          <line key={f} x1={0} x2={W} y1={H * f} y2={H * f} stroke="#1e2633" strokeDasharray="3 5" />
        ))}
        <path d={area} fill={`url(#${gradientId})`} />
        <path d={line} fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
        <line x1={pts[current][0]} x2={pts[current][0]} y1={0} y2={H} stroke="#38bdf8" strokeOpacity="0.3" />
        <circle cx={pts[current][0]} cy={pts[current][1]} r="9" fill="#38bdf8" fillOpacity="0.2" />
        <circle cx={pts[current][0]} cy={pts[current][1]} r="4.5" fill="#0b0f17" stroke="#38bdf8" strokeWidth="2.5" />
        <text x={0} y={H + 20} fill="#475569" fontSize="11" fontFamily="DM Mono, monospace">{range === '7D' ? 'Mon' : 'Start'}</text>
        <text x={W} y={H + 20} fill="#475569" fontSize="11" textAnchor="end" fontFamily="DM Mono, monospace">Today</text>
      </svg>
    </div>
  );
}
