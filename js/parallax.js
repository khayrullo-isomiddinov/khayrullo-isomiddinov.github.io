(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var portrait = document.querySelector('.hero-section__portrait');
  var name = document.querySelector('.hero-section__portrait-name');
  if (!portrait) return;

  var cap = window.innerHeight;
  var ticking = false;

  function update() {
    var y = Math.min(window.scrollY, cap);
    portrait.style.setProperty('--parallax-offset', (y * 0.06).toFixed(2) + 'px');
    if (name) name.style.setProperty('--parallax-offset', (y * 0.03).toFixed(2) + 'px');
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });
})();
