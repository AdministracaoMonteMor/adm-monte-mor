# Portal da Administração de Monte Mor

Portal institucional interno inspirado na experiência do Portal RAC, com identidade própria para a Administração de Monte Mor.

## Desenvolvimento

```bash
cd portal-monte-mor
npm install
npm run dev
```

Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Estrutura

- `src/components/` — Sidebar, Header, Footer, cards, calendário
- `src/pages/` — Páginas do portal
- `src/data/` — Dados mockados (eventos, comunicados, setores)
- `src/styles/` — Variáveis CSS globais e layout
- `src/assets/logo/` — Logo CCB / Administração

## Próximos passos

Integração futura com Firebase, login de administradores e CRUD de eventos, comunicados e responsáveis.
