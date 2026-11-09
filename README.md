# Portfolio — José Gabriel Pérez

Bilingual (EN/ES) portfolio for a backend developer, built with Next.js (App Router), React 19, Tailwind CSS v4 and Framer Motion. The UI is inspired by the Claude app: a sidebar acts as the conversation history and every section is its own page.

Live: https://www.josegabperez.com

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Structure

- `app/` — routes (`/`, `/about`, `/projects`, `/experience`, `/skills`, `/education`, `/contact`), layout, SEO files
- `components/` — UI components (`Sidebar`, `Turn`, `Hero`, ...)
- `data/translations.ts` — all EN/ES copy and shared constants
- `context/LanguageContext.tsx` — language state
- `public/docs/` — resume PDFs, `public/img/` — images
- `.claude/skills/` — design and animation guidelines for Claude Code (see `CLAUDE.md`)
