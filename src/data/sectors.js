/**
 * Setores da Administração — contatos a cadastrar posteriormente.
 */
const contact = (name, phone = null, email = null) => ({
  name,
  phone: phone ?? "[CADASTRAR]",
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
    id: "servico-campo",
    name: "Serviço de Campo",
    icon: "🌾",
    responsibles: [],
  },
  {
    id: "escola",
    name: "Escola",
    icon: "📚",
    responsibles: [],
  },
  {
    id: "literatura",
    name: "Literatura",
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
    id: "manutencao",
    name: "Manutenção",
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
