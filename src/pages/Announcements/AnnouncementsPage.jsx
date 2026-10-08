import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  announcementCategories,
  announcements,
} from "../../data/announcements";
import { formatDateBR } from "../../utils/formatDate";
import "./AnnouncementsPage.css";

export default function AnnouncementsPage() {
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return announcements
      .filter((a) => category === "Todos" || a.category === category)
      .filter(
        (a) =>
          !q ||
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.responsible.toLowerCase().includes(q),
      )
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }, [category, search]);

  return (
    <div className="announcements-page">
      <h1 className="page-title">Comunicados</h1>
      <p className="page-subtitle">
        Comunicados oficiais do Ministerio e Administração de Monte Mor.
      </p>

      <div className="announcements-filters">
        <div className="filter-chips" role="group" aria-label="Filtrar por categoria">
          {announcementCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`filter-chip ${category === cat ? "active" : ""}`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <label className="search-field">
          <span className="visually-hidden">Pesquisar comunicados</span>
          <input
            type="search"
            placeholder="Pesquisar comunicados"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <div className="announcements-list">
        {filtered.length === 0 ? (
          <p className="empty-state">Nenhum comunicado encontrado.</p>
        ) : (
          filtered.map((item) => (
            <article key={item.id} className="announcement-row">
              <div>
                <h2 className="announcement-row-title">{item.title}</h2>
                <p className="announcement-row-meta">
                  {formatDateBR(item.publishedAt)} · {item.category} ·{" "}
                  {item.responsible}
                </p>
                <p className="announcement-row-summary">{item.summary}</p>
              </div>
              <Link to={`/comunicados/${item.id}`} className="btn btn-outline">
                Ler comunicado
              </Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
