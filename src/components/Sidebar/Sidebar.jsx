import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/ccb-logo.png";
import "./Sidebar.css";

const navItems = [
  { to: "/", label: "Página Inicial", icon: "🏠", end: true },
  { to: "/calendario", label: "Calendário e Eventos", icon: "📅" },
  { to: "/comunicados", label: "Comunicados", icon: "📢" },
  { to: "/setores", label: "Setores da Administração", icon: "👥" },
];

export default function Sidebar({
  collapsed,
  mobileOpen,
  onToggleCollapse,
  onCloseMobile,
}) {
  return (
    <aside
      className={`sidebar ${collapsed ? "collapsed" : ""} ${mobileOpen ? "mobile-open" : ""}`}
      aria-label="Menu principal"
    >
      <div className="sidebar-brand">
        <img src={logo} alt="Congregação Cristã no Brasil" />
        <div className="sidebar-brand-text">
          <div className="sidebar-brand-title">
            Portal da Administração
            <br />
            Monte Mor
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
            onClick={onCloseMobile}
          >
            <span className="sidebar-link-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="sidebar-link-label">{item.label}</span>
          </NavLink>
        ))}

        <div className="sidebar-divider" />

        <span className="sidebar-link disabled" aria-disabled="true">
          <span className="sidebar-link-icon">⚙</span>
          <span className="sidebar-link-label">Administração (futuramente)</span>
        </span>
      </nav>

      <div className="sidebar-footer">
        <button
          type="button"
          className="sidebar-toggle"
          onClick={onToggleCollapse}
          aria-label={collapsed ? "Expandir menu" : "Recolher menu"}
        >
          ☰
        </button>
      </div>
    </aside>
  );
}
