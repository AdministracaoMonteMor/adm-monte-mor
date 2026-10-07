/**
 * Setores da Administração — contatos a cadastrar posteriormente.
 */
const contact = (name, phone = null, email = null) => ({
  name,
  phone: phone ?? "[CADASTRAR]",
  email: email ?? "[sp.montemor.gestores@cpq.congregacao.org.br]",
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
    responsibles: [contact("Irmão Jhonny"), contact("Irmão Jesus")],
  },
  {
    id: "Ativo-Mobilizado",
    name: "Ativo Mobilizado",
    icon: "🌾",
    responsibles: [contact("Irmão Thiago Medeiros"),],
  },
  {
    id: "Voluntariados",
    name: "Voluntariados",
    icon: "📚",
    responsibles: [contact("Irmão Robson"),],
  },
  {
    id: "Compras",
    name: "Compras",
    icon: "📖",
    responsibles: [contact("Irmão Pedro"), contact("Irmão José Carlos")],
  },
  {
    id: "som",
    name: "Som",
    icon: "🔊",
    responsibles: [contact("Irmão Thiago Capeleto"),],
  },
  {
    id: "manutencao-Preventiva",
    name: "Manutenção Preventiva",
    icon: "🔧",
    responsibles: [contact("Irmão tharles"),],
  },
  {
    id: "seguranca",
    name: "Segurança",
    icon: "🛡️",
    responsibles: [contact("Irmão Agnaldo"),],
  },
  {
    id: "informatica",
    name: "Informática",
    icon: "💻",
    responsibles: [contact("Irmão Israel"),],
  },
  {
    id: "outros",
    name: "Outros",
    icon: "📁",
    responsibles: [],
  },
];
