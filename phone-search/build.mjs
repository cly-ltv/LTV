// Renders content.js into index.html. No dependencies: `node build.mjs`.
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  LANDING,
  LOADING,
  scoreBands,
  page,
  toc,
  services,
  picksSection,
  reviewsSection,
  compareSection,
  howSection,
  guide,
  closingBanner,
  learnSection,
  faqSection,
  sidebar,
  footer,
} from './content.js';

// Cache-busting hash so browsers never pair a new index.html with an old css/js file.
const v = (file) => createHash('md5').update(readFileSync(join(dirname(fileURLToPath(import.meta.url)), file))).digest('hex').slice(0, 8);

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ICONS = {
  check: 'M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
  cross:
    'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z',
  minus: 'M19 13H5v-2h14v2z',
  star: 'M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  search:
    'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
  phone:
    'M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
  shield:
    'M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z',
};

const icon = (name, size, cls = '', label = '') => {
  const a11y = label ? `role="img" aria-label="${esc(label)}"` : 'aria-hidden="true"';
  return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" ${a11y}><path d="${ICONS[name]}"/></svg>`;
};

// Our own brands get rel="noopener"; competitors get "nofollow noopener". Never "sponsored".
const linkAttrs = (svc) => ` target="_blank" rel="${svc.ours ? 'noopener' : 'nofollow noopener'}"`;

const scoreLabel = (score) => scoreBands.find((b) => score >= b.min).label;
const scoreText = (score) => score.toFixed(1);
const scorePill = (score) => `<span class="score-pill">${scoreText(score)}<span>/10</span></span>`;
// Filled stars out of 5: floor(score / 2 + 0.5).
const stars = (score, size) => {
  const filled = Math.floor(score / 2 + 0.5);
  const star = (i) => icon('star', size, i < filled ? 'star-on' : 'star-off');
  return `<span class="stars" role="img" aria-label="${scoreText(score)} out of 10">${[0, 1, 2, 3, 4].map(star).join('')}</span>`;
};

const searchForm = ({ id, cls = '', button, withIcon = false }) => `
<form role="search" class="search ${cls}" action="${LANDING}" method="get" target="_blank" rel="noopener" data-loading-url="${LOADING}">
  <label class="sr-only" for="${id}">Phone number</label>
  <input id="${id}" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="${esc(page.searchPlaceholder)}">
  <button type="submit" class="btn btn-search">${withIcon ? icon('search', 20) + ' ' : ''}${esc(button)}</button>
  <p class="search-error" id="${id}-error" role="alert" hidden>${esc(page.phoneError)}</p>
</form>`;

const banner = (text, id) => `
<div class="banner">
  <p>${esc(text)}</p>
  ${searchForm({ id, cls: 'search-banner', button: 'Search' })}
</div>`;

const tocLinks = (cls, withArrow, key) =>
  toc
    .map(
      (t) =>
        `<a href="#${t.id}" class="${cls}" data-spy>${esc(t[key])}${withArrow ? '<span aria-hidden="true">&rarr;</span>' : ''}</a>`
    )
    .join('');

const header = `
<header class="site-header">
  <div class="wrap site-header-in"><img class="site-logo" src="assets/beenverified.svg" alt="${esc(page.headerLogoAlt)}"></div>
</header>`;

const hero = `
<section class="hero">
  <div class="wrap hero-in">
    <h1 class="h1">${esc(page.title)}</h1>
    <p class="hero-sub">${esc(page.subhead)}</p>
    <div class="byline"><span>${esc(page.byline)}</span><span>${esc(page.updated)}</span></div>
    <div class="hero-search">
      ${searchForm({ id: 'phone', cls: 'search-hero', button: 'Search', withIcon: true })}
      <p class="hero-note">${esc(page.searchNote)}</p>
    </div>
    <details class="disc" id="disclosure">
      <summary class="disc-sum">${esc(page.disclosure.label)}</summary>
      <div class="disc-body">${page.disclosure.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}</div>
    </details>
  </div>
</section>`;

