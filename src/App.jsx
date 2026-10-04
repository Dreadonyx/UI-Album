import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CATALOG, CATEGORIES, buildFullSpec } from './catalog';

const SAVED_KEY = 'ui-album:saved';
const PREVIEW_W = 600;
const PREVIEW_H = 400;

// ─── Helpers ─────────────────────────────────────────────────
function readSaved() {
  try {
    const raw = JSON.parse(localStorage.getItem(SAVED_KEY) || '[]');
    return Array.isArray(raw) ? raw.filter(id => CATALOG.some(c => c.id === id)) : [];
  } catch {
    return [];
  }
}

function writeSaved(ids) {
  try { localStorage.setItem(SAVED_KEY, JSON.stringify(ids)); } catch { /* storage unavailable */ }
}

function idFromHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  return CATALOG.some(c => c.id === id) ? id : null;
}

function setHash(id) {
  const url = id ? `#${encodeURIComponent(id)}` : window.location.pathname + window.location.search;
  window.history.replaceState(null, '', url);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Clipboard API is unavailable on insecure origins; fall back to a hidden textarea.
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

function isTypingTarget(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable || el.getAttribute?.('role') === 'slider';
}

function matches(card, q) {
  if (!q) return true;
  const haystack = [card.title, card.category, card.prompt, ...card.tags, ...card.fonts].join(' ').toLowerCase();
  return q.toLowerCase().split(/\s+/).every(term => haystack.includes(term));
}

function useViewport() {
  const [vp, setVp] = useState(() => ({ w: window.innerWidth, h: window.innerHeight }));
  useEffect(() => {
    const onResize = () => setVp({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return vp;
}

// ─── Toast ───────────────────────────────────────────────────
function Toast({ toast }) {
  return (
    <div role="status" aria-live="polite" className={`album-toast${toast.error ? ' is-error' : ''}${toast.exiting ? ' is-exiting' : ''}`}>
      {toast.error ? '✕' : '✓'} {toast.message}
    </div>
  );
}

// ─── Vinyl Disc ──────────────────────────────────────────────
function VinylDisc() {
  return (
    <div className="album-vinyl" aria-hidden="true">
      <div className="album-vinyl-hole" />
    </div>
  );
}

// ─── Live, lazily-mounted, width-fitted preview ─────────────
function LivePreview({ component }) {
  const Preview = component;
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '400px 0px' });
    ro.observe(el);
    io.observe(el);
    return () => { ro.disconnect(); io.disconnect(); };
  }, []);

  return (
    <div ref={ref} className="album-preview-frame">
      {visible && width > 0 && (
        <div aria-hidden="true" inert style={{ width: PREVIEW_W, height: PREVIEW_H, transform: `scale(${width / PREVIEW_W})`, transformOrigin: 'top left', pointerEvents: 'none' }}>
          <Suspense fallback={null}>
            <Preview />
          </Suspense>
        </div>
      )}
    </div>
  );
}

// ─── Category Filter ─────────────────────────────────────────
function CategoryFilter({ active, onChange, counts, savedCount }) {
  const chips = ['All', ...CATEGORIES.filter(cat => counts[cat]), 'Saved'];
  return (
    <div className="album-filters" role="toolbar" aria-label="Filter by category">
      {chips.map(cat => {
        const count = cat === 'All' ? CATALOG.length : cat === 'Saved' ? savedCount : counts[cat] || 0;
        const isActive = cat === active;
        return (
          <button key={cat} type="button" onClick={() => onChange(cat)} aria-pressed={isActive} className={`album-chip${isActive ? ' is-active' : ''}`}>
            {cat === 'Saved' && '★ '}{cat}<span className="album-chip-count">{count}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Fullscreen Modal ────────────────────────────────────────
function FullscreenModal({ card, position, total, onClose, onStep, onCopy, saved, onToggleSave }) {
  const vp = useViewport();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, []);

  useEffect(() => { closeRef.current?.focus(); }, []);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.defaultPrevented || isTypingTarget(e.target)) return;
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onStep]);

  const trapFocus = e => {
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const focusables = dialogRef.current.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select, [tabindex]:not([tabindex="-1"])');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  const wide = vp.w >= 1000;
  const stageW = wide ? vp.w - 360 - 120 : vp.w - 40;
  const stageH = wide ? vp.h - 150 : Math.min(vp.h * 0.5, 560);
  const scale = Math.max(0.3, Math.min(stageW / PREVIEW_W, stageH / PREVIEW_H, 1.6));
  const Preview = card.component;

  return (
    <div className="album-modal-backdrop" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog" aria-modal="true" aria-labelledby="album-modal-title"
        className={`album-modal${wide ? ' is-wide' : ''}`}
        onClick={e => e.stopPropagation()}
        onKeyDown={trapFocus}
      >
        <div className="album-modal-top">
          <div className="album-modal-meta">
            <span style={{ color: card.accent }}>{card.category}</span> · {position + 1} / {total}
          </div>
          <div className="album-modal-nav">
            <button type="button" className="album-icon-btn" onClick={() => onStep(-1)} aria-label="Previous component">←</button>
            <button type="button" className="album-icon-btn" onClick={() => onStep(1)} aria-label="Next component">→</button>
            <button type="button" ref={closeRef} className="album-icon-btn" onClick={onClose} aria-label="Close preview">✕</button>
          </div>
        </div>

        <div className="album-modal-body">
          <div className="album-stage-wrap">
            <div className="album-stage" style={{ width: PREVIEW_W * scale, height: PREVIEW_H * scale, boxShadow: `0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px ${card.accent}22` }}>
              <div style={{ width: PREVIEW_W, height: PREVIEW_H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
                <Suspense fallback={<div className="album-stage-loading">Loading…</div>}>
                  <Preview key={card.id} />
                </Suspense>
              </div>
            </div>
            <div className="album-stage-hint">Live & interactive · {Math.round(scale * 100)}%</div>
          </div>

          <aside className="album-modal-info">
            <h2 id="album-modal-title" className="album-modal-title">{card.title}</h2>
            <p className="album-modal-usage">{card.usage}</p>

            <div className="album-section-label">Prompt</div>
            <p className="album-modal-prompt">{card.prompt}</p>

            <div className="album-modal-actions">
              <button type="button" className="album-btn is-primary" style={{ '--accent': card.accent }} onClick={() => onCopy(card.prompt, 'Prompt copied')}>Copy prompt</button>
              <button type="button" className="album-btn" onClick={() => onCopy(buildFullSpec(card), 'Full spec copied')}>Full spec</button>
              <button type="button" className="album-btn" onClick={() => onCopy(card.code, 'CSS copied')}>CSS</button>
            </div>

            <div className="album-section-label">Palette <span className="album-hint">click to copy</span></div>
            <div className="album-swatches">
              {card.palette.map(c => (
                <button key={c} type="button" className="album-swatch" style={{ background: c }} title={c} aria-label={`Copy color ${c}`} onClick={() => onCopy(c, `${c} copied`)} />
              ))}
            </div>

            <div className="album-section-label">Typography</div>
            <div className="album-tags">
              {card.fonts.map(f => <span key={f} className="album-tag" style={{ fontFamily: `'${f}'` }}>{f}</span>)}
            </div>

            <div className="album-section-label">Tags</div>
            <div className="album-tags">
              {card.tags.map(t => <span key={t} className="album-tag">{t}</span>)}
            </div>

            <div className="album-section-label">Reference CSS</div>
            <pre className="album-code">{card.code}</pre>

            <div className="album-modal-actions">
              <button type="button" className={`album-btn${saved ? ' is-saved' : ''}`} aria-pressed={saved} onClick={() => onToggleSave(card.id)}>{saved ? '★ Saved' : '☆ Save'}</button>
              <button type="button" className="album-btn" onClick={() => onCopy(`${window.location.origin}${window.location.pathname}#${card.id}`, 'Link copied')}>Copy link</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

// ─── Live Flip Card ──────────────────────────────────────────
function LiveFlipCard({ card, index, onCopy, onView, saved, onToggleSave }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article className="album-card" style={{ animationDelay: `${Math.min(index, 12) * 0.05}s` }}>
      <div className={`album-card-inner${flipped ? ' is-flipped' : ''}`}>
        {/* ── FRONT ── */}
        <div className="album-face album-front" inert={flipped}>
          <div className="album-preview">
            <LivePreview component={card.component} />
            <button type="button" className="album-preview-overlay" onClick={() => onView(card.id)} aria-label={`Open ${card.title} preview`}>
              <span>View live ↗</span>
            </button>
          </div>
          <div className="album-card-bar" style={{ borderTop: `1px solid ${card.accent}20` }}>
            <div className="album-card-heading">
              <div className="album-card-category" style={{ color: card.accent }}>{card.category}</div>
              <h3 className="album-card-title">{card.title}</h3>
            </div>
            <div className="album-card-tools">
              <button type="button" className={`album-mini-btn${saved ? ' is-saved' : ''}`} onClick={() => onToggleSave(card.id)} aria-pressed={saved} aria-label={saved ? `Remove ${card.title} from saved` : `Save ${card.title}`} title={saved ? 'Saved' : 'Save'}>{saved ? '★' : '☆'}</button>
              <button type="button" className="album-mini-btn" onClick={() => onCopy(card.prompt, 'Prompt copied')} aria-label={`Copy ${card.title} prompt`} title="Copy prompt">⧉</button>
              <button type="button" className="album-mini-btn is-text" onClick={() => setFlipped(true)}>Prompt →</button>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div className="album-face album-back" inert={!flipped} style={{ border: `1px solid ${card.accent}40`, boxShadow: `inset 0 0 30px ${card.accent}08, 0 0 20px ${card.accent}10` }}>
          <div className="album-back-glow" style={{ background: `linear-gradient(135deg, ${card.accent}20, transparent, ${card.accent}10)` }} />
          <div className="album-back-content">
            <div className="album-back-head">
              <span className="album-pill" style={{ color: card.accent, background: `${card.accent}15`, borderColor: `${card.accent}30` }}>{card.category}</span>
              <button type="button" className="album-mini-btn is-text" onClick={() => setFlipped(false)}>← Preview</button>
            </div>
            <h3 className="album-back-title">{card.title}</h3>
            <p className="album-back-prompt">{card.prompt}</p>
            <div className="album-back-row">
              <div className="album-swatches is-small">
                {card.palette.map(c => <span key={c} className="album-swatch" style={{ background: c }} title={c} />)}
              </div>
              <div className="album-back-fonts">{card.fonts.join(' · ')}</div>
            </div>
            <div className="album-back-actions">
              <button type="button" className="album-btn is-primary" style={{ '--accent': card.accent }} onClick={() => onCopy(card.prompt, 'Prompt copied')}>Prompt</button>
              <button type="button" className="album-btn" onClick={() => onCopy(buildFullSpec(card), 'Full spec copied')}>Full spec</button>
              <button type="button" className="album-btn" onClick={() => onCopy(card.code, 'CSS copied')}>CSS</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// ─── App ─────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(idFromHash);
  const [saved, setSaved] = useState(readSaved);
  const [toast, setToast] = useState(null);
  const searchRef = useRef(null);
  const toastTimers = useRef([]);
  const returnFocus = useRef(null);

  const counts = useMemo(() => CATALOG.reduce((acc, c) => ({ ...acc, [c.category]: (acc[c.category] || 0) + 1 }), {}), []);

  const filtered = useMemo(() => CATALOG.filter(c => {
    if (activeCategory === 'Saved' && !saved.includes(c.id)) return false;
    if (activeCategory !== 'All' && activeCategory !== 'Saved' && c.category !== activeCategory) return false;
    return matches(c, query.trim());
  }), [activeCategory, query, saved]);

  const selected = selectedId ? CATALOG.find(c => c.id === selectedId) : null;
  const navList = selected && filtered.some(c => c.id === selected.id) ? filtered : CATALOG;
  const position = selected ? navList.findIndex(c => c.id === selected.id) : -1;

  useEffect(() => {
    const onHash = () => setSelectedId(idFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    const onKey = e => {
      if (e.key === '/' && !isTypingTarget(e.target) && !document.querySelector('.album-modal')) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => () => toastTimers.current.forEach(clearTimeout), []);

  const showToast = useCallback((message, error = false) => {
    toastTimers.current.forEach(clearTimeout);
    const id = Date.now();
    setToast({ id, message, error, exiting: false });
    toastTimers.current = [
      setTimeout(() => setToast(t => (t && t.id === id ? { ...t, exiting: true } : t)), 1900),
      setTimeout(() => setToast(t => (t && t.id === id ? null : t)), 2200),
    ];
  }, []);

  const handleCopy = useCallback(async (text, msg = 'Copied to clipboard') => {
    const ok = await copyText(text);
    showToast(ok ? msg : 'Copy failed — select the text manually', !ok);
  }, [showToast]);

  const toggleSave = useCallback(id => {
    setSaved(prev => {
      const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      writeSaved(next);
      return next;
    });
  }, []);

  const openCard = useCallback(id => {
    returnFocus.current = document.activeElement;
    setSelectedId(id);
    setHash(id);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedId(null);
    setHash(null);
    const el = returnFocus.current;
    if (el && typeof el.focus === 'function') requestAnimationFrame(() => el.focus());
  }, []);

  const stepModal = useCallback(delta => {
    if (position < 0 || !navList.length) return;
    const next = navList[(position + delta + navList.length) % navList.length];
    setSelectedId(next.id);
    setHash(next.id);
  }, [navList, position]);

  const surprise = () => {
    const pool = filtered.length ? filtered : CATALOG;
    openCard(pool[Math.floor(Math.random() * pool.length)].id);
  };

  return (
    <div className="album-app">
      <div className="album-ambient" aria-hidden="true" />

      <header className="album-header">
        <div className="album-brand">
          <VinylDisc />
          <div>
            <h1 className="album-title">UI Album</h1>
            <p className="album-subtitle">Curated Interface Collection · prompts included</p>
          </div>
        </div>
        <div className="album-stat" aria-live="polite">
          <span className="album-stat-count">{filtered.length}</span>
          <span className="album-stat-label">of {CATALOG.length}<br />components</span>
        </div>
      </header>

      <div className="album-toolbar">
        <label className="album-search">
          <span aria-hidden="true">⌕</span>
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => { if (e.key === 'Escape') { setQuery(''); e.currentTarget.blur(); } }}
            placeholder="Search components, tags, fonts, prompts…"
            aria-label="Search components"
          />
          <kbd className="album-kbd">/</kbd>
        </label>
        <button type="button" className="album-btn" onClick={surprise}>✦ Surprise me</button>
      </div>

      <CategoryFilter active={activeCategory} onChange={setActiveCategory} counts={counts} savedCount={saved.length} />

      <main className="album-grid">
        {filtered.map((card, i) => (
          <LiveFlipCard
            key={card.id}
            card={card}
            index={i}
            onCopy={handleCopy}
            onView={openCard}
            saved={saved.includes(card.id)}
            onToggleSave={toggleSave}
          />
        ))}
        {filtered.length === 0 && (
          <div className="album-empty">
            <p>{activeCategory === 'Saved' && !query ? 'Nothing saved yet. Tap ☆ on any card to keep it here.' : `No components match “${query}”.`}</p>
            {(query || activeCategory !== 'All') && (
              <button type="button" className="album-btn" onClick={() => { setQuery(''); setActiveCategory('All'); }}>Clear filters</button>
            )}
          </div>
        )}
      </main>

      <footer className="album-footer">
        <span>{CATALOG.length} components across {CATEGORIES.length} categories</span>
        <span className="album-footer-keys"><kbd className="album-kbd">/</kbd> search · <kbd className="album-kbd">←</kbd><kbd className="album-kbd">→</kbd> browse · <kbd className="album-kbd">Esc</kbd> close</span>
      </footer>

      {selected && (
        <FullscreenModal
          card={selected}
          position={position}
          total={navList.length}
          onClose={closeModal}
          onStep={stepModal}
          onCopy={handleCopy}
          saved={saved.includes(selected.id)}
          onToggleSave={toggleSave}
        />
      )}
      {toast && <Toast key={toast.id} toast={toast} />}
    </div>
  );
}
