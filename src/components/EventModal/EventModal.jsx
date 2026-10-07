import { useEffect } from "react";
import { formatDateLongBR } from "../../utils/formatDate";
import "./EventModal.css";

export default function EventModal({ event, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!event) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="event-modal-title" className="modal-title">
            {event.title}
          </h2>
          <button type="button" className="modal-close" onClick={onClose} aria-label="Fechar">
            ×
          </button>
        </div>
        <div className="modal-body">
          <dl className="modal-meta">
            <dt>Data</dt>
            <dd>{formatDateLongBR(event.date)}</dd>
            <dt>Horário</dt>
            <dd>{event.time}</dd>
            <dt>Local</dt>
            <dd>{event.location}</dd>
            <dt>Responsável</dt>
            <dd>{event.responsible}</dd>
          </dl>
          <div className="modal-description">
            <strong>Descrição</strong>
            <p>{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
