import { Link, useParams } from "react-router-dom";
import { getAnnouncementById } from "../../data/announcements";
import { formatDateLongBR } from "../../utils/formatDate";
import "./AnnouncementDetails.css";

export default function AnnouncementDetails() {
  const { id } = useParams();
  const announcement = getAnnouncementById(id);

  if (!announcement) {
    return (
      <div>
        <h1 className="page-title">Comunicado não encontrado</h1>
        <p className="page-subtitle">
          O comunicado solicitado não existe ou foi removido.
        </p>
        <Link to="/comunicados" className="btn btn-primary">
          Voltar aos comunicados
        </Link>
      </div>
    );
  }

  return (
    <article className="announcement-detail">
      <Link to="/comunicados" className="back-link">
        ← Voltar aos comunicados
      </Link>
      <header className="announcement-detail-header">
        <span className="announcement-detail-category">{announcement.category}</span>
        <h1 className="page-title">{announcement.title}</h1>
        <p className="announcement-detail-meta">
          Publicado em {formatDateLongBR(announcement.publishedAt)} ·{" "}
          {announcement.responsible}
        </p>
      </header>
      <div className="announcement-detail-body">
        {announcement.body.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
