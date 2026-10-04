import { useState } from 'react';
import Icon from './Icon';

const FAQS = [
  { q: 'Can I use the components in commercial projects?', a: 'Yes. Every component and prompt is free to use in personal and commercial work, no attribution required.' },
  { q: 'Do the prompts work with any AI tool?', a: 'They are written to be tool-agnostic: paste them into Claude, v0, Cursor or any assistant that writes front-end code.' },
  { q: 'Are the components accessible?', a: 'They use semantic elements, visible focus states, ARIA roles where needed and respect reduced-motion preferences.' },
  { q: 'How often are new components added?', a: 'New drops land every couple of weeks. Star the repo to get notified when a new collection ships.' },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div style={{ width: '600px', height: '400px', background: '#0c0c0c', display: 'flex', gap: '30px', padding: '30px 36px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '150px', flexShrink: 0 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '2px', color: '#d9f99d', textTransform: 'uppercase', marginBottom: '10px' }}>FAQ</div>
        <div style={{ fontFamily: "'Instrument Serif', serif", fontSize: '34px', lineHeight: 1, color: '#fafafa' }}>Questions, answered.</div>
        <p style={{ fontSize: '11px', color: '#737373', marginTop: '12px', lineHeight: 1.5 }}>Can’t find yours? <span style={{ color: '#d9f99d' }}>Talk to us →</span></p>
      </div>
      <div style={{ flex: 1 }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} style={{ borderBottom: '1px solid #262626' }}>
              <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 0', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: isOpen ? '#d9f99d' : '#525252' }}>0{i + 1}</span>
                <span style={{ flex: 1, fontSize: '13px', fontWeight: 500, color: isOpen ? '#fafafa' : '#a3a3a3', transition: 'color 0.2s' }}>{f.q}</span>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', border: `1px solid ${isOpen ? '#d9f99d' : '#404040'}`, color: isOpen ? '#0c0c0c' : '#a3a3a3', background: isOpen ? '#d9f99d' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)' }}>
                  <Icon name="plus" size={12} strokeWidth={2.5} />
                </span>
              </button>
              <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 0.35s cubic-bezier(0.16,1,0.3,1)' }}>
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ fontSize: '12px', lineHeight: 1.6, color: '#8a8a8a', padding: '0 34px 14px 24px' }}>{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
