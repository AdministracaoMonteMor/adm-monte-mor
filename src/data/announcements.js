/**
 * Comunicados locais — preparado para substituição por Firebase.
 */
export const announcements = [
  {
    id: "com-001",
    title: "Calendário de reuniões — outubro e novembro",
    publishedAt: "2026-10-01",
    category: "Administração",
    summary:
      "Confira as datas das próximas reuniões da Administração e dos setores no portal.",
    responsible: "Secretaria",
    body: `Irmãos da Administração de Monte Mor,

Informamos que o calendário de reuniões de outubro e novembro está disponível na área "Calendário e Eventos" deste portal.

Pedimos que os responsáveis de cada setor confirmem presença com antecedência quando solicitado.

Administração de Monte Mor`,
  },
  {
    id: "com-002",
    title: "Atualização de comunicados internos",
    publishedAt: "2026-09-28",
    category: "Secretaria",
    summary:
      "Os comunicados oficiais passam a ser publicados prioritariamente neste portal.",
    responsible: "Secretaria",
    body: `Prezados irmãos,

A Secretaria informa que os comunicados oficiais da Administração de Monte Mor serão centralizados neste portal, facilitando o acesso de todos os responsáveis.

Em caso de dúvidas, procurem o setor de Secretaria.

Secretaria — Administração de Monte Mor`,
  },
  {
    id: "com-003",
    title: "Lembrete — reunião de Administração",
    publishedAt: "2026-09-25",
    category: "Avisos",
    summary: "Lembrete da reunião mensal de Administração no Salão do Reino.",
    responsible: "Presidência",
    body: `Irmãos,

Lembramos a todos os responsáveis pela reunião de Administração conforme data e horário publicados no calendário.

Contamos com a presença de todos.

Presidência — Administração de Monte Mor`,
  },
  {
    id: "com-004",
    title: "Organização dos setores",
    publishedAt: "2026-09-20",
    category: "Administração",
    summary:
      "Cadastro de responsáveis por setor em atualização na página Setores da Administração.",
    responsible: "Administração",
    body: `Irmãos,

Estamos organizando o cadastro de responsáveis de cada setor. Telefones e e-mails serão incluídos conforme forem confirmados pela Administração.

Enquanto isso, consultem a página "Setores da Administração" para ver os irmãos já indicados.

Administração de Monte Mor`,
  },
  {
    id: "com-005",
    title: "Eventos — confirmação de locais",
    publishedAt: "2026-09-15",
    category: "Eventos",
    summary:
      "Locais das reuniões confirmados no Salão do Reino, salvo aviso em contrário.",
    responsible: "Secretaria",
    body: `Informamos que, salvo comunicado específico, as reuniões administrativas ocorrem no Salão do Reino.

Alterações serão publicadas nesta seção de comunicados.

Secretaria`,
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
