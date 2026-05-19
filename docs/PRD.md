# PRD — La Chaparrita Burritos MVP Website
**Client:** La Chaparrita Burritos (El Sereno, LA)
**Stack:** HTML & CSS (vanilla, no frameworks)
**Goal:** Simple, mobile-first MVP website to establish an online presence, surface key business info, and drive foot traffic to the pop-up stand.
**Deploy Target:** GitHub Pages (`La-Chaparrita-Burrito-Mobile-Mexican-Burritos-` repo)

---

## Business Context

| Field | Detail |
|---|---|
| Business | La Chaparrita Burritos — family-run breakfast pop-up |
| Owners | Delmis & Brian (El Sereno natives) |
| Location | Outside Elephant Hills Cafe — 4905 Huntington Dr, Los Angeles, CA 90032 |
| Hours | Wed–Sat · 7:00 AM until sold out |
| Price Point | $7 breakfast burritos & tortas |
| Phone | 323-610-3124 |
| Instagram | [@la_chaparrita_co](https://www.instagram.com/la_chaparrita_co/) |

---

## Design Direction

- **Aesthetic:** Warm, earthy, street-food editorial — think hand-lettered menus, rich terracotta tones, bold food photography, with a slight vintage LA flair.
- **Palette:** Terracotta `#C1440E` · Cream `#FAF3E0` · Charcoal `#1E1E1E` · Avocado green accent `#4A6741`
- **Typography:** Bold display serif for headlines (e.g. Playfair Display or Fraunces) + clean sans for body (e.g. DM Sans)
- **Mobile-first:** Most visitors will be on phone. Stack layout vertically, large tap targets, readable type.

---

## Sitemap (MVP — Single Page)

```
index.html
│
├── #hero          → Brand name, tagline, CTA ("Find Us")
├── #about         → Story of Delmis & Brian
├── #menu          → Menu cards with items & prices
├── #hours         → Days/hours + sell-out notice
├── #location      → Address + embedded Google Map
└── #contact       → Phone, Instagram link, footer
```

---

## Epics & Phases

---

### 🟠 EPIC 1 — Project Setup & File Structure

**Goal:** Establish the repo structure and base HTML scaffold before any visual work begins.

#### Phase 1.1 — Repository & Folder Structure
- [ ] Create `/index.html` at project root
- [ ] Create `/css/styles.css`
- [ ] Create `/assets/` folder with subfolders: `/assets/images/`, `/assets/fonts/` (if self-hosting)
- [ ] Create `/README.md` with project description
- [ ] Verify repo name matches GitHub slug: `La-Chaparrita-Burrito-Mobile-Mexican-Burritos-`

#### Phase 1.2 — HTML Boilerplate
- [ ] Add `<!DOCTYPE html>`, `<html lang="en">`, `<head>`, `<body>` scaffolding
- [ ] Set `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- [ ] Add `<title>La Chaparrita Burritos | El Sereno, LA</title>`
- [ ] Add SEO `<meta name="description">` tag with business summary
- [ ] Link `<link rel="stylesheet" href="css/styles.css">`
- [ ] Import Google Fonts (Fraunces + DM Sans) via `<link>` in `<head>`
- [ ] Add all 6 section anchors as empty `<section id="...">` blocks

#### Phase 1.3 — CSS Base / Reset
- [ ] Add CSS reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`)
- [ ] Define CSS custom properties (`:root`) for color palette, font stacks, spacing scale
- [ ] Set `font-family`, `font-size`, `line-height` on `html` / `body`
- [ ] Add `img { max-width: 100%; display: block; }` utility rule

---

### 🟠 EPIC 2 — Navigation

**Goal:** Sticky top nav that links to each section, collapses cleanly on mobile.

#### Phase 2.1 — Nav HTML
- [ ] Add `<header>` with `<nav>` containing `<ul>` of anchor links to all 6 sections
- [ ] Include logo/wordmark text ("La Chaparrita") in nav left
- [ ] Add Instagram icon link (`<a href="https://instagram.com/la_chaparrita_co" target="_blank">`)

#### Phase 2.2 — Nav CSS
- [ ] Style nav: `position: sticky; top: 0; z-index: 100;`
- [ ] Flexbox layout: logo left, links right
- [ ] Add background color + subtle bottom border/shadow on scroll (pure CSS trick via `box-shadow`)
- [ ] Style anchor links: remove underlines, add hover color transition
- [ ] Mobile: hide nav links, show hamburger icon `☰` using CSS `checkbox` toggle trick (no JS)

#### Phase 2.3 — Mobile Nav Toggle (CSS-only)
- [ ] Use hidden `<input type="checkbox" id="nav-toggle">` + `<label for="nav-toggle">` hamburger button
- [ ] Style `<ul>` as dropdown when `#nav-toggle:checked ~ ul`
- [ ] Add smooth height/opacity transition on menu open/close

