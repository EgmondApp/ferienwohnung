import { useState } from 'react';
import Header from '../components/public/Header';
import Gallery from '../components/public/Gallery';
import YearCalendar from '../components/public/YearCalendar';
import DatePicker from '../components/public/DatePicker';
import InquiryForm from '../components/public/InquiryForm';
import Footer from '../components/public/Footer';
import { useOccupancy } from '../hooks/useOccupancy';
import { useInquiries } from '../hooks/useInquiries';

export default function PublicPage() {
  const { occupancy, loading } = useOccupancy();
  const { addInquiry } = useInquiries();

  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerInitialDate, setPickerInitialDate] = useState(null);
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState(null);

  function handleCalendarDayClick(date) {
    setPickerInitialDate(date);
    setPickerOpen(true);
  }

  function handleDateSelect({ arrival: a, departure: d }) {
    setArrival(a);
    setDeparture(d);
    // Scroll to inquiry form
    setTimeout(() => {
      document.getElementById('anfrage')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  function openDatePicker() {
    setPickerInitialDate(arrival || new Date());
    setPickerOpen(true);
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm">
        <div className="text-anthracite/50 text-sm">Laden...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm">
      <Header />
      <Gallery />
      <YearCalendar
        occupancy={occupancy}
        onOpenDatePicker={handleCalendarDayClick}
      />
      <InquiryForm
        arrival={arrival}
        departure={departure}
        onOpenDatePicker={openDatePicker}
        onSubmit={addInquiry}
      />
      <Footer />

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
