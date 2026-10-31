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
    var error = form.querySelector('.search-error');
    // Same rule as BeenVerified's own phone search (phoneUS in their main.js): area code and
    // exchange start with 2-9 and can't be N11 (211, 311 ... 911), so 123-456-7890 is rejected.
    var validPhone = /^[2-9](?:[02-9]\d|1[02-9])[2-9](?:[02-9]\d|1[02-9])\d{4}$/;
    // Like their form: nothing is flagged until the first submit, after which the field is
    // re-checked on every keystroke (the message appears and clears as the number changes).
    var checking = false;
    function validate() {
      var ok = validPhone.test(input.value.replace(/\D/g, ''));
      if (ok) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedby');
      } else {
        input.setAttribute('aria-invalid', 'true');
        input.setAttribute('aria-describedby', error.id);
      }
      error.hidden = ok;
      return ok;
    }
    // Format as 619-277-4081 while typing (max 10 digits), keeping the caret next to the same digit.
    input.addEventListener('input', function (e) {
      var before = input.value.slice(0, input.selectionStart).replace(/\D/g, '').length;
      var digits = input.value.replace(/\D/g, '');
      // A leading country code is only dropped from pasted text. When typing, a number past 10
      // digits is simply ignored.
      var pasted = e && (e.inputType === 'insertFromPaste' || e.inputType === 'insertFromDrop');
      if (pasted && digits.length === 11 && digits.charAt(0) === '1') {
        digits = digits.slice(1);
        before = Math.max(0, before - 1);
      }
      digits = digits.slice(0, 10);
      before = Math.min(before, digits.length);
      var formatted = digits.replace(/^(\d{3})(\d)/, '$1-$2').replace(/^(\d{3}-\d{3})(\d)/, '$1-$2');
      if (formatted !== input.value) {
        var pos = 0;
        for (var seen = 0; pos < formatted.length && seen < before; pos++) {
          if (/\d/.test(formatted.charAt(pos))) seen++;
        }
        input.value = formatted;
        input.setSelectionRange(pos, pos);
      }
      if (checking) validate();
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      checking = true;
      if (!validate()) {
        input.focus();
        return;
      }
      var phone = input.value.replace(/\D/g, '');
      window.open(form.getAttribute('data-loading-url') + '?phone=' + btoa(phone), '_blank', 'noopener');
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
