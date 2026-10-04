import { useState } from 'react';
import Icon from './Icon';

const INITIAL = [
  { id: 1, author: 'Hana Sato', color: '#f472b6', time: '2h', text: 'The new spacing scale makes the cards breathe so much better. Can we apply it to the settings pages too?', likes: 12, replies: [
    { id: 11, author: 'Omar Faruk', color: '#60a5fa', time: '1h', text: 'Yes, already on it. PR should be up today.', likes: 4, op: true },
  ] },
  { id: 2, author: 'Clara Weiss', color: '#34d399', time: '45m', text: 'Minor: the focus ring on dark mode is a bit low contrast.', likes: 3, replies: [] },
];

function Comment({ c, liked, onLike, child }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginTop: child ? '10px' : 0 }}>
      <div style={{ width: child ? '24px' : '30px', height: child ? '24px' : '30px', borderRadius: '50%', background: c.color, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: child ? '10px' : '12px', fontWeight: 700, color: '#fff' }}>{c.author[0]}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
          <b style={{ color: '#1e293b' }}>{c.author}</b>
          {c.op && <span style={{ fontSize: '9px', fontWeight: 700, padding: '1px 5px', borderRadius: '4px', background: '#e0e7ff', color: '#4338ca' }}>AUTHOR</span>}
          <span style={{ color: '#94a3b8' }}>· {c.time}</span>
        </div>
        <p style={{ fontSize: '12.5px', lineHeight: 1.5, color: '#334155', margin: '3px 0 6px' }}>{c.text}</p>
        <div style={{ display: 'flex', gap: '14px', fontSize: '11px', color: '#64748b' }}>
          <button onClick={() => onLike(c.id)} aria-pressed={liked} style={{ display: 'flex', alignItems: 'center', gap: '4px', border: 'none', background: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: '11px', color: liked ? '#e11d48' : '#64748b' }}>
            <Icon name="heart" size={13} fill={liked ? '#e11d48' : 'none'} /> {c.likes + (liked ? 1 : 0)}
          </button>
          <span style={{ cursor: 'pointer' }}>Reply</span>
        </div>
      </div>
    </div>
  );
}

export default function CommentThread() {
  const [comments, setComments] = useState(INITIAL);
  const [liked, setLiked] = useState([11]);
  const [draft, setDraft] = useState('');
  const toggleLike = id => setLiked(l => (l.includes(id) ? l.filter(x => x !== id) : [...l, id]));

  const post = e => {
    e.preventDefault();
    if (!draft.trim()) return;
    setComments(cs => [...cs, { id: Date.now(), author: 'You', color: '#8b5cf6', time: 'now', text: draft.trim(), likes: 0, replies: [] }]);
    setDraft('');
  };

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', padding: '20px 40px', display: 'flex', flexDirection: 'column', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', marginBottom: '12px' }}>Discussion <span style={{ color: '#94a3b8', fontWeight: 400 }}>· {comments.reduce((n, c) => n + 1 + c.replies.length, 0)}</span></div>

      <form onSubmit={post} style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#8b5cf6', flexShrink: 0 }} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '6px', padding: '4px 4px 4px 12px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <input value={draft} onChange={e => setDraft(e.target.value)} placeholder="Add a comment…" aria-label="Add a comment" style={{ flex: 1, border: 'none', outline: 'none', fontSize: '12.5px', fontFamily: 'inherit', color: '#0f172a' }} />
          <button type="submit" disabled={!draft.trim()} style={{ padding: '6px 12px', borderRadius: '7px', border: 'none', background: draft.trim() ? '#0f172a' : '#e2e8f0', color: draft.trim() ? '#fff' : '#94a3b8', fontSize: '11px', fontWeight: 600, fontFamily: 'inherit', cursor: draft.trim() ? 'pointer' : 'default' }}>Post</button>
        </div>
      </form>

      <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {comments.map(c => (
          <div key={c.id} style={{ animation: 'fadeSlideUp 0.3s ease' }}>
            <Comment c={c} liked={liked.includes(c.id)} onLike={toggleLike} />
            {c.replies.length > 0 && (
              <div style={{ marginLeft: '15px', paddingLeft: '25px', borderLeft: '2px solid #f1f5f9' }}>
                {c.replies.map(r => <Comment key={r.id} c={r} liked={liked.includes(r.id)} onLike={toggleLike} child />)}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
