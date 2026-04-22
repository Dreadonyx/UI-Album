import { useState } from 'react';

export default function GradientButtons() {
  const [active, setActive] = useState(1);
  const buttons = [
    { label: 'Primary', gradient: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', glow: 'rgba(139,92,246,0.4)' },
    { label: 'Success', gradient: 'linear-gradient(135deg, #10b981, #059669)', glow: 'rgba(16,185,129,0.4)' },
    { label: 'Danger', gradient: 'linear-gradient(135deg, #ef4444, #dc2626)', glow: 'rgba(239,68,68,0.4)' },
    { label: 'Warning', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)', glow: 'rgba(245,158,11,0.4)' },
  ];
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#0a0a14',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '28px',
      fontFamily: "'DM Mono', monospace",
    }}>
      <div style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '3px', color: 'rgba(255,255,255,0.25)' }}>Button System</div>
      <div style={{ display: 'flex', gap: '14px' }}>
        {buttons.map((b, i) => (
          <button key={b.label} onClick={e => { e.stopPropagation(); setActive(i); }} style={{
            fontFamily: "'DM Mono', monospace", fontSize: '12px', fontWeight: 500,
            padding: '14px 28px', borderRadius: '12px', border: 'none',
            background: b.gradient, color: '#fff', cursor: 'pointer',
            boxShadow: active === i ? `0 6px 24px ${b.glow}` : '0 2px 8px rgba(0,0,0,0.3)',
            transform: active === i ? 'translateY(-2px)' : 'translateY(0)',
            transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
            letterSpacing: '0.5px',
          }}>{b.label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '14px' }}>
        {buttons.map(b => (
          <button key={b.label + '-outline'} style={{
            fontFamily: "'DM Mono', monospace", fontSize: '11px',
            padding: '12px 24px', borderRadius: '10px',
            border: `1px solid ${b.glow}`, background: 'transparent',
            color: b.glow.replace('0.4', '1'), cursor: 'pointer',
            letterSpacing: '0.5px',
          }}>{b.label}</button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '14px' }}>
        {buttons.map(b => (
          <div key={b.label + '-ghost'} style={{
            fontFamily: "'DM Mono', monospace", fontSize: '10px',
            padding: '10px 20px', borderRadius: '8px',
            background: b.glow.replace('0.4', '0.08'),
            color: b.glow.replace('0.4', '0.8'),
            letterSpacing: '0.5px', textAlign: 'center',
          }}>{b.label}</div>
        ))}
      </div>
    </div>
  );
}
