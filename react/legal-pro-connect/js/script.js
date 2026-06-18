document.addEventListener('DOMContentLoaded', function () {
  const marquee = document.getElementById('marqueeContent');
  if (!marquee) return;

  let xPos = 0;
  // Duplicate the content for seamless scrolling
  marquee.innerHTML += marquee.innerHTML;
  function getSpeed() {
    const width = window.innerWidth;
    if (width <= 768) return 0.4;
    if (width <= 991) return 0.5;
    if (width <= 1024) return 0.6;
    if (width <= 1200) return 0.7;
    if (width <= 1360) return 0.8;
    return 0.5;
  }

  function animateMarquee() {
    xPos -= getSpeed();
    if (Math.abs(xPos) >= marquee.scrollWidth / 2) {
      xPos = 0;
    }
    marquee.style.transform = `translateX(${xPos}px)`;
    requestAnimationFrame(animateMarquee);
  }

  animateMarquee();

  //menu
  const navIcon = document.querySelector('.nav-icon');
  const nav = document.querySelector('nav');
  const overlay = document.querySelector('.menu-overlay');

  // Open menu
  navIcon.addEventListener('click', function () {
    nav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close menu on overlay click
  overlay.addEventListener('click', closeMenu);

  function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  const closeBtn = document.querySelector('.nav-close');

  closeBtn.addEventListener('click', closeMenu);



});

$(document).ready(function () {
  $('.hero-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 600,
    cssEase: 'linear',

  });


  $('.membership-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    adaptiveHeight: false,
    prevArrow: $('.nav-btn.btn-prev'),
    nextArrow: $('.nav-btn.btn-next'),

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});