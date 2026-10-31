# Best reverse phone lookup sites of 2026

BeenVerified phone search comparison page (paid search landing page). Compliance review: [CR-8966](https://ltvco.atlassian.net/browse/CR-8966).

Static page, no dependencies. Open `index.html` through any static server.

## Editing

- **All copy, links, scores and data live in `content.js`**: the nine services (score, key features, who/why/privacy copy, table flags, links), score bands, FAQ, guide text, advertiser disclosure, footer ownership and FCRA text, the "Updated" date.
- Run `node build.mjs` to regenerate `index.html` after editing `content.js` or the markup in `build.mjs`. Do not edit `index.html` by hand.
- Styles: `css/tokens.css` (design tokens) and `css/page.css`. Behavior: `js/page.js` (TOC scroll-spy and the phone TOC dropdown).
- Scores: edit `score` per service; the label comes from `scoreBands` and the stars are `floor(score / 2 + 0.5)` of 5. Order in `services` is the rank.
- Phone search forms (hero, two inline banners, sidebar): `js/page.js` opens `LOADING` (`content.js`) in a new tab with `?phone=<base64 of the 10 digits>`. The typed number is sent to BeenVerified. Anything that isn't 10 digits (a leading 1 is dropped) shows a validation message and doesn't submit. Without JS the form falls back to `LANDING`. The sticky bar button and BeenVerified "Visit site" links still go to `LANDING`.
- Links: our four brands (`ours: true`) get `rel="noopener"`, competitors get `rel="nofollow noopener"`. Never `sponsored`.

## Do not change without Compliance sign-off

Scores and order are our subjective opinion; never describe them as tested or as a methodology. No pricing. No negative statements about any service ("Key features" is positives only). Keep the advertiser disclosure, the footer ownership statement and the FCRA notice, with the exact text from the handoff. No hero photo. Sidebar claims "Confidential searches" and "Millions of public records". No "Powered by" call-outs.

## Open items

- Scores are placeholders.
- Privacy policy and "Best phone search sites" footer links are `#` placeholders.
- Competitor logos need legal approval.
- Feature table and "Key features" for services other than ours are from public sources and unverified.
- ReversePhone and NumberGuru links, and all competitor links, are homepage placeholders.
- "Updated Oct 28, 2026" is hardcoded (`page.updated` in `content.js`).
