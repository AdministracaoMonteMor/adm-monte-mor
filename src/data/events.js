/**
 * Dados locais de eventos — preparado para substituição por Firebase.
 */
export const events = [
  {
    id: "evt-001",
    title: "Reunião de Administração",
    date: "2026-10-15",
    time: "19:30",
    location: "Salão do Reino",
    responsible: "Presidência",
    description:
      "Reunião ordinária da Administração de Monte Mor para alinhamento de assuntos administrativos e planejamento das atividades do mês.",
  },
  {
    id: "evt-002",
    title: "Reunião da Secretaria",
    date: "2026-10-22",
    time: "20:00",
    location: "Salão do Reino",
    responsible: "Secretaria",
    description:
      "Reunião do setor de Secretaria para organização de documentos, atas e comunicados internos.",
  },
  {
    id: "evt-003",
    title: "Ensaio Regional — Informações",
    date: "2026-11-02",
    time: "19:00",
    location: "Salão do Reino",
    responsible: "Administração",
    description:
      "Encontro informativo sobre o ensaio regional. Demais detalhes serão confirmados pela Administração.",
  },
  {
    id: "evt-004",
    title: "Reunião de Tesouraria",
    date: "2026-11-08",
    time: "19:30",
    location: "Salão do Reino",
    responsible: "Tesouraria",
    description: "Reunião mensal do setor de Tesouraria.",
  },
  {
    id: "evt-005",
    title: "Reunião de Administração",
    date: "2026-11-19",
    time: "19:30",
    location: "Salão do Reino",
    responsible: "Presidência",
    description: "Reunião ordinária da Administração de Monte Mor.",
  },
];

export function getUpcomingEvents(limit = 5) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => new Date(e.date + "T12:00:00") >= today)
    .sort((a, b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time))
    .slice(0, limit);
}

export function getEventById(id) {
  return events.find((e) => e.id === id);
}
