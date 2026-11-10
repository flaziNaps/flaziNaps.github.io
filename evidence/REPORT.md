# Desktop UI polish — 2026-11-10

Scope: preserve the existing illustration, fonts, author content, project card, and reading behavior. Desktop focus requested by the author; previous evidence removed with permission.

## Changes

- Reduced desktop hero minimum height from 480–600px to 360px, bringing the real project and its GitHub entrance into the first viewport.
- Aligned recent articles and their “全部文章” link to a compact 720px column alongside the single project.
- Kept short-page footers at the viewport bottom with a flexible page layout instead of arbitrary content heights.
- Added navigation and table-of-contents hover feedback, coordinated text selection and scrollbars, and safe wrapping for long article links.
- Aligned the home reading link with the title; simplified 404 recovery to ordinary, underlined links.
- Preserved project hover motion and independent keyboard focus on its actual links.

## Evidence

`home-1440.png`, `posts-1440.png`, `article-1440.png`, `about-1440.png`, and `404-1440.png` show the actual static production build at 1440×900. `*-full-1440.png` captures the full pages. `before-*-1440.png` was captured from this checkout before this polish pass.

`project-focus.png`, `toc-active.png`, and `zoom-200.png` show actual production interactions. `fixture-copy-success.png`, `fixture-copy-failure.png`, and `fixture-callouts.png` use an explicitly separate test site with synthetic reading content, because the real article has no fenced code or callouts. No fixture article is in the final production output.

## Checks

- `npm run build`: passes; Astro reports 0 errors, warnings, or hints.
- `npm test`: all 8 tests pass. Test execution required running outside the restricted sandbox.
- Chromium 156.0.8078.4: all five pages checked at 1024, 1440, and 1920px; one H1 per page and no page overflow.
- Verified first-viewport project entrance, section alignment, keyboard skip link and link focus, project hover, native article hash navigation and active TOC.
- Verified exact copied code and clipboard rejection feedback using a mocked clipboard in the isolated reading fixture.
- Verified 200% CSS zoom, no-JavaScript reading/TOC and hidden copy controls, and reduced-motion behavior.
- Browser checks reported no uncaught page errors. Results: `checks.json`. Reusable verification: `scripts/polish-check.mjs` (expects production preview on 4323 and fixture preview on 4322; uses the existing local Playwright/Chromium installation).

## Not checked

Phone-specific polish and verification were skipped at the author's request. No new Lighthouse runs, cross-browser tests, live Giscus login/network tests, or deployed platform checks. Giscus remains unconfigured. No push or deployment was performed. Optional future context documentation: `/impeccable init`; no PRODUCT.md or DESIGN.md was invented during this refinement.

## Animation pass

The restored layout now has CSS motion refinements. See [animation/REPORT.md](animation/REPORT.md) for the change list, screenshots, verification, and desktop demo recording.

## Color pass

The current interface uses a watercolor-blue accent palette. See [color/REPORT.md](color/REPORT.md) for before/after screenshots, color roles, and measured contrast.
