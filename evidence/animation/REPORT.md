# Animation pass — 2026-11-10

The restored layout is preserved. All production changes are in `src/styles/global.css`; no dependencies, runtime scripts, content changes, or new layout structure were added.

## What changed

- **Artwork arrival:** the hand-drawn image unfolds from right to left through a clipping reveal with a mild opacity change, over 600ms using the existing decelerating curve. This replaces its previous scroll-driven fade. It runs once per page load, independently of the immediately available links and content.
- **Navigation:** a 2px underline extends over 180ms on hover or keyboard focus. The current-page underline stays present. Leaving reverses the transition; no layout movement or new icons.
- **Copy feedback:** successful copies transition to a pale green button with dark green text/border; the live confirmation fades in over 120ms. Existing text, timing, exact-code copying, focus retention, and repeat protection are preserved. Failure text remains immediate and does not animate.
- **Pressed buttons:** the copy button briefly compresses to 98% during a press, matching the existing button language.
- **Directory feedback:** hover background now transitions over 150ms with the existing text/border feedback.
- **Reduced motion:** the artwork is immediately complete, the underline changes instantly, and pressed scaling is removed. Success/failure text and color still communicate the result.

## Evidence and checks

`desktop-demo.webm` records the artwork, navigation, and copy interactions. The `art-start.png`, `art-middle.png`, and `art-complete.png` frames sample the shipped CSS animation at controlled times (0, 180, 600ms); the demo includes these controlled samples before normal interactions. `navigation-hover.png`, `copy-success.png`, `copy-failure.png`, and `reduced-motion.png` show their named states.

Copy pictures and the copy portion of the recording use the isolated reading fixture, with the current production stylesheet injected because the real article has no code block. Clipboard success and permission denial are simulated; the copied text, prevention of duplicate calls, feedback reset, and keyboard focus are asserted. Synthetic reading content was not published.

- `npm run build`: passes; Astro reports zero errors, warnings, and hints.
- `node scripts/animation-check.mjs`: passes; browser version and checks are in `checks.json`.
- Verified project column remains at x=160px and width=720px at 1440px, navigation hover/leave/focus, artwork completion without looping, and no page overflow at 1024/1440/1920px.
- Verified reduced-motion and no-JavaScript artwork/content behavior, exact copy and failure handling.
- No uncaught browser page errors. Diff and checker syntax validation pass.

Skipped phone checks per the earlier request, cross-browser testing, physical-device performance profiling, Lighthouse, and live Giscus. No push or deployment. CSS clipping performance was observed in a desktop Chromium recording, not benchmarked as a frame-rate guarantee.
