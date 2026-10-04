import { useState } from 'react';
import Icon from './Icon';

const SECTIONS = [
  { label: 'Workspace', items: [
    { name: 'Dashboard', icon: 'grid' },
    { name: 'Inbox', icon: 'inbox', badge: 12 },
    { name: 'Projects', icon: 'folder' },
    { name: 'Analytics', icon: 'chart' },
  ] },
  { label: 'Account', items: [
    { name: 'Team', icon: 'users' },
    { name: 'Settings', icon: 'sliders' },
  ] },
];

export default function SidebarNav() {
  const [active, setActive] = useState('Inbox');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{
      width: '600px', height: '400px', display: 'flex',
      background: '#0b0d12', fontFamily: "'Inter', sans-serif", overflow: 'hidden',
    }}>
      <aside style={{
        width: collapsed ? '68px' : '200px', flexShrink: 0,
        background: '#11141b', borderRight: '1px solid rgba(255,255,255,0.06)',
        padding: '18px 12px', display: 'flex', flexDirection: 'column',
        transition: 'width 0.35s cubic-bezier(0.16,1,0.3,1)', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 6px', marginBottom: '22px' }}>
          <div style={{
            width: '30px', height: '30px', borderRadius: '9px', flexShrink: 0,
            background: 'linear-gradient(135deg, #6366f1, #22d3ee)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: 700, fontSize: '14px',
          }}>N</div>
          <span style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '14px', whiteSpace: 'nowrap', opacity: collapsed ? 0 : 1, transition: 'opacity 0.2s' }}>Northwind</span>
        </div>

        {SECTIONS.map(section => (
          <div key={section.label} style={{ marginBottom: '16px' }}>
            <div style={{
              fontSize: '10px', fontWeight: 600, letterSpacing: '1.2px', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)', padding: '0 10px', marginBottom: '6px',
              whiteSpace: 'nowrap', opacity: collapsed ? 0 : 1, transition: 'opacity 0.2s',
            }}>{section.label}</div>
            {section.items.map(item => {
              const isActive = item.name === active;
              return (
                <button key={item.name} onClick={() => setActive(item.name)} title={item.name} style={{
                  width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                  padding: '8px 12px', marginBottom: '2px', borderRadius: '8px', border: 'none',
                  background: isActive ? 'rgba(99,102,241,0.14)' : 'transparent',
                  color: isActive ? '#c7d2fe' : 'rgba(255,255,255,0.5)',
                  fontFamily: 'inherit', fontSize: '13px', fontWeight: isActive ? 500 : 400,
                  cursor: 'pointer', position: 'relative', textAlign: 'left',
                  transition: 'background 0.2s, color 0.2s',
                }}>
                  {isActive && <span style={{ position: 'absolute', left: 0, top: '8px', bottom: '8px', width: '3px', borderRadius: '0 3px 3px 0', background: '#6366f1', boxShadow: '0 0 10px #6366f1' }} />}
                  <Icon name={item.icon} size={17} />
                  <span style={{ whiteSpace: 'nowrap', flex: 1, opacity: collapsed ? 0 : 1, transition: 'opacity 0.2s' }}>{item.name}</span>
                  {item.badge && !collapsed && (
                    <span style={{ fontSize: '10px', fontWeight: 600, padding: '1px 7px', borderRadius: '10px', background: '#6366f1', color: '#fff' }}>{item.badge}</span>
                  )}
                </button>
              );
            })}
          </div>
        ))}

        <button onClick={() => setCollapsed(c => !c)} style={{
          marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: collapsed ? 'center' : 'flex-start', gap: '10px',
          padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.02)', color: 'rgba(255,255,255,0.45)',
          fontFamily: 'inherit', fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap',
        }}>
          <Icon name={collapsed ? 'chevronRight' : 'chevronLeft'} size={15} />
          {!collapsed && 'Collapse'}
        </button>
      </aside>

      <main style={{ flex: 1, padding: '26px 28px', minWidth: 0 }}>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '6px' }}>Workspace / {active}</div>
        <div style={{ fontSize: '22px', fontWeight: 600, color: '#f1f5f9', marginBottom: '20px' }}>{active}</div>
        {[0.9, 0.7, 0.8, 0.55].map((w, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: '12px', padding: '12px',
            borderRadius: '10px', background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.04)', marginBottom: '8px',
          }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `hsl(${230 + i * 25}, 70%, 65%)`, opacity: 0.8 }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: '7px', width: `${w * 100}%`, borderRadius: '4px', background: 'rgba(255,255,255,0.14)', marginBottom: '6px' }} />
              <div style={{ height: '6px', width: `${w * 60}%`, borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
