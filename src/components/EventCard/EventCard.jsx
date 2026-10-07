import { Link } from "react-router-dom";
import { formatDateBR } from "../../utils/formatDate";
import "./EventCard.css";

export default function EventCard({ event, onViewDetails }) {
  const detailsHandler = onViewDetails ? (
    <button type="button" className="btn btn-outline" onClick={() => onViewDetails(event)}>
      Ver detalhes
    </button>
  ) : (
    <Link to="/calendario" state={{ eventId: event.id }} className="btn btn-outline">
      Ver detalhes
    </Link>
  );

  return (
    <article className="event-card">
      <h3 className="event-card-title">{event.title}</h3>
      <div className="event-card-meta">
        <span>📅 {formatDateBR(event.date)}</span>
        <span>🕐 {event.time}</span>
        <span>📍 {event.location}</span>
      </div>
      <div className="event-card-actions">{detailsHandler}</div>
    </article>
  );
}
