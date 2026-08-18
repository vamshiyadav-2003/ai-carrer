# Interview Guide — AI Career Copilot

## 1. Project explanation (simple terms)

This is a single-page React app. `App.jsx` renders one section component
after another, top to bottom: `Navbar → Hero → DashboardPreview → Features →
HowItWorks → ProductDemo → CTA → Footer`. Each section is its own file in
`src/components/`, so no single file is more than ~180 lines and each one
has one job.

Two small pieces of shared logic:

- **`useReveal` (hook):** watches whether an element has scrolled into
  view, using the browser's `IntersectionObserver`, and flips a boolean once
  the element becomes visible. Sections use that boolean to switch a
  Tailwind class from "invisible, shifted down" to "visible, in place,"
  which is what creates the scroll-reveal animation.
- **`MatchScoreRing` (component):** an SVG circle whose visible arc length
  is controlled by `stroke-dashoffset`. A `useEffect` runs a
  `requestAnimationFrame` loop that increases the displayed number and the
  arc together over ~900ms once it's told it's active. This is the "animated
  statistic."

Styling is Tailwind utility classes with a small custom token set (colors,
fonts, shadows) defined in `tailwind.config.js` — no separate CSS files per
component.

## 2. File-by-file explanation

- **`index.html`** — the HTML shell Vite serves. Loads Google Fonts
  (Fraunces, Inter, IBM Plex Mono) and mounts React into `#root`.
- **`src/main.jsx`** — entry point; renders `<App />` into the DOM.
- **`src/App.jsx`** — composes every section in order. No logic of its own.
- **`src/index.css`** — Tailwind's three directives, plus a focus-visible
  style for keyboard accessibility and a `prefers-reduced-motion` block that
  shortens all animations for users who've asked for less motion.
- **`tailwind.config.js`** — defines the custom design tokens: `paper` /
  `ink` / `accent` / `positive` colors, the `display` / `sans` / `mono` font
  stacks, `rounded-card`, and the `fade-up` keyframe animation.
- **`src/hooks/useReveal.js`** — the scroll-reveal hook described above.
- **`src/components/Navbar.jsx`** — sticky header. Desktop shows inline
  links; below `md` (768px) it collapses into a hamburger button that
  toggles a `useState` boolean, showing/hiding a mobile menu panel.
- **`src/components/Hero.jsx`** — the headline, sub-copy, two CTAs, and a
  small tilted "product card" mockup (uses `MatchScoreRing`) as the visual
  proof, per the "show, don't just tell" requirement.
- **`src/components/DashboardPreview.jsx`** — the larger, realistic
  dashboard mockup: a fake window chrome bar, a sidebar nav, a match-score
  card, a skills-match card, a resume-status card, a recommended-jobs list,
  and an application tracker list. Wrapped in `useReveal` for its reveal
  animation.
- **`src/components/Features.jsx`** — four feature cards in a responsive
  grid, each independently revealed with a small stagger delay.
- **`src/components/HowItWorks.jsx`** — the three-step process (build
  profile → discover matches → improve & track). Numbered because it's a
  genuine sequence, not decoration.
- **`src/components/ProductDemo.jsx`** — the interactive section. Clicking
  a job card sets `selected` state, which changes the skill-breakdown panel
  next to it. This is the one "meaningful click interaction."
- **`src/components/CTA.jsx`** — final dark-background call to action.
- **`src/components/Footer.jsx`** — logo mark and copyright line.
- **`src/components/MatchScoreRing.jsx`** — reusable animated ring, used in
  the Hero, the dashboard preview, and could be reused elsewhere.

## 3. Likely interview questions

**React**
- *Why function components with hooks instead of classes?* Simpler state
  and lifecycle logic for this size of app; hooks are the current standard.
- *Why is `useReveal` a custom hook instead of copy-pasting the
  `IntersectionObserver` code into each section?* DRY — one implementation,
  reused by `Features`, `HowItWorks`, `DashboardPreview`, and `ProductDemo`.
- *What does the cleanup function in `useReveal`'s `useEffect` do?*
  Disconnects the observer when the component unmounts, preventing a memory
  leak / state update on an unmounted component.

**Components**
- *Why is `MatchScoreRing` a separate component instead of inline JSX?*
  It's used three times with different sizes/scores; extracting it avoids
  duplicating the SVG math.
- *How does `ProductDemo` know which job is selected?* A `useState(0)` index
  into the `JOBS` array; clicking a card calls `setSelected(index)`.

**Tailwind**
- *Why Tailwind instead of plain CSS or CSS-in-JS?* Utility classes keep
  styling co-located with markup, and the config file centralizes the design
  tokens (colors, fonts, radius) so they're consistent everywhere they're
  used.
