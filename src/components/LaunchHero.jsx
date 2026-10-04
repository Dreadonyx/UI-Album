import { useState } from 'react';
import Icon from './Icon';

const AVATARS = ['#f97316', '#0ea5e9', '#a855f7', '#22c55e', '#e11d48'];

export default function LaunchHero() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div style={{
      width: '600px', height: '400px', background: '#fffbf5', position: 'relative', overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 52px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ position: 'absolute', right: '-80px', top: '-80px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, #fed7aa 0%, transparent 70%)' }} />
      <div style={{ position: 'absolute', right: '48px', top: '44px', fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#c2410c', letterSpacing: '2px', textTransform: 'uppercase' }}>Launching Q4</div>

      <h1 style={{ position: 'relative', fontFamily: "'Instrument Serif', 'Fraunces', serif", fontSize: '52px', fontWeight: 400, lineHeight: 1, color: '#1c1917', letterSpacing: '-1px', marginBottom: '14px' }}>
        Your inbox,<br /><em style={{ color: '#ea580c' }}>finally</em> quiet.
      </h1>
      <p style={{ position: 'relative', fontSize: '14px', color: '#78716c', lineHeight: 1.6, maxWidth: '360px', marginBottom: '24px' }}>
        Hush reads, sorts and summarizes your email so you only see what matters. Join the waitlist for early access.
      </p>

      {joined ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', height: '48px', padding: '0 18px', width: 'fit-content', borderRadius: '12px', background: '#ecfdf5', border: '1px solid #a7f3d0', color: '#047857', fontSize: '14px', fontWeight: 500, animation: 'fadeSlideUp 0.4s ease' }}>
          <Icon name="checkCircle" size={18} /> You’re #1,284 on the list
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); if (valid) setJoined(true); }} style={{
          position: 'relative', display: 'flex', gap: '6px', width: '400px', padding: '5px',
          borderRadius: '14px', background: '#fff', border: '1px solid #e7e5e4',
          boxShadow: '0 10px 30px rgba(234,88,12,0.08)',
        }}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" aria-label="Email address"
            style={{ flex: 1, border: 'none', outline: 'none', padding: '0 12px', fontSize: '14px', fontFamily: 'inherit', color: '#1c1917', background: 'transparent' }} />
          <button type="submit" disabled={!valid} style={{
            height: '40px', padding: '0 18px', borderRadius: '10px', border: 'none', fontFamily: 'inherit',
            fontSize: '13px', fontWeight: 600, cursor: valid ? 'pointer' : 'not-allowed',
            background: valid ? '#ea580c' : '#fdba74', color: '#fff', transition: 'background 0.2s',
          }}>Join waitlist</button>
        </form>
      )}

      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px', marginTop: '22px' }}>
        <div style={{ display: 'flex' }}>
          {AVATARS.map((c, i) => (
            <div key={c} style={{ width: '28px', height: '28px', borderRadius: '50%', background: c, border: '2px solid #fffbf5', marginLeft: i ? '-8px' : 0 }} />
          ))}
        </div>
        <div style={{ fontSize: '12px', color: '#78716c' }}>
          <span style={{ color: '#f59e0b', letterSpacing: '1px' }}>★★★★★</span> Loved by 1,200+ early users
        </div>
      </div>
    </div>
  );
}
