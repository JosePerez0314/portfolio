# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` / `npm start` — production build / serve
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)
- No test framework is configured.

Next.js is 16.x with React 19 and Tailwind CSS v4 (CSS-first config via `@theme inline` in `app/globals.css`, no `tailwind.config`). Per AGENTS.md, check `node_modules/next/dist/docs/` before using Next APIs.

## Skills (read these first)

This repo has project skills in `.claude/skills/`. Invoke them with the Skill tool **before** the matching work; they are binding:

- `design-contract` — before creating or changing any component, color, layout, typography or copy. Defines the Claude-app-inspired look (warm black + orange `#D97757`), the tokens, and the backend-developer content structure.
- `animations` — before adding or changing any animation, transition or scroll effect. CSS + framer-motion only, and `prefers-reduced-motion` must always be respected.

If a change conflicts with a skill, update the skill in the same change rather than drifting from it.

## Architecture

Multi-page bilingual (EN/ES) portfolio for a backend developer, deployed at https://www.josegabperez.com. The UI mimics the Claude app without being a real chat. A fixed left `Sidebar` acts as the conversation history: a "Home" entry plus one entry per page, titled with that page's question (e.g. "Who is José?"), highlighted via `usePathname`; EN/ES toggle and social links sit at its bottom (top bar + drawer on mobile). **Each section is its own route, not a scroll section**: `/` is `Hero`; `/about`, `/projects`, `/experience`, `/skills`, `/education`, `/contact` each render one component (`About`, `Projects`, ...) wrapped in `components/Turn.tsx` (question bubble + answer with the orange `Orb` mark (gradient sphere in `components/Orb.tsx`; `breathe` = slow scale loop and `avatar` = static ring + gloss, both used only on answers) + a "Next:" link to the following page). `app/layout.tsx` provides `Sidebar`, the centered `<main>` column and `Footer`; `app/template.tsx` fades pages in on navigation. Path alias `@/*` maps to the repo root.

- **i18n is hand-rolled**: `context/LanguageContext.tsx` holds `lang` (`"EN" | "ES"`, default `"EN"`, not persisted). All copy lives in `data/translations.ts`; `ES` is typed as `Dictionary` (= `typeof EN`), so both trees must keep the same shape or `tsc` fails. Components do `translations[lang]`. `SECTION_IDS` (in that file) defines the pages and their order (`hrefFor(id)` = `/id`) and feeds the sidebar and the "Next" links, so adding a page means: id in `SECTION_IDS`, a `nav` label and a `<id>.question` in both languages, a component using `Turn`, and `app/<id>/page.tsx` (also add it to `app/sitemap.ts`).
- Colors are Tailwind tokens (`bg-bg`, `bg-surface`, `border-line`, `text-muted`, `text-accent`...) defined in `@theme inline` in `app/globals.css` (Tailwind v4, no `tailwind.config`). Do not hardcode hex values in components.
- `Reveal.tsx` is the shared entrance-reveal wrapper (reduced-motion aware). `Hero` types its headline.
- Profile photo: `public/img/me.jpeg` (site photo; the OG/Twitter share image is the pre-rendered `public/img/og.png`, 1200×630, referenced in `app/layout.tsx` — regenerate it if the photo or title changes). Resume PDFs are referenced from `translations[lang].resume` and live in `public/docs/`.
- SEO: static `metadata` in `app/layout.tsx`, plus `app/sitemap.ts`, `app/robots.ts`, `app/icon.tsx`.

## Workflow

Work happens on feature/fix branches (e.g. `fix/hero`) merged to `main` via GitHub PRs.
