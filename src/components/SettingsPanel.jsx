import { useState } from 'react';
import Icon from './Icon';

const NAV = [
  { id: 'profile', label: 'Profile', icon: 'user' },
  { id: 'security', label: 'Security', icon: 'shield' },
  { id: 'notifications', label: 'Notifications', icon: 'bell' },
  { id: 'billing', label: 'Billing', icon: 'card' },
];

export default function SettingsPanel() {
  const [tab, setTab] = useState('profile');
  const [name, setName] = useState('Alex Morgan');
  const [bio, setBio] = useState('Building calm software.');
  const [saved, setSaved] = useState({ name: 'Alex Morgan', bio: 'Building calm software.' });
  const dirty = name !== saved.name || bio !== saved.bio;

  const field = { width: '100%', padding: '9px 11px', borderRadius: '9px', border: '1px solid #2a2f3a', background: '#0d1017', color: '#e6e8ee', fontSize: '13px', fontFamily: 'inherit', outline: 'none' };
  const label = { display: 'block', fontSize: '11px', fontWeight: 500, color: '#8a93a6', marginBottom: '6px' };

  return (
    <div style={{ width: '600px', height: '400px', background: '#0a0c11', display: 'flex', fontFamily: "'Inter', sans-serif", position: 'relative', overflow: 'hidden' }}>
      <nav style={{ width: '160px', padding: '22px 12px', borderRight: '1px solid #1a1f29' }}>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#e6e8ee', padding: '0 10px', marginBottom: '16px' }}>Settings</div>
        {NAV.map(n => (
          <button key={n.id} onClick={() => setTab(n.id)} style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: '9px', padding: '8px 10px', borderRadius: '8px', border: 'none',
            background: tab === n.id ? '#161b25' : 'transparent', color: tab === n.id ? '#e6e8ee' : '#6b7385',
            fontSize: '12px', fontFamily: 'inherit', cursor: 'pointer', marginBottom: '2px', textAlign: 'left',
          }}><Icon name={n.icon} size={15} />{n.label}</button>
        ))}
      </nav>

      <div style={{ flex: 1, padding: '22px 26px' }}>
        {tab === 'profile' ? (
          <>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#e6e8ee' }}>Profile</div>
            <div style={{ fontSize: '12px', color: '#6b7385', marginBottom: '18px' }}>How others see you across the workspace.</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #38bdf8, #818cf8)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>{name.trim()[0] || '?'}</div>
              <button style={{ padding: '7px 12px', borderRadius: '8px', border: '1px solid #2a2f3a', background: 'transparent', color: '#c3c9d6', fontSize: '12px', fontFamily: 'inherit', cursor: 'pointer' }}>Change avatar</button>
            </div>
            <label style={label}>Display name<input value={name} onChange={e => setName(e.target.value)} style={{ ...field, marginTop: '6px', marginBottom: '12px' }} /></label>
            <label style={label}>Bio<textarea value={bio} onChange={e => setBio(e.target.value.slice(0, 80))} rows={2} style={{ ...field, marginTop: '6px', resize: 'none' }} /></label>
            <div style={{ fontSize: '10px', color: '#4b5263', textAlign: 'right', marginTop: '4px' }}>{bio.length}/80</div>
          </>
        ) : (
          <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#4b5263', fontSize: '13px', gap: '8px' }}>
            <Icon name={NAV.find(n => n.id === tab).icon} size={26} />
            {NAV.find(n => n.id === tab).label} settings
          </div>
        )}
      </div>

      <div style={{
        position: 'absolute', left: 'calc(160px + (100% - 160px) / 2)', bottom: '18px', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '12px',
        padding: '8px 8px 8px 16px', borderRadius: '12px', background: '#1a1f29', border: '1px solid #2a2f3a',
        boxShadow: '0 16px 40px rgba(0,0,0,0.5)', fontSize: '12px', color: '#c3c9d6',
        transform: `translate(-50%, ${dirty ? 0 : 80}px)`, opacity: dirty ? 1 : 0,
        transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s',
      }}>
        Unsaved changes
        <button onClick={() => { setName(saved.name); setBio(saved.bio); }} style={{ padding: '6px 10px', borderRadius: '8px', border: 'none', background: 'transparent', color: '#8a93a6', fontSize: '12px', fontFamily: 'inherit', cursor: 'pointer' }}>Reset</button>
        <button onClick={() => setSaved({ name, bio })} style={{ padding: '6px 12px', borderRadius: '8px', border: 'none', background: '#3b82f6', color: '#fff', fontSize: '12px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>Save</button>
      </div>
    </div>
  );
}
