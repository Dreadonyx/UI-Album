import { useState } from 'react';
import Icon from './Icon';

const TOTAL = 12;

function pageList(current) {
  if (current <= 4) return [1, 2, 3, 4, 5, '…', TOTAL];
  if (current >= TOTAL - 3) return [1, '…', TOTAL - 4, TOTAL - 3, TOTAL - 2, TOTAL - 1, TOTAL];
  return [1, '…', current - 1, current, current + 1, '…', TOTAL];
}

export default function BreadcrumbPagination() {
  const [page, setPage] = useState(4);
  const crumbs = ['Home', 'Library', 'Components', 'Navigation'];

  const navBtn = disabled => ({
    display: 'flex', alignItems: 'center', gap: '6px', height: '36px', padding: '0 12px',
    borderRadius: '10px', border: '1px solid #e7e5e4', background: '#fff',
    color: disabled ? '#d6d3d1' : '#44403c', fontFamily: 'inherit', fontSize: '13px',
    cursor: disabled ? 'not-allowed' : 'pointer',
  });

  return (
    <div style={{
      width: '600px', height: '400px', background: '#fafaf9',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '48px',
      padding: '0 48px', fontFamily: "'Inter', sans-serif",
    }}>
      <div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '14px' }}>Breadcrumb</div>
        <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
          {crumbs.map((c, i) => {
            const last = i === crumbs.length - 1;
            return (
              <span key={c} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{
                  display: 'flex', alignItems: 'center', gap: '6px',
                  fontSize: '13px', padding: '5px 10px', borderRadius: '8px',
                  color: last ? '#1c1917' : '#78716c', fontWeight: last ? 600 : 400,
                  background: last ? '#fff' : 'transparent',
                  border: last ? '1px solid #e7e5e4' : '1px solid transparent',
                  boxShadow: last ? '0 1px 2px rgba(0,0,0,0.04)' : 'none',
                }} aria-current={last ? 'page' : undefined}>
                  {i === 0 && <Icon name="home" size={14} />}
                  {c}
                </span>
                {!last && <Icon name="chevronRight" size={14} color="#d6d3d1" />}
              </span>
            );
          })}
        </nav>
      </div>

      <div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: '#a8a29e', marginBottom: '14px' }}>Pagination · page {page} of {TOTAL}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button disabled={page === 1} onClick={() => setPage(p => p - 1)} style={navBtn(page === 1)}>
            <Icon name="chevronLeft" size={15} /> Prev
          </button>
          {pageList(page).map((p, i) => p === '…' ? (
            <span key={`gap-${i}`} style={{ width: '28px', textAlign: 'center', color: '#a8a29e', fontSize: '13px' }}>…</span>
          ) : (
            <button key={p} onClick={() => setPage(p)} aria-current={p === page ? 'page' : undefined} style={{
              width: '36px', height: '36px', borderRadius: '10px', fontFamily: 'inherit',
              fontSize: '13px', fontWeight: p === page ? 600 : 400, cursor: 'pointer',
              border: p === page ? '1px solid #1c1917' : '1px solid transparent',
              background: p === page ? '#1c1917' : 'transparent',
              color: p === page ? '#fafaf9' : '#57534e', transition: 'all 0.2s',
            }}>{p}</button>
          ))}
          <button disabled={page === TOTAL} onClick={() => setPage(p => p + 1)} style={navBtn(page === TOTAL)}>
            Next <Icon name="chevronRight" size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
