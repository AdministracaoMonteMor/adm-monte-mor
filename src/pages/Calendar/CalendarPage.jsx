import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Calendar, { findEventDateForOpen } from "../../components/Calendar/Calendar";
import EventModal from "../../components/EventModal/EventModal";
import { events, getEventById } from "../../data/events";

export default function CalendarPage() {
  const location = useLocation();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [initialDate, setInitialDate] = useState(new Date());

  useEffect(() => {
    const eventId = location.state?.eventId;
    if (eventId) {
      const ev = getEventById(eventId);
      if (ev) {
        setSelectedEvent(ev);
        setInitialDate(findEventDateForOpen(events, eventId));
      }
    }
  }, [location.state]);

  return (
    <div>
      <h1 className="page-title">Calendário e Eventos</h1>
      <p className="page-subtitle">
        Consulte reuniões e eventos da Administração de Monte Mor. Novos eventos
        poderão ser cadastrados pelos administradores em versões futuras.
      </p>
      <Calendar
        events={events}
        onSelectEvent={setSelectedEvent}
        initialDate={initialDate}
      />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
