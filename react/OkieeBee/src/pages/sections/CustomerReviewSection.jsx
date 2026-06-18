import React, { useMemo, useRef, useEffect } from "react";
import { reviews } from "../../data/reviews";
import Container from "../../layouts/Container";
import Slider from "react-slick";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import vitals from "../../assets/images/vitals-logo.png";
const CustomerReviewSection = () => {
  const reviewSlider = useRef(null);
  const sliderSettings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
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
  };

  const averageRating = useMemo(() => {
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, []);
  const handlePrev = () => {
    reviewSlider.current?.slickPrev();
  };

  const handleNext = () => {
    reviewSlider.current?.slickNext();
  };

  return (
    <div className="customer-review-sec">
      <Container className="container">
        <div className="customer-review-wrapper">
          <div className="review-content">
            <h2>Our Customers Love Us</h2>
            <div className="rating">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="20"
                  height="18"
                  className={i < Math.round(averageRating) ? "filled" : "empty"}
                >
                  <use href="#icon-star" />
                </svg>
              ))}
            </div>

            <div className="review-content-text">
              <h6>{averageRating}</h6>
              <p>from {reviews.length} Reviews</p>
            </div>
            <div className="content-devider"></div>
            <div className="collector-dets">
              <p>Collected by</p>
              <img src={vitals} alt="" />
            </div>
            <button className="review-nav prev" onClick={handlePrev}>
              <svg
                width={36}
                height={36}
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width={35}
                  height={35}
                  rx="17.5"
                  stroke="black"
                />
                <path d="M20 14L16 18L20 22" stroke="black" strokeWidth={2} />
              </svg>
            </button>
            <button className="review-nav next" onClick={handleNext}>
              <svg
                width={36}
                height={36}
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.5"
                  y="0.5"
                  width={35}
                  height={35}
                  rx="17.5"
                  transform="matrix(-1 0 0 1 35 0)"
                  stroke="black"
                />
                <path d="M16 14L20 18L16 22" stroke="black" strokeWidth={2} />
              </svg>
            </button>
          </div>

          <Slider
            className="review-slider"
            ref={reviewSlider}
            {...sliderSettings}
          >
            {reviews.map((item) => (
              <div className="review-card" key={item.id}>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="14"
                      className={i < item.rating ? "filled" : "empty"}
                    >
                      <use href="#icon-star" />
                    </svg>
                  ))}
                </div>

                <p className="review-text">{item.review}</p>
                <h5 className="review-user">{item.username}</h5>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default CustomerReviewSection;