- *What's in `tailwind.config.js` and why?* Custom color names for the
  brand palette, custom fonts, and a custom `fade-up` keyframe — these
  extend Tailwind's defaults rather than replacing them.

**Responsive design**
- *How does the layout adapt from 390px to 1440px?* Mobile-first Tailwind
  classes (`grid-cols-1`) are overridden at breakpoints (`sm:`, `md:`,
  `lg:`) as the viewport grows — e.g. the Hero goes from one stacked column
  to a two-column grid at `lg` (1024px+).
- *How is horizontal scroll prevented?* The root wrapper has
  `overflow-x-hidden`, layouts use `max-w-*` containers with responsive
  padding, and nothing is set to a fixed pixel width that could exceed
  390px.

**CSS**
- *How does the scroll-reveal animation actually work, CSS-wise?* Tailwind's
  `transition-all duration-700` on the element, combined with two states
  (`opacity-0 translate-y-6` vs `opacity-100 translate-y-0`) toggled by the
  `isVisible` boolean from `useReveal`.
- *How is the ring drawn?* `stroke-dasharray` is set to the circle's full
  circumference; `stroke-dashoffset` is reduced as the score increases,
  which visually "fills" the arc.

**JavaScript**
- *What does `requestAnimationFrame` do in `MatchScoreRing`, and why not
  `setInterval`?* It syncs the update to the browser's paint cycle, which is
  smoother and pauses automatically when the tab isn't visible.

**Animations**
- *Why do animations only play once per element?* `useReveal` calls
  `observer.unobserve(node)` the first time it becomes visible, so re-
  scrolling past a section doesn't re-trigger it — that would feel gimmicky.
- *What happens for users who prefer reduced motion?* The
  `prefers-reduced-motion` media query in `index.css` collapses all
  transition/animation durations to near-zero.

**Accessibility**
- *What accessibility work is actually in place?* Visible focus outlines
  (`:focus-visible`), `aria-expanded` on the mobile menu button,
  `aria-pressed` on the job-selector buttons, semantic `<nav>` /
  `<header>` / `<footer>` / `<main>` elements, and reduced-motion support.
- *What's not done, that you should be honest about if asked?* No automated
  accessibility audit (axe/Lighthouse) has been run — that's listed as a
  follow-up in `DECISIONS.md`.

**Performance / design decisions**
- *Why no image assets?* Everything is built from CSS/SVG/Tailwind, so
  there's nothing to lazy-load or compress — it keeps the bundle small and
  avoids sourcing/licensing images.
- *Why no animation library?* Covered above in `DECISIONS.md` — the brief's
  animation requirements are small enough that a hook + Tailwind covers them
  without an extra dependency.

## 4. Testing checklist

- [ ] `npm install` completes with no errors
- [ ] `npm run dev` starts and the page loads with no console errors
- [ ] `npm run build` completes successfully
- [ ] `npm run preview` serves the production build correctly
- [ ] Resize to 390px width — no horizontal scrollbar anywhere on the page
- [ ] Resize to 1440px width — layout uses the space well, nothing stretches oddly
- [ ] Mobile menu opens/closes on tap, links scroll to the right section, and closes the menu after tapping a link
- [ ] All buttons and links are reachable and operable via keyboard (Tab), with a visible focus ring
- [ ] Hover states work on desktop: feature cards lift, job-selector cards highlight, nav links change color
- [ ] Scroll down slowly and confirm each section fades/slides in once, not repeatedly
- [ ] The match-score ring animates its number and arc together on first appearance
- [ ] Click each job card in the "Try it" section and confirm the skill breakdown updates
- [ ] No fabricated marketing numbers (user counts, testimonials, logos) appear anywhere
- [ ] Re-check in a browser with "reduce motion" turned on at the OS level — animations should be near-instant

## 5. Deploying to Vercel

1. Push the project to GitHub first (see section 6).
2. Go to vercel.com and sign in (GitHub login is simplest).
3. Click **Add New → Project**, then select the `ai-career-copilot`
   repository.
4. Vercel auto-detects Vite. Confirm these build settings (should be
   pre-filled):
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Deploy**. Vercel installs dependencies, runs the build, and
   gives you a live URL (e.g. `ai-career-copilot.vercel.app`) a minute or
   two later.
6. Any future push to the connected branch redeploys automatically.

## 6. Pushing to GitHub

From inside the `ai-career-copilot` folder:

```bash
git init
git add .
git commit -m "Initial commit: AI Career Copilot landing page"
```

Then create an empty repository on GitHub (no README/license, so it stays
empty), and connect it:

```bash
git branch -M main
git remote add origin https://github.com/<your-username>/ai-career-copilot.git
git push -u origin main
```

Replace `<your-username>` with your GitHub username and
`ai-career-copilot` with whatever you named the repo on GitHub if
different.
