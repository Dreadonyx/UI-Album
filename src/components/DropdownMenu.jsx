import { useState } from 'react';
import Icon from './Icon';

const GROUPS = [
  [
    { label: 'Edit', icon: 'edit', kbd: '⌘E' },
    { label: 'Duplicate', icon: 'copy', kbd: '⌘D' },
    { label: 'Share', icon: 'share', sub: true },
  ],
  [
    { label: 'Move to folder', icon: 'folder' },
    { label: 'Add to favorites', icon: 'star' },
  ],
  [
    { label: 'Delete', icon: 'trash', kbd: '⌫', danger: true },
  ],
];

export default function DropdownMenu() {
  const [open, setOpen] = useState(true);
  const [last, setLast] = useState(null);

  return (
    <div style={{ width: '600px', height: '400px', background: '#0c0c0f', display: 'flex', justifyContent: 'center', paddingTop: '36px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '320px', padding: '12px 14px', borderRadius: '12px', background: '#16161b', border: '1px solid #26262d' }}>
          <div style={{ width: '34px', height: '34px', borderRadius: '9px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#f4f4f5' }}>Q4 Brand Refresh.fig</div>
            <div style={{ fontSize: '11px', color: '#71717a' }}>{last ? `Last action: ${last}` : 'Edited 3 hours ago'}</div>
          </div>
          <button onClick={() => setOpen(o => !o)} aria-haspopup="menu" aria-expanded={open} aria-label="More actions" style={{ display: 'flex', padding: '6px', borderRadius: '8px', border: '1px solid #2e2e36', background: open ? '#26262d' : 'transparent', color: '#a1a1aa', cursor: 'pointer' }}>
            <Icon name="more" size={16} />
          </button>
        </div>

        {open && (
          <div role="menu" style={{
            position: 'absolute', right: 0, top: 'calc(100% + 8px)', width: '220px', padding: '5px', borderRadius: '12px',
            background: 'rgba(28,28,34,0.96)', backdropFilter: 'blur(12px)', border: '1px solid #2e2e36',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)', transformOrigin: 'top right', animation: 'uaMenuIn 0.18s cubic-bezier(0.16,1,0.3,1)',
          }}>
            <style>{`
              @keyframes uaMenuIn { from { opacity: 0; transform: scale(0.95) translateY(-4px); } }
              .ua-menu-item:hover, .ua-menu-item:focus-visible { background: #2a2a33; outline: none; }
              .ua-menu-item.danger:hover, .ua-menu-item.danger:focus-visible { background: rgba(239,68,68,0.14); }
            `}</style>
            {GROUPS.map((g, gi) => (
              <div key={gi} style={{ paddingBottom: gi < GROUPS.length - 1 ? '4px' : 0, marginBottom: gi < GROUPS.length - 1 ? '4px' : 0, borderBottom: gi < GROUPS.length - 1 ? '1px solid #2a2a33' : 'none' }}>
                {g.map(it => (
                  <button key={it.label} role="menuitem" className={`ua-menu-item${it.danger ? ' danger' : ''}`} onClick={() => { setLast(it.label); setOpen(false); }} style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 9px', borderRadius: '7px', border: 'none',
                    background: 'transparent', color: it.danger ? '#f87171' : '#e4e4e7', fontSize: '12px', fontFamily: 'inherit', cursor: 'pointer', textAlign: 'left',
                  }}>
                    <Icon name={it.icon} size={14} color={it.danger ? '#f87171' : '#a1a1aa'} />
                    <span style={{ flex: 1 }}>{it.label}</span>
                    {it.kbd && <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#71717a' }}>{it.kbd}</span>}
                    {it.sub && <Icon name="chevronRight" size={13} color="#71717a" />}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
