import { useState } from 'react';
import Icon from './Icon';

const LABELS = ['', 'Terrible', 'Not great', 'Okay', 'Good', 'Amazing!'];
const BREAKDOWN = [68, 21, 6, 3, 2];

export default function StarRating() {
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(0);
  const shown = hover || rating;

  return (
    <div style={{
      width: '600px', height: '400px', background: '#1a1625',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '22px', color: '#f5f3ff', marginBottom: '6px' }}>Rate your stay</div>
        <div style={{ fontSize: '12px', color: '#8b85a0', marginBottom: '20px' }}>Your feedback helps other travelers</div>
        <div role="radiogroup" aria-label="Rating" style={{ display: 'flex', gap: '6px', justifyContent: 'center' }} onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map(n => {
            const on = n <= shown;
            return (
              <button key={n} role="radio" aria-checked={rating === n} aria-label={`${n} star${n > 1 ? 's' : ''}`}
                onClick={() => setRating(n)} onMouseEnter={() => setHover(n)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer', padding: '2px',
                  transform: hover === n ? 'scale(1.25) rotate(-8deg)' : 'scale(1)', transition: 'transform 0.2s cubic-bezier(0.34,1.56,0.64,1)',
                  filter: on ? 'drop-shadow(0 0 10px rgba(251,191,36,0.55))' : 'none',
                }}>
                <Icon name="star" size={34} color={on ? '#fbbf24' : '#3d3650'} fill={on ? '#fbbf24' : 'none'} strokeWidth={1.5} />
              </button>
            );
          })}
        </div>
        <div style={{ height: '22px', marginTop: '14px', fontSize: '14px', fontWeight: 600, color: '#fbbf24' }}>{LABELS[shown]}</div>
      </div>

      <div style={{ width: '190px', padding: '18px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px', marginBottom: '12px' }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '34px', fontWeight: 600, color: '#fff' }}>4.6</span>
          <span style={{ fontSize: '11px', color: '#8b85a0' }}>/ 5 · 1,920 reviews</span>
        </div>
        {BREAKDOWN.map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ fontSize: '11px', color: '#8b85a0', width: '10px' }}>{5 - i}</span>
            <div style={{ flex: 1, height: '6px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div style={{ width: `${p}%`, height: '100%', background: '#fbbf24', borderRadius: '4px' }} />
            </div>
            <span style={{ fontSize: '10px', color: '#6b6580', width: '26px', textAlign: 'right', fontFamily: "'DM Mono', monospace" }}>{p}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
