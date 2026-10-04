import { useState } from 'react';
import Icon from './Icon';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

function buildMonth(year, month) {
  const first = new Date(year, month, 1);
  const offset = (first.getDay() + 6) % 7; // Monday-first
  const days = new Date(year, month + 1, 0).getDate();
  const cells = Array.from({ length: offset }, () => null);
  for (let d = 1; d <= days; d++) cells.push(d);
  while (cells.length % 7) cells.push(null);
  return cells;
}

const sameDay = (a, b) => a && b && a.y === b.y && a.m === b.m && a.d === b.d;
const toNum = v => v.y * 10000 + v.m * 100 + v.d;

export default function DatePicker() {
  const [view, setView] = useState({ y: 2026, m: 9 });
  const [range, setRange] = useState({ start: { y: 2026, m: 9, d: 12 }, end: { y: 2026, m: 9, d: 17 } });
  const [hover, setHover] = useState(null);

  const shift = delta => setView(v => {
    const m = v.m + delta;
    return { y: v.y + Math.floor(m / 12), m: ((m % 12) + 12) % 12 };
  });

  const pick = d => {
    const day = { ...view, d };
    if (!range.start || range.end) setRange({ start: day, end: null });
    else if (toNum(day) < toNum(range.start)) setRange({ start: day, end: range.start });
    else setRange({ start: range.start, end: day });
  };

  const endForPreview = range.end || hover;
  const inRange = day => range.start && endForPreview && toNum(day) > Math.min(toNum(range.start), toNum(endForPreview)) && toNum(day) < Math.max(toNum(range.start), toNum(endForPreview));
  const nights = range.start && range.end ? Math.round((new Date(range.end.y, range.end.m, range.end.d) - new Date(range.start.y, range.start.m, range.start.d)) / 86400000) : 0;
  const fmt = v => v ? `${MONTHS[v.m].slice(0, 3)} ${v.d}` : '—';

  return (
    <div style={{
      width: '600px', height: '400px', background: '#eef2f7',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ width: '290px', padding: '18px', borderRadius: '20px', background: '#fff', boxShadow: '0 20px 50px rgba(15,23,42,0.12)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <button onClick={() => shift(-1)} aria-label="Previous month" style={navBtn}><Icon name="chevronLeft" size={16} /></button>
          <div style={{ fontWeight: 600, fontSize: '14px', color: '#0f172a' }}>{MONTHS[view.m]} {view.y}</div>
          <button onClick={() => shift(1)} aria-label="Next month" style={navBtn}><Icon name="chevronRight" size={16} /></button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: '4px' }} onMouseLeave={() => setHover(null)}>
          {WEEKDAYS.map(w => <div key={w} style={{ textAlign: 'center', fontSize: '10px', fontWeight: 600, color: '#94a3b8', paddingBottom: '6px' }}>{w}</div>)}
          {buildMonth(view.y, view.m).map((d, i) => {
            if (!d) return <div key={`e${i}`} />;
            const day = { ...view, d };
            const isEdge = sameDay(day, range.start) || sameDay(day, range.end);
            const between = inRange(day);
            return (
              <div key={d} style={{ background: between ? '#e0e7ff' : 'transparent', borderRadius: between ? 0 : '10px' }}>
                <button onClick={() => pick(d)} onMouseEnter={() => setHover(day)} style={{
                  width: '100%', aspectRatio: '1', border: 'none', borderRadius: '10px', cursor: 'pointer',
                  fontFamily: 'inherit', fontSize: '12px', fontWeight: isEdge ? 700 : 400,
                  background: isEdge ? '#4f46e5' : 'transparent', color: isEdge ? '#fff' : between ? '#3730a3' : '#334155',
                  boxShadow: isEdge ? '0 6px 14px rgba(79,70,229,0.35)' : 'none',
                }}>{d}</button>
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ width: '180px' }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '2px', color: '#64748b', textTransform: 'uppercase', marginBottom: '10px' }}>Your stay</div>
        {[['Check-in', range.start], ['Check-out', range.end]].map(([l, v]) => (
          <div key={l} style={{ padding: '10px 14px', borderRadius: '12px', background: '#fff', marginBottom: '8px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '10px', color: '#94a3b8' }}>{l}</div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{fmt(v)}</div>
          </div>
        ))}
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '26px', fontWeight: 600, color: '#4f46e5', marginTop: '10px' }}>{nights || '–'} <span style={{ fontSize: '13px', color: '#64748b', fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>night{nights === 1 ? '' : 's'}</span></div>
      </div>
    </div>
  );
}

const navBtn = { width: '30px', height: '30px', borderRadius: '9px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' };
