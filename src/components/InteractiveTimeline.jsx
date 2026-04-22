import { useState } from 'react';

export default function InteractiveTimeline() {
  const [active, setActive] = useState(0);
  const events = [
    { year: '2020', title: 'The Genesis', desc: 'Project Alpha initiated with a small team of 3 visionaries.' },
    { year: '2021', title: 'Beta Launch', desc: 'First public iteration reached 10,000 active users in 3 months.' },
    { year: '2022', title: 'Series A', desc: 'Secured $12M in funding to expand our core infrastructure.' },
    { year: '2023', title: 'Global Reach', desc: 'Established offices in London, Tokyo, and San Francisco.' },
  ];

  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#07070f',
      padding: '40px',
      fontFamily: "'DM Mono', monospace",
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center',
    }}>
      <div style={{ position: 'relative', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginBottom: '60px' }}>
        <div style={{
          position: 'absolute', height: '100%', background: '#8b5cf6',
          width: `${(active / (events.length - 1)) * 100}%`,
          transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: '0 0 15px #8b5cf6',
        }} />
        {events.map((e, i) => (
          <div
            key={i}
            onClick={() => setActive(i)}
            style={{
              position: 'absolute', left: `${(i / (events.length - 1)) * 100}%`,
              top: '50%', transform: 'translate(-50%, -50%)',
              width: '16px', height: '16px', borderRadius: '50%',
              background: i <= active ? '#8b5cf6' : '#1a1a2e',
              border: '4px solid #07070f',
              boxShadow: i <= active ? '0 0 10px #8b5cf6' : 'none',
              cursor: 'pointer', transition: 'all 0.3s ease',
              zIndex: 2,
            }}
          >
            <div style={{
              position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)',
              fontSize: '11px', color: i <= active ? '#f0eef5' : 'rgba(255,255,255,0.2)',
              fontWeight: i === active ? 600 : 400,
            }}>{e.year}</div>
          </div>
        ))}
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '16px', padding: '32px', minHeight: '160px',
        animation: 'fadeSlideUp 0.4s ease-out',
      }} key={active}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', color: '#f0eef5', marginBottom: '12px' }}>{events[active].title}</h3>
        <p style={{ fontFamily: "'Lora', serif", fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{events[active].desc}</p>
      </div>
    </div>
  );
}
