import { useState } from 'react';
import Icon from './Icon';

const JOBS = [
  { role: 'Senior Product Designer', company: 'Lumen', place: 'Remote, EU', pay: '€85–110k', tag: 'New', color: '#e8590c' },
  { role: 'Staff Backend Engineer', company: 'Northwind', place: 'Berlin', pay: '€120–150k', color: '#1971c2' },
  { role: 'Data Analyst', company: 'Patchwork', place: 'Remote', pay: '€60–75k', tag: 'New', color: '#2f9e44' },
  { role: 'Product Designer, Growth', company: 'Orbit', place: 'Amsterdam', pay: '€70–90k', color: '#7048e8' },
  { role: 'Engineering Manager', company: 'Kestrel', place: 'London', pay: '£110–135k', color: '#c2255c' },
];
const POPULAR = ['Product design', 'Remote', 'Staff engineer', 'Data'];

export default function HeroJobSearch() {
  const [query, setQuery] = useState('');
  const [place, setPlace] = useState('');

  const q = query.trim().toLowerCase();
  const p = place.trim().toLowerCase();
  const results = JOBS.filter(j => (!q || `${j.role} ${j.company}`.toLowerCase().includes(q) || (q === 'remote' && j.place.toLowerCase().includes('remote'))) && (!p || j.place.toLowerCase().includes(p)));

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', color: '#16181d', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#f6f5f1', paddingBottom: '22px', borderBottom: '1px solid #ecebe6' }}>
        <nav style={{ display: 'flex', alignItems: 'center', height: '44px', padding: '0 26px', fontSize: '11px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '13px' }}>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="1" width="14" height="14" rx="4" fill="#16181d" /><path d="M4.5 8.2 7 10.5l4.5-5" fill="none" stroke="#f6f5f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Shortlist
          </span>
          <span style={{ display: 'flex', gap: '16px', marginLeft: '26px', color: '#5c616b' }}><span>Jobs</span><span>Companies</span><span>Salaries</span></span>
          <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: '#5c616b' }}>Post a job</span>
            <button style={{ height: '28px', padding: '0 12px', borderRadius: '7px', border: '1px solid #d9d8d2', background: '#fff', fontFamily: 'inherit', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Sign in</button>
          </span>
        </nav>

        <div style={{ textAlign: 'center', padding: '14px 40px 0' }}>
          <h1 style={{ fontSize: '29px', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1px', marginBottom: '8px', whiteSpace: 'nowrap' }}>Find work at companies that move fast.</h1>
          <p style={{ fontSize: '12px', color: '#5c616b', marginBottom: '16px' }}>12,480 open roles at 2,300 startups. Salaries listed on every job.</p>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center', width: '470px', margin: '0 auto', padding: '5px', borderRadius: '12px', background: '#fff', border: '1px solid #e2e1db', boxShadow: '0 6px 20px rgba(22,24,29,0.06)' }}>
            <label style={{ flex: 1.3, display: 'flex', alignItems: 'center', gap: '8px', padding: '0 10px', color: '#8a8e96' }}>
              <Icon name="search" size={14} />
              <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Role, skill or company" aria-label="Role, skill or company" style={{ flex: 1, minWidth: 0, height: '34px', border: 'none', outline: 'none', fontFamily: 'inherit', fontSize: '12px', color: '#16181d', background: 'transparent' }} />
            </label>
            <span style={{ width: '1px', height: '22px', background: '#e2e1db' }} />
            <label style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', padding: '0 10px', color: '#8a8e96' }}>
              <Icon name="pin" size={14} />
              <input value={place} onChange={e => setPlace(e.target.value)} placeholder="City or remote" aria-label="Location" style={{ flex: 1, minWidth: 0, height: '34px', border: 'none', outline: 'none', fontFamily: 'inherit', fontSize: '12px', color: '#16181d', background: 'transparent' }} />
            </label>
            <button type="submit" style={{ height: '34px', padding: '0 16px', borderRadius: '8px', border: 'none', background: '#16181d', color: '#fff', fontFamily: 'inherit', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>Search</button>
          </form>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', marginTop: '10px', fontSize: '10px', color: '#8a8e96' }}>
            Popular:
            {POPULAR.map(t => (
              <button key={t} onClick={() => { setQuery(t === 'Remote' ? 'remote' : t); setPlace(''); }} style={{ padding: '3px 9px', borderRadius: '999px', border: '1px solid #e2e1db', background: '#fff', fontFamily: 'inherit', fontSize: '10px', color: '#3d414a', cursor: 'pointer' }}>{t}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ flex: 1, padding: '14px 26px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#8a8e96', marginBottom: '8px' }}>
          <span>{results.length ? `${results.length} matching roles` : 'No roles match yet'}</span><span>Sorted by newest</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {results.slice(0, 3).map(j => (
            <div key={j.role} style={{ padding: '11px', borderRadius: '10px', border: '1px solid #ecebe6', animation: 'fadeSlideUp 0.3s ease' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '7px', background: j.color, color: '#fff', fontSize: '11px', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{j.company[0]}</span>
                {j.tag && <span style={{ fontSize: '9px', fontWeight: 600, padding: '2px 6px', borderRadius: '5px', background: '#ebfbee', color: '#2b8a3e' }}>{j.tag}</span>}
              </div>
              <div style={{ fontSize: '11.5px', fontWeight: 600, lineHeight: 1.3, marginBottom: '3px' }}>{j.role}</div>
              <div style={{ fontSize: '10px', color: '#5c616b', marginBottom: '6px' }}>{j.company} · {j.place}</div>
              <div style={{ fontSize: '10px', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{j.pay}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
