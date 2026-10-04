import { useState } from 'react';
import Icon from './Icon';

const SLIDES = [
  { title: 'Plan your week', body: 'Drag tasks onto your calendar and protect time for deep work.', icon: 'calendar', from: '#c7d2fe', to: '#6366f1' },
  { title: 'Focus, not noise', body: 'Smart notifications only ping you when it truly matters.', icon: 'bell', from: '#fbcfe8', to: '#db2777' },
  { title: 'Track your wins', body: 'Weekly reviews show how far you’ve come, automatically.', icon: 'chart', from: '#bbf7d0', to: '#16a34a' },
];

export default function OnboardingFlow() {
  const [i, setI] = useState(0);
  const s = SLIDES[i];
  const last = i === SLIDES.length - 1;

  return (
    <div style={{ width: '600px', height: '400px', background: '#f8f7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '36px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '200px', height: '370px', borderRadius: '30px', background: '#fff', border: '6px solid #18181b', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 30px 60px rgba(24,24,27,0.2)' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '12px 14px 0' }}>
          <button onClick={() => setI(SLIDES.length - 1)} style={{ border: 'none', background: 'none', fontSize: '10px', fontWeight: 600, color: '#a1a1aa', cursor: 'pointer', fontFamily: 'inherit', visibility: last ? 'hidden' : 'visible' }}>Skip</button>
        </div>
        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6px 18px', textAlign: 'center', animation: 'fadeSlideUp 0.45s cubic-bezier(0.16,1,0.3,1)' }}>
          <div style={{ position: 'relative', width: '120px', height: '120px', marginBottom: '18px' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '36px', background: `linear-gradient(135deg, ${s.from}, ${s.to})`, transform: 'rotate(8deg)', opacity: 0.35 }} />
            <div style={{ position: 'absolute', inset: '10px', borderRadius: '30px', background: `linear-gradient(135deg, ${s.from}, ${s.to})`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: `0 16px 30px ${s.to}55` }}>
              <Icon name={s.icon} size={42} strokeWidth={1.6} />
            </div>
          </div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#18181b', marginBottom: '6px' }}>{s.title}</div>
          <div style={{ fontSize: '11px', lineHeight: 1.5, color: '#71717a' }}>{s.body}</div>
        </div>
        <div style={{ padding: '0 16px 18px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '14px' }}>
            {SLIDES.map((x, j) => (
              <button key={x.title} onClick={() => setI(j)} aria-label={`Slide ${j + 1}`} style={{ width: j === i ? '20px' : '6px', height: '6px', borderRadius: '3px', border: 'none', padding: 0, cursor: 'pointer', background: j === i ? s.to : '#e4e4e7', transition: 'all 0.3s' }} />
            ))}
          </div>
          <button onClick={() => setI(last ? 0 : i + 1)} style={{ width: '100%', height: '38px', borderRadius: '12px', border: 'none', background: s.to, color: '#fff', fontSize: '12px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', transition: 'background 0.3s' }}>{last ? 'Get started' : 'Next'}</button>
        </div>
      </div>

      <div style={{ maxWidth: '200px' }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '2px', color: '#a1a1aa', textTransform: 'uppercase', marginBottom: '10px' }}>Step {i + 1} of {SLIDES.length}</div>
        {SLIDES.map((x, j) => (
          <div key={x.title} onClick={() => setI(j)} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', cursor: 'pointer', opacity: j === i ? 1 : 0.45, transition: 'opacity 0.3s' }}>
            <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: `linear-gradient(135deg, ${x.from}, ${x.to})`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={x.icon} size={12} /></span>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#18181b' }}>{x.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
