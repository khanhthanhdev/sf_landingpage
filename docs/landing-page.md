# StemFun Landing Page — Overview & Implementation Guide

This document defines the goals, structure, style, motion, and implementation details for a modern, high‑impact landing page with engaging scroll effects. It consolidates the device layouts into a single source of truth and provides practical guidance for building and validating the page.

Related layouts:
- Desktop wireframe: `docs/desktop.md:1`
- Tablet wireframe: `docs/tablet.md:1`
- Mobile wireframe: `docs/mobile.md:1`


## Goals
- Convert visitors: clear value prop, fast path to “Try Demo”.
- Showcase precision and interactivity: emphasize Manim accuracy and step‑by‑step learning.
- Feel modern and premium: tasteful motion, depth, and polish without distraction.
- Load fast and rank well: Core Web Vitals, SEO, and accessibility first.


## Audience & Tone
- Audience: STEM students, educators, content creators, and teams evaluating AI‑assisted educational tooling.
- Tone: confident, precise, approachable. Avoid hype; highlight correctness and control.


## Information Architecture
Anchored sections for smooth in‑page navigation:
1. Hero (`#hero`): Headline, subhead, primary CTA, trust logos, quick demo preview.
2. How It Works (`#how-it-works`): 4 steps with visual icons and progress.
3. Core Features (`#features`): grid of 6–7 concise, benefit‑led cards.
4. Use Cases (`#use-cases`): horizontally scrollable cards; swipe on mobile.
5. Live Editor Preview (`#editor`): stacked preview; communicates editability and control.
6. Gallery (`#gallery`): 2–3 column responsive grid of generated visuals.
7. Pricing (`#pricing`): simple cards; clear starter plan and CTA.
8. Social Proof (`#testimonials` + `#integrations`): testimonials, logos, integrations.
9. FAQ (`#faq`): concise Q/A; link to docs/blog.
10. Final CTA (`#cta`) and Footer: repeat primary CTA, relevant links.

See detailed layout sketches in: `docs/desktop.md:1`, `docs/tablet.md:1`, `docs/mobile.md:1`.


## Visual Style
- Color: dark‑friendly palette with 1–2 accent colors for highlights (e.g., electric blue / violet). Maintain high contrast for text.
- Type: geometric sans for headings (e.g., Sora) and a highly legible sans for body (e.g., Inter). Use Next.js `next/font` for performance.
- Depth: subtle glass/blur surfaces, layered cards, soft shadows. Avoid heavy glassmorphism.
- Imagery: crisp line art and math/graph visuals; prefer vector or efficient WebP/AVIF.
- Dark mode: auto‑respect OS preference; provide a toggle. Keep contrast ≥ WCAG AA.


## Responsive & Breakpoints
- Desktop ≥ 1280px: wide hero with demo + input side‑by‑side; multi‑column sections.
- Tablet 768–1279px: stack hero media below copy; reduce columns.
- Mobile ≤ 767px: single column, large tap targets, simplified motion.

Follow wireframes per device:
- `docs/desktop.md:1` (primary reference)
- `docs/tablet.md:1`
- `docs/mobile.md:1`


## Scroll & Motion Design
Principles
- Purposeful: motion clarifies structure and connects steps; never decorative noise.
- Smooth: use CSS transforms/opacity; avoid layout thrash. Cap durations ~300–600ms.
- Respect users: disable nonessential animations when `prefers-reduced-motion: reduce`.

Patterns
- Sticky header with subtle blur/backdrop and scroll‑activated section highlight.
- Anchor smooth‑scroll for nav items; update URL hash without page jank.
- Reveal‑on‑scroll: staggered fade/slide for cards and section headings.
- Parallax: gentle background parallax in hero; clamp to avoid motion sickness.
- Step progress: “How It Works” uses a sticky container with a vertical progress line that fills as steps enter view.
- Horizontal scroll: Use Cases row scrolls horizontally on desktop with wheel‑to‑x mapping; fallback to native swipe on mobile.
- Micro‑interactions: button hover states, icon morphs, and card lift (translate/scale) within 2–4px/2–3%.

Technical notes
- Prefer IntersectionObserver for reveal; batch class toggles to avoid thrash.
- For more complex timelines, use a minimal animation library (e.g., Framer Motion) with lazy loading. Keep a no‑JS CSS fallback.
- Ensure all motion degrades gracefully in older browsers.


