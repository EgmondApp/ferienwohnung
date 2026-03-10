import { useState } from 'react';
import Header from '../components/public/Header';
import DateSelector from '../components/public/DateSelector';
import YearOverviewTile from '../components/public/YearOverviewTile';
import GasteInfoModal from '../components/public/GasteInfoModal';
import Gallery from '../components/public/Gallery';
import DatePicker from '../components/public/DatePicker';
import InquiryForm from '../components/public/InquiryForm';
import Footer from '../components/public/Footer';
import { useOccupancy } from '../hooks/useOccupancy';
import { useInquiries } from '../hooks/useInquiries';

export default function PublicPage() {
  const { occupancy } = useOccupancy();
  const { addInquiry } = useInquiries();

  const [pickerOpen, setPickerOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [gasteInfoOpen, setGasteInfoOpen] = useState(false);
  const [pickerInitialDate, setPickerInitialDate] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState(null);

  function openDatePicker() {
    setPickerInitialDate(arrival || new Date());
    setPickerOpen(true);
  }

  function handleDateSelect({ arrival: a, departure: d }) {
    setArrival(a);
    setDeparture(d);
  }

  return (
    <div className="min-h-screen bg-warm">
      <Header />

      <DateSelector
        arrival={arrival}
        departure={departure}
        onOpenDatePicker={openDatePicker}
        onOpenCalendar={() => setCalendarOpen(true)}
      />

      <YearOverviewTile
        occupancy={occupancy}
        isOpen={calendarOpen}
        onClose={() => setCalendarOpen(false)}
        onSelect={handleDateSelect}
      />

      {/* Property description */}
      <section className="px-6 pt-4 pb-3 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-border mt-1">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {[
            { icon: '🛏️', label: '4 Betten' },
            { icon: '🚪', label: '1 Schlafzimmer' },
            { icon: '☀️', label: 'Südbalkon · Dünenblick' },
            { icon: '🌊', label: 'Westbalkon · Meerblick' },
          ].map(({ icon, label }) => (
            <span key={label} className="flex items-center gap-1.5 px-2.5 py-1 bg-offwhite border border-border rounded-full text-xs text-anthracite/60 whitespace-nowrap">
              <span>{icon}</span>{label}
            </span>
          ))}
        </div>
        {/* Text */}
        <p className="text-anthracite/70 text-sm md:text-base leading-relaxed max-w-3xl">
          Zwei Balkone, zwei Aussichten: nach Süden der unverbaute Blick in die Dünen,
          nach Westen das offene Meer. Die Wohnung in der zweiten Etage bietet Platz für
          bis zu vier Personen — mit einem eigenen Schlafzimmer und zwei komfortablen
          Ausziehbetten im Wohnzimmer.
        </p>
        <button
          onClick={() => setGasteInfoOpen(true)}
          className="mt-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold/40 bg-gold/10 hover:bg-gold/15 text-xs text-anthracite/70 hover:text-anthracite transition-colors"
        >
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
          Gäste-Info & Anreise
        </button>
      </section>

      <Gallery />

      <InquiryForm
        arrival={arrival}
        departure={departure}
        onOpenDatePicker={openDatePicker}
        onSubmit={addInquiry}
      />

      <Footer />

      <GasteInfoModal isOpen={gasteInfoOpen} onClose={() => setGasteInfoOpen(false)} />

      <DatePicker
        isOpen={pickerOpen}
        onClose={() => setPickerOpen(false)}
        occupancy={occupancy}
        initialDate={pickerInitialDate}
        onSelect={handleDateSelect}
      />
    </div>
  );
}
