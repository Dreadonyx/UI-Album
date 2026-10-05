import { useState } from 'react';
import Icon from './Icon';

const GREEN = '#0f5132';
const SCREENS = {
  overview: {
    label: 'Overview',
    rows: [['Rent', 'Housing', '-$1,450.00'], ['Salary', 'Income', '+$4,120.00'], ['Corner Grocer', 'Food', '-$62.18']],
  },
  spending: {
    label: 'Spending',
    rows: [['Food & drink', '28%', '$612'], ['Transport', '14%', '$305'], ['Subscriptions', '9%', '$198']],
  },
};

function StoreBadge({ top, bottom, icon }) {
  return (
    <a href="#download" onClick={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', gap: '8px', height: '38px', padding: '0 12px', borderRadius: '8px', background: '#111', color: '#fff', textDecoration: 'none' }}>
      <Icon name={icon} size={16} />
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
        <span style={{ fontSize: '8px', opacity: 0.8 }}>{top}</span>
        <span style={{ fontSize: '13px', fontWeight: 600 }}>{bottom}</span>
      </span>
    </a>
  );
}

export default function HeroMobileApp() {
  const [tab, setTab] = useState('overview');
  const screen = SCREENS[tab];

  return (
    <div style={{ width: '600px', height: '400px', position: 'relative', overflow: 'hidden', background: '#f3efe7', color: '#14211a', fontFamily: "'Inter', sans-serif" }}>
      <nav style={{ display: 'flex', alignItems: 'center', height: '44px', padding: '0 28px', fontSize: '11px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '7px', fontWeight: 700, fontSize: '14px', letterSpacing: '-0.3px' }}>
          <span style={{ width: '18px', height: '18px', borderRadius: '6px', background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f3efe7' }} /></span>
          Penny
        </span>
        <span style={{ display: 'flex', gap: '18px', marginLeft: 'auto', color: '#4f5d55' }}><span>Features</span><span>Security</span><span>Pricing</span><span>Help</span></span>
      </nav>

      <div style={{ position: 'absolute', left: '28px', top: '66px', width: '280px' }}>
        <div style={{ fontSize: '11px', fontWeight: 600, color: GREEN, marginBottom: '10px' }}>Free on iOS and Android</div>
        <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: '40px', fontWeight: 600, lineHeight: 1.02, letterSpacing: '-1px', marginBottom: '12px' }}>Money that sorts itself out.</h1>
        <p style={{ fontSize: '12px', lineHeight: 1.55, color: '#4f5d55', marginBottom: '18px' }}>Penny categorizes every transaction, flags subscriptions you forgot about and moves spare change into savings automatically.</p>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <StoreBadge top="Download on the" bottom="App Store" icon="download" />
          <StoreBadge top="Get it on" bottom="Google Play" icon="play" />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10.5px', color: '#4f5d55' }}>
          <span style={{ display: 'flex', gap: '1px' }}>{[0, 1, 2, 3, 4].map(i => <Icon key={i} name="star" size={11} color="#14211a" fill="#14211a" />)}</span>
          <b style={{ color: '#14211a' }}>4.9</b> from 38,000 ratings
        </div>
      </div>

      {/* Phone */}
      <div style={{ position: 'absolute', right: '58px', top: '58px', width: '180px', height: '370px', borderRadius: '30px', background: '#14211a', padding: '6px', boxShadow: '0 30px 60px rgba(20,33,26,0.25)' }}>
        <div style={{ height: '100%', borderRadius: '25px', background: '#fbfaf7', overflow: 'hidden', padding: '10px 12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '8px', fontWeight: 600, marginBottom: '10px' }}>
            <span>9:41</span><span style={{ width: '46px', height: '12px', borderRadius: '8px', background: '#14211a' }} /><span>100%</span>
          </div>
          <div style={{ fontSize: '9px', color: '#6b7a71' }}>Available balance</div>
          <div style={{ fontFamily: "'Fraunces', serif", fontSize: '24px', fontWeight: 600, letterSpacing: '-0.5px', marginBottom: '8px' }}>$4,281.50</div>
          <div style={{ display: 'flex', padding: '2px', borderRadius: '8px', background: '#eeebe4', marginBottom: '10px' }}>
            {Object.entries(SCREENS).map(([k, s]) => (
              <button key={k} onClick={() => setTab(k)} aria-pressed={tab === k} style={{ flex: 1, height: '20px', borderRadius: '6px', border: 'none', background: tab === k ? '#fff' : 'transparent', boxShadow: tab === k ? '0 1px 2px rgba(0,0,0,0.08)' : 'none', fontFamily: 'inherit', fontSize: '8.5px', fontWeight: 600, color: tab === k ? '#14211a' : '#6b7a71', cursor: 'pointer' }}>{s.label}</button>
            ))}
          </div>
          <div style={{ padding: '8px', borderRadius: '10px', background: GREEN, color: '#f3efe7', marginBottom: '10px' }}>
            <div style={{ fontSize: '8px', opacity: 0.75 }}>Saved automatically this month</div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '15px', fontWeight: 700 }}>$184.20</span><span style={{ fontSize: '8px' }}>Goal 61%</span>
            </div>
            <div style={{ height: '4px', borderRadius: '4px', background: 'rgba(243,239,231,0.25)', marginTop: '5px' }}><div style={{ width: '61%', height: '100%', borderRadius: '4px', background: '#c8f169' }} /></div>
          </div>
          <div key={tab} style={{ animation: 'fadeSlideUp 0.3s ease' }}>
            {screen.rows.map(([a, b, c]) => (
              <div key={a} style={{ display: 'flex', alignItems: 'center', gap: '7px', padding: '6px 0', borderBottom: '1px solid #eeebe4' }}>
                <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#eeebe4', fontSize: '8px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{a[0]}</span>
                <span style={{ flex: 1 }}><span style={{ display: 'block', fontSize: '9px', fontWeight: 600 }}>{a}</span><span style={{ display: 'block', fontSize: '7.5px', color: '#6b7a71' }}>{b}</span></span>
                <span style={{ fontSize: '9px', fontWeight: 600, color: c.startsWith('+') ? GREEN : '#14211a', fontVariantNumeric: 'tabular-nums' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification */}
      <div style={{ position: 'absolute', right: '190px', top: '322px', width: '150px', padding: '9px 11px', borderRadius: '12px', background: '#fff', boxShadow: '0 12px 30px rgba(20,33,26,0.15)', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
        <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: GREEN, color: '#f3efe7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><Icon name="check" size={11} strokeWidth={3} /></span>
        <span style={{ fontSize: '9px', lineHeight: 1.35 }}><b>Subscription paused</b><br /><span style={{ color: '#6b7a71' }}>StreamBox, unused for 60 days. You save $15.99/mo.</span></span>
      </div>
    </div>
  );
}
