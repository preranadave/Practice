import { useEffect, useRef } from "react";
import Slider from "react-slick";
import guaranteeIcon from "../../assets/images/guarantee-icon.svg";
import deliveryIcon from "../../assets/images/delivery-icon.svg";
import gsap from "gsap";
const OfferSlider = () => {
  const offerRef = useRef(null);
  const originalSlides = [
    {
      id: 1,
      icon: deliveryIcon,
      title: "Free Delivery: Spend $75 to Qualify for Free Shipping!",
    },
    {
      id: 2,
      icon: guaranteeIcon,
      title: "30 Day Money Back Guarantee",
    },
    {
      id: 3,
      icon: deliveryIcon,
      title: "Free Delivery: Spend $75 to Qualify for Free Shipping!",
    },

    {
      id: 4,
      icon: guaranteeIcon,
      title: "30 Day Money Back Guarantee",
    },
  ];
  const slides = [...originalSlides, ...originalSlides];
  useEffect(() => {
    const slider = offerRef.current;

    let currentX = 0;
    let targetX = 0;

    const maxScroll = slider.scrollWidth - window.innerWidth;

    const onWheel = (e) => {
      e.preventDefault();

      // convert vertical scroll → horizontal
      targetX += e.deltaY * 1;

      // clamp values
      targetX = gsap.utils.clamp(0, maxScroll, targetX);

      gsap.to(slider, {
        x: -targetX,
        duration: 1.5,
        ease: "power2.out",
      });
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   centerMode: true,
  //   centerPadding: "0px",
  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 0,
  //   speed: 8000,
  //   cssEase: "linear",
  //   pauseOnHover: false,
  //   swipe: false,
  //   touchMove: false,
  //   responsive: [
  //     {
  //       breakpoint: 769,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <div className="offer-slider-container">
        {/* <Slider {...settings} className="offer-slider">
          {slides.map((item) => (
            <div key={item.id} className="slide">
              <img src={item.icon} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </Slider> */}
        <div className="offer-slider" ref={offerRef}>
          {slides.map((item, index) => (
            <div key={index} className="slide">
              <img src={item.icon} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OfferSlider;
