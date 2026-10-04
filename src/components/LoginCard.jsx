import { useState } from 'react';
import Icon from './Icon';

export default function LoginCard() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const emailError = submitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passError = submitted && password.length < 8;

  const field = err => ({
    display: 'flex', alignItems: 'center', gap: '8px', height: '40px', padding: '0 12px', borderRadius: '10px',
    border: `1px solid ${err ? '#f87171' : '#e5e7eb'}`, background: '#fff', color: '#9ca3af',
    boxShadow: err ? '0 0 0 3px rgba(248,113,113,0.15)' : 'none',
  });
  const inputStyle = { flex: 1, border: 'none', outline: 'none', fontSize: '13px', fontFamily: 'inherit', color: '#111827', background: 'transparent' };

  return (
    <div style={{ width: '600px', height: '400px', display: 'flex', fontFamily: "'Inter', sans-serif", background: '#fff' }}>
      <div style={{ width: '230px', position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, #111827, #1e3a8a)', padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ position: 'absolute', width: '220px', height: '220px', borderRadius: '50%', border: '40px solid rgba(96,165,250,0.12)', right: '-90px', bottom: '-70px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fff', fontWeight: 700, fontSize: '15px' }}>
          <Icon name="layers" size={20} color="#60a5fa" /> Stackr
        </div>
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '26px', lineHeight: 1.1, color: '#fff', marginBottom: '10px' }}>“The calmest way to ship software.”</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}>Priya N. · Staff Engineer</div>
        </div>
      </div>

      <form noValidate onSubmit={e => { e.preventDefault(); setSubmitted(true); }} style={{ flex: 1, padding: '26px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Welcome back</h2>
        <p style={{ fontSize: '12px', color: '#6b7280', marginBottom: '16px' }}>New here? <a href="#signup" onClick={e => e.preventDefault()} style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'none' }}>Create an account</a></p>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          {['Google', 'GitHub'].map(p => (
            <button key={p} type="button" style={{ flex: 1, height: '36px', borderRadius: '10px', border: '1px solid #e5e7eb', background: '#fff', fontSize: '12px', fontWeight: 500, color: '#374151', fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '7px' }}>
              <span style={{ width: '16px', height: '16px', borderRadius: '4px', background: p === 'Google' ? '#ea4335' : '#111827', color: '#fff', fontSize: '10px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{p[0]}</span>{p}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '10px', color: '#9ca3af', marginBottom: '14px' }}>
          <span style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />OR<span style={{ flex: 1, height: '1px', background: '#e5e7eb' }} />
        </div>

        <div style={field(emailError)}>
          <Icon name="mail" size={15} />
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" aria-label="Email" aria-invalid={emailError} style={inputStyle} />
        </div>
        <div style={{ fontSize: '10px', color: '#ef4444', height: '14px', margin: '3px 0 4px' }}>{emailError && 'Enter a valid email address'}</div>

        <div style={field(passError)}>
          <Icon name="lock" size={15} />
          <input type={show ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" aria-label="Password" aria-invalid={passError} style={inputStyle} />
          <button type="button" onClick={() => setShow(s => !s)} aria-label={show ? 'Hide password' : 'Show password'} style={{ display: 'flex', border: 'none', background: 'none', color: '#9ca3af', cursor: 'pointer', padding: 0 }}>
            <Icon name={show ? 'eyeOff' : 'eye'} size={15} />
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', height: '14px', margin: '3px 0 10px' }}>
          <span style={{ color: '#ef4444' }}>{passError && 'At least 8 characters'}</span>
          <a href="#forgot" onClick={e => e.preventDefault()} style={{ color: '#6b7280', textDecoration: 'none' }}>Forgot password?</a>
        </div>

        <button type="submit" style={{ height: '40px', borderRadius: '10px', border: 'none', background: '#111827', color: '#fff', fontSize: '13px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', boxShadow: '0 6px 16px rgba(17,24,39,0.25)' }}>Sign in</button>
      </form>
    </div>
  );
}
