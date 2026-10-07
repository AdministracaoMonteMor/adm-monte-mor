/**
 * Setores da Administração — contatos a cadastrar posteriormente.
 */
const contact = (name, phone = null, email = null) => ({
  name,
  phone: phone ?? "[19 99923-5742]",
  email: email ?? "[CADASTRAR]",
});

export const sectors = [
  {
    id: "presidencia",
    name: "Presidência",
    icon: "👔",
    responsibles: [contact("Irmão Rafael"), contact("Irmão Márcio")],
  },
  {
    id: "secretaria",
    name: "Secretaria",
    icon: "📋",
    responsibles: [contact("Irmão Thiago"), contact("Irmão André")],
  },
  {
    id: "tesouraria",
    name: "Tesouraria",
    icon: "💼",
    responsibles: [],
  },
  {
    id: "Ativo-Mobilizado",
    name: "Ativo Mobilizado",
    icon: "🌾",
    responsibles: [],
  },
  {
    id: "Voluntariados",
    name: "Voluntariados",
    icon: "📚",
    responsibles: [],
  },
  {
    id: "Compras",
    name: "Compras",
    icon: "📖",
    responsibles: [],
  },
  {
    id: "som",
    name: "Som",
    icon: "🔊",
    responsibles: [],
  },
  {
    id: "manutencao-Preventiva",
    name: "Manutenção Preventiva",
    icon: "🔧",
    responsibles: [],
  },
  {
    id: "seguranca",
    name: "Segurança",
    icon: "🛡️",
    responsibles: [],
  },
  {
    id: "informatica",
    name: "Informática",
    icon: "💻",
    responsibles: [],
  },
  {
    id: "outros",
    name: "Outros",
    icon: "📁",
    responsibles: [],
  },
];