const nav = `
<nav aria-label="On this page" class="toc-horizontal">
  <div class="wrap toc-horizontal-in">${tocLinks('tocnav-link', false, 'short')}</div>
</nav>
<div class="sticky-cta">
  <div class="cta-in">
    <div class="cta-left">${icon('phone', 18, 'cta-ic')}<span class="cta-label">${esc(page.stickyBar.label)}</span></div>
    <div class="cta-right">
      <a href="${LANDING}" target="_blank" rel="noopener" class="btn btn-cta">${icon('search', 16)} ${esc(page.stickyBar.button)}</a>
    </div>
  </div>
</div>
<nav aria-label="Table of contents" class="toc-mobile">
  <details>
    <summary>Table of contents<span class="chev" aria-hidden="true"></span></summary>
    <div class="toc-mobile-list">${tocLinks('toc-mobile-link', true, 'label')}</div>
  </details>
</nav>`;

const tocCard = `
<aside class="toc-col">
  <nav aria-label="Table of contents" class="toc-card">
    <span class="toc-card-title">On this page</span>
    ${tocLinks('toc-link', false, 'label')}
  </nav>
</aside>`;

const picks = () => {
  const s = picksSection;
  const rows = services
    .map((svc, i) => {
      const first = i === 0;
      return `
      <div class="pick${first ? ' pick-first' : ''}">
        ${first ? `<span class="pick-tag">${esc(s.topPickTag)}</span>` : ''}
        <span class="pk-rank">${i + 1}</span>
        <div class="pk-logo"><img src="${svc.logo}" alt="${esc(svc.name)}"></div>
        <div class="pk-main">
          <span class="pk-name">${esc(svc.name)}</span>
          <ul class="pk-list">${svc.picks.map((b) => `<li>${icon('check', 15, 'ic-pro')}<span>${esc(b)}</span></li>`).join('')}</ul>
        </div>
        <div class="pk-side">
          <div class="pk-score">${scorePill(svc.score)}<span class="pk-extra">${stars(svc.score, 14)}</span><span class="pk-extra score-label">${esc(scoreLabel(svc.score))}</span></div>
          <div class="pk-cta"><a href="${svc.href}"${linkAttrs(svc)} class="btn btn-sm">${esc(s.button)}</a></div>
        </div>
      </div>`;
    })
    .join('');
  return `
<section id="picks">
  <h2>${esc(s.title)}</h2>
  <p class="lede">${esc(s.introBefore)}<a href="${s.introLinkHref}">${esc(s.introLinkText)}</a>${esc(s.introAfter)}</p>
  <div class="picks">${rows}</div>
</section>`;
};

const reviews = () => {
  const s = reviewsSection;
  const h = s.headings;
  const acc = (title, body, open = false) =>
    `<details class="acc"${open ? ' open' : ''}><summary class="acc-sum">${esc(title)}<span class="chev" aria-hidden="true"></span></summary><div class="acc-body">${body}</div></details>`;
  const cards = services
    .map((svc, i) => {
      const li = (t) => `<li>${icon('check', 18, 'ic-pro')}<span>${esc(t)}</span></li>`;
      return `
    <article id="${svc.id}" class="pcard${svc.topPick ? ' pcard-top' : ''}">
      <div class="cardhead">
        <div class="card-logo"><img src="${svc.logo}" alt="${esc(svc.name)}"></div>
        <div class="card-info">
          <div class="card-tags"><span class="card-rank">#${i + 1}</span>${svc.topPick ? `<span class="badge">${esc(picksSection.topPickTag)}</span>` : ''}</div>
          <h3>${esc(svc.name)}</h3>
          <span class="overline">${esc(svc.bestFor)}</span>
          <span class="card-score"><span class="card-score-row">${scorePill(svc.score)}${stars(svc.score, 16)}</span><span class="score-label">${esc(scoreLabel(svc.score))}</span></span>
          <div class="card-cta"><a href="${svc.href}"${linkAttrs(svc)} class="btn btn-md">${esc(s.goTo(svc.name))}</a></div>
        </div>
      </div>
      ${acc(
        h.keyFeatures,
        `<ul class="kf">${svc.keyFeatures.map(li).join('')}</ul>`,
        svc.topPick
      )}
      ${acc(h.whoFor, `<p>${esc(svc.whoFor)}</p>`)}
      ${acc(h.whyPicked(svc.name), `<p>${esc(svc.whyPicked)}</p>`)}
      ${acc(h.privacy, `<p>${esc(svc.privacy)}</p>`)}
    </article>`;
    })
    .join('');
  return `
<section id="reviews">
  <h2>${esc(s.title)}</h2>
  <p class="lede">${esc(s.intro)}</p>
  <div class="cards">${cards}</div>
</section>`;
};

