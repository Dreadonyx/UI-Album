import { useState } from 'react';

const COLUMNS = [
  { id: 'todo', title: 'To do', color: '#94a3b8' },
  { id: 'doing', title: 'In progress', color: '#f59e0b' },
  { id: 'done', title: 'Done', color: '#22c55e' },
];
const LABELS = {
  Design: { bg: '#fdf2f8', fg: '#be185d' },
  Bug: { bg: '#fef2f2', fg: '#b91c1c' },
  Feature: { bg: '#eff6ff', fg: '#1d4ed8' },
  Docs: { bg: '#f0fdf4', fg: '#15803d' },
};
const INITIAL = [
  { id: 1, col: 'todo', title: 'Audit color contrast', label: 'Design', who: '#f472b6' },
  { id: 2, col: 'todo', title: 'Write migration guide', label: 'Docs', who: '#34d399' },
  { id: 3, col: 'doing', title: 'Fix dropdown focus trap', label: 'Bug', who: '#60a5fa' },
  { id: 4, col: 'doing', title: 'Command palette search', label: 'Feature', who: '#fbbf24' },
  { id: 5, col: 'done', title: 'Ship dark mode tokens', label: 'Design', who: '#a78bfa' },
];

export default function KanbanBoard() {
  const [cards, setCards] = useState(INITIAL);
  const [dragId, setDragId] = useState(null);
  const [overCol, setOverCol] = useState(null);

  const drop = col => {
    if (dragId != null) setCards(cs => cs.map(c => (c.id === dragId ? { ...c, col } : c)));
    setDragId(null);
    setOverCol(null);
  };

  return (
    <div style={{ width: '600px', height: '400px', background: '#f1f5f9', padding: '20px', display: 'flex', gap: '12px', fontFamily: "'Inter', sans-serif" }}>
      {COLUMNS.map(col => {
        const list = cards.filter(c => c.col === col.id);
        const isOver = overCol === col.id;
        return (
          <div key={col.id}
            onDragOver={e => { e.preventDefault(); setOverCol(col.id); }}
            onDragLeave={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOverCol(null); }}
            onDrop={() => drop(col.id)}
            style={{
              flex: 1, borderRadius: '14px', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px',
              background: isOver ? '#e0e7ff' : '#e8edf3', outline: isOver ? '2px dashed #818cf8' : '2px dashed transparent',
              transition: 'background 0.15s',
            }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', fontWeight: 600, color: '#334155', padding: '2px 4px 6px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: col.color }} />
              {col.title}
              <span style={{ marginLeft: 'auto', fontSize: '11px', fontWeight: 500, color: '#94a3b8', background: '#fff', borderRadius: '999px', padding: '1px 7px' }}>{list.length}</span>
            </div>
            {list.map(c => (
              <div key={c.id} draggable
                onDragStart={() => setDragId(c.id)}
                onDragEnd={() => { setDragId(null); setOverCol(null); }}
                style={{
                  padding: '11px', borderRadius: '10px', background: '#fff', cursor: 'grab',
                  boxShadow: dragId === c.id ? '0 12px 24px rgba(15,23,42,0.18)' : '0 1px 2px rgba(15,23,42,0.06)',
                  opacity: dragId === c.id ? 0.6 : 1, transform: dragId === c.id ? 'rotate(2deg)' : 'none', transition: 'box-shadow 0.15s',
                }}>
                <span style={{ fontSize: '10px', fontWeight: 600, padding: '2px 7px', borderRadius: '5px', background: LABELS[c.label].bg, color: LABELS[c.label].fg }}>{c.label}</span>
                <div style={{ fontSize: '12px', fontWeight: 500, color: '#0f172a', margin: '8px 0 10px', lineHeight: 1.35, textDecoration: c.col === 'done' ? 'line-through' : 'none', textDecorationColor: '#94a3b8' }}>{c.title}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '10px', color: '#94a3b8', fontFamily: "'DM Mono', monospace" }}>UA-{100 + c.id}</span>
                  <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: c.who, border: '2px solid #fff', boxShadow: '0 0 0 1px #e2e8f0' }} />
                </div>
              </div>
            ))}
            {list.length === 0 && <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: '#94a3b8' }}>Drop cards here</div>}
          </div>
        );
      })}
    </div>
  );
}
