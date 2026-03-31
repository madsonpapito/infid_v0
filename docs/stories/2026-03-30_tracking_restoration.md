# Story: Restoration of GTM & SPA-Ready Tracking

**ID**: [STORY-2026-03-30-TRACKING]
**Status**: COMPLETED
**Author**: Antigravity (@sm)

## Context
Native script injection for UTMify and Pixels did not yield expected results (Pixel Helper remained silent). The user requested to revert to Google Tag Manager (GTM) as the source of truth, requiring a fix for the "SPA Navigation" issue where GTM triggers fail during client-side redirects.

## User Story
**As a** site owner
**I want** to centralize my tracking via GTM (GTM-PK6HB293)
**So that** I can manage Meta, TikTok, and UTMify scripts without hardcoding them, while ensuring conversion events fire correctly during Next.js navigation.

## Acceptance Criteria
- [ ] **Revert Layout**: Remove native `script` tags and restore `<GoogleTagManager>` in `app/layout.tsx`.
- [ ] **Fix Routing**: Ensure all internal navigation (specifically from `/` to `/step-2`) preserves the UTM query string.
- [ ] **Clarity Integration**: Re-add Microsoft Clarity (`utn9owtst6`) either via GTM or a dedicated Next.js script if preferred.
- [ ] **SPA Triggering**: Implement a `dataLayer.push` for virtual page views to ensure GTM sees the navigation.

## Technical Notes
- Next.js navigation doesn't trigger a browser reload. GTM's "All Pages" trigger only runs once.
- We will add a `useEffect` or navigation wrapper to push `event: 'page_view'` to the `dataLayer` on every route change.

## Verification
- Use Pixel Helper to confirm tracking fires on both landing and results pages.
- Verify UTMs persist in the URL throughout the funnel.
