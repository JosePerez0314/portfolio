---
name: animations
description: Motion rules for the portfolio (framer-motion + CSS). Use before adding or changing any animation, transition or scroll effect.
---

# Animations

Motion should feel like the Claude app: calm, purposeful, quick. It supports reading; it never decorates for its own sake.

## Principles
- Pages are separate routes, so motion is page-entry based: a quick fade/slide on navigation (`app/template.tsx`) and staggered reveals of the question and answer.
- One change per step. Short, simple reveals so skimmers still get the point.
- Keep headline text in HTML (indexable); never hide content behind an "enter" gate.
- Transitions stay under ~0.6s; page-level motion under ~1s.

## Toolbox (in order of preference)
1. **CSS** for hover, focus, color, and simple fades (free to load).
2. **framer-motion** (already installed) for reveals, staggers, layout and scroll-linked values: `whileInView`, `useScroll`, `useTransform`.
3. Do not add GSAP/Lenis unless a requirement cannot be met above.

## Patterns
| Pattern | Spec |
|---|---|
| Section reveal | `initial {opacity:0, y:16}` → `whileInView {opacity:1, y:0}`, `viewport {once:true, margin:"-80px"}`, 0.5s, ease `[0.22,1,0.36,1]` |
| Stagger children | 0.06–0.08s between items |
| Typing / streaming text | For hero tagline and API/terminal responses (Claude-like streaming); blinking orange caret |
| Hover | cards: border to `accent` at 40%, translateY(-2px), 150–200ms |
| Buttons | color shift + 1px press (`active:scale-[0.98]`) |
| Status pill | slow pulse on the dot only |
| Marquee | optional, for stack pills, slow (≥30s loop), pauses on hover |

## Don'ts
- No parallax that shifts text, no infinite spinning rings, no glows that pulse, no bounce springs on content.
- Don't animate layout properties that cause reflow (use transform/opacity).
- Don't block interaction while animating.

## Reduced motion (required)
Respect `prefers-reduced-motion`: use framer-motion `useReducedMotion()` or a CSS media query to disable transforms/typing and show final state instantly. Ambient loops must stop.

## Performance
Animate `transform` and `opacity` only; `viewport.once` on reveals; lazy-load anything below the fold.

## Reference
Techniques drawn from https://colorlib.com/wp/animation-websites/ (scroll-linked storytelling, text reveals, micro-interactions, short transitions, reduced-motion handling).
