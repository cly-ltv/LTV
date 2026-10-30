# Build brief: BeenVerified phone search comparison page

Build this in the **LTV repo** (not sot-pages). Do not copy conventions from sot-pages.

## What it is
A "Best reverse phone lookup sites of 2026" page published by BeenVerified. It lists 7 phone search
services (BeenVerified, PeopleLooker, Spokeo, TruthFinder, Intelius, Whitepages Premium, Instant Checkmate)
and is meant to be a paid search landing page. Compliance review is open: CR-8966
(https://ltvco.atlassian.net/browse/CR-8966). Copy and claims may change after review, so keep all
content (services, bullets, FAQ, disclosure text) in one easy-to-edit place, not scattered through markup.

## Source files (exported from a design canvas)
- `design/desktop.html`: source of truth. One responsive page; desktop at 1440px, with tablet and phone rules in its CSS media queries.
- `design/mobile-preview.html`: reference only. Same page at 390px with the mobile rules forced on. Do NOT build a second page.
- `design-system/tokens.json`: colors, type scale, spacing, radii, shadows. Font is Nunito Sans (400/600/700/800) from Google Fonts.
- Strip the canvas scaffolding: the `<x-dc>` wrapper, `<script src="./support.js">`, the `<script type="text/x-dc">` Component block, and `<helmet>` (move its `<link>` and `<style>` into `<head>`).
- All styling is inline. Move it to classes/CSS (or whatever the repo uses) and keep the visual result identical.
- Images are referenced as `/_blob/<id>`. Replace with the files in `assets/`:

| blob id (first 8) | file |
|---|---|
| c7c9d4f5 | assets/beenverified.svg (header, sidebar, footer) |
| d4a55e21 | assets/peoplelooker.svg |
| 1c396cd5 | assets/whitepages.png |
| 0b1f5b1c | assets/spokeo.png |
| 5b1ee7c5 | assets/truthfinder.png |
| cac0ac4a | assets/intelius.png |
| e2539775 | assets/instant-checkmate.png |

## Page structure (in order)
Header (logo only) > Hero (H1, one-line subhead, byline, phone search form, "Advertiser disclosure" text link that expands in place) >
Top picks list (rank, logo, 3 bullets, "Visit site"; first row has a gold "Our top pick" corner tag) >
Full reviews (7 cards, native `<details>` accordions) > Compare features table > How reverse phone lookup works (3 cards) >
Phone search guide (long-form, with an inline search banner mid-way) > second inline search banner > Learn more (resource cards) > FAQ > Footer (ownership + FCRA notice).

## Layout and behavior
- 1180px and up: 3 columns. Left sticky "On this page" TOC, content, right sticky search card.
- 760-1179px: horizontal sticky jump nav; right search card stays until 960px, then hides.
- Under 760px: sticky "Know who's calling" bar at the very top, sticky TOC dropdown directly under it. The dropdown closes when a link is tapped. Sections need a `scroll-margin-top` so headings clear both bars. Top picks rows become: rank + logo + name, then bullets, then a full-width button.
- TOC active-link highlight (blue text + left bar) should follow scroll position. Use IntersectionObserver. This was designed but never ran in the design canvas, so build it and test it in a real browser.
- All four search forms (hero, sidebar, two inline banners) submit via GET to the BeenVerified landing page in a new tab. The inputs deliberately have no `name`, so the typed number is NOT sent. Enter key and button both work.

## Links
- BeenVerified CTAs and search forms: https://www.beenverified.com/lp/596a06/1/landing
- Other services: their homepages (placeholders). Affiliate/tracking URLs will replace these. Use `rel="sponsored nofollow noopener"` and `target="_blank"`.

## Do not change without Compliance sign-off
- No scores, star ratings, "tested" or "we ranked" claims anywhere. We did no testing.
- No pricing.
- Keep the advertiser disclosure link, the footer ownership statement and the FCRA notice.
- No hero photo.
- Sidebar claims: "Confidential searches", "Millions of public records".

## Known open items (flag them, don't invent answers)
- Privacy Policy link in the footer is a placeholder.
- Competitor logos need legal approval.
- Feature table and pros/cons for other services are from public sources and unverified.
- "Updated Oct 28, 2026" is hardcoded.

## How to work
1. Inspect the repo first: stack, where pages live, naming, lint/format rules. Say what you found.
2. Propose a file structure and plan, and wait for my OK before editing.
3. Work on a branch. Do not touch unrelated files.
4. Done means: matches `desktop.html` at 1440px and `mobile-preview.html` at 390px, no console errors, links and forms work, keyboard-accessible accordions and TOC.
