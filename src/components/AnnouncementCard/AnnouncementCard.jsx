import { Link } from "react-router-dom";
import { formatDateBR } from "../../utils/formatDate";
import "./AnnouncementCard.css";

export default function AnnouncementCard({ announcement }) {
  return (
    <article className="announcement-card">
      <div className="announcement-card-header">
        <h3 className="announcement-card-title">📢 {announcement.title}</h3>
        <span className="announcement-card-date">
          {formatDateBR(announcement.publishedAt)}
        </span>
        <span className="announcement-card-category">{announcement.category}</span>
      </div>
      <p className="announcement-card-summary">{announcement.summary}</p>
      <div className="announcement-card-actions">
        <Link to={`/comunicados/${announcement.id}`} className="btn btn-outline">
          Ler comunicado
        </Link>
      </div>
    </article>
  );
}
