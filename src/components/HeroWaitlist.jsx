import { useState } from 'react';
import Icon from './Icon';

const INBOX = [
  { from: 'Maya Chen', subject: 'Q4 board deck, final version', summary: 'Needs your sign-off by Friday. Two slide edits.', tag: 'Action' },
  { from: 'Ledgerly', subject: 'Your payout is on the way', summary: '$12,480.00 arrives Tuesday.', tag: 'FYI' },
  { from: 'Leo Brandt', subject: 'Re: offsite dates', summary: 'Prefers the 14th. Venue is held until Monday.', tag: 'Reply' },
];

export default function HeroWaitlist() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#fbfaf9', color: '#171717', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <header style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 26px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', fontWeight: 600 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M1 4.5 8 10l7-5.5V8l-7 5.5L1 8Z" fill="#171717" /></svg>
          Tern
        </span>
        <span style={{ fontSize: '11px', color: '#737373' }}>Launching spring 2027</span>
      </header>

      <h1 style={{ fontFamily: "'Instrument Serif', serif", fontWeight: 400, fontSize: '50px', lineHeight: 1, letterSpacing: '-1px', textAlign: 'center', marginTop: '6px' }}>
        Email, minus the anxiety.
      </h1>
      <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#525252', textAlign: 'center', maxWidth: '360px', margin: '10px 0 16px' }}>
        Tern reads your inbox overnight and hands you a two-minute brief each morning. Reply only to what needs you.
      </p>

      {joined ? (
        <div role="status" style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 14px', borderRadius: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', fontSize: '12px', fontWeight: 500 }}>
          <Icon name="checkCircle" size={15} /> You’re on the list. We’ll write to {email} once, when it’s ready.
        </div>
      ) : (
        <form onSubmit={e => { e.preventDefault(); if (valid) setJoined(true); }} style={{ display: 'flex', gap: '6px' }}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Work email" aria-label="Work email" style={{ width: '220px', height: '38px', padding: '0 12px', borderRadius: '8px', border: '1px solid #d4d4d4', background: '#fff', fontFamily: 'inherit', fontSize: '12px', color: '#171717', outline: 'none' }} />
          <button type="submit" disabled={!valid} style={{ height: '38px', padding: '0 14px', borderRadius: '8px', border: 'none', background: '#171717', color: '#fff', fontFamily: 'inherit', fontSize: '12px', fontWeight: 600, cursor: valid ? 'pointer' : 'not-allowed', opacity: valid ? 1 : 0.45 }}>Request access</button>
        </form>
      )}
      <div style={{ fontSize: '10px', color: '#a3a3a3', marginTop: '8px' }}>4,812 people ahead of you · No spam, one email at launch</div>

      {/* Product preview, cropped */}
      <div style={{ position: 'absolute', left: '90px', right: '90px', top: '262px', height: '170px', borderRadius: '12px 12px 0 0', background: '#fff', border: '1px solid #e5e5e5', borderBottom: 'none', boxShadow: '0 -10px 40px rgba(23,23,23,0.06)', padding: '12px 14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '11px', fontWeight: 600 }}>Morning brief · Mon, Oct 5</span>
          <span style={{ fontSize: '10px', color: '#737373' }}>3 of 47 need you</span>
        </div>
        {INBOX.map(m => (
          <div key={m.subject} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '7px 0', borderTop: '1px solid #f5f5f5' }}>
            <span style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#f5f5f5', color: '#525252', fontSize: '9px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{m.from[0]}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px' }}><b>{m.from}</b><span style={{ fontSize: '9px', color: m.tag === 'Action' ? '#b45309' : '#737373' }}>{m.tag}</span></div>
              <div style={{ fontSize: '10px', color: '#404040', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.subject} <span style={{ color: '#a3a3a3' }}>— {m.summary}</span></div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '50px', background: 'linear-gradient(transparent, #fbfaf9)', pointerEvents: 'none' }} />
    </div>
  );
}
