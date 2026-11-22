/* Matsui Laboratory: small progressive enhancements (no dependencies). */
(function () {
  document.documentElement.classList.remove('no-js');

  // Light / dark switch (the starting theme is set in each page's <head>)
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    var label = function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to night mode');
      themeBtn.setAttribute('title', dark ? 'Light mode' : 'Night mode');
    };
    label();
    themeBtn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      label();
    });
  }

  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Publication filter
  var input = document.getElementById('pub-filter');
  if (input) {
    var items = Array.prototype.slice.call(document.querySelectorAll('.pub'));
    var years = Array.prototype.slice.call(document.querySelectorAll('.pub-year'));
    var count = document.getElementById('pub-count');
    var empty = document.getElementById('pub-empty');
    var total = items.length;
    items.forEach(function (li) { li._text = li.textContent.toLowerCase(); });
    var run = function () {
      var terms = input.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
      var shown = 0;
      items.forEach(function (li) {
        var ok = terms.every(function (t) { return li._text.indexOf(t) !== -1; });
        li.hidden = !ok;
        if (ok) shown++;
      });
      years.forEach(function (sec) {
        sec.hidden = !sec.querySelector('.pub:not([hidden])');
      });
      if (count) count.textContent = terms.length ? shown + ' of ' + total + ' papers' : total + ' papers';
      if (empty) empty.style.display = shown ? 'none' : 'block';
    };
    input.addEventListener('input', run);
    run();
  }
})();
