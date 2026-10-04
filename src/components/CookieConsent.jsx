import { useState } from 'react';
import Icon from './Icon';

const CATEGORIES = [
  { id: 'essential', label: 'Essential', desc: 'Required for the site to work.', locked: true },
  { id: 'analytics', label: 'Analytics', desc: 'Helps us understand usage.' },
  { id: 'marketing', label: 'Marketing', desc: 'Personalized ads and offers.' },
];

export default function CookieConsent() {
  const [view, setView] = useState('banner');
  const [prefs, setPrefs] = useState({ essential: true, analytics: true, marketing: false });

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #fef7ee, #fdecd8)', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ padding: '30px 34px', opacity: 0.5 }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '34px', color: '#7c2d12', lineHeight: 1 }}>Bakehouse</div>
        <div style={{ height: '8px', width: '60%', background: '#fbd5ae', borderRadius: '4px', marginTop: '16px' }} />
        <div style={{ height: '8px', width: '45%', background: '#fbd5ae', borderRadius: '4px', marginTop: '8px' }} />
      </div>

      {view === 'done' ? (
        <button onClick={() => setView('banner')} aria-label="Cookie settings" style={{ position: 'absolute', left: '20px', bottom: '20px', width: '42px', height: '42px', borderRadius: '50%', border: 'none', background: '#7c2d12', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(124,45,18,0.3)', animation: 'fadeSlideUp 0.3s ease' }}>
          <Icon name="cookie" size={20} />
        </button>
      ) : (
        <div role="dialog" aria-label="Cookie preferences" style={{
          position: 'absolute', left: '20px', bottom: '20px', width: '340px', padding: '18px', borderRadius: '18px',
          background: '#fff', boxShadow: '0 20px 50px rgba(124,45,18,0.18)', border: '1px solid #fde4c8',
          animation: 'fadeSlideUp 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Icon name="cookie" size={18} color="#c2410c" />
            <span style={{ fontSize: '14px', fontWeight: 600, color: '#1c1917' }}>{view === 'prefs' ? 'Cookie preferences' : 'We use cookies'}</span>
          </div>

          {view === 'banner' ? (
            <p style={{ fontSize: '12px', lineHeight: 1.55, color: '#57534e', marginBottom: '14px' }}>We use cookies to improve your experience and analyze traffic. You can choose which ones to allow.</p>
          ) : (
            <div style={{ margin: '6px 0 14px' }}>
              {CATEGORIES.map(c => (
                <label key={c.id} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 0', borderTop: '1px solid #f5f5f4', cursor: c.locked ? 'default' : 'pointer' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#1c1917' }}>{c.label}{c.locked && <span style={{ fontWeight: 400, color: '#a8a29e' }}> · always on</span>}</div>
                    <div style={{ fontSize: '11px', color: '#78716c' }}>{c.desc}</div>
                  </div>
                  <input type="checkbox" checked={prefs[c.id]} disabled={c.locked} onChange={e => setPrefs(p => ({ ...p, [c.id]: e.target.checked }))} style={{ width: '16px', height: '16px', accentColor: '#c2410c' }} />
                </label>
              ))}
            </div>
          )}

          <div style={{ display: 'flex', gap: '8px' }}>
            {view === 'banner' ? (
              <>
                <button onClick={() => setView('prefs')} style={secondary}>Customize</button>
                <button onClick={() => { setPrefs({ essential: true, analytics: false, marketing: false }); setView('done'); }} style={secondary}>Reject all</button>
                <button onClick={() => { setPrefs({ essential: true, analytics: true, marketing: true }); setView('done'); }} style={primary}>Accept all</button>
              </>
            ) : (
              <>
                <button onClick={() => setView('banner')} style={secondary}>Back</button>
                <button onClick={() => setView('done')} style={primary}>Save choices</button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const base = { flex: 1, height: '34px', borderRadius: '9px', fontSize: '12px', fontWeight: 600, fontFamily: "'Inter', sans-serif", cursor: 'pointer' };
const primary = { ...base, border: 'none', background: '#c2410c', color: '#fff' };
const secondary = { ...base, border: '1px solid #e7e5e4', background: '#fff', color: '#44403c' };
