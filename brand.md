# Brand Guide — David Baiye Portfolio Theme

Use this document to replicate the visual language, motion, and UX patterns of [davidbaiye.com](https://davidbaiye.com) across other sites deployed on your domain.

---

## Brand Identity

| Attribute | Direction |
|-----------|-----------|
| **Tone** | Professional, product-focused, approachable |
| **Visual style** | Minimal monochrome with soft surfaces, generous whitespace, and subtle motion |
| **Personality** | Confident engineer portfolio — clean, fast, detail-oriented |
| **Differentiators** | Frosted floating navbar, infinite skills marquee, polaroid photo stack, custom smooth scroll, no-flash theme boot |

The palette is intentionally **neutral (zinc-like)** — no accent color. Hierarchy comes from weight, opacity, and surface contrast, not hue.

---

## Tech Stack (Reference Implementation)

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`) |
| Animation | Framer Motion 12 |
| Icons | react-icons (Fa6, Si, Ri, Tb) |
| UI base | shadcn/ui config — `new-york` style, `zinc` base, CSS variables |
| Fonts | Google Fonts via `next/font` |

---

## Typography

### Font Families

| Role | Font | CSS Variable | Usage |
|------|------|--------------|-------|
| **Primary (sans)** | Instrument Sans | `--font-instrument-sans` | Headings, body, UI |
| **Fallback sans** | Geist Sans | `--font-geist-sans` | Fallback if Instrument Sans fails |
| **Monospace** | Geist Mono | `--font-geist-mono` | Code / technical labels (reserved) |

```tsx
// next/font setup
const instrumentSans = Instrument_Sans({ variable: "--font-instrument-sans", subsets: ["latin"] });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// body class
className={`${instrumentSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
```

```css
/* Tailwind theme */
--font-sans: var(--font-instrument-sans), var(--font-geist-sans), sans-serif;
--font-mono: var(--font-geist-mono);
```

### Type Scale

| Element | Size (mobile → desktop) | Weight | Line height | Notes |
|---------|-------------------------|--------|-------------|-------|
| Hero H1 | `text-3xl` → `lg:text-5xl` | `font-bold` | `leading-tight` | Left-aligned |
| Hero tagline | `text-lg` → `md:text-xl` | normal | `leading-7` / `leading-8` | `text-foreground/68` |
| Section eyebrow | `text-[18px]` → `lg:text-[24px]` | `font-medium` | tight | `opacity-[0.7]` |
| Section title | `text-[24px]` → `lg:text-[30px]` | `font-bold` | `leading-[32px]` → `leading-[40px]` | |
| About H2 | `text-[28px]` → `md:text-[34px]` | `font-bold` | `leading-[34px]` → `leading-[40px]` | |
| Body copy | `text-[15px]` → `md:text-[16px]` | normal | `leading-[23px]` → `leading-[25px]` | `text-foreground/68` |
| Work role | `text-[17px]` → `md:text-[19px]` | `font-semibold` | `leading-snug` | Company at `/55` opacity |
| Project card title | `text-[19px]` → `md:text-[22px]` | `font-bold` | | |
| Contact H2 | `text-[32px]` → `lg:text-[48px]` | `font-bold` | `leading-tight` | |
| Project page H1 | `text-5xl` → `lg:text-7xl` | `font-bold` | `leading-tight` | |
| Footer | `text-[13px]` → `md:text-[14px]` | normal | `leading-[20px]` | `opacity-[0.7]` |
| Nav links | `text-[14px]` → `lg:text-[15px]` | normal | | Desktop only |

### Text Opacity Tokens

Use foreground alpha instead of separate gray tokens:

| Token | Usage |
|-------|-------|
| `text-foreground` | Primary text |
| `text-foreground/68` | Body paragraphs, descriptions |
| `text-foreground/65` | Secondary descriptions |
| `text-foreground/55` | Meta labels (dates, companies) |
| `text-foreground/45` | Input placeholders |
| `opacity-[0.7]` | Eyebrows, footer, muted links |

---

## Color System

All colors are CSS custom properties toggled via a `.dark` class on `<html>`.

### Light Mode (`:root`)

| Token | Hex / Value | Role |
|-------|-------------|------|
| `--background` | `#f2f2f2` | Page background |
| `--foreground` | `#111111` | Primary text, inverted buttons |
| `--surface` | `#ffffff` | Cards, navbar, inputs |
| `--surface-muted` | `#e8e8e8` | Image placeholders, muted fills |
| `--border` | `rgba(17, 17, 17, 0.1)` | Dividers, card borders |
| `--ring` | `#111111` | Focus rings |

### Dark Mode (`.dark`)

| Token | Hex / Value | Role |
|-------|-------------|------|
| `--background` | `#0b0b0c` | Page background |
| `--foreground` | `#ededed` | Primary text |
| `--surface` | `#151517` | Cards, navbar |
| `--surface-muted` | `#202024` | Muted fills |
| `--border` | `rgba(255, 255, 255, 0.12)` | Dividers |
| `--ring` | `#ededed` | Focus rings |

### Semantic / Status Colors

| State | Light | Dark |
|-------|-------|------|
| Success | `text-green-700` | `text-green-400` |
| Error | `text-red-600` | `text-red-400` |

### Tailwind Mapping

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-surface-muted: var(--surface-muted);
  --color-border: var(--border);
  --color-ring: var(--ring);
}
```

Use Tailwind classes: `bg-background`, `text-foreground`, `bg-surface`, `border-border`, `ring-ring`, etc.

### Foreground Tint Utilities

Subtle interactive surfaces use foreground alpha on background:

| Class | Usage |
|-------|-------|
| `bg-foreground/[0.04]` | Theme toggle, tech badges |
| `bg-foreground/[0.06]` | Secondary buttons, card CTAs |
| `bg-foreground/10` | Hover state for secondary buttons |
| `bg-foreground` + `text-background` | Primary buttons (inverted) |
| `bg-surface/55` | Skills marquee pills |
| `bg-surface/70` | Project detail sections |
| `bg-surface/82` | Navbar glass background |

---

## Layout & Spacing

### Content Widths

| Container | Max width | Padding |
|-----------|-----------|---------|
| Default sections | `max-w-5xl` | `px-6 md:px-10` |
| Projects grid | `max-w-7xl` | `px-6 md:px-10` |
| Project detail page | `max-w-6xl` | `px-6 md:px-10 lg:px-14` |
| Hero inner | `max-w-5xl` | `px-6 md:px-10` |
| About text block | `max-w-[720px]` | — |
| Contact text block | `max-w-[720px]` | — |

### Section Vertical Rhythm

Standard section top margin: `mt-[60px] md:mt-[80px] lg:mt-[100px]`

Hero top padding (accounts for fixed navbar): `pt-24 md:pt-28 lg:pt-32`

Contact section vertical padding: `py-[50px] md:py-[65px] lg:py-[80px]`

### Navbar Position

Fixed, inset from edges:
- `top-[10px] md:top-[14px] lg:top-[16px]`
- Horizontal: `px-[10px] md:px-[20px] lg:px-[32px]`
- z-index: `z-[100]` (mobile overlay: `z-[99]`, close button: `z-[110]`)

---

## Border Radius

| Element | Radius |
|---------|--------|
| Navbar pill | `rounded-4xl` |
| Avatar / icon buttons | `rounded-full` |
| Skills pills | `rounded-xl` |
| Project cards | `rounded-[18px]` |
| Card image container | `rounded-[14px] lg:rounded-[16px]` |
| Card CTA button | `rounded-[12px]` |
| Form inputs | `rounded-2xl` |
| Primary submit button | `rounded-2xl` |
| Project detail sections | `rounded-[28px]` |
| Project detail buttons | `rounded-[20px]` |
| Polaroid photos | `rounded-[5px]` |
| Tech badges | `rounded-full` |
| Testimonial cards | `rounded-lg` |

---

## Shadows & Depth

| Element | Shadow |
|---------|--------|
| Navbar (light) | `shadow-lg shadow-black/[0.05]` |
| Navbar (dark) | `dark:shadow-black/30` |
| Project cards | `shadow-sm shadow-black/[0.04]` → hover: `shadow-md dark:shadow-black/20` |
| Polaroid (light) | `shadow-[0_18px_38px_rgba(15,23,42,0.16)]` |
| Polaroid (dark) | `dark:shadow-[0_18px_42px_rgba(0,0,0,0.42)]` |
| Form inputs | `shadow-[0_1px_2px_rgba(0,0,0,0.04)]` |
| Mobile close button | `shadow-xl` |

### Glass / Blur

- Navbar: `backdrop-blur-md` + `bg-surface/82`
- Mobile menu overlay: `bg-black/95 backdrop-blur-sm`

---

## Components

### Floating Navbar

```
fixed pill bar
├── Logo avatar (rounded-full, hover scale 1.05)
├── Nav links (desktop, hover opacity 0.7 + scale 1.05)
├── Theme toggle + social icons
└── Mobile: hamburger → full-screen black overlay menu
```

**Navbar bar classes:**
```
bg-surface/82 text-foreground backdrop-blur-md border border-border rounded-4xl shadow-lg shadow-black/[0.05] transition-all duration-300 dark:shadow-black/30
```

**Mobile menu:** Full viewport `bg-black/95`, white text, staggered fade-in links (`delay: 0.05` increments), theme toggle with mobile variant styling.

### Hero

1. Circular profile image (`h-28 w-28 md:h-36 md:w-36`, `rounded-full`, hover `scale: 1.04`)
2. Bold intro headline (name + title)
3. Tagline at 68% foreground opacity
4. Skills marquee slider below

### Skills Marquee

Infinite horizontal scroll of tech pills.

```css
@keyframes skills-marquee {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}

.skills-marquee-track {
  animation: skills-marquee var(--skills-marquee-duration, 85s) linear infinite;
}
```

| Setting | Value |
|---------|-------|
| Desktop duration | 85s |
| Mobile duration (<768px) | 50s |
| Pill gap | `gap-2 md:gap-3` |
| Pill style | `rounded-xl border border-border bg-surface/55 px-3 py-2 md:px-4 md:py-3` |
| Edge fade | Gradient masks: `w-16 md:w-32` from `background` to transparent |

Duplicate the skills array (`[...skills, ...skills]`) so the loop is seamless at `-50%`.

### Polaroid Photo Stack (About)

Signature visual — overlapping rotated polaroids with white frames.

| Property | Value |
|----------|-------|
| Frame | `bg-white p-[8px] pb-[22px] rounded-[5px]` |
| Photo aspect | `aspect-[4/5]` |
| Rotations | Photo 1: `-rotate-11`, Photo 2: `rotate-9` (overlap with `-ml-12 sm:-ml-16 md:-ml-20`) |
| Caption | `text-[10px] font-semibold text-neutral-950` (always dark — simulates handwritten polaroid label) |
| Glow behind stack | `bg-foreground/[0.05] blur-2xl rotate-[-8deg] rounded-full` |

**Hover:** lift `-8px`, slight rotation correction.

### Section Header Pattern

Two-line block used across Projects, Work, GitHub, Testimonials:

```
[Eyebrow — medium, opacity 0.7]
[Title — bold, larger]
```

Optional right-aligned description at `opacity-[0.7]`.

### Project Cards

```
rounded-[18px] border border-border bg-surface
├── 16:9 preview (rounded inner, hover scale 1.05 on image)
├── Title + year row
├── 3-line clamped description
└── "View Project" ghost button (bg-foreground/[0.06])
```

Grid: `grid-cols-1 lg:grid-cols-2`, gap `gap-x-7 gap-y-10 lg:gap-y-12`.

Card hover: `y: -4` (Framer), shadow elevation.

### Work Experience List

- `divide-y divide-border` list
- Role bold + company at `text-foreground/55`
- Duration right-aligned on desktop
- Row hover: `x: 2`

### Contact Form

**Inputs:**
```
rounded-2xl border border-border bg-surface px-5 py-4
placeholder:text-foreground/45
focus:border-foreground/35 focus:ring-2 focus:ring-ring/20
```

**Submit button:** Inverted `bg-foreground text-background` with subtle SVG doodle pattern overlay (white strokes at 12% opacity, tiled).

**Status messages:** AnimatePresence with `opacity + y` enter/exit; green/red semantic colors.

### Technology Badges

```
rounded-full border border-border bg-foreground/[0.04]
text-foreground/75 font-medium
px-4 py-2.5 text-base (compact: px-3 py-2 text-sm)
+ react-icons icon
```

### GitHub Contributions

- Section header pattern + underlined "View profile" link
- Chart image: `grayscale dark:invert` for theme-aware rendering
- Source: `https://ghchart.rshah.org/000000/{username}`

### Footer

- Top border: `border-t border-border`
- Copyright at 70% opacity
- Social icons: hover `opacity-100`, motion `y: -2, scale: 1.05`

### Project Detail Page

- Bordered content column: `border-x border-border`
- Back pill: `rounded-full bg-foreground/[0.06]`
- Content sections in `rounded-[28px] border border-border bg-surface/70`
- Horizontal rules: `h-px bg-border`
- CTA buttons: primary inverted + secondary ghost at `rounded-[20px]`

---

## Dark / Light Mode

### Implementation

| Concern | Approach |
|---------|----------|
| Toggle mechanism | `.dark` class on `<html>` |
| Tailwind dark variant | `@custom-variant dark (&:where(.dark, .dark *));` |
| Storage key | `portfolio-theme` in `localStorage` |
| Default | System preference (`prefers-color-scheme`) if no stored value |
| FOUC prevention | Inline `<script>` in `<head>` before paint |
| Native UI sync | `document.documentElement.style.colorScheme = mode` |

### Theme Boot Script (no flash)

```js
(() => {
  try {
    const storedTheme = localStorage.getItem("portfolio-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : systemDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.style.colorScheme = "light";
  }
})();
```

### Theme Toggle Button

| State | Icon | Label |
|-------|------|-------|
| Light mode showing | `FaMoon` | "Switch to dark mode" |
| Dark mode showing | `FaSun` | "Switch to light mode" |

**Desktop toggle:**
```
rounded-full min-h-10 min-w-10
border border-foreground/10
bg-foreground/[0.04]
hover:bg-foreground/[0.08]
transition-colors duration-200
whileTap: scale 0.94
```

**Mobile toggle (inside dark overlay):**
```
rounded-full min-h-12 min-w-12
border border-white/15 bg-white/10 text-white
hover:bg-white/15
focus ring white
```

### Theme Transition

Body transitions on theme switch:
```css
transition: background-color 180ms ease, color 180ms ease;
```

No animated color morph — instant CSS variable swap with a short ease on body only.

---

## Motion & Animation

### Library

Framer Motion (`motion.*`, `AnimatePresence`, `whileInView`, `whileHover`, `whileTap`).

### Easing

Default: `"easeOut"` everywhere.

### Entrance Animations

| Pattern | Values |
|---------|--------|
| Fade in | `opacity: 0 → 1` |
| Slide up | `y: 24 → 0` (hero/items), `y: 18 → 0` (footer/smaller) |
| Navbar drop | `y: -16 → 0`, duration `0.5s` |
| Hero stagger | delays `0`, `0.1`, `0.2`, `0.3s` per element |
| Section reveal | `whileInView`, `viewport: { once: true, amount: 0.12–0.35 }` |
| Polaroid stagger | `delay: index * 0.08`, initial rotation preserved |

### Hover / Tap Micro-interactions

| Element | Interaction |
|---------|-------------|
| Buttons (nav) | `whileTap: scale 0.96` |
| Social icons | `hover: scale 1.10`, `opacity 0.7` |
| Nav links | `hover: scale 1.05`, `opacity 0.7` |
| Avatar | `group-hover: scale-105` |
| Project card | `whileHover: y -4`, image `scale-105` over 500ms |
| Work row | `whileHover: x 2` |
| Footer social | `whileHover: y -2, scale 1.05` |
| Primary CTA submit | `whileHover: y -1`, `whileTap: scale 0.99` |
| Theme toggle | `whileTap: scale 0.94` |
| Polaroid | `whileHover: y -8`, rotation eases toward flat |

### Mobile Menu Animation

| Phase | Animation |
|-------|-----------|
| Overlay enter/exit | `opacity 0 ↔ 1`, duration `0.22s easeOut` |
| Menu items | Staggered `y: 18 → 0`, opacity fade, 25ms delays |
| Close button | Fixed black circle, fades in when menu open |

### Smooth Scroll (Custom)

Custom damped scroll for anchor navigation — not CSS `scroll-behavior` alone.

| Parameter | Value |
|-----------|-------|
| Damping | `0.14` |
| Stop threshold | `0.35` |
| Anchor offset | `96px` (navbar clearance) |
| Disabled when | `prefers-reduced-motion: reduce` |

Falls back to native `scrollIntoView({ behavior: "smooth" })` when reduced motion is preferred.

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
  .skills-marquee-track {
    animation: none !important;
  }
}
```

---

## Scrollbar

```css
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--foreground) 20%, transparent);
  border-radius: 10px;
  transition: background 0.3s ease;
}
::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--foreground) 36%, transparent);
}
```

---

## Focus & Accessibility

Consistent focus ring pattern across interactive elements:

```
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-ring
focus-visible:ring-offset-2
focus-visible:ring-offset-background
```

- Form labels use `sr-only` with explicit `htmlFor`
- Theme toggle: `aria-label`, `aria-pressed`
- Icon-only buttons: descriptive `aria-label`
- Status messages: `role="status"` / `role="alert"`

---

## Page Structure (Home)

```
Navbar (fixed)
Hero (#hero)
About (#about)
Projects (#projects)
Work (#work)
Contact (#contact)
GitHub Contributions (#github-contributions)
Footer
```

Anchor IDs match navbar scroll targets. Section order and spacing are part of the brand rhythm.

---

## Starter CSS (Copy-Paste Foundation)

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

:root {
  --background: #f2f2f2;
  --foreground: #111111;
  --surface: #ffffff;
  --surface-muted: #e8e8e8;
  --border: rgba(17, 17, 17, 0.1);
  --ring: #111111;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-surface: var(--surface);
  --color-surface-muted: var(--surface-muted);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --font-sans: var(--font-instrument-sans), var(--font-geist-sans), sans-serif;
  --font-mono: var(--font-geist-mono);
}

.dark {
  --background: #0b0b0c;
  --foreground: #ededed;
  --surface: #151517;
  --surface-muted: #202024;
  --border: rgba(255, 255, 255, 0.12);
  --ring: #ededed;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-instrument-sans), var(--font-geist-sans), sans-serif;
  overflow-x: hidden;
  transition: background-color 180ms ease, color 180ms ease;
}

html {
  overflow-x: hidden;
  scroll-behavior: smooth;
}
```

---

## Checklist for New Sites

- [ ] Load Instrument Sans + Geist Sans + Geist Mono via `next/font`
- [ ] Copy CSS variables and `@theme inline` block
- [ ] Add theme boot script to `<head>` (change storage key if needed)
- [ ] Implement `.dark` toggle with `portfolio-theme` persistence
- [ ] Use `max-w-5xl` content rhythm and section spacing scale
- [ ] Build frosted `rounded-4xl` navbar with backdrop blur
- [ ] Apply Framer Motion entrance + micro-interaction patterns
- [ ] Respect `prefers-reduced-motion` (disable marquee + smooth scroll)
- [ ] Use foreground alpha tints instead of extra gray palette tokens
- [ ] Keep palette monochrome — hierarchy via weight and opacity only

---

## Storage Keys & Constants

| Key | Value |
|-----|-------|
| Theme localStorage | `portfolio-theme` |
| Dark class | `dark` on `<html>` |
| Site URL env | `NEXT_PUBLIC_SITE_URL` |

When cloning for a new property, consider namespacing the storage key (e.g. `myapp-theme`) to avoid cross-site conflicts on the same domain.
