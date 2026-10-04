import { useState } from 'react';

const RELEASES = [
  { version: '3.2.0', date: 'Oct 1, 2026', title: 'Command palette & keyboard-first navigation', changes: [['New', 'Global ⌘K palette with fuzzy search'], ['Improved', '40% faster cold start'], ['Fixed', 'Tooltip flicker on Safari']] },
  { version: '3.1.0', date: 'Sep 12, 2026', title: 'Dark mode tokens', changes: [['New', 'Semantic color tokens for light and dark'], ['Improved', 'Focus rings meet WCAG AA']] },
  { version: '3.0.0', date: 'Aug 20, 2026', title: 'The big rewrite', changes: [['Breaking', 'Dropped legacy theme API'], ['New', 'Composable primitives']] },
];
const TAG = {
  New: { bg: '#dcfce7', fg: '#166534' },
  Improved: { bg: '#dbeafe', fg: '#1e40af' },
  Fixed: { bg: '#fef3c7', fg: '#92400e' },
  Breaking: { bg: '#fee2e2', fg: '#991b1b' },
};

export default function Changelog() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', ...Object.keys(TAG)];

  return (
    <div style={{ width: '600px', height: '400px', background: '#fcfcfb', padding: '22px 34px', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 600, color: '#1c1917' }}>Changelog</h2>
        <div style={{ display: 'flex', gap: '4px' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '4px 9px', borderRadius: '999px', border: `1px solid ${filter === f ? '#1c1917' : '#e7e5e4'}`, background: filter === f ? '#1c1917' : '#fff', color: filter === f ? '#fff' : '#57534e', fontSize: '10px', fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer' }}>{f}</button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        <div style={{ position: 'absolute', left: '91.5px', top: '6px', bottom: 0, width: '1px', background: '#e7e5e4' }} />
        {RELEASES.map((r, ri) => {
          const changes = r.changes.filter(([t]) => filter === 'All' || t === filter);
          if (!changes.length) return null;
          return (
            <div key={r.version} style={{ display: 'flex', gap: '24px', marginBottom: '18px', animation: 'fadeSlideUp 0.3s ease' }}>
              <div style={{ width: '80px', flexShrink: 0, textAlign: 'right' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', fontWeight: 500, color: '#1c1917' }}>v{r.version}</div>
                <div style={{ fontSize: '10px', color: '#a8a29e' }}>{r.date}</div>
              </div>
              <div style={{ position: 'relative', flex: 1 }}>
                <span style={{ position: 'absolute', left: '-17.5px', top: '4px', width: '11px', height: '11px', borderRadius: '50%', background: ri === 0 ? '#16a34a' : '#fff', border: `2px solid ${ri === 0 ? '#bbf7d0' : '#d6d3d1'}` }} />
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1c1917', marginBottom: '8px' }}>{r.title}</div>
                {changes.map(([t, text]) => (
                  <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', padding: '2px 6px', borderRadius: '4px', background: TAG[t].bg, color: TAG[t].fg, minWidth: '60px', textAlign: 'center' }}>{t}</span>
                    <span style={{ fontSize: '12px', color: '#57534e' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
