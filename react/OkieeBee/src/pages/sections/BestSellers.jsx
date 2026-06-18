import React, { useMemo, useRef } from "react";
import Container from "../../layouts/Container";
import Slider from "react-slick";
import { bestSellers } from "../../data/bestsellers";
import ProductCard from "../../components/ProductCard/ProductCard";
import centerImg from "../../assets/images/best-seller.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const chunkProducts = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const BestSellers = () => {
  const bestSellerContentRef = useRef();

  const { leftColumns, rightColumns } = useMemo(() => {
    const left = [];
    const right = [];
    bestSellers.forEach((item, i) => (i % 2 === 0 ? left : right).push(item));
    return {
      leftColumns: chunkProducts(left, 2),
      rightColumns: chunkProducts(right, 2),
    };
  }, []);

  const leftSlider = useRef(null);
  const rightSlider = useRef(null);
  const mobileSlider = useRef(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
  };
  const mobileSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    infinite: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    leftSlider.current?.slickPrev();
    rightSlider.current?.slickPrev();
  };

  const handleNext = () => {
    leftSlider.current?.slickNext();
    rightSlider.current?.slickNext();
  };
  const handleMobilePrev = () => {
    mobileSlider.current?.slickPrev();
  };

  const handleMobileNext = () => {
    mobileSlider.current?.slickNext();
  };
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray(".slick-active .product-card");

        const centerImg = document.querySelector(".center-image");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: bestSellerContentRef.current,
            start: "top 80%",
            end: "center 20%",
            scrub: true,
          },
        });

        // Cards depth + stagger (scroll-based)
        tl.fromTo(
          cards,
          {
            x: 80,
            scale: 0.95,
            opacity: 0,
          },
          {
            x: 0,
            scale: 1,
            opacity: 1,
            stagger: {
              each: 0.15,
              from: "start",
            },
            ease: "none",
          },
          0
        );

        // Center image parallax depth
        tl.fromTo(
          centerImg,
          {
            scale: 0.85,
            y: 100,
          },
          {
            scale: 1,
            y: -40,
            ease: "none",
          },
          0
        );
      }, bestSellerContentRef);

      return () => ctx.revert();
    },
    { scope: bestSellerContentRef }
  );

  return (
    <div className="bestseller-section">
      <Container>
        <div className="bestseller-section__content" ref={bestSellerContentRef}>
          <div className="desktop-sliders">
            <button className="nav-btn prev" onClick={handlePrev}>
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

            <div className="side-slider">
              <Slider ref={leftSlider} {...settings} className="slider">
                {leftColumns.map((column, index) => (
                  <div className="product-column" key={index}>
                    {column.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ))}
              </Slider>
            </div>

            <div className="center-image">
              <h2>
                Best
                <br />
                Sellers
              </h2>
              <img src={centerImg} alt="Best Sellers" />
            </div>

            <div className="side-slider">
              <Slider ref={rightSlider} {...settings} className="slider">
                {rightColumns.map((column, index) => (
                  <div className="product-column" key={index}>
                    {column.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ))}
              </Slider>
            </div>

            <button className="nav-btn next" onClick={handleNext}>
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
          <div className="mobile-slider">
            <div className="center-image">
              <h2>
                Best
                <br />
                Sellers
              </h2>
              <img src={centerImg} alt="Best Sellers" />
            </div>
            <button className="nav-btn prev" onClick={handleMobilePrev}>
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
            <Slider ref={mobileSlider} {...mobileSettings}>
              {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Slider>
            <button className="nav-btn next" onClick={handleMobileNext}>
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
        </div>
      </Container>
    </div>
  );
};

export default BestSellers;
