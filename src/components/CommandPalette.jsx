import { useState } from 'react';
import Icon from './Icon';

const COMMANDS = [
  { group: 'Suggestions', name: 'Create new project', icon: 'plus', keys: ['⌘', 'N'] },
  { group: 'Suggestions', name: 'Search documentation', icon: 'book', keys: ['⌘', 'D'] },
  { group: 'Suggestions', name: 'Invite teammates', icon: 'users', keys: ['⌘', 'I'] },
  { group: 'Navigation', name: 'Go to Dashboard', icon: 'grid', keys: ['G', 'D'] },
  { group: 'Navigation', name: 'Go to Settings', icon: 'sliders', keys: ['G', 'S'] },
  { group: 'Navigation', name: 'Open Terminal', icon: 'terminal', keys: ['⌃', '`'] },
];

export default function CommandPalette() {
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);

  const results = COMMANDS.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
  const safeCursor = Math.min(cursor, Math.max(results.length - 1, 0));

  const onKeyDown = e => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setCursor((safeCursor + 1) % Math.max(results.length, 1)); }
    if (e.key === 'ArrowUp') { e.preventDefault(); setCursor((safeCursor - 1 + results.length) % Math.max(results.length, 1)); }
  };

  return (
    <div style={{
      width: '600px', height: '400px', position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(circle at 30% 0%, #1e1b4b 0%, #09090b 60%)',
      display: 'flex', justifyContent: 'center', paddingTop: '34px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{
        width: '440px', height: 'fit-content', borderRadius: '14px',
        background: 'rgba(24,24,27,0.92)', backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.09)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,0,0,0.4)',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}>
          <Icon name="search" size={17} />
          <input
            value={query}
            onChange={e => { setQuery(e.target.value); setCursor(0); }}
            onKeyDown={onKeyDown}
            placeholder="Type a command or search…"
            aria-label="Command search"
            style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#fafafa', fontSize: '14px', fontFamily: 'inherit' }}
          />
          <kbd style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', padding: '3px 6px', borderRadius: '5px', border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.45)' }}>ESC</kbd>
        </div>

        <div style={{ padding: '6px', maxHeight: '252px', overflowY: 'auto' }}>
          {results.length === 0 && (
            <div style={{ padding: '28px', textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '13px' }}>No results for “{query}”</div>
          )}
          {results.map((c, i) => {
            const header = i === 0 || results[i - 1].group !== c.group ? c.group : null;
            const isActive = i === safeCursor;
            return (
              <div key={c.name}>
                {header && <div style={{ fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.3)', padding: '10px 10px 6px', letterSpacing: '0.6px' }}>{header}</div>}
                <div onMouseEnter={() => setCursor(i)} style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '9px 10px', borderRadius: '8px',
                  background: isActive ? 'rgba(139,92,246,0.16)' : 'transparent',
                  color: isActive ? '#ede9fe' : 'rgba(255,255,255,0.65)',
                  fontSize: '13px', cursor: 'pointer', transition: 'background 0.12s',
                }}>
                  <Icon name={c.icon} size={16} color={isActive ? '#a78bfa' : 'currentColor'} />
                  <span style={{ flex: 1 }}>{c.name}</span>
                  <span style={{ display: 'flex', gap: '4px' }}>
                    {c.keys.map(k => (
                      <kbd key={k} style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', minWidth: '20px', textAlign: 'center', padding: '2px 5px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.5)' }}>{k}</kbd>
                    ))}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', gap: '16px', padding: '9px 16px', borderTop: '1px solid rgba(255,255,255,0.07)', fontSize: '10px', color: 'rgba(255,255,255,0.3)', fontFamily: "'DM Mono', monospace" }}>
          <span>↑↓ navigate</span><span>↵ select</span><span style={{ marginLeft: 'auto' }}>{results.length} results</span>
        </div>
      </div>
    </div>
  );
}
