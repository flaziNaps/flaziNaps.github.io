# Color refinement — 2026-11-10

A restrained watercolor-blue palette connects the interface to the existing hand-drawn illustration. This is a color-only refinement in `src/styles/global.css`: layout, typography, content, and animation timing remain as restored.

| Role | Color | Purpose |
| --- | --- | --- |
| Canvas | `#FFFFFF` | White reading background |
| Text | `#24323D` | Deep slate ink |
| Secondary text | `#586976` | Blue-gray descriptions, dates, and stack |
| Links and focus | `#23608B` | Deeper watercolor blue for actions |
| Project / active directory surface | `#EDF5FA` | Quiet grouping and location feedback |
| Page-top wash | `#F3F7FA` | Subtle atmosphere on inner pages |
| Selection | `#D9EAF6` | Text selection tied to the accent palette |
| Dividers / control boundaries | `#DFE7EC` / `#7C8C98` | Separate decorative and necessary boundaries |

Current navigation now uses the action blue. The active directory item combines a pale blue background, its existing side marker, and `aria-current`. Underlines, labels, focus outlines, and success/failure text continue to communicate meaning independently of hue. Code backgrounds, the required neutral project-image tray, five semantic callout backgrounds, and success/error hues retain their existing roles.

## Verification

- `npm run build`: passes with no Astro errors, warnings, or hints.
- Chromium 156.0.8078.4: checked all five static pages at 1440×900 for a single H1 and no page overflow; asserted the homepage project remains at x=160px and width=720px.
- 32 contrast pairs pass: body, secondary text, links, selection, controls, focus rings, success/error, five labeled callouts and links, and the copy-success label. Exact computed RGB values and ratios are in `checks.json`.
- Examples: primary text on white **13.14:1**; links on white **6.74:1**; secondary text on the blue project surface **5.15:1**; necessary control boundaries on the blue surface **3.14:1**.
- Captured deuteranopia, protanopia, and tritanopia simulations. Status text, underlines, and location/focus markers are retained. These simulations are not a user study.
- Keyboard focus, active-directory navigation, and copy-success appearance checked; no uncaught browser page errors. `git diff --check` passes.

`before-*.png` captures the actual static build before this color pass. Named page images and full-page versions show the resulting build. `focus.png`, `toc-active.png`, and the three vision-simulation images show additional states.

`callouts.png` and `copy-success.png` use the isolated reading fixture with the current stylesheet injected; clipboard success is simulated. Fixture content is not in production output. Earlier evidence folders document their own previous passes.

Not checked: phone-specific work (per the author's preference), other browsers, physical displays, a new Lighthouse run, or live Giscus. No push or deployment.
