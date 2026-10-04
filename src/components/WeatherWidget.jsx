import { useState } from 'react';
import Icon from './Icon';

const CITIES = {
  Lisbon: { temp: 24, cond: 'Sunny', icon: 'sun', hi: 27, lo: 17, wind: 12, hum: 48, sky: ['#38bdf8', '#0ea5e9', '#f59e0b'], hours: [22, 24, 25, 26, 25, 23] },
  Oslo: { temp: 8, cond: 'Cloudy', icon: 'cloud', hi: 10, lo: 4, wind: 21, hum: 81, sky: ['#64748b', '#334155', '#1e293b'], hours: [7, 8, 9, 8, 7, 5] },
  Kyoto: { temp: 16, cond: 'Clear night', icon: 'moon', hi: 21, lo: 13, wind: 6, hum: 63, sky: ['#312e81', '#1e1b4b', '#0f172a'], hours: [16, 15, 15, 14, 13, 13] },
};
const HOURS = ['Now', '14', '15', '16', '17', '18'];

export default function WeatherWidget() {
  const [city, setCity] = useState('Lisbon');
  const w = CITIES[city];

  return (
    <div style={{ width: '600px', height: '400px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '18px', fontFamily: "'Inter', sans-serif" }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {Object.keys(CITIES).map(c => (
          <button key={c} onClick={() => setCity(c)} style={{ padding: '8px 14px', borderRadius: '10px', border: 'none', background: city === c ? '#0f172a' : '#fff', color: city === c ? '#fff' : '#475569', fontSize: '12px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s' }}>{c}</button>
        ))}
      </div>

      <div style={{ width: '300px', padding: '20px', borderRadius: '26px', color: '#fff', position: 'relative', overflow: 'hidden', background: `linear-gradient(160deg, ${w.sky[0]}, ${w.sky[1]} 60%, ${w.sky[2]})`, boxShadow: `0 24px 50px ${w.sky[1]}66`, transition: 'background 0.6s' }}>
        <div style={{ position: 'absolute', right: '-30px', top: '-30px', opacity: 0.25 }}><Icon name={w.icon} size={170} strokeWidth={1} /></div>
        <div style={{ position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: 600 }}><Icon name="pin" size={13} /> {city}</div>
          <div key={city} style={{ fontSize: '64px', fontWeight: 200, lineHeight: 1.05, letterSpacing: '-3px', animation: 'fadeSlideUp 0.4s ease' }}>{w.temp}°</div>
          <div style={{ fontSize: '13px', fontWeight: 500 }}>{w.cond}</div>
          <div style={{ fontSize: '11px', opacity: 0.75, marginBottom: '14px' }}>H:{w.hi}°  L:{w.lo}°</div>

          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderRadius: '14px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', marginBottom: '8px' }}>
            {HOURS.map((h, i) => (
              <div key={h} style={{ textAlign: 'center', fontSize: '10px' }}>
                <div style={{ opacity: 0.75, marginBottom: '4px' }}>{h}</div>
                <Icon name={w.icon} size={14} style={{ margin: '0 auto 4px' }} />
                <div style={{ fontWeight: 600 }}>{w.hours[i]}°</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {[['wind', `${w.wind} km/h`, 'Wind'], ['drop', `${w.hum}%`, 'Humidity']].map(([icon, v, l]) => (
              <div key={l} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 10px', borderRadius: '12px', background: 'rgba(255,255,255,0.15)' }}>
                <Icon name={icon} size={15} />
                <div><div style={{ fontSize: '9px', opacity: 0.75 }}>{l}</div><div style={{ fontSize: '12px', fontWeight: 600 }}>{v}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
