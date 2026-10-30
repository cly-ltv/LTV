# Best reverse phone lookup sites of 2026

BeenVerified phone search comparison page (paid search landing page). Compliance review: [CR-8966](https://ltvco.atlassian.net/browse/CR-8966).

Static page, no dependencies. Open `index.html` through any static server.

## Editing

- **All copy, links and data live in `content.js`**: services, bullets, pros and cons, the feature table, FAQ, guide text, disclosure, footer ownership and FCRA text, the "Updated" date.
- Run `node build.mjs` to regenerate `index.html` after editing `content.js` or the markup in `build.mjs`. Do not edit `index.html` by hand.
- Styles: `css/tokens.css` (design tokens) and `css/page.css`. Behavior: `js/page.js` (TOC scroll-spy and the phone TOC dropdown).

## Do not change without Compliance sign-off

No scores, star ratings or "tested" / "we ranked" claims; no pricing; keep the advertiser disclosure, the footer ownership statement and the FCRA notice; no hero photo; sidebar claims "Confidential searches" and "Millions of public records".

## Open items

- Privacy policy and "Best phone search sites" footer links are `#` placeholders.
- Competitor logos need legal approval.
- Feature table and pros/cons for services other than BeenVerified are from public sources and unverified.
- "Updated Oct 28, 2026" is hardcoded (`page.updated` in `content.js`).
- Competitor links are homepages; affiliate/tracking URLs will replace them.
