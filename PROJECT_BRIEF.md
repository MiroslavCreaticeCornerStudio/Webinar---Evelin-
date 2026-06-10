# Project Brief — Home2U / „Стани звезда"

> Auto-generated from the first Figma page during Phase 0.

## Project

- **Name**: Home2U — „Стани звезда" (casting/recruitment landing page)
- **Language**: Bulgarian (Cyrillic)
- **Purpose**: Casting landing page inviting brokers to apply for season 2 of „Борба до ключ" as an on-screen partner of Ралица. Single long-scroll marketing page with an application form.
- **Figma file**: `zC2fj9ygaCKgnemwpd4Bln` — "Home2U | Web Design"
- **Main frame**: `2454:8637` — 1440 × 6306 px

## Brand Colors

| Token | Hex | Figma name | Usage |
|-------|-----|-----------|-------|
| Accent / Primary | `#A90831` | Style | CTAs, script word, accent text, lines |
| Headlines / Dark | `#1C1C1C` | Headlines | Headings, dark section bg |
| Secondary text | `#909090` | Inactive | Body / muted text |
| White | `#FFFFFF` | White | Text on dark, light bg |
| Bright Grey | `#F7F7F7` | Bright Grey | Section bg, borders |

- **Hero background overlay**: dark base `#1e1e1e` + top gradient `rgba(0,0,0,0.5) → rgba(102,102,102,0)`
- **Primary button gradient**: `linear-gradient(to left, #A90931, #880425)`
- **Primary button shadow**: `0px 15px 15px rgba(169,8,49,0.19)`

## Typography

Original design fonts are **commercial/custom**:
- `Sharp Grotesk Cyr` — weights **Book (≈400)** and **Medium (≈500)** — all sans text (nav, headings, body, buttons)
- `PF SignSkript` (Regular) — the red script word "Стани" in the hero

**Substitutes used** (free, full Cyrillic support — swap if you own the originals):
- Sans → **Manrope** (`--font-body` / `--font-heading`), weights 400/500/600/700/800
- Script → **Caveat** (`--font-script`), weights 400/700

Observed sizes (hero, at 1440 ideal): "ЗВЕЗДА" 118px uppercase (Medium), "Стани" script 104px (`#A90831`), subtitle 44px, nav links 14px, body 16px, buttons 16px. Line-height ≈ 1.3 for display headings, 1.5 for body. Per-section exact values are read live from Figma during Phase 2.

## Spacing / Layout

- **Frame width**: 1440px → `--size-container-ideal: 1440`
- **Container max**: capped at `1440px` (`--size-container-max`)
- **Horizontal page padding**: 80px desktop → `--container-padding: 5em` (content width 1280px). Tablet `1.5em`, mobile `1em`.
- Spacing scale: 4/8/16/24/32/40/48/64px in em (existing scale fits).

## Border Radius

- Pill / outline button: 48px (`--radius-pill: 3em`)
- Gradient buttons: ~33px
- Cards / images: 8–16px (read per-section in Phase 2)

## Sections (top → bottom)

1. Hero — navbar + "Стани ЗВЕЗДА" headline over dark photo, CTA
2. Section tabs — 3 info/stat columns with icons & dividers
3. Info section — "Готов ли си…" challenge intro, image + text, decorative ellipses
4. What You Get — heading + 6 benefit rows (icons) in 2 columns
5. Teammate section — "Запознай се с Ралица" + H2U TV video thumbnail
6. What we are looking for — criteria rows + person image
7. CTA section — application form ("Стани новата звезда")
8. Footer — logo, links, contact, decorative elements

## Special Interactions

None required. The design is static — no animations, parallax, or scroll effects unless the user explicitly requests them.
