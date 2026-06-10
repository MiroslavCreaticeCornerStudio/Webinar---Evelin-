# Site Map — Home2U „Стани звезда"

**Figma File Key**: `zC2fj9ygaCKgnemwpd4Bln`
**Source URL**: `https://www.figma.com/design/zC2fj9ygaCKgnemwpd4Bln/Home2U-%7C-Web-Design?node-id=2454-8637`
**Container Max-Width**: `1440px` (content area 1280px, 80px / 5em side padding)
**Page language**: Bulgarian (Cyrillic)

## Pages

### Page: Home (single long-scroll landing page)
Main Frame Node ID: `2454:8637` (1440 × 6306)
Astro page: `src/pages/index.astro`

#### Sections (top → bottom)

| # | Section | Node ID | Component | Background | Notes |
|---|---------|---------|-----------|------------|-------|
| 1 | Navbar | `2454:8644` | `Navbar.astro` | transparent (over hero) | Logo + 4 nav links + outline CTA button. Shared. |
| 1 | Hero | `2454:8638` | `Hero.astro` | dark photo + top gradient | "Стани ЗВЕЗДА … в Борба До Ключ 2" + desc + gradient button. Contains navbar. |
| 2 | Section Tabs | `2454:8683` | `SectionTabs.astro` | light | 3 info columns (date/icon/stat) w/ vertical dividers |
| 3 | Info / Challenge | `2454:8702` | `InfoSection.astro` | white + decorative ellipses | Image (left) + "Готов ли си…" heading + description (right). Advertisement card. |
| 4 | What You Get | `2454:8725` | `WhatYouGet.astro` | white | Centered heading + 6 benefit rows (icon + text) in 2 columns |
| 5 | Teammate / Ралица | `2473:1009` | `TeammateSection.astro` | dark + blur ellipse | "Запознай се с Ралица" heading + details + video thumbnail |
| 6 | What We Look For | `2544:64` | `WhatWeLookFor.astro` | white | Heading + 6 criteria rows (icon+text) + final CTA + person image (right) |
| 7 | CTA / Application | `2454:8841` | `CtaSection.astro` | full-bleed photo | Glassmorphism application form + countdown timer badge |
| 8 | Footer | `2454:8893` | `Footer.astro` | dark | Large logo, links, contact, decorative arrow elements |

## Shared Components

| Component | Node ID | Description |
|-----------|---------|-------------|
| Navbar | `2454:8644` | Logo (icon+text) · nav links · outline pill CTA |
| Button (gradient) | `2454:8679` / `2454:8885` | Primary CTA — gradient #880425→#a90931, rounded ~33px, shadow |
| Button (outline) | `2454:8665` | Border #f7f7f7, pill (48px), transparent |
| Footer | `2454:8893` | Logo, link groups, contact block |

## Section nodeId quick reference (for get_design_context / get_screenshot)

- Hero: `2454:8638`
- Section Tabs: `2454:8683`
- Info / Challenge: `2454:8702`
- What You Get: `2454:8725`
- Teammate: `2473:1009`
- What We Look For: `2544:64`
- CTA / Application: `2454:8841`
- Footer: `2454:8893`

## Design Tokens (see global.css)

- Accent red `#A90831`; Headlines/dark `#1C1C1C`; Secondary `#909090`; White `#FFFFFF`; Grey `#F7F7F7`
- Primary button gradient `linear-gradient(to left,#a90931,#880425)`, shadow `0 15px 15px rgba(169,8,49,.19)`
- Fonts: Manrope (sans, sub for Sharp Grotesk Cyr) · Caveat (script, sub for PF SignSkript)

## Layout Notes

- Every section: full-width outer wrapper + `.container` inner (max 1440px, centered, 5em side padding).
- Hero, CTA backgrounds are full-bleed images on the outer wrapper.
- Decorative ellipses (info section), blur ellipse (teammate) are constrained within the container, behind content.
- Nav collapses to a mobile menu at ≤991px.
