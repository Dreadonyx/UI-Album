import { useState } from 'react';

const SERVICES = [
  { name: 'API', uptime: 99.98, incidents: [71] },
  { name: 'Dashboard', uptime: 100, incidents: [] },
  { name: 'Webhooks', uptime: 99.71, incidents: [34, 35, 80] },
  { name: 'CDN', uptime: 99.99, incidents: [12] },
];
const DAYS = 90;

export default function StatusPage() {
  const [tip, setTip] = useState(null);

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', padding: '22px 30px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 16px', borderRadius: '12px', background: '#ecfdf5', border: '1px solid #a7f3d0', marginBottom: '18px' }}>
        <span style={{ position: 'relative', width: '12px', height: '12px' }}>
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10b981', animation: 'uaStatusPing 1.6s ease-out infinite' }} />
          <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10b981' }} />
        </span>
        <style>{`@keyframes uaStatusPing { 0% { transform: scale(1); opacity: 0.7; } 100% { transform: scale(2.6); opacity: 0; } }`}</style>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#065f46' }}>All systems operational</div>
          <div style={{ fontSize: '11px', color: '#047857' }}>Updated 1 minute ago</div>
        </div>
        <button style={{ padding: '6px 12px', borderRadius: '8px', border: '1px solid #6ee7b7', background: '#fff', color: '#047857', fontSize: '11px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>Subscribe</button>
      </div>

      {SERVICES.map(s => (
        <div key={s.name} style={{ marginBottom: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
            <span style={{ fontWeight: 600, color: '#111827' }}>{s.name}</span>
            <span style={{ color: '#6b7280', fontFamily: "'DM Mono', monospace", fontSize: '11px' }}>{s.uptime.toFixed(2)}% uptime</span>
          </div>
          <div style={{ display: 'flex', gap: '2px', height: '26px' }} onMouseLeave={() => setTip(null)}>
            {Array.from({ length: DAYS }, (_, d) => {
              const bad = s.incidents.includes(d);
              const major = bad && s.name === 'Webhooks' && d === 35;
              const isTip = tip && tip.s === s.name && tip.d === d;
              return (
                <span key={d} onMouseEnter={() => setTip({ s: s.name, d, bad, major })} style={{
                  flex: 1, borderRadius: '2px', cursor: 'pointer',
                  background: major ? '#ef4444' : bad ? '#f59e0b' : '#10b981',
                  opacity: isTip ? 1 : 0.85, transform: isTip ? 'scaleY(1.15)' : 'none', transition: 'transform 0.1s',
                }} />
              );
            })}
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#9ca3af', fontFamily: "'DM Mono', monospace" }}>
        <span>90 days ago</span>
        <span style={{ color: tip ? (tip.major ? '#ef4444' : tip.bad ? '#d97706' : '#059669') : '#9ca3af' }}>
          {tip ? `${tip.s} · ${DAYS - tip.d} days ago · ${tip.major ? 'Major outage' : tip.bad ? 'Degraded performance' : 'No incidents'}` : 'Hover a bar for details'}
        </span>
        <span>Today</span>
      </div>
    </div>
  );
}
