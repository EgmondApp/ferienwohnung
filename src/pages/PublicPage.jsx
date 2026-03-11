import { useState } from 'react';
import Header from '../components/public/Header';
import DateSelector from '../components/public/DateSelector';
import YearOverviewTile from '../components/public/YearOverviewTile';
import GasteInfoModal from '../components/public/GasteInfoModal';
import Gallery from '../components/public/Gallery';
import DatePicker from '../components/public/DatePicker';
import InquiryForm from '../components/public/InquiryForm';
import Footer from '../components/public/Footer';
import InfoIcon from '../components/shared/InfoIcon';
import { useOccupancy } from '../hooks/useOccupancy';
import { useInquiries } from '../hooks/useInquiries';

export default function PublicPage() {
  const { occupancy, error: occupancyError } = useOccupancy();
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
      <Header onInfoClick={() => setGasteInfoOpen(true)} />
      {occupancyError && (
        <div className="px-6 py-2 bg-primary/10 border-b border-primary/20 text-center text-sm text-primary">
          Belegungsdaten konnten nicht geladen werden. Bitte Seite neu laden.
        </div>
      )}

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
      </section>

      <Gallery />

      <div className="px-6 pt-2 pb-2 md:px-12 lg:px-20 max-w-7xl mx-auto">
        <button
          onClick={() => setGasteInfoOpen(true)}
          className="group w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl border border-gold/30 bg-offwhite hover:border-gold/50 hover:shadow-sm transition-all text-anthracite/50 hover:text-anthracite/70 text-sm font-medium"
        >
          <InfoIcon className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
          Informationen zur Wohnung und Anreise
        </button>
      </div>

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
