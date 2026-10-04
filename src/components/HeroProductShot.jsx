import { useState } from 'react';
import Icon from './Icon';

const NAV = ['Product', 'Customers', 'Pricing', 'Changelog', 'Docs'];
const VIEWS = [
  { id: 'inbox', label: 'Inbox', icon: 'inbox', count: 4 },
  { id: 'mine', label: 'My issues', icon: 'user' },
  { id: 'cycles', label: 'Cycles', icon: 'refresh' },
  { id: 'projects', label: 'Projects', icon: 'layers' },
];
const ISSUES = [
  { id: 'REL-214', title: 'Webhook retries drop events after 3rd attempt', status: '#f2c94c', who: 'MK' },
  { id: 'REL-209', title: 'Migrate billing to usage-based invoices', status: '#5e6ad2', who: 'AS' },
  { id: 'REL-205', title: 'Add SAML just-in-time provisioning', status: '#5e6ad2', who: 'JL' },
  { id: 'REL-198', title: 'Keyboard shortcuts for bulk triage', status: '#4cb782', who: 'RT' },
  { id: 'REL-191', title: 'Reduce cold start on edge workers', status: '#4cb782', who: 'MK' },
];

function Logo() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <rect x="1" y="1" width="10" height="10" rx="2.5" fill="#f7f8f8" />
      <rect x="7" y="7" width="10" height="10" rx="2.5" fill="none" stroke="#f7f8f8" strokeWidth="1.6" />
    </svg>
  );
}

export default function HeroProductShot() {
  const [view, setView] = useState('inbox');

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#08090a', fontFamily: "'Inter', sans-serif", color: '#f7f8f8' }}>
      <nav style={{ display: 'flex', alignItems: 'center', height: '44px', padding: '0 22px', borderBottom: '1px solid #1c1d1f' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '13px', fontWeight: 600 }}><Logo /> Relay</span>
        <span style={{ display: 'flex', gap: '16px', marginLeft: '28px', fontSize: '11px', color: '#8a8f98' }}>
          {NAV.map(n => <span key={n}>{n}</span>)}
        </span>
        <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '11px' }}>
          <span style={{ color: '#8a8f98' }}>Log in</span>
          <button style={{ height: '26px', padding: '0 11px', borderRadius: '6px', border: 'none', background: '#f7f8f8', color: '#08090a', fontFamily: 'inherit', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Sign up</button>
        </span>
      </nav>

      <div style={{ textAlign: 'center', padding: '22px 40px 0' }}>
        <a href="#release" onClick={e => e.preventDefault()} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#b4b8bf', textDecoration: 'none', padding: '4px 10px', borderRadius: '999px', border: '1px solid #26282b' }}>
          Relay 2.0 is out <span style={{ color: '#5d6168' }}>·</span> Read the release notes <Icon name="arrowRight" size={11} />
        </a>
        <h1 style={{ fontSize: '36px', fontWeight: 600, lineHeight: 1.06, letterSpacing: '-1.5px', margin: '12px 0 8px' }}>
          Plan, build and ship<br />without the busywork.
        </h1>
        <p style={{ fontSize: '13px', lineHeight: 1.55, color: '#8a8f98', maxWidth: '380px', margin: '0 auto 14px' }}>
          Relay is the issue tracker for software teams who would rather write code than update tickets.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
          <button style={{ height: '32px', padding: '0 14px', borderRadius: '7px', border: 'none', background: '#f7f8f8', color: '#08090a', fontFamily: 'inherit', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Start for free</button>
          <button style={{ height: '32px', padding: '0 12px', borderRadius: '7px', border: '1px solid #26282b', background: 'transparent', color: '#f7f8f8', fontFamily: 'inherit', fontSize: '12px', fontWeight: 500, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>Talk to sales <Icon name="chevronRight" size={12} /></button>
        </div>
      </div>

      {/* Product screenshot, cropped by the fold */}
      <div style={{ position: 'absolute', left: '46px', right: '46px', top: '288px', height: '200px', borderRadius: '10px 10px 0 0', border: '1px solid #232427', borderBottom: 'none', background: '#0f1011', display: 'flex', overflow: 'hidden', boxShadow: '0 -1px 0 rgba(255,255,255,0.04) inset' }}>
        <aside style={{ width: '128px', padding: '10px 8px', borderRight: '1px solid #1c1d1f' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontWeight: 600, padding: '0 6px 8px' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '4px', background: '#5e6ad2', fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>A</span> Acme
          </div>
          {VIEWS.map(v => (
            <button key={v.id} onClick={() => setView(v.id)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '7px', padding: '5px 6px', borderRadius: '5px', border: 'none', background: view === v.id ? '#1c1d1f' : 'transparent', color: view === v.id ? '#f7f8f8' : '#8a8f98', fontFamily: 'inherit', fontSize: '10px', cursor: 'pointer', textAlign: 'left' }}>
              <Icon name={v.icon} size={11} /> <span style={{ flex: 1 }}>{v.label}</span>
              {v.count && <span style={{ fontSize: '9px', color: '#8a8f98' }}>{v.count}</span>}
            </button>
          ))}
        </aside>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '30px', padding: '0 12px', borderBottom: '1px solid #1c1d1f', fontSize: '10px' }}>
            <span style={{ fontWeight: 500 }}>{VIEWS.find(v => v.id === view).label}</span>
            <span style={{ display: 'flex', gap: '6px', color: '#5d6168' }}><Icon name="filter" size={11} /><Icon name="sliders" size={11} /></span>
          </div>
          {ISSUES.map(i => (
            <div key={i.id} style={{ display: 'flex', alignItems: 'center', gap: '9px', height: '27px', padding: '0 12px', borderBottom: '1px solid #151617', fontSize: '10px' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: '#5d6168', width: '44px' }}>{i.id}</span>
              <span style={{ width: '9px', height: '9px', borderRadius: '50%', border: `1.5px solid ${i.status}`, background: i.status === '#4cb782' ? i.status : 'transparent' }} />
              <span style={{ flex: 1, color: '#d0d2d6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{i.title}</span>
              <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#26282b', color: '#b4b8bf', fontSize: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i.who}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: '40px', background: 'linear-gradient(transparent, #08090a)', pointerEvents: 'none' }} />
    </div>
  );
}
