import { useState } from 'react';

export default function NeumorphicForm() {
  const [focused, setFocused] = useState(null);
  const [values, setValues] = useState({ name: '', email: '', msg: '' });
  const fields = [
    { key: 'name', label: 'Full Name', type: 'text' },
    { key: 'email', label: 'Email Address', type: 'email' },
    { key: 'msg', label: 'Message', type: 'textarea' },
  ];
  return (
    <div style={{
      width: '600px', height: '400px',
      background: '#1a1a2e',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Lora', serif",
    }}>
      <div style={{ width: '380px', background: '#1a1a2e', borderRadius: '20px', padding: '32px', boxShadow: '8px 8px 20px #111125, -8px -8px 20px #232340' }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: '#f0eef5', marginBottom: '24px', textAlign: 'center' }}>Get in Touch</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {fields.map(f => (
            <div key={f.key} style={{ position: 'relative' }}>
              <label style={{
                position: 'absolute', left: '16px',
                top: focused === f.key || values[f.key] ? '6px' : '14px',
                fontSize: focused === f.key || values[f.key] ? '9px' : '12px',
                fontFamily: "'DM Mono', monospace",
                color: focused === f.key ? '#ec4899' : 'rgba(255,255,255,0.3)',
                transition: 'all 0.25s ease', pointerEvents: 'none', letterSpacing: '0.5px',
              }}>{f.label}</label>
              {f.type === 'textarea' ? (
                <textarea onClick={e => e.stopPropagation()} onFocus={() => setFocused(f.key)} onBlur={() => setFocused(null)}
                  onChange={e => { e.stopPropagation(); setValues(v => ({ ...v, [f.key]: e.target.value })); }} value={values[f.key]}
                  style={{
                    width: '100%', height: '60px', resize: 'none', background: 'transparent',
                    border: 'none', borderBottom: `2px solid ${focused === f.key ? '#ec4899' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '8px', padding: '22px 16px 8px', fontSize: '13px', fontFamily: "'Lora', serif",
                    color: '#f0eef5', outline: 'none',
                    boxShadow: focused === f.key ? 'inset 3px 3px 8px #111125, inset -3px -3px 8px #232340, 0 0 15px rgba(236,72,153,0.1)' : 'inset 3px 3px 8px #111125, inset -3px -3px 8px #232340',
                    transition: 'all 0.3s ease',
                  }} />
              ) : (
                <input type={f.type} onClick={e => e.stopPropagation()} onFocus={() => setFocused(f.key)} onBlur={() => setFocused(null)}
                  onChange={e => { e.stopPropagation(); setValues(v => ({ ...v, [f.key]: e.target.value })); }} value={values[f.key]}
                  style={{
                    width: '100%', height: '44px', background: 'transparent',
                    border: 'none', borderBottom: `2px solid ${focused === f.key ? '#ec4899' : 'rgba(255,255,255,0.08)'}`,
                    borderRadius: '8px', padding: '18px 16px 4px', fontSize: '13px', fontFamily: "'Lora', serif",
                    color: '#f0eef5', outline: 'none',
                    boxShadow: focused === f.key ? 'inset 3px 3px 8px #111125, inset -3px -3px 8px #232340, 0 0 15px rgba(236,72,153,0.1)' : 'inset 3px 3px 8px #111125, inset -3px -3px 8px #232340',
                    transition: 'all 0.3s ease',
                  }} />
              )}
            </div>
          ))}
        </div>
        <button style={{
          marginTop: '20px', width: '100%', fontFamily: "'DM Mono', monospace", fontSize: '11px',
          padding: '12px', borderRadius: '10px', border: 'none',
          background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', color: '#fff',
          cursor: 'pointer', letterSpacing: '1.5px', textTransform: 'uppercase',
          boxShadow: '4px 4px 12px #111125, -4px -4px 12px #232340, 0 4px 20px rgba(236,72,153,0.3)',
        }}>Send Message</button>
      </div>
    </div>
  );
}
