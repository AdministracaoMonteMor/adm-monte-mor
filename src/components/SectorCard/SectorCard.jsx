import "./SectorCard.css";

export default function SectorCard({ sector }) {
  const hasResponsibles = sector.responsibles.length > 0;

  return (
    <article className="sector-card">
      <div className="sector-card-header">
        <span className="sector-card-icon" aria-hidden="true">
          {sector.icon}
        </span>
        <h3 className="sector-card-name">{sector.name}</h3>
      </div>

      {!hasResponsibles ? (
        <p className="sector-empty">Responsáveis ainda não cadastrados.</p>
      ) : (
        sector.responsibles.map((person) => (
          <div key={person.name} className="sector-responsible">
            <div className="sector-responsible-name">{person.name}</div>
            <p className="sector-responsible-contact">Telefone: {person.phone}</p>
            <p className="sector-responsible-contact">E-mail: {person.email}</p>
          </div>
        ))
      )}
    </article>
  );
}
