---
name: design-contract
description: Design contract for the portfolio (Claude-app-inspired, orange + black, backend-developer focus). Use before creating or changing any component, color, layout, typography or copy in this repo.
---

# Design Contract

The portfolio presents **José Gabriel Pérez as a backend developer**. It is no longer a generic page or a scholarship application. Every section must serve a hiring manager / tech lead evaluating backend work.

## Inspiration: the Claude app
The interface should feel like the Claude app: calm, dark, conversational, lots of breathing room, warm accent, no neon.
- Reference: the Claude desktop app (layered charcoals: darkest sidebar/top bar and user bubbles, mid-tone page, lighter panels; serif display text; an orange orb as our own assistant mark, deliberately not Claude's asterisk).
- Chat-like surfaces: rounded message bubbles, a composer-style input/bar, thin borders, soft panels.
- Sidebar/nav feel: slim top bar, subtle active states, small uppercase-free labels.
- Content-first: one column of readable text (max ~65ch), generous vertical rhythm.
- Motifs that fit backend: chat/terminal transcripts, API request/response cards, JSON blocks, status pills, logs.

## Palette (tokens live in `app/globals.css`; never hardcode hex in components)
| Token | Value | Use |
|---|---|---|
| `deep` | `#191817` | sidebar, top bar, user "question" bubbles (darkest layer) |
| `bg` | `#232220` | page background (charcoal) |
| `surface` | `#2B2A28` | cards, panels, composer |
| `surface-2` | `#333230` | raised/hover surfaces, code blocks |
| `line` | `#403E3A` | borders, dividers |
| `fg` | `#FAF9F5` | primary text |
| `muted` | `#A8A29A` | secondary text |
| `accent` | `#D97757` | Claude orange: CTAs, highlights, links, focus |
| `accent-strong` | `#E8845F` | hover |
| `accent-soft` | accent at 10–15% alpha | tinted backgrounds, badges |

Rules: orange is the only accent. Use it sparingly (one primary CTA per viewport). No cyan, blue, indigo or purple. Green/red allowed only as semantic status (200 OK / error) inside API/terminal visuals.

## Typography
- Body/UI: Geist Sans. Code, labels, metrics, endpoints: Geist Mono. Display headings (hero title, like the Claude app greeting): Source Serif 4 via `font-serif`.
- Headings: semibold, tight tracking, sentence case. Body: 16–18px, line-height 1.6.

## Shape and depth
- Radius: `rounded-xl` cards, `rounded-2xl` large panels, `rounded-full` pills/avatar.
- Borders 1px `line`; shadows minimal, no glows or heavy blur gradients. Single exception: the brand `Orb` (`components/Orb.tsx`), a radial-gradient orange sphere with a faint static halo (≤22% accent alpha). The answer avatar (`Orb avatar`) adds a static concentric ring (accent/30) and a small specular gloss; no other place gets them. It is the only logo/mark; never use a star/asterisk/sparkle.

## Photo
Profile photo is `public/img/me.jpeg` (portrait, suit, grey-blue background). Hero shows it as a circle on the right. Use `object-cover` with `object-top`. Open Graph/Twitter images must point to it. `yo.jpg` is retired.

## Navigation and content structure (backend-focused)
The sidebar mirrors the Claude app's conversation history. **Each section is a separate page (route), never a long scroll.** Each page is one "conversation": a question bubble titled like a chat ("Who is José?") and the answer content. The sidebar lists the question titles as recent chats, with Home on top. Each page ends with a "Next" link.
1. `/` Home: name, one-line positioning, stack, CTAs (projects, CV), photo.
2. `/about`, 3. `/projects` (TalentMatch AI flagship: problem, architecture, stack), 4. `/experience`, 5. `/skills` (grouped by backend concerns, not logo walls), 6. `/education` (degree, certifications, languages), 7. `/contact`.
Drop scholarship/Canada/GPA framing. Keep education as a short line. Adding a page: see CLAUDE.md.

## i18n
All copy lives in `data/translations.ts`. Update `EN` and `ES` together, same shape.

## Accessibility
Contrast AA on `bg`/`surface`; visible focus ring in `accent`; semantic headings; images with alt text.
