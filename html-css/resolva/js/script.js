$(function () {
  $(".roatating-text").slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    arrows: true,
    dots: false,
    prevArrow: $(".roatating-text-wrap .nav-btn.prev"),
    nextArrow: $(".roatating-text-wrap .nav-btn.next"),
    pauseOnHover: true,
    pauseOnFocus: true,
  });

  $(".hero-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 5000,
    speed: 600,
    cssEase: "ease-in-out",
    arrows: false,
    dots: true,
    pauseOnHover: true,
    pauseOnFocus: true,
  });
  document.querySelectorAll(".color-variant .color").forEach((color) => {
    color.addEventListener("click", () => {
      document
        .querySelector(".color-variant .selected")
        ?.classList.remove("selected");

      color.classList.add("selected");
    });
  });
});
