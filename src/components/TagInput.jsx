import { useState } from 'react';
import Icon from './Icon';

const SUGGESTIONS = ['react', 'typescript', 'design-systems', 'accessibility', 'animation', 'tailwind', 'figma', 'testing'];
const HUES = [262, 199, 330, 160, 32, 0];

export default function TagInput() {
  const [tags, setTags] = useState(['react', 'design-systems', 'motion']);
  const [draft, setDraft] = useState('');

  const add = raw => {
    const t = raw.trim().toLowerCase().replace(/\s+/g, '-');
    if (t && !tags.includes(t) && tags.length < 8) setTags([...tags, t]);
    setDraft('');
  };

  const onKeyDown = e => {
    if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); add(draft); }
    if (e.key === 'Backspace' && !draft && tags.length) setTags(tags.slice(0, -1));
  };

  const matches = draft ? SUGGESTIONS.filter(s => s.includes(draft.toLowerCase()) && !tags.includes(s)).slice(0, 4) : [];

  return (
    <div style={{
      width: '600px', height: '400px', background: '#0f0f14', padding: '50px 60px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#e4e4e7', marginBottom: '4px' }}>Topics</label>
      <div style={{ fontSize: '12px', color: '#71717a', marginBottom: '12px' }}>Press Enter or comma to add · Backspace removes the last tag · {tags.length}/8</div>

      <div style={{ position: 'relative' }}>
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center', minHeight: '50px',
          padding: '8px 10px', borderRadius: '12px', background: '#18181f',
          border: '1px solid #2e2e3a', boxShadow: '0 0 0 4px rgba(139,92,246,0.08)',
        }}>
          {tags.map((t, i) => {
            const hue = HUES[i % HUES.length];
            return (
              <span key={t} style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 6px 4px 10px',
                borderRadius: '8px', fontSize: '12px', fontWeight: 500, animation: 'fadeSlideUp 0.25s ease',
                background: `hsla(${hue}, 80%, 65%, 0.12)`, color: `hsl(${hue}, 85%, 75%)`,
                border: `1px solid hsla(${hue}, 80%, 65%, 0.25)`,
              }}>
                #{t}
                <button onClick={() => setTags(tags.filter(x => x !== t))} aria-label={`Remove ${t}`} style={{ display: 'flex', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: '2px', borderRadius: '4px', opacity: 0.7 }}>
                  <Icon name="x" size={12} strokeWidth={2.5} />
                </button>
              </span>
            );
          })}
          <input value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={onKeyDown}
            placeholder={tags.length ? 'Add another…' : 'Add a topic…'} aria-label="Add tag"
            style={{ flex: 1, minWidth: '110px', background: 'transparent', border: 'none', outline: 'none', color: '#f4f4f5', fontSize: '13px', fontFamily: 'inherit', padding: '4px' }} />
        </div>

        {matches.length > 0 && (
          <div style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, padding: '6px', borderRadius: '12px', background: '#18181f', border: '1px solid #2e2e3a', boxShadow: '0 16px 40px rgba(0,0,0,0.5)', zIndex: 2 }}>
            {matches.map(m => (
              <button key={m} onClick={() => add(m)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '8px', border: 'none', background: 'transparent', color: '#d4d4d8', fontSize: '13px', fontFamily: 'inherit', textAlign: 'left', cursor: 'pointer' }}>
                <Icon name="hash" size={14} color="#8b5cf6" /> {m}
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: '22px', display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ fontSize: '11px', color: '#52525b', marginRight: '4px' }}>Popular:</span>
        {SUGGESTIONS.filter(s => !tags.includes(s)).slice(0, 5).map(s => (
          <button key={s} onClick={() => add(s)} style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '999px', border: '1px dashed #3f3f46', background: 'transparent', color: '#a1a1aa', cursor: 'pointer', fontFamily: 'inherit' }}>+ {s}</button>
        ))}
      </div>
    </div>
  );
}
