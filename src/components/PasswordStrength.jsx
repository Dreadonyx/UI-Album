import { useState } from 'react';
import Icon from './Icon';

const RULES = [
  { label: 'At least 10 characters', test: p => p.length >= 10 },
  { label: 'One uppercase letter', test: p => /[A-Z]/.test(p) },
  { label: 'One number', test: p => /\d/.test(p) },
  { label: 'One symbol', test: p => /[^A-Za-z0-9]/.test(p) },
];
const LEVELS = [
  { label: 'Too weak', color: '#ef4444' },
  { label: 'Weak', color: '#f97316' },
  { label: 'Fair', color: '#eab308' },
  { label: 'Good', color: '#22c55e' },
  { label: 'Strong', color: '#10b981' },
];

export default function PasswordStrength() {
  const [password, setPassword] = useState('Sunset9');
  const [show, setShow] = useState(false);
  const passed = RULES.filter(r => r.test(password)).length;
  const level = password ? LEVELS[passed] : null;

  return (
    <div style={{
      width: '600px', height: '400px', background: 'linear-gradient(135deg, #0c1222, #0b1a2e)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ width: '340px', padding: '26px', borderRadius: '20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ fontSize: '18px', fontWeight: 600, color: '#f1f5f9', marginBottom: '4px' }}>Set a password</div>
        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '18px' }}>Make it unique to this account.</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '44px', padding: '0 12px', borderRadius: '11px', background: 'rgba(0,0,0,0.25)', border: `1px solid ${level ? level.color + '80' : 'rgba(255,255,255,0.1)'}`, transition: 'border-color 0.3s' }}>
          <Icon name="lock" size={15} color="#64748b" />
          <input type={show ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} aria-label="New password"
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#f1f5f9', fontSize: '14px', fontFamily: "'DM Mono', monospace", letterSpacing: show ? '0.5px' : '3px' }} />
          <button type="button" onClick={() => setShow(s => !s)} aria-label={show ? 'Hide password' : 'Show password'} style={{ display: 'flex', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: 0 }}>
            <Icon name={show ? 'eyeOff' : 'eye'} size={16} />
          </button>
        </div>

        <div style={{ display: 'flex', gap: '5px', margin: '12px 0 6px' }}>
          {[0, 1, 2, 3].map(i => (
            <div key={i} style={{ flex: 1, height: '5px', borderRadius: '4px', background: level && i < Math.max(passed, 1) ? level.color : 'rgba(255,255,255,0.08)', transition: 'background 0.3s' }} />
          ))}
        </div>
        <div style={{ fontSize: '11px', fontWeight: 600, color: level ? level.color : '#475569', marginBottom: '14px', height: '14px' }} aria-live="polite">{level ? level.label : 'Start typing'}</div>

        {RULES.map(r => {
          const ok = r.test(password);
          return (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: ok ? '#cbd5e1' : '#64748b', marginBottom: '7px', transition: 'color 0.2s' }}>
              <span style={{ width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: ok ? 'rgba(16,185,129,0.15)' : 'rgba(255,255,255,0.05)', color: ok ? '#10b981' : '#475569', transition: 'all 0.2s' }}>
                <Icon name={ok ? 'check' : 'minus'} size={10} strokeWidth={3} />
              </span>
              {r.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
