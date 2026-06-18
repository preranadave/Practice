(function () {
  const root = document.documentElement; // or document.body
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header .nav');
  const closeBtn = document.querySelector('.nav-close');

  function openNav() {
    root.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    root.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  if (hamburger) {
    hamburger.addEventListener('click', openNav);
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeNav);
  }

  // Close on Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  // Close when clicking any nav link (optional)
  nav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });
})();

document.addEventListener('DOMContentLoaded', function () {

  return new Swiper('.customer-review-slider', {
    slidesPerView: 1, // default (mobile first)
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    navigation: {
      nextEl: '.custom-prev',
      prevEl: '.custom-next',
    },
    breakpoints: {
      768: { // from 768px up
        slidesPerView: 2,
        spaceBetween: 16, slidesPerGroup: 1, 
      },
      1280: { slidesPerView: 3,
        spaceBetween: 31,
        slidesPerGroup: 1, 
      }
    },
  });

});