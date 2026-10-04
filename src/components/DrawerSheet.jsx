import { useState } from 'react';
import Icon from './Icon';

const ITEMS = [
  { name: 'Linen Overshirt', variant: 'Sand · M', price: 89, qty: 1, color: '#d6c7a8' },
  { name: 'Merino Crew', variant: 'Charcoal · L', price: 120, qty: 2, color: '#3f3f46' },
  { name: 'Canvas Tote', variant: 'Natural', price: 35, qty: 1, color: '#e7dcc5' },
];

export default function DrawerSheet() {
  const [open, setOpen] = useState(true);
  const [items, setItems] = useState(ITEMS);
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const freeShipAt = 300;

  const setQty = (name, d) => setItems(is => is.map(i => (i.name === name ? { ...i, qty: Math.max(0, i.qty + d) } : i)).filter(i => i.qty > 0));

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#f5f2ec', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ padding: '22px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '28px', color: '#1c1917' }}>Atelier</div>
        <button onClick={() => setOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', borderRadius: '999px', border: '1px solid #d6d0c4', background: '#fff', fontSize: '12px', fontFamily: 'inherit', cursor: 'pointer', color: '#1c1917' }}>
          <Icon name="cart" size={14} /> Cart ({items.reduce((s, i) => s + i.qty, 0)})
        </button>
      </div>

      <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(28,25,23,0.35)', opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none', transition: 'opacity 0.3s' }} />
      <aside role="dialog" aria-label="Shopping cart" style={{
        position: 'absolute', top: 0, right: 0, bottom: 0, width: '300px', background: '#fff',
        boxShadow: '-20px 0 50px rgba(28,25,23,0.15)', display: 'flex', flexDirection: 'column',
        transform: open ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', borderBottom: '1px solid #f0ece4' }}>
          <span style={{ fontSize: '14px', fontWeight: 600, color: '#1c1917' }}>Your cart</span>
          <button onClick={() => setOpen(false)} aria-label="Close cart" style={{ display: 'flex', border: 'none', background: '#f5f2ec', borderRadius: '8px', padding: '6px', cursor: 'pointer', color: '#57534e' }}><Icon name="x" size={14} /></button>
        </div>

        <div style={{ padding: '12px 18px', borderBottom: '1px solid #f0ece4' }}>
          <div style={{ fontSize: '11px', color: '#57534e', marginBottom: '6px' }}>{subtotal >= freeShipAt ? '🎉 You unlocked free shipping' : `$${freeShipAt - subtotal} away from free shipping`}</div>
          <div style={{ height: '4px', borderRadius: '4px', background: '#f0ece4' }}><div style={{ height: '100%', width: `${Math.min(100, (subtotal / freeShipAt) * 100)}%`, borderRadius: '4px', background: '#65a30d', transition: 'width 0.3s' }} /></div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '6px 18px' }}>
          {items.map(i => (
            <div key={i.name} style={{ display: 'flex', gap: '10px', padding: '10px 0', borderBottom: '1px solid #f7f4ee' }}>
              <div style={{ width: '46px', height: '54px', borderRadius: '8px', background: i.color }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#1c1917' }}>{i.name}</div>
                <div style={{ fontSize: '11px', color: '#a8a29e', marginBottom: '6px' }}>{i.variant}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #e7e2d8', borderRadius: '7px' }}>
                  <button onClick={() => setQty(i.name, -1)} aria-label="Decrease" style={qtyBtn}><Icon name="minus" size={11} /></button>
                  <span style={{ width: '20px', textAlign: 'center', fontSize: '11px' }}>{i.qty}</span>
                  <button onClick={() => setQty(i.name, 1)} aria-label="Increase" style={qtyBtn}><Icon name="plus" size={11} /></button>
                </div>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 600, color: '#1c1917' }}>${i.price * i.qty}</div>
            </div>
          ))}
          {items.length === 0 && <div style={{ textAlign: 'center', padding: '40px 0', fontSize: '12px', color: '#a8a29e' }}>Your cart is empty</div>}
        </div>

        <div style={{ padding: '14px 18px', borderTop: '1px solid #f0ece4' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '10px' }}><span style={{ color: '#57534e' }}>Subtotal</span><b style={{ color: '#1c1917' }}>${subtotal}.00</b></div>
          <button disabled={!items.length} style={{ width: '100%', height: '40px', borderRadius: '10px', border: 'none', background: '#1c1917', color: '#fff', fontSize: '13px', fontWeight: 600, fontFamily: 'inherit', cursor: items.length ? 'pointer' : 'not-allowed', opacity: items.length ? 1 : 0.4 }}>Checkout</button>
        </div>
      </aside>
    </div>
  );
}

const qtyBtn = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', border: 'none', background: 'transparent', color: '#57534e', cursor: 'pointer' };
