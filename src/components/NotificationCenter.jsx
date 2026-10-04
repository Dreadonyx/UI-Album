import { useState } from 'react';
import Icon from './Icon';

const INITIAL = [
  { id: 1, tab: 'mentions', who: 'Priya', color: '#f472b6', action: 'mentioned you in', target: 'Q4 Roadmap', time: '3m', unread: true },
  { id: 2, tab: 'all', who: 'Deploy bot', color: '#22c55e', action: 'deployed', target: 'web@a1f9c2 to production', time: '12m', unread: true, icon: 'zap' },
  { id: 3, tab: 'mentions', who: 'Marco', color: '#60a5fa', action: 'replied to your comment on', target: 'Pricing page', time: '1h', unread: true },
  { id: 4, tab: 'all', who: 'Lena', color: '#fbbf24', action: 'invited you to', target: 'Design Guild', time: '3h', unread: false, invite: true },
  { id: 5, tab: 'all', who: 'Security', color: '#ef4444', action: 'New sign-in from', target: 'Chrome on macOS', time: '1d', unread: false, icon: 'shield' },
];

export default function NotificationCenter() {
  const [items, setItems] = useState(INITIAL);
  const [tab, setTab] = useState('all');
  const list = tab === 'all' ? items : items.filter(i => i.tab === tab);
  const unread = items.filter(i => i.unread).length;

  return (
    <div style={{ width: '600px', height: '400px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '20px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '380px', borderRadius: '16px', background: '#fff', boxShadow: '0 24px 60px rgba(0,0,0,0.45)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '14px 16px 0' }}>
          <span style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', flex: 1 }}>Notifications</span>
          <button onClick={() => setItems(is => is.map(i => ({ ...i, unread: false })))} disabled={!unread} style={{ border: 'none', background: 'none', fontSize: '11px', fontWeight: 600, color: unread ? '#4f46e5' : '#cbd5e1', cursor: unread ? 'pointer' : 'default', fontFamily: 'inherit' }}>Mark all as read</button>
        </div>
        <div role="tablist" style={{ display: 'flex', gap: '16px', padding: '0 16px', borderBottom: '1px solid #f1f5f9' }}>
          {[['all', 'All'], ['mentions', 'Mentions']].map(([k, l]) => (
            <button key={k} role="tab" aria-selected={tab === k} onClick={() => setTab(k)} style={{ padding: '10px 0', border: 'none', background: 'none', fontSize: '12px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', color: tab === k ? '#0f172a' : '#94a3b8', borderBottom: `2px solid ${tab === k ? '#4f46e5' : 'transparent'}`, marginBottom: '-1px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              {l}{k === 'all' && unread > 0 && <span style={{ fontSize: '10px', padding: '0 6px', borderRadius: '999px', background: '#4f46e5', color: '#fff' }}>{unread}</span>}
            </button>
          ))}
        </div>
        <div style={{ maxHeight: '290px', overflowY: 'auto' }}>
          {list.map(n => (
            <div key={n.id} onClick={() => setItems(is => is.map(i => (i.id === n.id ? { ...i, unread: false } : i)))} style={{ display: 'flex', gap: '10px', padding: '12px 16px', borderBottom: '1px solid #f8fafc', background: n.unread ? '#f8faff' : '#fff', cursor: 'pointer', position: 'relative' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: n.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700 }}>
                  {n.icon ? <Icon name={n.icon} size={15} /> : n.who[0]}
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '12px', lineHeight: 1.45, color: '#475569' }}><b style={{ color: '#0f172a' }}>{n.who}</b> {n.action} <b style={{ color: '#0f172a' }}>{n.target}</b></div>
                <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '2px' }}>{n.time} ago</div>
                {n.invite && (
                  <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
                    <button onClick={e => { e.stopPropagation(); setItems(is => is.filter(i => i.id !== n.id)); }} style={{ padding: '5px 12px', borderRadius: '7px', border: 'none', background: '#4f46e5', color: '#fff', fontSize: '11px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer' }}>Accept</button>
                    <button onClick={e => { e.stopPropagation(); setItems(is => is.filter(i => i.id !== n.id)); }} style={{ padding: '5px 12px', borderRadius: '7px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontSize: '11px', fontFamily: 'inherit', cursor: 'pointer' }}>Decline</button>
                  </div>
                )}
              </div>
              {n.unread && <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4f46e5', marginTop: '6px', flexShrink: 0 }} />}
            </div>
          ))}
          {list.length === 0 && <div style={{ padding: '40px', textAlign: 'center', fontSize: '12px', color: '#94a3b8' }}>You’re all caught up ✨</div>}
        </div>
      </div>
    </div>
  );
}
