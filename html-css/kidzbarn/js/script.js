// Ensure jQuery is loaded and DOM is ready
jQuery(function ($) {

  // Hero Slider
  $('.hero-slider').slick({
    dots: true,            // show dots navigation
    arrows: false,         // hide prev/next arrows
    slidesToShow: 1,       // only one slide visible
    slidesToScroll: 1,     // scroll one slide at a time
    infinite: true,
    adaptiveHeight: true,  // adapt height to slide content
    autoplay: false,       // set true if you want autoplay
    speed: 400,
    accessibility: true
  });

  // Customer Slider
  $('.customer-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false, // hide default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  });

  // Custom buttons for Customer Slider
  $('.prev-btn').on('click', function () {
    $('.customer-slider').slick('slickPrev');
    console.log("clickc")
  });

  $('.next-btn').on('click', function () {
    $('.customer-slider').slick('slickNext');
  });


  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;

      // Close other open FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) item.classList.remove('active');
      });

      // Toggle current one
      faqItem.classList.toggle('active');
    });
  });
    const menuToggle = document.querySelector('.menu-toggle');
    const headerNav = document.querySelector('.header-nav');

    menuToggle.addEventListener('click', function () {
      this.classList.toggle('active');
      headerNav.classList.toggle('open');
      document.body.classList.toggle('menu-open');
    });

});
