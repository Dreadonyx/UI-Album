import { useState } from 'react';
import Icon from './Icon';

const TABS = [
  { id: 'home', icon: 'home', label: 'Home' },
  { id: 'search', icon: 'search', label: 'Explore' },
  { id: 'add', icon: 'plus', label: 'New', primary: true },
  { id: 'inbox', icon: 'bell', label: 'Alerts', badge: 2 },
  { id: 'me', icon: 'user', label: 'Profile' },
];
const HABITS = [
  { name: 'Morning run', streak: 12, color: '#f97316', done: true },
  { name: 'Read 20 pages', streak: 5, color: '#8b5cf6', done: false },
  { name: 'Drink water', streak: 31, color: '#0ea5e9', done: true },
];

export default function MobileAppScreen() {
  const [tab, setTab] = useState('home');
  const [habits, setHabits] = useState(HABITS);
  const doneCount = habits.filter(h => h.done).length;

  return (
    <div style={{ width: '600px', height: '400px', background: 'linear-gradient(135deg, #fde68a, #fca5a5 50%, #c4b5fd)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '200px', height: '384px', borderRadius: '34px', background: '#111', padding: '7px', boxShadow: '0 30px 60px rgba(0,0,0,0.35)' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '28px', background: '#faf9f7', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px 0', fontSize: '9px', fontWeight: 600, color: '#111' }}>
            <span>9:41</span>
            <span style={{ width: '56px', height: '16px', borderRadius: '10px', background: '#111' }} />
            <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>100%<span style={{ width: '16px', height: '8px', borderRadius: '2px', border: '1px solid #111', padding: '1px' }}><span style={{ display: 'block', width: '100%', height: '100%', borderRadius: '1px', background: '#111' }} /></span></span>
          </div>

          <div style={{ flex: 1, padding: '14px 14px 0', overflow: 'hidden' }}>
            <div style={{ fontSize: '9px', color: '#a8a29e' }}>Sunday, Oct 4</div>
            <div style={{ fontSize: '17px', fontWeight: 700, color: '#1c1917', marginBottom: '10px' }}>Hi, Sam 👋</div>
            <div style={{ padding: '12px', borderRadius: '16px', background: '#1c1917', color: '#fff', marginBottom: '10px' }}>
              <div style={{ fontSize: '9px', opacity: 0.6 }}>Today’s progress</div>
              <div style={{ fontSize: '20px', fontWeight: 700 }}>{doneCount}/{habits.length} <span style={{ fontSize: '10px', fontWeight: 400, opacity: 0.6 }}>habits</span></div>
              <div style={{ height: '5px', borderRadius: '3px', background: 'rgba(255,255,255,0.15)', marginTop: '6px' }}>
                <div style={{ height: '100%', width: `${(doneCount / habits.length) * 100}%`, borderRadius: '3px', background: 'linear-gradient(90deg, #fbbf24, #f97316)', transition: 'width 0.4s' }} />
              </div>
            </div>
            {habits.map(h => (
              <button key={h.name} onClick={() => setHabits(hs => hs.map(x => (x.name === h.name ? { ...x, done: !x.done } : x)))} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px', marginBottom: '6px', borderRadius: '12px', border: '1px solid #f0eeea', background: '#fff', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '7px', background: h.done ? h.color : `${h.color}22`, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>{h.done && <Icon name="check" size={12} strokeWidth={3} />}</span>
                <span style={{ flex: 1 }}>
                  <span style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: '#1c1917', textDecoration: h.done ? 'line-through' : 'none' }}>{h.name}</span>
                  <span style={{ display: 'block', fontSize: '8px', color: '#a8a29e' }}>🔥 {h.streak} day streak</span>
                </span>
              </button>
            ))}
          </div>

          <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '8px 6px 14px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', borderTop: '1px solid #f0eeea' }}>
            {TABS.map(t => t.primary ? (
              <button key={t.id} aria-label={t.label} style={{ width: '34px', height: '34px', borderRadius: '12px', border: 'none', background: '#1c1917', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 6px 14px rgba(28,25,23,0.3)', marginTop: '-14px' }}><Icon name="plus" size={16} strokeWidth={2.5} /></button>
            ) : (
              <button key={t.id} onClick={() => setTab(t.id)} aria-label={t.label} aria-current={tab === t.id ? 'page' : undefined} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', border: 'none', background: 'none', cursor: 'pointer', color: tab === t.id ? '#f97316' : '#a8a29e', fontFamily: 'inherit', fontSize: '7px', fontWeight: 600, padding: 0 }}>
                <Icon name={t.icon} size={15} />{t.label}
                {t.badge && <span style={{ position: 'absolute', top: '-3px', right: '2px', width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444', border: '1.5px solid #fff' }} />}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