const compare = () => {
  const s = compareSection;
  const rows = services
    .map((svc, i) => {
      const cells = s.columns
        .map((c) =>
          svc.features[c.key]
            ? `<td>${icon('check', 18, 'ic-pro', 'Yes')}</td>`
            : `<td>${icon('minus', 18, 'ic-no', 'No')}</td>`
        )
        .join('');
      return `<tr${svc.topPick ? ' class="row-top"' : ''}><th scope="row">${i + 1}. ${esc(svc.name)}</th><td>${scorePill(svc.score)}</td>${cells}</tr>`;
    })
    .join('');
  return `
<section id="compare">
  <h2>${esc(s.title)}</h2>
  <p class="lede">${esc(s.intro)}</p>
  <div class="table-wrap">
    <table>
      <thead><tr><th scope="col">${esc(s.serviceHeader)}</th><th scope="col">${esc(s.scoreHeader)}</th>${s.columns.map((c) => `<th scope="col">${esc(c.label)}</th>`).join('')}</tr></thead>
      <tbody>${rows}</tbody>
    </table>
  </div>
</section>`;
};

const how = () => `
<section id="guide-what-it-shows">
  <h2>${esc(howSection.title)}</h2>
  <p class="lede">${esc(howSection.intro)}</p>
  <div class="how-grid">${howSection.cards
    .map(
      (c) => `
    <div class="how-card"><div class="how-icon">${icon(c.icon, 22, 'ic-blue')}</div><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></div>`
    )
    .join('')}</div>
</section>`;

const guideSection = () => {
  let bannerCount = 0;
  const inline = (item) => (typeof item === 'string' ? esc(item) : `<strong>${esc(item.b)}</strong>${esc(item.t)}`);
  // Paragraph parts: plain strings, or { href, text } for an external link.
  const part = (p) =>
    typeof p === 'string' ? esc(p) : `<a href="${p.href}" target="_blank" rel="noopener">${esc(p.text)}</a>`;
  const body = guide.blocks
    .map((b) => {
      switch (b.type) {
        case 'h2':
          return `<h2>${esc(b.text)}</h2>`;
        case 'h3':
          return `<h3>${esc(b.text)}</h3>`;
        case 'p':
          return `<p>${b.parts ? b.parts.map(part).join('') : esc(b.text)}</p>`;
        case 'hr':
          return '<hr>';
        case 'ul':
          return `<ul>${b.items.map((it) => `<li>${inline(it)}</li>`).join('')}</ul>`;
        case 'banner':
          return banner(b.text, `phone-guide-${++bannerCount}`);
        default:
          throw new Error(`Unknown guide block: ${b.type}`);
      }
    })
    .join('\n');
  return `
<section id="guide-opt-out" class="guide">
${body}
</section>
<hr>
<section class="closing">${banner(closingBanner.text, 'phone-closing')}</section>`;
};

