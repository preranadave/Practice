$(document).ready(function () {
  // Initialize Slick slider
  $('.profile-carousel').slick({
    centerMode: true,
    centerPadding: '200px',
    slidesToShow: 2,
    arrows: false,
    dots: true,
    autoplay: false,
    speed:500,
    cssEase:'linear',
    loop:true,
    autoplaySpeed:0,
    pauseOnFocus:false,
    pauseOnHover:false,  

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerPadding: '150px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 992,
        settings: {
          centerPadding: '80px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '60px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          centerPadding: '30px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Custom next button control
  $('.welcome-mail-footer .next-btn').on('click', function () {
    $('.profile-carousel').slick('slickNext');
  });
});

// see https://github.com/catdad/canvas-confetti for README

const colors = ['#FF7F00', '#00B96A'];
(function frame() {
  // Left side - angled toward center
  confetti({
    particleCount: 2,
    angle: 70,
    spread: 120,
    origin: { x: 0 ,y: 0.5},
    colors: colors
  });

  // Right side - angled toward center
  confetti({
    particleCount: 2,
    angle: 110,
    spread: 120,
    origin: { x: 1, y: 0.5 },
    colors: colors
  });

  // Optional: add a center emitter for fuller coverage
  confetti({
    particleCount: 2,
    angle: 90,
    spread: 120,
    origin: { x: 0.5, y: 0.2 },
    colors: colors
  });

  requestAnimationFrame(frame);
})();
