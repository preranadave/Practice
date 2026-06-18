import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Container from "../../layouts/Container";
import { productImages } from "../../data/productImages";
import { getFeaturedImage } from "../../utils/getFeaturedImage";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";

const FeaturedProduct = ({ product }) => {
  const [qty, setQty] = useState(1);
  const mainSlider = useRef(null);
  const thumbSlider = useRef(null);

  if (!product) return null;

  const imageSet = productImages.find((item) => item.productId === product.id);
  const [navMain, setNavMain] = useState(null);
  const [navThumb,  
    setNavThumb] = useState(null);

  const ThumbNextArrow = ({ onClick }) => {
    return (
      <button
        className="thumb-arrow next"
        onClick={onClick}
        type="button"
        aria-label="Next thumbnails"
      >
        <svg
          width="16"
          height="29"
          viewBox="0 0 16 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.32038 0.320461C0.218799 0.421786 0.138206 0.542156 0.0832157 0.674677C0.0282249 0.807198 -8.01086e-05 0.949265 -8.01086e-05 1.09274C-8.01086e-05 1.23622 0.0282249 1.37829 0.0832157 1.51081C0.138206 1.64333 0.218799 1.7637 0.32038 1.86502L12.6398 14.1822L0.32038 26.4995C0.115559 26.7043 0.000492096 26.9821 0.000492096 27.2717C0.000492096 27.5614 0.115559 27.8392 0.32038 28.044C0.525202 28.2488 0.802999 28.3639 1.09266 28.3639C1.38232 28.3639 1.66012 28.2488 1.86494 28.044L14.9544 14.9545C15.056 14.8532 15.1366 14.7328 15.1916 14.6003C15.2466 14.4678 15.2749 14.3257 15.2749 14.1822C15.2749 14.0388 15.2466 13.8967 15.1916 13.7642C15.1366 13.6317 15.056 13.5113 14.9544 13.41L1.86494 0.320461C1.76362 0.21888 1.64324 0.138286 1.51073 0.0832957C1.3782 0.0283057 1.23614 0 1.09266 0C0.949183 0 0.807117 0.0283057 0.674597 0.0832957C0.542076 0.138286 0.421705 0.21888 0.32038 0.320461Z"
            fill="black"
          />
        </svg>
      </button>
    );
  };
  const ThumbPrevArrow = ({ onClick }) => {
    return (
      <button
        className="thumb-arrow prev"
        onClick={onClick}
        type="button"
        aria-label="Previous thumbnails"
      >
        <svg
          width="16"
          height="29"
          viewBox="0 0 16 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9545 0.320461C15.0561 0.421786 15.1367 0.542156 15.1917 0.674677C15.2467 0.807198 15.275 0.949265 15.275 1.09274C15.275 1.23622 15.2467 1.37829 15.1917 1.51081C15.1367 1.64333 15.0561 1.7637 14.9545 1.86502L2.63512 14.1822L14.9545 26.4995C15.1593 26.7043 15.2744 26.9821 15.2744 27.2717C15.2744 27.5614 15.1593 27.8392 14.9545 28.044C14.7497 28.2488 14.4719 28.3639 14.1822 28.3639C13.8926 28.3639 13.6148 28.2488 13.41 28.044L0.32046 14.9545C0.218879 14.8532 0.138285 14.7328 0.0832947 14.6003C0.0283047 14.4678 0 14.3257 0 14.1822C0 14.0388 0.0283047 13.8967 0.0832947 13.7642C0.138285 13.6317 0.218879 13.5113 0.32046 13.41L13.41 0.320461C13.5113 0.21888 13.6317 0.138286 13.7642 0.0832957C13.8967 0.0283057 14.0388 0 14.1822 0C14.3257 0 14.4678 0.0283057 14.6003 0.0832957C14.7328 0.138286 14.8532 0.21888 14.9545 0.320461Z"
            fill="black"
          />
        </svg>
      </button>
    );
  };

  if (!imageSet) return null;

  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: navThumb,
    swipe: false,
  };

  const thumbSettings = {
    slidesToShow: Math.min(imageSet.images.length, 3),
    slidesToScroll: 1,
    asNavFor: navMain,
    focusOnSelect: true,
    swipeToSlide: true,
    arrows: true,
    prevArrow: <ThumbPrevArrow />,
    nextArrow: <ThumbNextArrow />,
    beforeChange: () => {
      document.activeElement?.blur();
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="featured-product-sec">
      <Container className="container--sm">
        <h2 className="font-oleo section-heading">
          Prioritize Your Family's Health
        </h2>

        <div className="featured-product-wrapper">
          {/* IMAGE SLIDER */}
          <div className="product-image-wrapper">
            {/* Main Image */}
            {/* Main Image Slider */}
            <Slider {...mainSettings} ref={setNavMain}>
              {imageSet.images.map((img) => (
                <div key={img.id} className="main-slide">
                  <img src={img.src} alt={product.name} />
                </div>
              ))}
            </Slider>

            {/* Thumbnail Slider */}
            <div className="product-thumbnails">
              <Slider {...thumbSettings} ref={setNavThumb}>
                {imageSet.images.map((img) => (
                  <div
                    key={img.id}
                    className="thumb-slide"
                    onClick={() => navMain?.slickGoTo(index)}
                  >
                    <img src={img.src} alt={product.name} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* PRODUCT CONTENT */}
          <div className="product-desc-wrappper">
            <h6 className="product-brand">{product.brand}</h6>
            <h2 className="product-name">{product.name}</h2>
            <p className="product-shorttitle">{product.shortTitle}</p>

            <p className="product-price">${product.price}</p>

            <ul className="product-usp">
              {product.usps.map((usp, index) => (
                <li className="usp-item" key={index}>
                  <div className="usp-img">
                    <img src={usp.image} />
                  </div>
                  <div className="usp-dets">
                    <h6 className="usp-title">{usp.title}</h6>
                    <p className="usp-desc">{usp.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="seprator"></div>
            <div className="product-quantity-wrap">
              <label>Quantity:</label>
              <QuantitySelector />
            </div>

            <button className="add-to-cart">Add to Cart</button>

            <a
              href={product.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="view-full-details"
            >
              View Full Details
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProduct;
