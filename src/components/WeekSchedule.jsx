import { useState } from 'react';

const DAYS = [['Mon', 12], ['Tue', 13], ['Wed', 14], ['Thu', 15], ['Fri', 16]];
const START = 9;
const END = 17;
const HOUR = 34;
const EVENTS = [
  { day: 0, start: 9.5, end: 10.5, title: 'Design sync', color: '#8b5cf6' },
  { day: 0, start: 13, end: 14.5, title: 'User interviews', color: '#ec4899' },
  { day: 1, start: 11, end: 12, title: 'Sprint planning', color: '#0ea5e9' },
  { day: 2, start: 9, end: 11, title: 'Deep work', color: '#10b981' },
  { day: 2, start: 14, end: 15, title: '1:1 with Sam', color: '#f59e0b' },
  { day: 3, start: 10, end: 11.5, title: 'Roadmap review', color: '#0ea5e9' },
  { day: 4, start: 15, end: 16.5, title: 'Demo day', color: '#ef4444' },
];
const NOW = 14.4;
const TODAY = 2;

const fmt = h => `${Math.floor(h) > 12 ? Math.floor(h) - 12 : Math.floor(h)}:${h % 1 ? '30' : '00'}`;

export default function WeekSchedule() {
  const [active, setActive] = useState(null);

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column', padding: '16px 18px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '18px', fontWeight: 600, color: '#111827' }}>October <span style={{ color: '#9ca3af', fontWeight: 400 }}>2026</span></div>
        <div style={{ fontSize: '11px', color: '#6b7280' }}>{active != null ? `${EVENTS[active].title} · ${fmt(EVENTS[active].start)}–${fmt(EVENTS[active].end)}` : `${EVENTS.length} events this week`}</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '36px repeat(5, 1fr)', borderBottom: '1px solid #f3f4f6' }}>
        <div />
        {DAYS.map(([d, n], i) => (
          <div key={d} style={{ textAlign: 'center', padding: '4px 0 8px' }}>
            <div style={{ fontSize: '10px', color: i === TODAY ? '#7c3aed' : '#9ca3af', fontWeight: 600, textTransform: 'uppercase' }}>{d}</div>
            <div style={{ display: 'inline-flex', width: '26px', height: '26px', borderRadius: '50%', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 600, background: i === TODAY ? '#7c3aed' : 'transparent', color: i === TODAY ? '#fff' : '#111827' }}>{n}</div>
          </div>
        ))}
      </div>

      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '36px repeat(5, 1fr)', height: `${(END - START) * HOUR}px` }}>
        <div>
          {Array.from({ length: END - START }, (_, i) => (
            <div key={i} style={{ height: `${HOUR}px`, fontSize: '9px', color: '#9ca3af', transform: 'translateY(-5px)' }}>{START + i > 12 ? START + i - 12 : START + i}{START + i >= 12 ? 'p' : 'a'}</div>
          ))}
        </div>
        {DAYS.map(([d], di) => (
          <div key={d} style={{ position: 'relative', borderLeft: '1px solid #f3f4f6', backgroundImage: `repeating-linear-gradient(180deg, #f3f4f6 0 1px, transparent 1px ${HOUR}px)`, backgroundColor: di === TODAY ? 'rgba(124,58,237,0.035)' : 'transparent' }}>
            {EVENTS.map((e, ei) => e.day === di && (
              <button key={ei} onMouseEnter={() => setActive(ei)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(ei)} onBlur={() => setActive(null)} style={{
                position: 'absolute', left: '3px', right: '3px', top: `${(e.start - START) * HOUR + 1}px`, height: `${(e.end - e.start) * HOUR - 2}px`,
                borderRadius: '7px', border: 'none', borderLeft: `3px solid ${e.color}`, background: `${e.color}1f`, padding: '4px 6px',
                textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', overflow: 'hidden',
                boxShadow: active === ei ? `0 6px 16px ${e.color}40` : 'none', transform: active === ei ? 'scale(1.03)' : 'none', transition: 'all 0.15s',
              }}>
                <div style={{ fontSize: '10px', fontWeight: 600, color: '#111827', lineHeight: 1.2 }}>{e.title}</div>
                <div style={{ fontSize: '9px', color: '#6b7280' }}>{fmt(e.start)}</div>
              </button>
            ))}
          </div>
        ))}
        <div style={{ position: 'absolute', left: '36px', right: 0, top: `${(NOW - START) * HOUR}px`, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', pointerEvents: 'none' }}>
          <div style={{ gridColumn: `${TODAY + 1}`, position: 'relative', height: '2px', background: '#ef4444' }}>
            <span style={{ position: 'absolute', left: '-4px', top: '-3px', width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
