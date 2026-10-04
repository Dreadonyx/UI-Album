import { useEffect, useState } from 'react';
import Icon from './Icon';

const LABELS = { idle: 'Deploy to production', loading: 'Deploying…', success: 'Deployed', error: 'Retry deploy' };
const COLORS = { idle: '#2563eb', loading: '#2563eb', success: '#16a34a', error: '#dc2626' };

export default function ButtonStates() {
  const [state, setState] = useState('idle');
  const [failNext, setFailNext] = useState(false);

  useEffect(() => {
    if (state === 'loading') {
      const t = setTimeout(() => setState(failNext ? 'error' : 'success'), 1600);
      return () => clearTimeout(t);
    }
    if (state === 'success') {
      const t = setTimeout(() => setState('idle'), 2200);
      return () => clearTimeout(t);
    }
  }, [state, failNext]);

  const click = () => { if (state === 'idle' || state === 'error') setState('loading'); };

  return (
    <div style={{
      width: '600px', height: '400px', background: '#f8fafc',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '28px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <style>{`@keyframes uaSpin { to { transform: rotate(360deg); } } @keyframes uaShake { 0%, 100% { transform: translateX(0); } 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } } @keyframes uaPop { 0% { transform: scale(0.4); opacity: 0; } 70% { transform: scale(1.2); } 100% { transform: scale(1); opacity: 1; } }`}</style>

      <button onClick={click} aria-busy={state === 'loading'} style={{
        height: '52px', minWidth: '240px', padding: '0 26px', borderRadius: '14px', border: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        background: COLORS[state], color: '#fff', fontFamily: 'inherit', fontSize: '15px', fontWeight: 600,
        cursor: state === 'loading' || state === 'success' ? 'default' : 'pointer',
        boxShadow: `0 10px 24px ${COLORS[state]}55, inset 0 1px 0 rgba(255,255,255,0.2)`,
        transition: 'background 0.35s, box-shadow 0.35s, transform 0.15s',
        animation: state === 'error' ? 'uaShake 0.4s ease' : 'none',
      }}>
        {state === 'loading' && <span style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.35)', borderTopColor: '#fff', animation: 'uaSpin 0.7s linear infinite' }} />}
        {state === 'success' && <span style={{ display: 'flex', animation: 'uaPop 0.4s ease' }}><Icon name="check" size={18} strokeWidth={3} /></span>}
        {state === 'error' && <Icon name="refresh" size={16} />}
        {state === 'idle' && <Icon name="zap" size={16} />}
        {LABELS[state]}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        {['idle', 'loading', 'success', 'error'].map(s => (
          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontFamily: "'DM Mono', monospace", color: state === s ? '#0f172a' : '#94a3b8', transition: 'color 0.2s' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: state === s ? COLORS[s] : '#e2e8f0' }} />{s}
          </div>
        ))}
      </div>

      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#64748b', cursor: 'pointer' }}>
        <input type="checkbox" checked={failNext} onChange={e => setFailNext(e.target.checked)} style={{ accentColor: '#dc2626' }} />
        Simulate failure
      </label>
    </div>
  );
}
