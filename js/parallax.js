(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Below 1024px the portrait sits flush against the bottom of the hero
  // section with no room to drift without bleeding into the next section.
  if (!window.matchMedia('(min-width: 1024px)').matches) return;

  var portrait = document.querySelector('.hero-section__portrait');
  var name = document.querySelector('.hero-section__portrait-name');
  if (!portrait) return;

  var cap = window.innerHeight;
  var ticking = false;

  function update() {
    var y = Math.min(window.scrollY, cap);
    portrait.style.setProperty('--parallax-offset', (y * 0.14).toFixed(2) + 'px');
    if (name) name.style.setProperty('--parallax-offset', (y * 0.07).toFixed(2) + 'px');
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