const learn = () => {
  const s = learnSection;
  return `
<section id="learn">
  <h2>${esc(s.title)}</h2>
  <p class="lede">${esc(s.intro)}</p>
  <div class="res-grid">${s.cards
    .map(
      (c) => `
    <a href="${c.href}"${c.external ? ' target="_blank" rel="noopener"' : ''} class="res res-${c.accent}">
      <span class="res-label">${esc(c.label)}</span><span class="res-title">${esc(c.title)}</span><span class="res-text">${esc(c.text)}</span><span class="res-more">${esc(s.readMore)}</span>
    </a>`
    )
    .join('')}</div>
</section>`;
};

const faq = () => `
<section id="faq">
  <h2>${esc(faqSection.title)}</h2>
  <div class="faq">${faqSection.items
    .map(
      (f, i) =>
        `<details${i === 0 ? ' open' : ''}><summary>${esc(f.q)}<span class="chev" aria-hidden="true"></span></summary><p>${esc(f.a)}</p></details>`
    )
    .join('')}</div>
</section>`;

const sidebarCol = `
<aside class="sidebar-col">
  <div class="sidebar-card">
    <div class="sb-head">
      <svg class="sb-deco" width="140" height="140" viewBox="0 0 140 140" aria-hidden="true"><circle cx="70" cy="70" r="70" fill="#ffffff" fill-opacity="0.06"/><circle cx="70" cy="70" r="46" fill="none" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1.5"/></svg>
      <div class="sb-title-wrap"><span class="sb-title">${esc(sidebar.title)}</span></div>
      <p>${esc(sidebar.text)}</p>
    </div>
    <div class="sb-body">
      <form role="search" action="${LANDING}" method="get" target="_blank" rel="noopener" class="sb-form" data-loading-url="${LOADING}">
        <label class="sr-only" for="sidebar-phone">Phone number</label>
        <input id="sidebar-phone" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="${esc(page.searchPlaceholder)}">
        <p class="search-error" id="sidebar-phone-error" role="alert" hidden>${esc(page.phoneError)}</p>
        <button type="submit" class="btn btn-sb">${icon('search', 18)} ${esc(sidebar.button)}</button>
      </form>
      <div class="sb-claims">${sidebar.claims.map((c) => `<div>${icon(c.icon, 16, 'ic-blue')} ${esc(c.text)}</div>`).join('')}</div>
    </div>
  </div>
</aside>`;

const site_footer = `
<footer class="site-footer">
  <div class="wrap">
    <div class="foot">
      <div><img class="foot-logo" src="assets/beenverified.svg" alt="BeenVerified"><p class="foot-blurb">${esc(footer.blurb)}</p></div>
      ${footer.columns
        .map(
          (col) =>
            `<div class="foot-col"><span class="foot-title">${esc(col.title)}</span>${col.links.map((l) => `<a href="${l.href}" class="foot-link">${esc(l.text)}</a>`).join('')}</div>`
        )
        .join('')}
    </div>
    <div class="legal">
      <p><strong>${esc(footer.ownership.label)}</strong>${esc(footer.ownership.text)}</p>
      <p><strong>${esc(footer.fcra.label)}</strong>${esc(footer.fcra.text)}</p>
    </div>
  </div>
</footer>`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.subhead)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/tokens.css?v=${v('css/tokens.css')}">
<link rel="stylesheet" href="css/page.css?v=${v('css/page.css')}">
</head>
<body>
<div id="top">
${header}
${hero}
${nav}
<main class="content-grid">
${tocCard}
<div class="main-col">
${picks()}
${reviews()}
${compare()}
${how()}
${guideSection()}
${learn()}
${faq()}
</div>
${sidebarCol}
</main>
${site_footer}
</div>
<script src="js/page.js?v=${v('js/page.js')}" defer></script>
</body>
</html>
`;

const out = join(dirname(fileURLToPath(import.meta.url)), 'index.html');
writeFileSync(out, html);
console.log(`Wrote ${out} (${html.length} bytes)`);
