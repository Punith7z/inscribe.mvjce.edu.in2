# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common commands

Project is a Vite + React SPA using npm.

- Install dependencies:
  - `npm install`
- Run dev server (default Vite port 5173):
  - `npm run dev`
- Build for production:
  - `npm run build`
- Preview production build locally:
  - `npm run preview`
- Lint JS/JSX with ESLint:
  - `npm run lint`

There is no configured test runner at this time; do not invent test commands.

## High-level architecture

### Tech stack

- React 18 SPA bootstrapped with Vite (`vite.config.js`).
- Routing with `react-router-dom`.
- Styling with Tailwind CSS (`tailwind.config.js`, `postcss.config.js`) plus custom CSS (`src/App.css`, `src/index.css`).
- Static HTML shell at `index.html` mounts React into `#root`.

### Entry points and routing

- `src/main.jsx`
  - React entry point; renders `<App />` into `#root` and imports global styles.
- `src/App.jsx`
  - Wraps the app in a `BrowserRouter`.
  - Declares routes:
    - `/` → `src/pages/Home.jsx`
    - `/events` → `src/pages/Events.jsx`
    - `/register` → `src/pages/Register.jsx`
    - `/team` → `src/pages/Team.jsx` ("Our Domains" page with modal per domain).
  - `ScrollToTop` component is used to reset scroll on route changes.

### Pages vs sections

- `src/pages/` contain top-level routed pages:
  - `Home.jsx` is the primary landing page and composes most UI sections.
  - `Events.jsx` shows the full events listing with a modal per event.
  - `Register.jsx` hosts an external registration form (or a placeholder overlay if no form is active).
  - `Team.jsx` (page) shows domain cards and opens a modal with team members per domain.
- `src/components/` contains section-level and reusable UI pieces used across pages, including:
  - `Navbar.jsx` — responsive nav that:
    - Integrates with `react-router-dom` for navigation.
    - Uses `scrollToSection` to smoothly scroll to in-page sections on the home route.
    - Hides itself behind the intro video until `videoEnded` is true.
  - `Hero.jsx` — top hero section with an intro video overlay:
    - Plays a one-time intro video (`/images/ani.mp4`) per session.
    - Uses `sessionStorage` (`introVideoPlayed`) to skip the video on subsequent page loads.
    - Exposes `onVideoEnd` callback so `Home` can reveal the navbar and underlying content.
    - Renders `TechAnimations`, a local component that draws animated code-themed particles and shapes.
  - Other layout/section components (e.g. `About`, `WhatWeDo`, `Domains`, `Leadership`, `Gallery`, `Contact`, `Footer`, etc.) that are orchestrated primarily by `Home.jsx`.
  - `Team.jsx` (component) — "Meet Our Team" section used inside the home page, separate from `pages/Team.jsx`.

### Data layer

- Static data lives in `src/data/`:
  - `team.js` — exports `facultyCoordinator`, `leadership`, `domainLeads`, and `teamMembers` arrays used by both the home `Team` component and the `/team` page.
  - `events.js` — exports `events` array consumed by `pages/Events.jsx` and `components/EventsPreview.jsx`.
  - `domains.js` — defines domain metadata for the "What we do"/domains-related sections.
- `src/data/README.md` documents the expected shape of these data objects; follow it when adding or modifying entries.

### Behavior & utilities

- `src/hooks/useScrollAnimation.js`
  - Custom hook built around `IntersectionObserver`.
  - Returns `[ref, isVisible]`; components attach `ref` to a DOM node and use `isVisible` to trigger entrance animations.
  - By default, unobserves after the first intersection; pass `once: false` in options to allow repeated enter/leave.
- `src/utils/scrollToSection.js`
  - Helper used by `Navbar` for smooth scrolling to section IDs.
  - Tries to scroll immediately, then retries once after 100ms to handle lazily-rendered sections.

### Key layout flows

- **Home page flow (`src/pages/Home.jsx`):**
  - Renders `AnimatedBackground` → `Hero` (intro video) → `Navbar` (receives `videoEnded`) → content sections (About, domains, leadership, events preview, gallery, contact, etc.).
  - The `teams` section is an anchor wrapping `Leadership` for navbar scrolling.
- **Events listing (`src/pages/Events.jsx`):**
  - Uses Navbar + Footer for consistent shell.
  - Maps `events` data into cards with hover effects.
  - Clicking a card opens a full-screen modal showing large image and full description.
- **Team domains page (`src/pages/Team.jsx`):**
  - Local `domainConfig` provides domain metadata (id/title/subtitle/image/icon).
  - Clicking a domain card opens modal showing the domain banner image and its `teamMembers` (looked up by matching the domain id string from `teamMembers.domain`).
  - `MemberCard` is a local component rendering per-member image and social links.
- **Registration page (`src/pages/Register.jsx`):**
  - Uses `registrationLink` state; currently default is `'#'` (no active form).
  - `Open Form` button either opens `registrationLink` in a new tab + optional iframe embed, or shows a friendly overlay when no form is configured.

### Conventions & important details

- IDs used for scrolling:
  - Navbar sections are wired to IDs like `about`, `teams`, `events`, `gallery`, and `contact` on the home page; ensure new sections maintain consistent IDs if you change layouts.
- Media and assets:
  - Images and video assets are expected under `/images/...` in the public root; components often fall back to `/images/inslogo.jpg` on error.
- Animations:
  - Many components inline `<style>` blocks with `@keyframes` (e.g. in `Hero`, `Team`, and `Team` page) rather than centralizing animation CSS; be careful when refactoring to preserve animation names and semantics.

## How Warp should operate in this repo

- Prefer editing React components under `src/components/` and `src/pages/` without changing data shapes in `src/data/` unless explicitly requested.
- When adding new sections or pages that need smooth scrolling from the navbar, wire them via `scrollToSection` and consistent `id` attributes on target sections.
- If you introduce tests or new tooling, add explicit npm scripts to `package.json` instead of inventing ad-hoc commands so future agents can rely on them.
