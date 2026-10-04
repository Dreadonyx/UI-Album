import { useState } from 'react';
import Icon from './Icon';

const NAV = [
  { group: 'Getting started', items: ['Introduction', 'Installation', 'Theming'] },
  { group: 'Components', items: ['Button', 'Dialog', 'Tabs', 'Tooltip'] },
];
const TOC = ['Usage', 'Variants', 'Props', 'Accessibility'];

export default function DocsLayout() {
  const [page, setPage] = useState('Button');
  const [section, setSection] = useState('Variants');

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '12px', height: '44px', padding: '0 16px', borderBottom: '1px solid #f1f1f4' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '13px', color: '#111' }}><Icon name="book" size={15} color="#7c3aed" /> Prism UI</span>
        <span style={{ fontSize: '10px', padding: '1px 6px', borderRadius: '5px', background: '#f4f4f5', color: '#71717a', fontFamily: "'DM Mono', monospace" }}>v3.2</span>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px', width: '170px', height: '28px', padding: '0 8px', borderRadius: '8px', background: '#f4f4f5', color: '#a1a1aa', fontSize: '11px' }}>
          <Icon name="search" size={12} /> Search docs <kbd style={{ marginLeft: 'auto', fontFamily: "'DM Mono', monospace", fontSize: '9px', padding: '1px 4px', borderRadius: '4px', background: '#fff', border: '1px solid #e4e4e7' }}>⌘K</kbd>
        </div>
      </header>

      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        <nav style={{ width: '140px', padding: '14px 10px', borderRight: '1px solid #f1f1f4' }}>
          {NAV.map(g => (
            <div key={g.group} style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#111', padding: '0 8px', marginBottom: '4px' }}>{g.group}</div>
              {g.items.map(it => (
                <button key={it} onClick={() => setPage(it)} aria-current={page === it ? 'page' : undefined} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '5px 8px', borderRadius: '6px', border: 'none', fontSize: '11px', fontFamily: 'inherit', cursor: 'pointer', background: page === it ? '#f5f3ff' : 'transparent', color: page === it ? '#6d28d9' : '#71717a', fontWeight: page === it ? 600 : 400 }}>{it}</button>
              ))}
            </div>
          ))}
        </nav>

        <main key={page} style={{ flex: 1, padding: '16px 22px', overflow: 'hidden', animation: 'fadeSlideUp 0.3s ease' }}>
          <div style={{ fontSize: '10px', color: '#a1a1aa', marginBottom: '4px' }}>Components / {page}</div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '6px' }}>{page}</h1>
          <p style={{ fontSize: '12px', color: '#52525b', lineHeight: 1.55, marginBottom: '12px' }}>Displays a {page.toLowerCase()} that people can interact with. Built on accessible primitives and fully themeable.</p>
          <div style={{ borderRadius: '10px', border: '1px solid #f1f1f4', overflow: 'hidden', marginBottom: '10px' }}>
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', padding: '18px', background: 'repeating-conic-gradient(#fafafa 0 25%, #fff 0 50%) 0 0 / 14px 14px' }}>
              <span style={{ padding: '6px 12px', borderRadius: '7px', background: '#7c3aed', color: '#fff', fontSize: '11px', fontWeight: 600 }}>Primary</span>
              <span style={{ padding: '6px 12px', borderRadius: '7px', border: '1px solid #e4e4e7', background: '#fff', color: '#111', fontSize: '11px', fontWeight: 500 }}>Secondary</span>
            </div>
            <pre style={{ margin: 0, padding: '9px 12px', background: '#18181b', color: '#e4e4e7', fontSize: '10.5px', fontFamily: "'JetBrains Mono', 'DM Mono', monospace" }}>
              <span style={{ color: '#c084fc' }}>{'<'}{page}</span> <span style={{ color: '#7dd3fc' }}>variant</span>=<span style={{ color: '#86efac' }}>"primary"</span><span style={{ color: '#c084fc' }}>{'>'}</span>Save<span style={{ color: '#c084fc' }}>{`</${page}>`}</span>
            </pre>
          </div>
          <div style={{ display: 'flex', gap: '8px', padding: '9px 11px', borderRadius: '9px', background: '#fffbeb', border: '1px solid #fde68a', fontSize: '11px', color: '#92400e' }}>
            <Icon name="info" size={14} /> Use one primary action per view.
          </div>
        </main>

        <aside style={{ width: '112px', padding: '16px 10px', fontSize: '10px' }}>
          <div style={{ fontWeight: 600, color: '#111', marginBottom: '8px' }}>On this page</div>
          {TOC.map(t => (
            <button key={t} onClick={() => setSection(t)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '3px 0 3px 8px', border: 'none', borderLeft: `2px solid ${section === t ? '#7c3aed' : '#f1f1f4'}`, background: 'none', fontSize: '10px', fontFamily: 'inherit', cursor: 'pointer', color: section === t ? '#6d28d9' : '#a1a1aa', fontWeight: section === t ? 600 : 400 }}>{t}</button>
          ))}
        </aside>
      </div>
    </div>
  );
}
