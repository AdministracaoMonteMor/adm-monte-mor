import SectorCard from "../../components/SectorCard/SectorCard";
import { sectors } from "../../data/sectors";

export default function SectorsPage() {
  return (
    <div>
      <h1 className="page-title">Setores da Administração</h1>
      <p className="page-subtitle">
        Conheça os setores e os irmãos responsáveis pela Administração de Monte
        Mor.
      </p>
      <div className="card-grid">
        {sectors.map((sector) => (
          <SectorCard key={sector.id} sector={sector} />
        ))}
      </div>
    </div>
  );
}
