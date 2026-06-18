import React, { useRef } from "react";
import Container from "../../layouts/Container";
import Slider from "react-slick";
import { bestSellers } from "../../data/bestsellers";
import ProductCard from "../../components/ProductCard/ProductCard";
import centerImg from "../../assets/images/best-seller.png";

const BestSellers = () => {
  const leftSlider = useRef(null);
  const rightSlider = useRef(null);

  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const leftProducts = chunkArray(bestSellers.filter((_, i) => i % 4 < 2), 2);
  const rightProducts = chunkArray(bestSellers.filter((_, i) => i % 4 >= 2), 2);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 500,
    fade: false,
  };

  const handlePrev = () => {
    leftSlider.current?.slickPrev();
    rightSlider.current?.slickPrev();
  };

  const handleNext = () => {
    leftSlider.current?.slickNext();
    rightSlider.current?.slickNext();
  };

  return (
    <div className="bestseller-section">
      <Container>
        <div className="bestseller-section__content">
          <button className="nav-btn prev" onClick={handlePrev}>
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

          <div className="side-slider left">
            <Slider ref={leftSlider} {...settings}>
              {leftProducts.map((chunk, index) => (
                <div key={index} className="product-column">
                  {chunk.map((product) => (
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

          <div className="side-slider right">
            <Slider ref={rightSlider} {...settings}>
              {rightProducts.map((chunk, index) => (
                <div key={index} className="product-column">
                  {chunk.map((product) => (
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
        </div>
      </Container>
    </div>
  );
};

export default BestSellers;