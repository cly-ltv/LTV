// TOC scroll-spy and mobile TOC dropdown. No dependencies.
(function () {
  'use strict';

  var spyLinks = Array.prototype.slice.call(document.querySelectorAll('a[data-spy]'));
  var ids = [];
  spyLinks.forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    if (ids.indexOf(id) === -1) ids.push(id);
  });
  var sections = ids
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  function setActive(id) {
    spyLinks.forEach(function (a) {
      var on = a.getAttribute('href') === '#' + id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  }

  // Mobile TOC dropdown: close on link tap and on Escape (returning focus to the summary).
  var mobileToc = document.querySelector('.toc-mobile details');
  if (mobileToc) {
    mobileToc.addEventListener('click', function (e) {
      if (e.target.closest && e.target.closest('a')) mobileToc.removeAttribute('open');
    });
    mobileToc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileToc.open) {
        mobileToc.removeAttribute('open');
        mobileToc.querySelector('summary').focus();
      }
    });
  }

  // Phone search forms: open the BeenVerified loading page with the number as ?phone=<base64>.
  // Without JS the form falls back to its action (the landing page).
  Array.prototype.forEach.call(document.querySelectorAll('form[data-loading-url]'), function (form) {
    var input = form.querySelector('input');
    input.addEventListener('input', function () {
      input.setCustomValidity('');
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var digits = input.value.replace(/\D/g, '');
      if (digits.length === 11 && digits.charAt(0) === '1') digits = digits.slice(1);
      if (digits.length !== 10) {
        input.setCustomValidity('Enter a 10-digit phone number.');
        input.reportValidity();
        return;
      }
      window.open(form.getAttribute('data-loading-url') + '?phone=' + btoa(digits), '_blank', 'noopener');
    });
  });

  if (!sections.length) return;

  // Immediate feedback on click, ahead of the scroll finishing.
  spyLinks.forEach(function (a) {
    a.addEventListener('click', function () {
      setActive(a.getAttribute('href').slice(1));
    });
  });

  if (!('IntersectionObserver' in window)) {
    setActive(sections[0].id);
    return;
  }

  // Elements to watch, in page order, each mapped to the TOC id it highlights. The hero (above
  // the first section) maps to the first link and the footer (below the last) to the last link.
  var watched = [];
  var hero = document.querySelector('.hero');
  var footer = document.querySelector('.site-footer');
  if (hero) watched.push({ el: hero, id: sections[0].id });
  sections.forEach(function (s) {
    watched.push({ el: s, id: s.id });
  });
  if (footer) watched.push({ el: footer, id: sections[sections.length - 1].id });

  var observer = null;
  var inLine = [];

  // The "reading line" sits just under the sticky bars. Observing a 1px band at that line means
  // exactly the element spanning it is intersecting, so the highlight changes the moment a
  // section's top passes the line (and anchor jumps, which land at the sticky offset, agree).
  function lineY() {
    var v = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--sticky-offset'), 10);
    return (isNaN(v) ? 72 : v) + 40;
  }

  function observe() {
    if (observer) observer.disconnect();
    inLine = [];
    var line = lineY();
    var bottomMargin = Math.max(0, window.innerHeight - line - 1);
    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var i = inLine.indexOf(entry.target);
          if (entry.isIntersecting && i === -1) inLine.push(entry.target);
          else if (!entry.isIntersecting && i !== -1) inLine.splice(i, 1);
        });
        // Gaps between sections hold nothing: keep the previous highlight.
        for (var n = watched.length - 1; n >= 0; n--) {
          if (inLine.indexOf(watched[n].el) !== -1) {
            setActive(watched[n].id);
            return;
          }
        }
      },
      { rootMargin: '-' + line + 'px 0px -' + bottomMargin + 'px 0px', threshold: 0 }
    );
    watched.forEach(function (w) {
      observer.observe(w.el);
    });
  }

  setActive(sections[0].id);
  observe();

  // The band depends on the viewport height and the sticky offset (which changes at breakpoints).
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(observe, 100);
  });
})();
