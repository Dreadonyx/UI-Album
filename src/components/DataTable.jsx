import { useState } from 'react';
import Icon from './Icon';

const ROWS = [
  { id: 'INV-1042', customer: 'Lumen Labs', amount: 4200, status: 'Paid', date: '2026-09-28' },
  { id: 'INV-1041', customer: 'Orbit Inc.', amount: 1280, status: 'Pending', date: '2026-09-26' },
  { id: 'INV-1040', customer: 'Patchwork', amount: 860, status: 'Overdue', date: '2026-09-19' },
  { id: 'INV-1039', customer: 'Koi Studio', amount: 2950, status: 'Paid', date: '2026-09-15' },
  { id: 'INV-1038', customer: 'Fable & Co', amount: 610, status: 'Paid', date: '2026-09-11' },
  { id: 'INV-1037', customer: 'Northwind', amount: 3375, status: 'Pending', date: '2026-09-08' },
];
const STATUS = {
  Paid: { bg: '#ecfdf5', fg: '#047857', dot: '#10b981' },
  Pending: { bg: '#fffbeb', fg: '#b45309', dot: '#f59e0b' },
  Overdue: { bg: '#fef2f2', fg: '#b91c1c', dot: '#ef4444' },
};
const COLUMNS = [
  { key: 'id', label: 'Invoice' },
  { key: 'customer', label: 'Customer' },
  { key: 'status', label: 'Status' },
  { key: 'date', label: 'Date' },
  { key: 'amount', label: 'Amount', align: 'right' },
];

export default function DataTable() {
  const [sort, setSort] = useState({ key: 'date', dir: 'desc' });
  const [selected, setSelected] = useState(['INV-1041']);
  const [query, setQuery] = useState('');

  const rows = ROWS
    .filter(r => r.customer.toLowerCase().includes(query.toLowerCase()) || r.id.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      const cmp = typeof av === 'number' ? av - bv : String(av).localeCompare(String(bv));
      return sort.dir === 'asc' ? cmp : -cmp;
    });

  const allSelected = rows.length > 0 && rows.every(r => selected.includes(r.id));
  const toggleSort = key => setSort(s => ({ key, dir: s.key === key && s.dir === 'asc' ? 'desc' : 'asc' }));
  const toggleRow = id => setSelected(s => (s.includes(id) ? s.filter(x => x !== id) : [...s, id]));
  const fmtDate = d => new Date(`${d}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

  return (
    <div style={{ width: '600px', height: '400px', background: '#ffffff', padding: '20px 22px', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
        <div style={{ fontSize: '15px', fontWeight: 600, color: '#0f172a', flex: 1 }}>Invoices {selected.length > 0 && <span style={{ fontSize: '11px', fontWeight: 500, color: '#6366f1', marginLeft: '6px' }}>{selected.length} selected</span>}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', height: '32px', padding: '0 10px', borderRadius: '8px', border: '1px solid #e2e8f0', color: '#94a3b8' }}>
          <Icon name="search" size={13} />
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search…" aria-label="Search invoices" style={{ width: '110px', border: 'none', outline: 'none', fontSize: '12px', fontFamily: 'inherit', color: '#0f172a' }} />
        </div>
        <button style={{ height: '32px', padding: '0 12px', borderRadius: '8px', border: 'none', background: '#4f46e5', color: '#fff', fontSize: '12px', fontWeight: 600, fontFamily: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}><Icon name="download" size={13} /> Export</button>
      </div>

      <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', flex: 1 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
          <thead>
            <tr style={{ background: '#f8fafc' }}>
              <th style={{ width: '36px', padding: '9px 0 9px 12px' }}>
                <input type="checkbox" checked={allSelected} aria-label="Select all"
                  onChange={() => setSelected(allSelected ? [] : rows.map(r => r.id))} style={{ accentColor: '#4f46e5' }} />
              </th>
              {COLUMNS.map(c => (
                <th key={c.key} aria-sort={sort.key === c.key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none'} style={{ padding: '9px 12px', textAlign: c.align || 'left', fontWeight: 500, color: '#64748b' }}>
                  <button onClick={() => toggleSort(c.key)} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', border: 'none', background: 'none', color: sort.key === c.key ? '#0f172a' : 'inherit', font: 'inherit', cursor: 'pointer', padding: 0 }}>
                    {c.label}
                    <Icon name={sort.key === c.key && sort.dir === 'asc' ? 'arrowUp' : 'arrowDown'} size={11} style={{ opacity: sort.key === c.key ? 1 : 0.3 }} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(r => {
              const s = STATUS[r.status];
              const isSel = selected.includes(r.id);
              return (
                <tr key={r.id} style={{ borderTop: '1px solid #f1f5f9', background: isSel ? '#eef2ff' : 'transparent', transition: 'background 0.15s' }}>
                  <td style={{ padding: '9px 0 9px 12px' }}><input type="checkbox" checked={isSel} onChange={() => toggleRow(r.id)} aria-label={`Select ${r.id}`} style={{ accentColor: '#4f46e5' }} /></td>
                  <td style={{ padding: '9px 12px', fontFamily: "'DM Mono', monospace", color: '#475569' }}>{r.id}</td>
                  <td style={{ padding: '9px 12px', color: '#0f172a', fontWeight: 500 }}>{r.customer}</td>
                  <td style={{ padding: '9px 12px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '2px 8px', borderRadius: '999px', background: s.bg, color: s.fg, fontSize: '11px', fontWeight: 500 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.dot }} />{r.status}
                    </span>
                  </td>
                  <td style={{ padding: '9px 12px', color: '#64748b' }}>{fmtDate(r.date)}</td>
                  <td style={{ padding: '9px 12px', textAlign: 'right', fontVariantNumeric: 'tabular-nums', color: '#0f172a', fontWeight: 500 }}>${r.amount.toLocaleString('en-US')}</td>
                </tr>
              );
            })}
            {rows.length === 0 && (
              <tr><td colSpan={6} style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>No invoices match “{query}”</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
