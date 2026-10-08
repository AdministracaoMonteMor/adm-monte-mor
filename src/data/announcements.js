/**
 * Comunicados locais — preparado para substituição por Firebase.
 */
export const announcements = [
  {
    id: "com-001",
    title: "Trabalhos Administrativos",
    publishedAt: "2026-10-07",
    category: "Administração",
    summary:
      "Confira as datas das próximas reuniões da Administração e dos setores no portal.",
    responsible: "Secretaria",
    body: `A Paz de Deus,

Informamos ao ministerio e irmandade que todas as quinta-feira estamos das 19:30 as 21:00 Hrs no predio anexo para atender a todos.

Atendimentos de requisição de comprar levar assinado.

Deus Abençoe.

Administração de Monte Mor`,
  },
  {
    id: "com-002",
    title: "Batimos",
    publishedAt: "2026-10-07",
    category: "Secretaria",
    summary:
      "Os comunicados oficiais passam a ser publicados prioritariamente neste portal.",
    responsible: "Secretaria",
    body: `A Paz de Deus,

Todos batimos em nossa cidade são a cada 60 dias na central da cidade, caso de batismo adicional sera postado via secretaria.

Deus Abençoe.

Secretaria — Administração`,
  },
  {
    id: "com-003",
    title: "Reunião das Organistas",
    publishedAt: "2026-10-07",
    category: "Avisos",
    summary: "Lembrete da reunião mensal de Administração no Salão do Reino.",
    responsible: "Ministerio",
    body: `A Paz de Deus,

Lembramos que no dia 18 de outubro as 09:30 tera uma reuniao com o ministerio e as organistas na casa de oração do jardim paviotti.

Nesse dia não havera reunião de jovens e menores apenas no jardim paviotti as demais casas de orações seguir normalmente.

Deus Abençoe.

Conselho de Anciães`,
  },
];

export const announcementCategories = [
  "Todos",
  "Administração",
  "Secretaria",
  "Eventos",
  "Avisos",
];

export function getLatestAnnouncements(limit = 5) {
  return [...announcements]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}

export function getAnnouncementById(id) {
  return announcements.find((a) => a.id === id);
}
