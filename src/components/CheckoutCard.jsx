import { useState } from 'react';

const formatNumber = v => v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
const formatExpiry = v => {
  const d = v.replace(/\D/g, '').slice(0, 4);
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
};

export default function CheckoutCard() {
  const [number, setNumber] = useState('4242 4242 4242 4242');
  const [name, setName] = useState('ADA LOVELACE');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('');
  const [flipped, setFlipped] = useState(false);

  const brand = number.startsWith('4') ? 'VISA' : /^5[1-5]/.test(number) ? 'MASTERCARD' : number.startsWith('3') ? 'AMEX' : 'CARD';
  const masked = (number + '•••• •••• •••• ••••'.slice(number.length)).padEnd(19, '•');

  const input = { width: '100%', height: '38px', padding: '0 11px', borderRadius: '9px', border: '1px solid #e4e4e7', fontSize: '13px', fontFamily: "'DM Mono', monospace", color: '#18181b', outline: 'none', background: '#fff' };
  const label = { display: 'block', fontSize: '11px', fontWeight: 500, color: '#52525b', marginBottom: '5px' };

  return (
    <div style={{ width: '600px', height: '400px', background: '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '250px', height: '158px', perspective: '1000px' }}>
        <div style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)', transform: flipped ? 'rotateY(180deg)' : 'none' }}>
          <div style={{ ...face, background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 55%, #06b6d4 120%)', padding: '18px 20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: '16px', background: 'radial-gradient(circle at 85% 15%, rgba(255,255,255,0.25), transparent 45%)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: '34px', height: '24px', borderRadius: '5px', background: 'linear-gradient(135deg, #fde68a, #d97706)' }} />
              <span style={{ fontSize: '13px', fontWeight: 800, fontStyle: 'italic', letterSpacing: '1px', color: '#fff' }}>{brand}</span>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '15px', letterSpacing: '0.5px', whiteSpace: 'nowrap', color: '#fff', margin: 'auto 0 10px' }}>{masked}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: 'rgba(255,255,255,0.7)' }}>
              <span style={{ textTransform: 'uppercase', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '150px' }}>{name || 'YOUR NAME'}</span>
              <span style={{ fontFamily: "'DM Mono', monospace" }}>{expiry || 'MM/YY'}</span>
            </div>
          </div>
          <div style={{ ...face, transform: 'rotateY(180deg)', background: 'linear-gradient(135deg, #312e81, #1e1b4b)' }}>
            <div style={{ height: '34px', background: '#0b0b12', marginTop: '20px' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 20px' }}>
              <div style={{ flex: 1, height: '28px', borderRadius: '4px', background: 'repeating-linear-gradient(90deg, #e5e7eb 0 6px, #f9fafb 6px 12px)' }} />
              <div style={{ width: '50px', height: '28px', borderRadius: '4px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Mono', monospace", fontSize: '13px', color: '#18181b' }}>{cvc || '•••'}</div>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={e => e.preventDefault()} style={{ width: '250px' }}>
        <label style={label}>Card number
          <input style={{ ...input, marginTop: '5px' }} value={number} inputMode="numeric" autoComplete="cc-number" onChange={e => setNumber(formatNumber(e.target.value))} onFocus={() => setFlipped(false)} />
        </label>
        <label style={{ ...label, marginTop: '10px' }}>Name on card
          <input style={{ ...input, marginTop: '5px', fontFamily: "'Inter', sans-serif" }} value={name} autoComplete="cc-name" onChange={e => setName(e.target.value.toUpperCase().slice(0, 26))} onFocus={() => setFlipped(false)} />
        </label>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <label style={{ ...label, flex: 1 }}>Expiry
            <input style={{ ...input, marginTop: '5px' }} value={expiry} placeholder="MM/YY" inputMode="numeric" autoComplete="cc-exp" onChange={e => setExpiry(formatExpiry(e.target.value))} onFocus={() => setFlipped(false)} />
          </label>
          <label style={{ ...label, flex: 1 }}>CVC
            <input style={{ ...input, marginTop: '5px' }} value={cvc} placeholder="123" inputMode="numeric" autoComplete="cc-csc" onChange={e => setCvc(e.target.value.replace(/\D/g, '').slice(0, 4))} onFocus={() => setFlipped(true)} onBlur={() => setFlipped(false)} />
          </label>
        </div>
        <button type="submit" style={{ width: '100%', height: '40px', marginTop: '14px', borderRadius: '10px', border: 'none', background: '#4338ca', color: '#fff', fontSize: '13px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', boxShadow: '0 8px 20px rgba(67,56,202,0.3)' }}>Pay $128.00</button>
      </form>
    </div>
  );
}

const face = { position: 'absolute', inset: 0, borderRadius: '16px', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', overflow: 'hidden', boxShadow: '0 20px 40px rgba(30,27,75,0.35)' };
