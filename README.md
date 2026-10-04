# UI Album

A curated library of **112 live, interactive UI components** across **20 categories**, including a **Themes** collection of 30 design styles, presented in a dark editorial gallery. Every component comes with a copy-ready **AI prompt**, a color palette, font pairing, reference CSS and usage notes, so you can recreate it in any stack or hand it straight to an AI coding tool.

## Features

- **Live previews.** Every card renders the real component, scaled to fit, and mounts only when it scrolls into view.
- **Fullscreen inspector.** Open any card to interact with the component at full size, read the prompt, and copy the prompt, the full spec (prompt + fonts + palette + CSS) or the CSS on its own.
- **Search and filters.** Search across titles, tags, fonts and prompt text. Filter by category or by your saved favorites.
- **Deep links.** Every component has a shareable URL (`/#command-palette`).
- **Keyboard first.** `/` focuses search, `←` `→` browse inside the inspector, `Esc` closes.
- **Accessible.** Real buttons, focus trapping in the dialog, visible focus rings, ARIA roles on interactive components, and `prefers-reduced-motion` support.
- **Code-split.** Each component is its own lazily loaded chunk.

## Categories

| Category | Components |
| --- | --- |
| Themes | Neumorphism, claymorphism, glassmorphism, skeuomorphism, flat design, Material Design, minimalism, neo-brutalism, Swiss style, Bauhaus, Memphis, Art Deco, Y2K chrome, vaporwave, pixel art, cyberpunk HUD, maximalism, organic biomorphism, Frutiger Aero, retro OS (Win95), Liquid Glass, aurora mesh gradient, Dark Academia, monochrome, grainy gradient, Corporate Memphis, psychedelic, synthwave, steampunk, kawaii. All render the same focus widget so the styles can be compared side by side. |
| Navigation | Neon navbar, minimal footer, collapsible sidebar, ⌘K command palette, breadcrumbs & pagination, morphing pill tabs |
| Hero | Glassmorphism, minimal split, aurora gradient, waitlist launch |
| Landing | Brutalist landing, SaaS pricing, infinite testimonial wall, plan comparison table, logo cloud marquee, FAQ accordion |
| Cards | Editorial grid, bento grid, social profile card, 3D holographic tilt card |
| Buttons | Gradient button system, async button states, premium button effects |
| Forms | Neumorphic form, glass newsletter, multi-step wizard, settings with save bar |
| Inputs | Switches/checkboxes/radios, dual range slider, tag input, date range picker, HSL color picker, upload dropzone, star rating |
| Auth | Split login card, password strength meter, OTP verification |
| Dashboard | KPI widget, SVG area chart, progress rings, sortable data table, drag & drop kanban, week calendar |
| Feedback | Stacked toasts, alert banners, skeleton loaders, loader collection, empty state, 404 page, tooltips, badges & avatars |
| Overlays | Confirm modal, cart drawer, dropdown menu, cookie consent |
| Commerce | Product grid, product detail, live credit card checkout |
| Social | Messenger chat, threaded comments, notification center, social post |
| Media | Music player, video player, Ken Burns carousel, podcast waveform |
| Typography | Type specimen, cyberpunk glitch text, kinetic headline |
| Motion | macOS dock, interactive timeline, expandable FAB, magnetic button |
| Developer | Retro terminal, tabbed code block, status page |
| Mobile | Habit tracker app screen, onboarding carousel, weather widget |
| Content | Long-form article, documentation layout, release changelog |

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run lint     # ESLint
```

## Adding a component

1. Create `src/components/MyComponent.jsx`. It should render a self-contained `600×400` root element using inline styles. Prefix any injected class names or keyframes with `ua` to avoid collisions, and use `useId()` for DOM ids.
2. Register it in `src/catalog.js`: add a `lazy(() => import(...))` line and an entry with `title`, `category` (one of `CATEGORIES`), `accent` (6-digit hex), `palette`, `tags`, `fonts`, `prompt`, `code` and `usage`.

Shared icons live in `src/components/Icon.jsx`. Theme components share their demo state through `src/components/useFocusSession.js`.

## Tech

React 19 · Vite 8 · ESLint 9 with the React Hooks and React Refresh plugins. No UI dependencies: every component is hand-built.
