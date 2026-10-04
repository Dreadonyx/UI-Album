import { useState } from 'react';
import Icon from './Icon';

const PLACEMENT = {
  top: { box: { bottom: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' }, arrow: { top: '100%', left: '50%', transform: 'translateX(-50%)', borderTopColor: '#18181b' }, from: 'translate(-50%, 4px)' },
  bottom: { box: { top: 'calc(100% + 10px)', left: '50%', transform: 'translateX(-50%)' }, arrow: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', borderBottomColor: '#18181b' }, from: 'translate(-50%, -4px)' },
  left: { box: { right: 'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' }, arrow: { left: '100%', top: '50%', transform: 'translateY(-50%)', borderLeftColor: '#18181b' }, from: 'translate(4px, -50%)' },
  right: { box: { left: 'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)' }, arrow: { right: '100%', top: '50%', transform: 'translateY(-50%)', borderRightColor: '#18181b' }, from: 'translate(-4px, -50%)' },
};

function Tip({ side, label, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const p = PLACEMENT[side];
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      <span role="tooltip" style={{
        position: 'absolute', zIndex: 5, whiteSpace: 'nowrap', pointerEvents: 'none',
        padding: '6px 10px', borderRadius: '8px', background: '#18181b', color: '#fafafa',
        fontSize: '11px', fontWeight: 500, boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        opacity: open ? 1 : 0, transition: 'opacity 0.15s, transform 0.15s',
        ...p.box, transform: open ? p.box.transform : p.from,
      }}>
        {label}
        <span style={{ position: 'absolute', border: '5px solid transparent', ...p.arrow }} />
      </span>
    </span>
  );
}

const btn = { width: '44px', height: '44px', borderRadius: '12px', border: '1px solid #e4e4e7', background: '#fff', color: '#3f3f46', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.04)' };

export default function TooltipShowcase() {
  return (
    <div style={{ width: '600px', height: '400px', background: '#fafafa', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '50px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ display: 'flex', gap: '14px' }}>
        <Tip side="top" label="Bold  ⌘B" defaultOpen><button style={btn} aria-label="Bold"><b style={{ fontSize: '16px' }}>B</b></button></Tip>
        <Tip side="bottom" label="Add a link"><button style={btn} aria-label="Link"><Icon name="link" size={17} /></button></Tip>
        <Tip side="left" label="Insert image"><button style={btn} aria-label="Image"><Icon name="image" size={17} /></button></Tip>
        <Tip side="right" label="Code block"><button style={btn} aria-label="Code"><Icon name="code" size={17} /></button></Tip>
      </div>
      <p style={{ fontSize: '13px', color: '#52525b', maxWidth: '340px', textAlign: 'center', lineHeight: 1.7 }}>
        Tooltips should explain, never surprise. Hover or focus{' '}
        <Tip side="top" label="Opens on hover and keyboard focus">
          <span tabIndex={0} style={{ color: '#7c3aed', fontWeight: 600, borderBottom: '1.5px dashed #c4b5fd', cursor: 'help', outline: 'none' }}>this term</span>
        </Tip>{' '}to see an inline hint with an arrow.
      </p>
    </div>
  );
}
