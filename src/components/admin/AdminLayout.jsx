import { useState } from 'react';
import AdminCalendar from './AdminCalendar';
import OccupancyEditor from './OccupancyEditor';
import InquiryList from './InquiryList';
import { useOccupancy } from '../../hooks/useOccupancy';
import { useInquiries } from '../../hooks/useInquiries';

const TABS = [
  { id: 'calendar', label: 'Kalender' },
  { id: 'occupancy', label: 'Belegung' },
  { id: 'inquiries', label: 'Anfragen' },
];

export default function AdminLayout({ onLogout }) {
  const [activeTab, setActiveTab] = useState('calendar');
  const occupancyHook = useOccupancy();
  const inquiriesHook = useInquiries();

  const newCount = inquiriesHook.inquiries.filter((i) => i.status === 'neu').length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 no-print">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="font-serif text-lg text-anthracite">Ferienwohnung — Admin</h1>
            <nav className="flex gap-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 text-sm rounded transition-colors ${
                    activeTab === tab.id
                      ? 'bg-anthracite text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                  {tab.id === 'inquiries' && newCount > 0 && (
                    <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-[10px] font-medium bg-primary text-white rounded-full">
                      {newCount}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a href="#/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Zur Seite
            </a>
            <button
              onClick={onLogout}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        {activeTab === 'calendar' && (
          <AdminCalendar occupancy={occupancyHook.occupancy} loading={occupancyHook.loading} />
        )}
        {activeTab === 'occupancy' && (
          <OccupancyEditor {...occupancyHook} />
        )}
        {activeTab === 'inquiries' && (
          <InquiryList {...inquiriesHook} />
        )}
      </main>
    </div>
  );
}