## Section Specs
Hero
- Content: headline, subhead, primary CTA “Try the Interactive Demo”, secondary “Watch Overview”, trust badges.
- Media: demo player mock; light animated shimmer or short looped preview.
- Motion: staggered reveal; background gradient parallax; CTA hover lift.

How It Works
- Layout: four steps with icons and captions.
- Motion: sticky scroll; highlight the active step; vertical progress bar fills with scroll.

Core Features
- Layout: 2–3 column grid; each card has a clear benefit title + one‑line description.
- Motion: staggered reveal; icon micro‑morph on hover.

Use Cases
- Layout: horizontal card rail; 12–16px gap; snap points on desktop; swipe on mobile.
- Motion: wheel‑to‑horizontal mapping (desktop); inertial native scroll (mobile).

Live Editor Preview
- Content: canvas preview, generated script snippet, controls.
- Motion: minimal; toggle small changes to communicate responsiveness.

Gallery
- Layout: masonry‑like grid (2–3 cols). Lazy load with `loading="lazy"`.

Pricing
- Layout: simple tier cards; prominent “Start Free”. Clear limits and upgrade path.
- Motion: tiny scale/outline emphasis on hovered/selected tier.

Social Proof & FAQ
- Keep text concise. Use avatars/logos with alt text. Accordion for FAQ.

Final CTA & Footer
- Repeat main CTA. Provide essential links (Docs, Blog, Privacy, Terms, Contact).


## Implementation Notes (Next.js)
- Framework: Next.js App Router. Render statically where possible; hydrate only interactive parts.
- Images: `next/image` with AVIF/WebP; define strict sizes to avoid Cumulative Layout Shift.
- Fonts: `next/font` for Inter/Sora; set `display: swap`.
- Components: split by section (`/src/components/landing/*`). Keep props minimal and predictable.
- Motion: small utility using IntersectionObserver for reveal; optional Framer Motion for complex sequences.
- State: avoid global state; use local state per interactive component.
- Styles: CSS Modules or Tailwind; define design tokens (colors, spacing, radii, shadows) once.

Suggested structure
```
src/
  app/page.tsx                       # imports sections in order
  components/landing/
    Hero.tsx
    HowItWorks.tsx
    Features.tsx
    UseCases.tsx
    Editor.tsx
    Gallery.tsx
    Pricing.tsx
    SocialProof.tsx
    FAQ.tsx
    FinalCTA.tsx
  components/ui/Reveal.tsx           # IntersectionObserver wrapper
  lib/scroll.ts                      # helpers (throttle, isReducedMotion)
```

Reveal utility (concept)
```
// components/ui/Reveal.tsx
// Adds `data-revealed` when in view; respects reduced motion.
```


## Performance & SEO
- Performance budgets: LCP < 2.0s, CLS < 0.1, TBT < 200ms.
- Lazy load heavy media and non‑critical animations.
- Preload hero font weights and hero image only.
- Metadata: title, description, canonical URL, OpenGraph, Twitter cards.
- Structured data: Product/SoftwareApplication JSON‑LD on root page.
- Sitemap and robots configured; clean, semantic headings (one H1).


## Accessibility
- Semantics: use landmarks (`header`, `nav`, `main`, `footer`), lists, and descriptive headings.
- Keyboard: visible focus rings; trap focus in modals only; skip‑to‑content link.
- Motion: honor `prefers-reduced-motion`; provide pause/stop controls for any looping media.
- Alt text: all images/logos with concise, meaningful alternatives.


## QA Checklist (Definition of Done)
- Layout matches wireframes across breakpoints: `docs/desktop.md:1`, `docs/tablet.md:1`, `docs/mobile.md:1`.
- Smooth header, reveal, and step progress effects with reduced‑motion fallback.
- Core Web Vitals within targets on 3G Fast mobile emulation.
- No accessibility blockers (axe DevTools: no serious/critical issues).
- All anchors work; nav highlights correct section on scroll.
- Images sharp on DPR 1–3; no layout shift.
- Lighthouse (mobile): Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95.


## Future Enhancements
- Scroll‑driven animations for graphs using `scroll-timeline` (progressively enhanced).
- Lottie/Canvas for lightweight icon motion where beneficial.
- i18n (EN/VI) with content collections for easy expansion.
- A/B tests on hero messaging and primary CTA.


---
For detailed copy and product context, see: `docs/doc.md:1`.
