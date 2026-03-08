import { useState } from 'react';

const STATUS_OPTIONS = [
  { value: 'neu', label: 'Neu', color: 'bg-blue text-white' },
  { value: 'beantwortet', label: 'Beantwortet', color: 'bg-gray-200 text-gray-700' },
  { value: 'gebucht', label: 'Gebucht', color: 'bg-green-100 text-green-800' },
  { value: 'abgelehnt', label: 'Abgelehnt', color: 'bg-red-50 text-red-700' },
];

function StatusBadge({ status }) {
  const opt = STATUS_OPTIONS.find((s) => s.value === status) || STATUS_OPTIONS[0];
  return (
    <span className={`inline-block px-2 py-0.5 text-[11px] font-medium rounded ${opt.color}`}>
      {opt.label}
    </span>
  );
}

export default function InquiryList({ inquiries, loading, updateInquiryStatus, deleteInquiry }) {
  const [filter, setFilter] = useState('alle');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = filter === 'alle'
    ? inquiries
    : inquiries.filter((i) => i.status === filter);

  function formatTimestamp(ts) {
    if (!ts?.seconds) return '–';
    return new Date(ts.seconds * 1000).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  async function handleDelete(id) {
    if (!window.confirm('Anfrage wirklich löschen?')) return;
    await deleteInquiry(id);
  }

  if (loading) {
    return <div className="text-gray-400 text-sm py-8">Lade Anfragen...</div>;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-serif text-xl text-anthracite">
          Anfragen ({inquiries.length})
        </h2>

        {/* Filter */}
        <div className="flex gap-1">
          {[{ value: 'alle', label: 'Alle' }, ...STATUS_OPTIONS].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                filter === opt.value
                  ? 'bg-anthracite text-white'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 px-5 py-12 text-center text-sm text-gray-400">
          {filter === 'alle' ? 'Noch keine Anfragen eingegangen.' : 'Keine Anfragen mit diesem Status.'}
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map((inquiry) => (
            <div key={inquiry.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Summary row */}
              <button
                onClick={() => setExpandedId(expandedId === inquiry.id ? null : inquiry.id)}
                className="w-full px-5 py-3 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
              >
                <StatusBadge status={inquiry.status} />
                <span className="text-sm font-medium text-gray-800 flex-1">{inquiry.name}</span>
                <span className="text-xs text-gray-400 font-mono">
                  {inquiry.arrival} — {inquiry.departure}
                </span>
                <span className="text-xs text-gray-400">
                  {formatTimestamp(inquiry.createdAt)}
                </span>
                <span className="text-gray-300 text-sm">
                  {expandedId === inquiry.id ? '▲' : '▼'}
                </span>
              </button>

              {/* Detail panel */}
              {expandedId === inquiry.id && (
                <div className="px-5 pb-4 pt-1 border-t border-gray-100">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-xs text-gray-400 block">E-Mail</span>
                      <a href={`mailto:${inquiry.email}`} className="text-blue hover:underline">
                        {inquiry.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block">Telefon</span>
                      {inquiry.phone || '–'}
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block">Personen</span>
                      {inquiry.guests}
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block">Zeitraum</span>
                      {inquiry.arrival} — {inquiry.departure}
                    </div>
                  </div>

                  {inquiry.message && (
                    <div className="mb-4">
                      <span className="text-xs text-gray-400 block mb-1">Nachricht</span>
                      <p className="text-sm text-gray-700 bg-gray-50 rounded p-3">{inquiry.message}</p>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-400 mr-1">Status:</span>
                    {STATUS_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => updateInquiryStatus(inquiry.id, opt.value)}
                        className={`px-2.5 py-1 text-xs rounded transition-colors ${
                          inquiry.status === opt.value
                            ? opt.color
                            : 'text-gray-400 hover:bg-gray-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                    <div className="flex-1" />
                    <button
                      onClick={() => handleDelete(inquiry.id)}
                      className="text-xs text-gray-300 hover:text-primary transition-colors"
                    >
                      Löschen
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
