import { useState } from 'react';
import Icon from './Icon';

const SNIPPETS = {
  npm: [
    [['c', '# install the SDK']],
    [['k', 'npm'], ['t', ' install '], ['s', '@acme/sdk']],
  ],
  'app.ts': [
    [['k', 'import'], ['t', ' { createClient } '], ['k', 'from'], ['s', " '@acme/sdk'"], ['t', ';']],
    [],
    [['k', 'const'], ['t', ' client = '], ['f', 'createClient'], ['t', '({']],
    [['t', '  apiKey: process.env.'], ['v', 'ACME_KEY'], ['t', ',']],
    [['t', '  region: '], ['s', "'eu-west'"], ['t', ',']],
    [['t', '});']],
    [],
    [['k', 'const'], ['t', ' user = '], ['k', 'await'], ['t', ' client.users.'], ['f', 'get'], ['t', '('], ['s', "'u_42'"], ['t', ');']],
  ],
  curl: [
    [['k', 'curl'], ['t', ' https://api.acme.dev/v1/users/u_42 \\']],
    [['t', '  -H '], ['s', '"Authorization: Bearer $ACME_KEY"']],
  ],
};
const COLORS = { k: '#c084fc', s: '#86efac', f: '#7dd3fc', v: '#fca5a5', c: '#6b7280', t: '#e5e7eb' };

export default function CodeBlockTabs() {
  const [tab, setTab] = useState('app.ts');
  const [copied, setCopied] = useState(false);
  const lines = SNIPPETS[tab];
  const highlight = tab === 'app.ts' ? [3, 4] : [];

  const copy = () => {
    const text = lines.map(l => l.map(([, t]) => t).join('')).join('\n');
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div style={{ width: '600px', height: '400px', background: 'linear-gradient(135deg, #1e1b4b, #0f172a 60%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ width: '500px', borderRadius: '14px', background: '#0d1117', border: '1px solid #21262d', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #21262d', background: '#010409', paddingRight: '8px' }}>
          {Object.keys(SNIPPETS).map(k => (
            <button key={k} onClick={() => { setTab(k); setCopied(false); }} style={{
              padding: '10px 16px', border: 'none', background: tab === k ? '#0d1117' : 'transparent', cursor: 'pointer',
              color: tab === k ? '#e6edf3' : '#7d8590', fontSize: '12px', fontFamily: "'JetBrains Mono', 'DM Mono', monospace",
              borderRight: '1px solid #21262d', borderTop: `2px solid ${tab === k ? '#f78166' : 'transparent'}`,
            }}>{k}</button>
          ))}
          <button onClick={copy} aria-label="Copy code" style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px', padding: '5px 9px', borderRadius: '6px', border: '1px solid #30363d', background: copied ? 'rgba(46,160,67,0.15)' : '#21262d', color: copied ? '#3fb950' : '#7d8590', fontSize: '11px', fontFamily: 'inherit', cursor: 'pointer', transition: 'all 0.2s' }}>
            <Icon name={copied ? 'check' : 'copy'} size={12} /> {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <pre style={{ margin: 0, padding: '14px 0', fontFamily: "'JetBrains Mono', 'DM Mono', monospace", fontSize: '12.5px', lineHeight: '21px', minHeight: '210px' }}>
          {lines.map((line, i) => (
            <div key={i} style={{ display: 'flex', background: highlight.includes(i) ? 'rgba(56,139,253,0.1)' : 'transparent', borderLeft: `2px solid ${highlight.includes(i) ? '#388bfd' : 'transparent'}` }}>
              <span style={{ width: '40px', textAlign: 'right', paddingRight: '16px', color: '#484f58', userSelect: 'none', flexShrink: 0 }}>{i + 1}</span>
              <code>{line.map(([kind, text], j) => <span key={j} style={{ color: COLORS[kind] }}>{text}</span>)}</code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
