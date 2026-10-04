import { useState } from 'react';

const TABS = [
  { id: 'overview', label: 'Overview', body: 'A bird’s-eye view of everything happening across your workspace this week.' },
  { id: 'activity', label: 'Activity', body: '128 events logged today. Deploys are up 18% compared to last Tuesday.' },
  { id: 'billing', label: 'Billing', body: 'You are on the Pro plan. Next invoice of $29.00 is due on Nov 1.' },
  { id: 'members', label: 'Members', body: '7 members, 2 pending invites. Owners can manage roles from here.' },
];
const TAB_WIDTH = 104;

export default function MorphingTabs() {
  const [active, setActive] = useState(0);

  return (
    <div style={{
      width: '600px', height: '400px', background: '#f4f1ea',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '28px',
      fontFamily: "'Space Grotesk', sans-serif",
    }}>
      <div role="tablist" style={{
        position: 'relative', display: 'flex', padding: '5px', borderRadius: '999px',
        background: '#e7e2d6', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.08)',
      }}>
        <div style={{
          position: 'absolute', top: '5px', bottom: '5px', left: '5px', width: `${TAB_WIDTH}px`,
          borderRadius: '999px', background: '#1f1d1a',
          transform: `translateX(${active * TAB_WIDTH}px)`,
          transition: 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow: '0 4px 14px rgba(31,29,26,0.35)',
        }} />
        {TABS.map((t, i) => (
          <button key={t.id} role="tab" aria-selected={i === active} onClick={() => setActive(i)} style={{
            position: 'relative', zIndex: 1, width: `${TAB_WIDTH}px`, height: '40px',
            border: 'none', background: 'transparent', borderRadius: '999px', cursor: 'pointer',
            fontFamily: 'inherit', fontSize: '13px', fontWeight: 500,
            color: i === active ? '#f4f1ea' : '#6b6558', transition: 'color 0.3s',
          }}>{t.label}</button>
        ))}
      </div>

      <div key={active} role="tabpanel" style={{
        width: '420px', padding: '26px 28px', borderRadius: '20px', background: '#fffdf8',
        border: '1px solid #e7e2d6', boxShadow: '0 12px 30px rgba(60,50,30,0.08)',
        animation: 'fadeSlideUp 0.45s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#c2410c', marginBottom: '8px' }}>0{active + 1} / 0{TABS.length}</div>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '26px', fontWeight: 600, color: '#1f1d1a', marginBottom: '8px' }}>{TABS[active].label}</div>
        <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#6b6558' }}>{TABS[active].body}</p>
      </div>
    </div>
  );
}
