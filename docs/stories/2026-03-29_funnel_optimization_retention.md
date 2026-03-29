# Story: Mobile Funnel Optimization & Lead Retention Logic

**ID**: [STORY-2026-03-29]
**Status**: COMPLETED
**Author**: Synkra AIOX (@sm)

## Context
Today's focused update was to eliminate visual friction on mobile devices (90% of traffic) and implement a safety latch to prevent multiple free scans from the same lead, forcing them into the remarketing funnel.

## User Story
**As a** site owner
**I want** a consistent deep-navy mobile UI without white borders and a "one-scan-free" policy
**So that** I maintain a premium brand image and maximize conversion in the results funnel.

## Acceptance Criteria
- [x] **Mobile UX**: Replaced `100vh` with `100dvh` (Dynamic Viewport Height) across all pages to prevent gaps during browser chrome shifts.
- [x] **Theme Consistency**: Enforced `#0B1120` background on `html` and `body` in `layout.tsx` to remove "white bounce" artifacts.
- [x] **Global Variables**: Updated `globals.css` to use dark navy as the default `--background`.
- [x] **Scan Retention**: Implemented a 30-day `has_scanned` cookie set upon scan completion in `app/step-2/page.tsx`.
- [x] **Middleware Protection**: Created `middleware.ts` to redirect returning leads from entry pages (`/`, `/step-1`, `/step-2`) directly to `/results`.

## Technical Notes
- **Redirection**: Middleware was chosen over simple `useEffect` for absolute speed and to prevent "original page" content flickering.
- **Cookie Policy**: Uses a persistent cookie with `Max-Age: 2592000` (30 days).

## Validation
- Verified with browser subagent: Successful scan sets cookie and all subsequent entry attempts redirect to `/results`.