---

### 🟠 EPIC 3 — Hero Section

**Goal:** Full-viewport hero that immediately communicates the brand's energy and location.

#### Phase 3.1 — Hero HTML
- [ ] Add `<section id="hero">` with:
  - `<h1>` — Business name
  - `<p>` — Tagline (e.g. "Authentic Breakfast Burritos · El Sereno, LA")
  - `<a href="#location" class="btn">` — Primary CTA button ("Find Us")
  - `<a href="#menu" class="btn btn--outline">` — Secondary CTA ("See the Menu")
- [ ] Add a decorative background element (CSS gradient or a food image)

#### Phase 3.2 — Hero CSS
- [ ] `min-height: 100vh`, flexbox centered column layout
- [ ] Background: rich terracotta-to-dark gradient or overlay on food image
- [ ] Style `<h1>` with display font, large size (`clamp(2.5rem, 8vw, 6rem)`)
- [ ] Style `.btn` with pill shape, brand color fill, bold text, hover scale transition
- [ ] Style `.btn--outline` with border-only variant

---

### 🟠 EPIC 4 — About Section

**Goal:** Introduce Delmis & Brian and give the business its human story.

#### Phase 4.1 — About HTML
- [ ] Add `<section id="about">` with:
  - `<h2>` — Section heading (e.g. "Our Story")
  - `<p>` — 2–3 sentence bio (family-run, El Sereno natives, authentic home-cooked recipes)
  - Optional: `<figure>` placeholder for a photo (`<img>` with `alt` text)

#### Phase 4.2 — About CSS
- [ ] Two-column layout on desktop (image left, text right); single column on mobile
- [ ] Cream background `#FAF3E0` to alternate from hero
- [ ] Style `<h2>` with decorative underline or border-left accent in terracotta
- [ ] Add generous section padding (`padding: 4rem 2rem`)
- [ ] Image: `border-radius`, slight shadow for warmth

---

### 🟠 EPIC 5 — Menu Section

**Goal:** Display the menu clearly with prices. Cards per item category.

#### Phase 5.1 — Menu HTML
- [ ] Add `<section id="menu">` with `<h2>` heading
- [ ] Create `.menu-grid` container
- [ ] Add one `.menu-card` per menu category:
  - **Breakfast Burrito** — steak / chorizo / sausage / potato · beans, avocado spread, Oaxaca cheese · **$7**
  - **Breakfast Torta** — same proteins on telera roll · beans, avocado spread, Oaxaca cheese · **$7**
  - **Sunrise Protein Yogurt** — fresh fruit, keto granola · *new item*
- [ ] Each card: `<h3>` item name, `<p>` description, `<span class="price">` price tag

#### Phase 5.2 — Menu CSS
- [ ] `.menu-grid`: CSS Grid, `repeat(auto-fit, minmax(260px, 1fr))`, gap
- [ ] `.menu-card`: card style with white background, rounded corners, subtle shadow
- [ ] `.price`: bold, terracotta color, slightly larger font
- [ ] Hover effect on card: subtle lift (`transform: translateY(-4px)`, shadow deepens)
- [ ] Dark/charcoal background for this section to contrast with about section

---

### 🟠 EPIC 6 — Hours & Availability Section

**Goal:** Make operating hours unmissable, with a sell-out urgency callout.

#### Phase 6.1 — Hours HTML
- [ ] Add `<section id="hours">` with `<h2>` heading
- [ ] Create a `.hours-table` or styled `<dl>` listing:
  - Wed–Sat: 7:00 AM – Sold Out
  - Sun–Tue: Closed
- [ ] Add a `.callout` banner: "⚡ We sell out fast — arrive early!"

#### Phase 6.2 — Hours CSS
- [ ] Style `.hours-table` rows with clear day/time columns, border-bottom separators
- [ ] Bold the open days, muted style for closed days
- [ ] `.callout`: bright terracotta background, white bold text, centered, full-width strip
- [ ] Add subtle pulsing CSS animation on the ⚡ emoji or callout border

---

### 🟠 EPIC 7 — Location Section

**Goal:** Show exactly where the pop-up is so customers can navigate directly.

#### Phase 7.1 — Location HTML
- [ ] Add `<section id="location">` with `<h2>` heading
- [ ] Add address block:
  ```
  Outside Elephant Hills Cafe
  4905 Huntington Drive
  Los Angeles, CA 90032
  ```
- [ ] Embed Google Maps iframe (public embed, no API key needed):
  ```html
  <iframe
    src="https://maps.google.com/maps?q=4905+Huntington+Drive+Los+Angeles+CA+90032&output=embed"
    width="100%" height="350" style="border:0;" allowfullscreen loading="lazy">
  </iframe>
  ```
