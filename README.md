# Claude Starter — Figma to Live Website

Turn a Figma design into a real, production-ready website using Claude Code. You bring the Figma file; Claude builds the site.

This starter works with any modern frontend (Astro, Next.js, Vite/React, SvelteKit, Vue) — Claude will ask which one you want before building.

---

## Who this is for

Anyone with a Figma design who wants a real website. You don't need to know how to code. You do need to be comfortable copying a few terminal commands once during setup.

---

## Prerequisites (one-time setup)

You need these installed before starting. Each is a one-time install.

1. **Node.js** (v20 or newer) — runs the framework. [Download from nodejs.org](https://nodejs.org).
2. **Claude Code** — the AI that does the building. [Install instructions](https://claude.ai/code).
3. **Figma MCP** — lets Claude read your Figma file directly. After installing Claude Code, run `/mcp` and follow the prompt to add the Figma MCP server. You'll need to authorize it with your Figma account.
4. **A Figma file** — your design, finished and shared with at least "view" access.

---

## Quickstart (3 steps)

1. **Open this folder in Claude Code.** Either clone this repo or download the ZIP and unzip it. Then in Claude Code, point it at the folder.

2. **Run the build command** with your Figma URL:
   ```
   /build https://www.figma.com/file/YOUR_FILE_ID/...
   ```

3. **Pick your framework when asked.** If this is the first time, Claude will detect there's no framework set up and ask which one you want — see the next section. Then it'll do everything from there: scaffold the project, build every section, QA it, make it responsive, audit SEO.

When it's done, Claude will start a dev server so you can preview the site in your browser.

---

## Which framework should I pick?

When there's no framework yet, Claude will ask. Here's the short version:

| Building... | Use | Why |
|---|---|---|
| **Marketing site, landing page, blog, portfolio, agency site** | **Astro** | Static by default → fast loads, great SEO, minimal JavaScript shipped to the browser. Image optimization, sitemap, and RSS are built in. Best-in-class for content-heavy and brochure-style sites. |
| **Web app, dashboard, SaaS, anything with login/user accounts/dynamic data** | **Next.js** | Full React framework with Server Components, Server Actions, API routes, middleware, and edge runtime. Best when you need interactivity and a real backend. |
| Something else (Vite/React, SvelteKit, Vue/Nuxt) | Pick what you know | Claude will scaffold it for you if you tell it which. |

If you're not sure, default to **Astro** for any site that's mostly content/marketing, and **Next.js** for anything with login or live data.

---

## The three commands

| Command | What it does |
|---|---|
| `/brief <figma-url>` | Reads the first page of your Figma file and extracts colors, fonts, spacing, frame width — saves it as `PROJECT_BRIEF.md`. Auto-runs as Phase 0 of `/build`. |
| `/build <figma-url>` | The full pipeline: brief → analyze design → build components → QA → responsive → SEO audit → preview. This is the one you'll use most. |
| `/qa [section-name]` | Re-runs the desktop QA pass on the current build. Optionally limit it to one section by name. Use after manual edits. |

---

## How the pipeline works (under the hood)

`/build` runs these phases in order. Claude reports progress as it goes — no need to babysit.

1. **Setup** — detects your framework (or asks if none), scaffolds it, integrates `global.css`.
2. **Phase 0 — Brief.** Reads the first Figma page, extracts brand colors, typography, spacing, frame width. Writes `PROJECT_BRIEF.md` and updates `global.css` design tokens.
3. **Phase 1 — Analyze.** Walks every page in your Figma file, maps sections and components, downloads all images. Writes `SITE_MAP.md` and `IMAGE_MANIFEST.md`.
4. **Phase 2 — Build.** Builds every component from the live Figma data — exact text, colors, spacing, layout. Responsive media queries baked in from the start.
5. **Phase 3 — QA.** Compares each built section against the Figma screenshot, fixes discrepancies automatically.
6. **Phase 4 — Responsive.** Adapts every component for tablet (≤991px) and mobile (≤767px and ≤479px).
7. **Phase 5 — SEO & accessibility.** Audits HTML semantics, meta tags, heading hierarchy, alt text, color contrast, focus states.
8. **Preview.** Starts the dev server so you can see your site.

---

## SEO superpowers (bonus skills)

This starter also includes the **SearchFit SEO toolkit** — 11 skills + 3 agents + 6 commands for SEO work. They auto-trigger from natural language, so just ask for what you need:

- "Audit my site's SEO"
- "Generate schema markup for this page"
- "Cluster these keywords"
- "Find broken links"
- "Optimize this page for [keyword]"
- "Plan a content strategy"
- "Translate this page to Spanish"
- "How does my brand show up in ChatGPT/Claude/Gemini?"
- "Compare my site to competitors"

Run them anytime, before or after building the site.

---

## Deploying your site

When you're ready to ship, **Vercel** works great for both Astro and Next.js — one command and you're live.

1. Install the Vercel CLI (one-time):
   ```
   npm i -g vercel
   ```
2. From your project root:
   ```
   vercel
   ```
3. Follow the prompts. Vercel auto-detects your framework, builds, and gives you a live preview URL. Hit `vercel --prod` when you're ready to push to production.

**Alternative hosts** (all free for typical marketing sites):
- **Netlify** — `npm i -g netlify-cli && netlify deploy`
- **Cloudflare Pages** — connect your Git repo via the Cloudflare dashboard

Custom domains, automatic SSL, and preview deployments per pull request come for free with any of these.

---

## Troubleshooting

**"Figma MCP not connected" / `get_metadata` fails.**
Run `/mcp` in Claude Code. Confirm the Figma MCP shows as connected. If not, re-add it and reauthorize with your Figma account.

**Image downloads come back tiny (<1KB) or as the wrong file type.**
Figma sometimes returns SVG placeholders for what should be raster images. Claude will flag these in `IMAGE_MANIFEST.md` as `FAILED`. Open the affected layer in Figma, confirm it's exported correctly, and re-run `/build` (Claude will skip already-built sections).

**The build doesn't compile after Claude finishes.**
Run `/qa` to re-check and auto-correct. If errors persist, paste the error output back to Claude — it'll diagnose and fix.

**Wrong framework chosen, want to start over.**
Delete the scaffolded files (or start in a fresh folder) and re-run `/build`. Claude will detect no framework and ask again.

**A section looks wrong after the build.**
Run `/qa <section-name>` to re-QA just that section against Figma. Claude will compare and fix discrepancies.

---

## What's in this folder

```
.claude/
├── agents/        # Specialized AI workers (Figma analyzer, builder, QA, SEO auditor, ...)
├── commands/      # Slash commands you invoke (/brief, /build, /qa, plus SEO commands)
├── rules/         # The pipeline playbook — phase-by-phase build rules
├── skills/        # SEO toolkit — 11 skills that auto-trigger from natural language
└── settings.json  # Permissions & MCP config
CLAUDE.md          # Claude Code config reference (for advanced users)
DESIGN-SYSTEM.md   # The fluid scaling system & design conventions
README.md          # This file
global.css         # Design tokens + reset (relocated into your framework during setup)
best-practice/     # Reference docs about Claude Code itself
```

You don't need to touch any of these to use the pipeline — Claude reads them automatically.
