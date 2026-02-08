'use client';

import { useState, useEffect } from 'react';

const WEBHOOK_URL = 'https://wdata151.ru/webhook/d994c747-e4e0-4448-8f94-b1c0b5e4d945';

const statusToPill = (status) => {
  if (!status) return null;
  const s = String(status).toLowerCase();
  if (s.includes('оплачен') || s.includes('доставлен') || s.includes('approved') || s.includes('success')) return 'pillSuccess';
  if (s.includes('обработк') || s.includes('pending') || s.includes('ожидан')) return 'pillPending';
  if (s.includes('отмен') || s.includes('rejected') || s.includes('error')) return 'pillRejected';
  return 'pillPending';
};

export default function OrdersTable() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({}),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const raw = await res.json();
        if (!cancelled) setData(normalizeTableData(raw));
      } catch (e) {
        if (!cancelled) setError(e.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return (
      <div className="tableWrap">
        <p className="sectionDesc" style={{ padding: '24px', margin: 0 }}>Загрузка…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tableWrap">
        <p className="sectionDesc" style={{ padding: '24px', margin: 0, color: 'var(--pillRejectedText)' }}>Ошибка: {error}</p>
      </div>
    );
  }

  if (!data || (!data.rows?.length && !data.length)) {
    return (
      <div className="tableWrap">
        <table className="table">
          <thead><tr><th>Нет данных</th></tr></thead>
          <tbody><tr><td>Вебхук не вернул строк для таблицы.</td></tr></tbody>
        </table>
      </div>
    );
  }

  const { headers, rows } = data;

  return (
    <div className="tableWrap">
      <table className="table">
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>
                  {headers[ci] && /статус|status/i.test(headers[ci]) && typeof cell === 'string' ? (
                    <span className={`pill ${statusToPill(cell)}`}>{cell}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function normalizeTableData(raw) {
  if (Array.isArray(raw)) {
    if (raw.length === 0) return { headers: [], rows: [] };
    const first = raw[0];
    if (first && typeof first === 'object' && !Array.isArray(first)) {
      const headers = Object.keys(first);
      const rows = raw.map((obj) => headers.map((k) => obj[k] ?? ''));
      return { headers, rows };
    }
    if (Array.isArray(first)) {
      const headers = raw[0].map(String);
      const rows = raw.slice(1);
      return { headers, rows };
    }
  }
  if (raw && typeof raw === 'object') {
    if (Array.isArray(raw.headers) && Array.isArray(raw.rows)) return raw;
    if (Array.isArray(raw.data)) return normalizeTableData(raw.data);
    const keys = Object.keys(raw);
    const headers = keys;
    const rows = keys.length ? [keys.map((k) => raw[k] ?? '')] : [];
    return { headers, rows };
  }
  return { headers: [], rows: [] };
}
