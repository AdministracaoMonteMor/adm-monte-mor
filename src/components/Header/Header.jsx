import "./Header.css";

export default function Header({ onOpenMobileMenu }) {
  return (
    <header className="app-header">
      <button
        type="button"
        className="header-menu-btn"
        onClick={onOpenMobileMenu}
        aria-label="Abrir menu"
      >
        ☰
      </button>
      <div className="header-titles">
        <div className="header-title">Portal da Administração de Monte Mor</div>
        <div className="header-subtitle">Administração de Monte Mor</div>
      </div>
      <span className="header-badge">Uso interno</span>
    </header>
  );
}