- [ ] Add "Get Directions" `<a>` link pointing to Google Maps URL

#### Phase 7.2 — Location CSS
- [ ] Section background: cream
- [ ] Two-column layout: address/text left, map right on desktop; stacked on mobile
- [ ] Map iframe: `border-radius`, overflow hidden wrapper, full-width on mobile
- [ ] "Get Directions" link styled as secondary button

---

### 🟠 EPIC 8 — Contact & Footer

**Goal:** Give visitors all contact info and close with brand identity.

#### Phase 8.1 — Contact/Footer HTML
- [ ] Add `<section id="contact">` / `<footer>` with:
  - Phone: `<a href="tel:3236103124">323-610-3124</a>`
  - Instagram: `<a href="https://instagram.com/la_chaparrita_co" target="_blank">@la_chaparrita_co</a>`
  - Optional: "For orders or inquiries, call or DM us on Instagram"
- [ ] Add copyright line: `© 2025 La Chaparrita Burritos · El Sereno, LA`
- [ ] Add social icon for Instagram (inline SVG or unicode emoji)

#### Phase 8.2 — Footer CSS
- [ ] Dark charcoal background, light text
- [ ] Centered column layout, generous padding
- [ ] Style links: white, underline on hover, color accent on hover
- [ ] Separate top border or decorative rule above footer

---

### 🟠 EPIC 9 — Responsiveness & Polish

**Goal:** Ensure the site works beautifully across all screen sizes and feels complete.

#### Phase 9.1 — Responsive Breakpoints
- [ ] Define breakpoints in CSS:
  - Mobile default: `< 768px` (base styles)
  - Tablet: `@media (min-width: 768px)`
  - Desktop: `@media (min-width: 1024px)`
- [ ] Test each section stacks/reflows correctly at 375px, 768px, 1280px
- [ ] Ensure all text remains readable without horizontal scroll

#### Phase 9.2 — Accessibility
- [ ] All `<img>` tags have descriptive `alt` attributes
- [ ] All interactive elements reachable via keyboard (`tab` focus)
- [ ] Add `:focus` styles to links and buttons (visible outline)
- [ ] Ensure color contrast ratios pass WCAG AA (especially text on terracotta)
- [ ] Add `aria-label` to icon-only links (Instagram, hamburger toggle)

#### Phase 9.3 — Performance & Final Touches
- [ ] Compress all images before adding to `/assets/images/`
- [ ] Add `loading="lazy"` to below-fold images and the map iframe
- [ ] Add smooth scroll: `html { scroll-behavior: smooth; }`
- [ ] Add scroll-offset for sticky nav: `section { scroll-margin-top: 70px; }`
- [ ] Final review: check for typos, broken links, missing `alt` text
- [ ] Test on Chrome (desktop), Safari (mobile), Firefox

---

### 🟠 EPIC 10 — GitHub Pages Deployment

**Goal:** Push the site live on GitHub Pages.

#### Phase 10.1 — Repo Prep
- [ ] Confirm all files committed: `index.html`, `css/styles.css`, `assets/`, `README.md`
- [ ] Confirm `index.html` is at root level (required by GitHub Pages)
- [ ] Push all changes to `main` branch

#### Phase 10.2 — Enable GitHub Pages
- [ ] Go to repo **Settings → Pages**
- [ ] Under "Source," select **Deploy from a branch**
- [ ] Set branch to `main`, folder to `/ (root)`
- [ ] Click **Save** — GitHub will generate the live URL
- [ ] Visit the URL (format: `https://blueavian9.github.io/La-Chaparrita-Burrito-Mobile-Mexican-Burritos-/`)
- [ ] Verify all sections, map iframe, and links work on live site

#### Phase 10.3 — Post-Deploy QA
- [ ] Test live URL on a real mobile device (iOS + Android if possible)
- [ ] Confirm Instagram link opens correctly
- [ ] Confirm phone `tel:` link works on mobile
- [ ] Confirm Google Maps embed loads
- [ ] Share URL with client (Delmis / Brian) for review

---

## Deliverables Summary

| File | Description |
|---|---|
| `index.html` | Single-page site with all 6 sections |
| `css/styles.css` | All styles — reset, variables, components, responsive |
| `assets/images/` | Optimized images (logo, food photos) |
| `README.md` | Project description + live URL |

---

## Out of Scope (MVP)

- JavaScript interactivity beyond CSS-only nav toggle
- Online ordering or payment processing
- Blog or news section
- Custom domain (can be added post-MVP via GitHub Pages settings)
- Backend / CMS

---

*PRD version Mock 1.0 · La Chaparrita Burritos · May 2026*