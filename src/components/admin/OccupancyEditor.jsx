import { useState } from 'react';

export default function OccupancyEditor({ occupancy, loading, addOccupancy, removeOccupancy, updateOccupancyEntry }) {
  const [form, setForm] = useState({ startDate: '', endDate: '', note: '' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ startDate: '', endDate: '', note: '' });
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  // Validate dd.mm.yyyy format
  function isValidDate(str) {
    return /^\d{2}\.\d{2}\.\d{4}$/.test(str);
  }

  async function handleAdd(e) {
    e.preventDefault();
    setError(null);

    if (!isValidDate(form.startDate) || !isValidDate(form.endDate)) {
      setError('Bitte Datum im Format TT.MM.JJJJ eingeben.');
      return;
    }

    setSaving(true);
    try {
      await addOccupancy(form.startDate, form.endDate, form.note);
      setForm({ startDate: '', endDate: '', note: '' });
    } catch (err) {
      setError('Fehler beim Speichern.');
    }
    setSaving(false);
  }

  function startEditing(entry) {
    setEditingId(entry.id);
    setEditForm({
      startDate: entry.startDate,
      endDate: entry.endDate,
      note: entry.note || '',
    });
  }

  async function handleSaveEdit() {
    setError(null);
    if (!isValidDate(editForm.startDate) || !isValidDate(editForm.endDate)) {
      setError('Bitte Datum im Format TT.MM.JJJJ eingeben.');
      return;
    }

    setSaving(true);
    try {
      await updateOccupancyEntry(editingId, editForm);
      setEditingId(null);
    } catch (err) {
      setError('Fehler beim Aktualisieren.');
    }
    setSaving(false);
  }

  async function handleDelete(id) {
    if (!window.confirm('Belegung wirklich löschen?')) return;
    try {
      await removeOccupancy(id);
    } catch (err) {
      setError('Fehler beim Löschen.');
    }
  }

  const inputClass =
    'px-3 py-2 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/30';

  if (loading) {
    return <div className="text-gray-400 text-sm py-8">Lade Belegungsdaten...</div>;
  }

  return (
    <div>
      <h2 className="font-serif text-xl text-anthracite mb-6">Belegung verwalten</h2>

      {/* Add form */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Neue Belegung eintragen</h3>
        <form onSubmit={handleAdd} className="flex flex-wrap items-end gap-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Anreise</label>
            <input
              type="text"
              value={form.startDate}
              onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))}
              className={inputClass}
              placeholder="TT.MM.JJJJ"
              style={{ width: '130px' }}
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Abreise</label>
            <input
              type="text"
              value={form.endDate}
              onChange={(e) => setForm((f) => ({ ...f, endDate: e.target.value }))}
              className={inputClass}
              placeholder="TT.MM.JJJJ"
              style={{ width: '130px' }}
            />
          </div>
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs text-gray-500 mb-1">Notiz (optional)</label>
            <input
              type="text"
              value={form.note}
              onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
              className={`${inputClass} w-full`}
              placeholder="z.B. Familie Müller"
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 bg-anthracite hover:bg-anthracite/80 text-white text-sm font-medium rounded transition-colors disabled:opacity-50"
          >
            {saving ? 'Speichern...' : 'Eintragen'}
          </button>
        </form>
        {error && <p className="text-primary text-sm mt-2">{error}</p>}
      </div>

      {/* Existing entries */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-5 py-3 border-b border-gray-100">
          <h3 className="text-sm font-medium text-gray-700">
            Eingetragene Belegungen ({occupancy.length})
          </h3>
        </div>

        {occupancy.length === 0 ? (
          <div className="px-5 py-8 text-sm text-gray-400 text-center">
            Noch keine Belegungen eingetragen.
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {occupancy.map((entry) => (
              <div key={entry.id} className="px-5 py-3 flex items-center gap-4">
                {editingId === entry.id ? (
                  /* Editing mode */
                  <>
                    <input
                      type="text"
                      value={editForm.startDate}
                      onChange={(e) => setEditForm((f) => ({ ...f, startDate: e.target.value }))}
                      className={`${inputClass} w-28`}
                    />
                    <span className="text-gray-400">—</span>
                    <input
                      type="text"
                      value={editForm.endDate}
                      onChange={(e) => setEditForm((f) => ({ ...f, endDate: e.target.value }))}
                      className={`${inputClass} w-28`}
                    />
                    <input
                      type="text"
                      value={editForm.note}
                      onChange={(e) => setEditForm((f) => ({ ...f, note: e.target.value }))}
                      className={`${inputClass} flex-1`}
                      placeholder="Notiz"
                    />
                    <button
                      onClick={handleSaveEdit}
                      disabled={saving}
                      className="text-sm text-blue hover:underline"
                    >
                      Speichern
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="text-sm text-gray-400 hover:text-gray-600"
                    >
                      Abbrechen
                    </button>
                  </>
                ) : (
                  /* Display mode */
                  <>
                    <span className="font-mono text-sm text-gray-600 w-52 shrink-0">
                      {entry.startDate} — {entry.endDate}
                    </span>
                    <span className="text-sm text-gray-700 flex-1">
                      {entry.note || <span className="text-gray-300">–</span>}
                    </span>
                    <button
                      onClick={() => startEditing(entry)}
                      className="text-sm text-blue hover:underline"
                    >
                      Bearbeiten
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      Löschen
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
