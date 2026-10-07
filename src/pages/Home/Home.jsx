import { Link } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import { getUpcomingEvents } from "../../data/events";
import { getLatestAnnouncements } from "../../data/announcements";
import "./Home.css";

export default function Home() {
  const upcoming = getUpcomingEvents(5);
  const latestAnnouncements = getLatestAnnouncements(5);

  return (
    <div className="home-page">
      <header className="home-hero">
        <h1 className="page-title">Portal da Administração de Monte Mor</h1>
        <p className="page-subtitle">
          Bem-vindo ao Portal da Administração de Monte Mor.
        </p>
      </header>

      <section className="home-section" aria-labelledby="upcoming-events">
        <h2 id="upcoming-events" className="section-title">
          Próximas reuniões e eventos
        </h2>
        {upcoming.length === 0 ? (
          <p className="empty-state">Nenhum evento próximo cadastrado.</p>
        ) : (
          <div className="card-grid">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
        <div className="home-section-footer">
          <Link to="/calendario" className="btn btn-primary">
            Ver calendário completo
          </Link>
        </div>
      </section>

      <section className="home-section" aria-labelledby="latest-announcements">
        <h2 id="latest-announcements" className="section-title">
          Últimos comunicados
        </h2>
        <div className="card-grid">
          {latestAnnouncements.map((item) => (
            <AnnouncementCard key={item.id} announcement={item} />
          ))}
        </div>
        <div className="home-section-footer">
          <Link to="/comunicados" className="btn btn-outline">
            Ver todos os comunicados
          </Link>
        </div>
      </section>
    </div>
  );
}
