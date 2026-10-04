import { useEffect, useState } from 'react';
import Icon from './Icon';

const LOG = [
  ['dim', '$ forge deploy'],
  ['dim', '  Building api/ (3 functions)'],
  ['ok', '  ✓ Compiled in 412ms'],
  ['ok', '  ✓ Uploaded 184 kB'],
  ['ok', '  ✓ Propagated to 310 regions'],
  ['url', '  https://acme-api.forge.run'],
  ['done', '  Ready in 1.8s'],
];
const COLORS = { dim: '#8b949e', ok: '#3fb950', url: '#58a6ff', done: '#f0f6fc' };
const LOGOS = [['Northwind', 700, 'Inter'], ['lumen', 500, 'Space Grotesk'], ['ORBIT', 800, 'Inter'], ['Patchwork', 400, 'Instrument Serif'], ['koi.', 700, 'Space Grotesk']];

export default function HeroDeveloper() {
  const [lines, setLines] = useState(0);
  const [run, setRun] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (lines >= LOG.length) return;
    const t = setTimeout(() => setLines(l => l + 1), lines === 0 ? 300 : 420);
    return () => clearTimeout(t);
  }, [lines, run]);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = () => {
    navigator.clipboard?.writeText('npm i -g forge').catch(() => {});
    setCopied(true);
  };

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', color: '#0a0a0a', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <nav style={{ display: 'flex', alignItems: 'center', height: '44px', padding: '0 24px', borderBottom: '1px solid #eaeaea', fontSize: '11px' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '13px' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1 15 14H1Z" fill="#0a0a0a" /></svg> Forge
        </span>
        <span style={{ display: 'flex', gap: '16px', marginLeft: '26px', color: '#666' }}><span>Platform</span><span>Docs</span><span>Pricing</span><span>Enterprise</span></span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
          <button style={{ height: '26px', padding: '0 10px', borderRadius: '6px', border: '1px solid #eaeaea', background: '#fff', fontFamily: 'inherit', fontSize: '11px', cursor: 'pointer' }}>Log in</button>
          <button style={{ height: '26px', padding: '0 10px', borderRadius: '6px', border: 'none', background: '#0a0a0a', color: '#fff', fontFamily: 'inherit', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>Sign up</button>
        </span>
      </nav>

      <div style={{ flex: 1, display: 'flex', gap: '22px', padding: '26px 24px 0' }}>
        <div style={{ width: '262px' }}>
          <div style={{ fontSize: '11px', fontWeight: 500, color: '#666', marginBottom: '10px' }}>Edge Functions · now generally available</div>
          <h1 style={{ fontSize: '31px', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-1.2px', marginBottom: '12px' }}>Deploy APIs to 310 cities in one command.</h1>
          <p style={{ fontSize: '12px', lineHeight: 1.6, color: '#666', marginBottom: '16px' }}>Write a function, push to git, and Forge runs it next to your users with zero config and per-request billing.</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ height: '34px', padding: '0 14px', borderRadius: '7px', border: 'none', background: '#0a0a0a', color: '#fff', fontFamily: 'inherit', fontSize: '12px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Start deploying</button>
            <button onClick={copy} aria-label="Copy install command" style={{ height: '34px', padding: '0 10px', borderRadius: '7px', border: '1px solid #eaeaea', background: '#fafafa', fontFamily: "'JetBrains Mono', monospace", fontSize: '10.5px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', color: '#0a0a0a', whiteSpace: 'nowrap' }}>
              <span style={{ color: '#999' }}>$</span> npm i -g forge <Icon name={copied ? 'check' : 'copy'} size={12} color={copied ? '#16a34a' : '#999'} />
            </button>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ borderRadius: '10px', background: '#0d1117', border: '1px solid #0d1117', overflow: 'hidden' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '26px', padding: '0 10px', borderBottom: '1px solid #21262d', fontSize: '10px', color: '#8b949e' }}>
              <span style={{ display: 'flex', gap: '5px' }}>{[0, 1, 2].map(i => <span key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#30363d' }} />)}</span>
              <span>~/acme-api</span>
              <button onClick={() => { setLines(0); setRun(r => r + 1); }} style={{ border: 'none', background: 'none', color: '#8b949e', cursor: 'pointer', display: 'flex', padding: 0 }} aria-label="Run deploy again"><Icon name="refresh" size={11} /></button>
            </div>
            <pre style={{ margin: 0, padding: '10px 12px', height: '150px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10.5px', lineHeight: '19px' }}>
              {LOG.slice(0, lines).map(([kind, text], i) => <div key={`${run}-${i}`} style={{ color: COLORS[kind], fontWeight: kind === 'done' ? 600 : 400 }}>{text}</div>)}
              {lines < LOG.length && <span style={{ display: 'inline-block', width: '7px', height: '13px', background: '#8b949e', verticalAlign: 'middle' }} />}
            </pre>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '12px', borderTop: '1px solid #eaeaea' }}>
            {[['31ms', 'p95 latency'], ['99.99%', 'Uptime SLA'], ['310', 'Edge regions']].map(([v, l]) => (
              <div key={l} style={{ paddingTop: '10px' }}>
                <div style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.5px' }}>{v}</div>
                <div style={{ fontSize: '10px', color: '#666' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '12px 24px', borderTop: '1px solid #eaeaea', color: '#999' }}>
        <span style={{ fontSize: '10px' }}>Trusted by teams at</span>
        {LOGOS.map(([name, weight, font]) => <span key={name} style={{ fontFamily: `'${font}'`, fontWeight: weight, fontSize: '14px', color: '#8f8f8f' }}>{name}</span>)}
      </div>
    </div>
  );
}
