import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const REPLIES = ['Love that idea 🙌', 'Can you share the Figma link?', 'Let’s sync tomorrow at 10.', 'Shipping it! 🚀'];

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, me: false, text: 'Hey! Did you get a chance to look at the new onboarding?' },
    { id: 2, me: true, text: 'Yes! The progress stepper feels so much clearer.' },
    { id: 3, me: false, text: 'Right? Activation is already up in the beta cohort.' },
  ]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef(null);
  const nextId = useRef(4);
  const replyTimer = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  useEffect(() => () => clearTimeout(replyTimer.current), []);

  const send = e => {
    e.preventDefault();
    const text = draft.trim();
    if (!text) return;
    setMessages(m => [...m, { id: nextId.current++, me: true, text }]);
    setDraft('');
    setTyping(true);
    clearTimeout(replyTimer.current);
    replyTimer.current = setTimeout(() => {
      setTyping(false);
      setMessages(m => [...m, { id: nextId.current++, me: false, text: REPLIES[m.length % REPLIES.length] }]);
    }, 1400);
  };

  return (
    <div style={{ width: '600px', height: '400px', background: '#eef0f5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
      <style>{`@keyframes uaTyping { 0%, 60%, 100% { transform: translateY(0); opacity: 0.4; } 30% { transform: translateY(-4px); opacity: 1; } }`}</style>
      <div style={{ width: '360px', height: '360px', borderRadius: '20px', background: '#fff', boxShadow: '0 20px 50px rgba(30,41,59,0.12)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderBottom: '1px solid #f1f2f6' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'linear-gradient(135deg, #34d399, #3b82f6)', color: '#fff', fontWeight: 700, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>M</div>
            <span style={{ position: 'absolute', right: 0, bottom: 0, width: '9px', height: '9px', borderRadius: '50%', background: '#22c55e', border: '2px solid #fff' }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>Maya Lin</div>
            <div style={{ fontSize: '11px', color: typing ? '#3b82f6' : '#22c55e' }}>{typing ? 'typing…' : 'Online'}</div>
          </div>
          <Icon name="more" size={18} color="#94a3b8" />
        </div>

        <div ref={listRef} role="log" aria-live="polite" style={{ flex: 1, overflowY: 'auto', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px', scrollBehavior: 'smooth' }}>
          <div style={{ alignSelf: 'center', fontSize: '10px', color: '#94a3b8', margin: '0 0 6px' }}>Today</div>
          {messages.map((m, i) => {
            const nextSame = messages[i + 1]?.me === m.me;
            return (
              <div key={m.id} style={{
                alignSelf: m.me ? 'flex-end' : 'flex-start', maxWidth: '75%', padding: '8px 12px', fontSize: '12.5px', lineHeight: 1.45,
                borderRadius: m.me ? `16px 16px ${nextSame ? 16 : 4}px 16px` : `16px 16px 16px ${nextSame ? 16 : 4}px`,
                background: m.me ? 'linear-gradient(135deg, #3b82f6, #6366f1)' : '#f1f3f8', color: m.me ? '#fff' : '#0f172a',
                animation: 'fadeSlideUp 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}>{m.text}</div>
            );
          })}
          {typing && (
            <div style={{ alignSelf: 'flex-start', display: 'flex', gap: '4px', padding: '11px 14px', borderRadius: '16px 16px 16px 4px', background: '#f1f3f8' }}>
              {[0, 1, 2].map(i => <span key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#64748b', animation: `uaTyping 1.2s ${i * 0.15}s infinite` }} />)}
            </div>
          )}
        </div>

        <form onSubmit={send} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 12px', borderTop: '1px solid #f1f2f6' }}>
          <button type="button" aria-label="Attach file" style={{ display: 'flex', border: 'none', background: 'none', color: '#94a3b8', cursor: 'pointer', padding: '4px' }}><Icon name="paperclip" size={17} /></button>
          <input value={draft} onChange={e => setDraft(e.target.value)} placeholder="Write a message…" aria-label="Message"
            style={{ flex: 1, height: '36px', padding: '0 12px', borderRadius: '999px', border: 'none', background: '#f1f3f8', fontSize: '12.5px', fontFamily: 'inherit', outline: 'none', color: '#0f172a' }} />
          <button type="submit" disabled={!draft.trim()} aria-label="Send" style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', background: draft.trim() ? '#3b82f6' : '#cbd5e1', color: '#fff', cursor: draft.trim() ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
            <Icon name="send" size={15} />
          </button>
        </form>
      </div>
    </div>
  );
}
