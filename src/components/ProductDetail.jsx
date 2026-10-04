import { useState } from 'react';
import Icon from './Icon';

const COLORS = [
  { name: 'Clay', hex: '#c2703d', bg: 'linear-gradient(160deg, #f3d9c4, #c2703d)' },
  { name: 'Moss', hex: '#5f7a4a', bg: 'linear-gradient(160deg, #dce6cf, #5f7a4a)' },
  { name: 'Ink', hex: '#27303f', bg: 'linear-gradient(160deg, #cfd6e2, #27303f)' },
];
const SIZES = ['38', '39', '40', '41', '42', '43'];
const SOLD_OUT = ['43'];

export default function ProductDetail() {
  const [color, setColor] = useState(0);
  const [size, setSize] = useState('41');
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <div style={{ width: '600px', height: '400px', display: 'flex', background: '#fffdf9', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '270px', position: 'relative', background: COLORS[color].bg, transition: 'background 0.4s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '170px', height: '74px', borderRadius: '50% 60% 18px 18px / 70% 80% 18px 18px', background: COLORS[color].hex, boxShadow: `0 30px 40px -12px ${COLORS[color].hex}aa, inset 0 -10px 0 rgba(0,0,0,0.15)`, transform: 'rotate(-12deg)', transition: 'background 0.4s' }} />
        <span style={{ position: 'absolute', left: '16px', top: '16px', fontSize: '10px', fontWeight: 700, letterSpacing: '1px', padding: '4px 8px', borderRadius: '6px', background: '#fff', color: '#1c1917' }}>NEW</span>
        <button onClick={() => setLiked(l => !l)} aria-pressed={liked} aria-label="Save to wishlist" style={{ position: 'absolute', right: '14px', top: '14px', width: '34px', height: '34px', borderRadius: '50%', border: 'none', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: liked ? 'scale(1.1)' : 'none', transition: 'transform 0.2s' }}>
          <Icon name="heart" size={16} color={liked ? '#e11d48' : '#57534e'} fill={liked ? '#e11d48' : 'none'} />
        </button>
        <div style={{ position: 'absolute', bottom: '14px', display: 'flex', gap: '6px' }}>
          {[0, 1, 2, 3].map(i => <span key={i} style={{ width: i === 0 ? '18px' : '6px', height: '6px', borderRadius: '3px', background: i === 0 ? '#fff' : 'rgba(255,255,255,0.5)' }} />)}
        </div>
      </div>

      <div style={{ flex: 1, padding: '22px 26px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '11px', color: '#a8a29e', letterSpacing: '1px', textTransform: 'uppercase' }}>Footwear · Unisex</div>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 600, color: '#1c1917', margin: '4px 0 2px' }}>Terra Runner</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#78716c', marginBottom: '10px' }}>
          <span style={{ color: '#f59e0b' }}>★★★★★</span> 4.8 · 312 reviews
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '14px' }}>
          <span style={{ fontSize: '22px', fontWeight: 700, color: '#1c1917' }}>$128</span>
          <span style={{ fontSize: '13px', color: '#a8a29e', textDecoration: 'line-through' }}>$160</span>
          <span style={{ fontSize: '11px', fontWeight: 600, color: '#15803d' }}>-20%</span>
        </div>

        <div style={{ fontSize: '11px', fontWeight: 600, color: '#44403c', marginBottom: '6px' }}>Color · <span style={{ fontWeight: 400 }}>{COLORS[color].name}</span></div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
          {COLORS.map((c, i) => (
            <button key={c.name} onClick={() => setColor(i)} aria-label={c.name} aria-pressed={color === i} style={{ width: '26px', height: '26px', borderRadius: '50%', background: c.hex, cursor: 'pointer', border: '2px solid #fffdf9', boxShadow: color === i ? `0 0 0 2px ${c.hex}` : '0 0 0 1px #e7e5e4', transition: 'box-shadow 0.2s' }} />
          ))}
        </div>

        <div style={{ fontSize: '11px', fontWeight: 600, color: '#44403c', marginBottom: '6px' }}>Size (EU)</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '5px', marginBottom: 'auto' }}>
          {SIZES.map(s => {
            const out = SOLD_OUT.includes(s);
            return (
              <button key={s} disabled={out} onClick={() => setSize(s)} style={{
                height: '30px', borderRadius: '7px', fontSize: '12px', fontFamily: 'inherit', cursor: out ? 'not-allowed' : 'pointer',
                border: size === s ? '1.5px solid #1c1917' : '1px solid #e7e5e4', background: size === s ? '#1c1917' : '#fff',
                color: out ? '#d6d3d1' : size === s ? '#fff' : '#44403c', textDecoration: out ? 'line-through' : 'none',
              }}>{s}</button>
            );
          })}
        </div>

        <button onClick={() => setAdded(true)} style={{ height: '42px', borderRadius: '12px', border: 'none', background: added ? '#15803d' : '#1c1917', color: '#fff', fontSize: '13px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background 0.3s' }}>
          <Icon name={added ? 'check' : 'cart'} size={15} /> {added ? `Added · size ${size}` : 'Add to cart'}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#78716c', marginTop: '8px' }}><Icon name="truck" size={13} /> Free delivery by Thu, Oct 8</div>
      </div>
    </div>
  );
}
