import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const LENGTH = 6;
const CORRECT = '482913';

export default function OTPVerify() {
  const [digits, setDigits] = useState(Array(LENGTH).fill(''));
  const [seconds, setSeconds] = useState(30);
  const refs = useRef([]);

  const code = digits.join('');
  const complete = code.length === LENGTH;
  const status = complete ? (code === CORRECT ? 'ok' : 'bad') : 'idle';

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds]);

  const setAt = (i, v) => setDigits(d => d.map((x, j) => (j === i ? v : x)));

  const onChange = (i, e) => {
    const v = e.target.value.replace(/\D/g, '');
    if (!v) return setAt(i, '');
    if (v.length > 1) {
      const chars = v.slice(0, LENGTH - i).split('');
      setDigits(d => d.map((x, j) => (j >= i && j < i + chars.length ? chars[j - i] : x)));
      refs.current[Math.min(i + chars.length, LENGTH - 1)]?.focus();
      return;
    }
    setAt(i, v);
    if (i < LENGTH - 1) refs.current[i + 1]?.focus();
  };

  const onKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !digits[i] && i > 0) { setAt(i - 1, ''); refs.current[i - 1]?.focus(); }
    if (e.key === 'ArrowLeft' && i > 0) refs.current[i - 1]?.focus();
    if (e.key === 'ArrowRight' && i < LENGTH - 1) refs.current[i + 1]?.focus();
  };

  const border = status === 'ok' ? '#22c55e' : status === 'bad' ? '#ef4444' : null;

  return (
    <div style={{ width: '600px', height: '400px', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ textAlign: 'center', width: '380px' }}>
        <div style={{ width: '52px', height: '52px', borderRadius: '16px', margin: '0 auto 16px', background: status === 'ok' ? '#dcfce7' : '#eef2ff', color: status === 'ok' ? '#16a34a' : '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}>
          <Icon name={status === 'ok' ? 'checkCircle' : 'shield'} size={24} />
        </div>
        <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#18181b', marginBottom: '6px' }}>{status === 'ok' ? 'Verified!' : 'Check your phone'}</h2>
        <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '22px' }}>We sent a 6-digit code to <b style={{ color: '#3f3f46' }}>+1 ••• ••• 0142</b><br /><span style={{ fontSize: '11px', color: '#a1a1aa' }}>Demo code: {CORRECT}</span></p>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', animation: status === 'bad' ? 'uaOtpShake 0.4s ease' : 'none' }}>
          <style>{`@keyframes uaOtpShake { 0%,100% { transform: translateX(0); } 25%,75% { transform: translateX(-6px); } 50% { transform: translateX(6px); } }`}</style>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={el => { refs.current[i] = el; }}
              value={d}
              onChange={e => onChange(i, e)}
              onKeyDown={e => onKeyDown(i, e)}
              onFocus={e => e.target.select()}
              inputMode="numeric" autoComplete="one-time-code" maxLength={LENGTH}
              aria-label={`Digit ${i + 1}`}
              style={{
                width: '48px', height: '56px', borderRadius: '12px', textAlign: 'center',
                fontSize: '22px', fontWeight: 600, fontFamily: "'DM Mono', monospace", color: '#18181b',
                border: `2px solid ${border || (d ? '#a5b4fc' : '#e4e4e7')}`, background: '#fff', outline: 'none',
                boxShadow: d && !border ? '0 0 0 4px rgba(99,102,241,0.08)' : 'none', transition: 'border-color 0.2s',
                marginRight: i === 2 ? '10px' : 0,
              }}
            />
          ))}
        </div>

        <div style={{ height: '18px', marginTop: '10px', fontSize: '12px', color: '#ef4444' }}>{status === 'bad' && 'That code is not right. Try again.'}</div>
        <div style={{ fontSize: '12px', color: '#71717a', marginTop: '8px' }}>
          Didn’t get it?{' '}
          {seconds > 0
            ? <span style={{ color: '#a1a1aa' }}>Resend in 0:{String(seconds).padStart(2, '0')}</span>
            : <button onClick={() => { setSeconds(30); setDigits(Array(LENGTH).fill('')); }} style={{ border: 'none', background: 'none', color: '#4f46e5', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', fontSize: '12px', padding: 0 }}>Resend code</button>}
        </div>
      </div>
    </div>
  );
}
