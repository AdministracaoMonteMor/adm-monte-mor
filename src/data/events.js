/**
 * Dados locais de eventos — preparado para substituição por Firebase.
 */
export const events = [
  {
    id: "evt-001",
    title: "Fechamento Geral Administrativo",
    date: "2026-10-07",
    time: "19:30",
    location: "Predio Anexo",
    responsible: "Administração",
    description:
      "Fechamento Mensal de Coletas, Manutenção Preventiva e Voluntariados.",
  },
  {
    id: "evt-002",
    title: "Trabalho Administrativos",
    date: "2026-10-08",
    time: "19:30",
    location: "Predio Anexo",
    responsible: "Administração",
    description:
      "Trabalho administrativos e atendimento a irmandade e ministerio.",
  },
  {
    id: "evt-003",
    title: "Reunião de Ministerio Local",
    date: "2026-10-16",
    time: "14:30",
    location: "Casa de Oração Jardim Paviotti",
    responsible: "Ministerio",
    description:
      "Reunião do ministerio, Anciões, Diaconos, Cooperadores de Oficio, Cooperadores de Jovens e Menores, Administradores e Encarregados Regionais",
  },
  {
    id: "evt-004",
    title: "Reunião de Comissão e Construção",
    date: "2026-10-24",
    time: "19:30",
    location: "Predio Anexo",
    responsible: "Administração",
    description: "Reunião de comissão e construção com os irmãos Anciões, Diaconos e Administração",
  },
  {
    id: "evt-005",
    title: "Fechamento Geral Administrativo",
    date: "2026-11-06",
    time: "19:30",
    location: "Predio Anexo",
    responsible: "Administração",
    description: "Fechamento Mensal de Coletas, Manutenção Preventiva e Voluntariados.",
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
