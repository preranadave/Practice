import React, { useRef } from "react";
import Container from "../../layouts/Container";
import { products } from "../../data/products";
import gsap from "gsap";

import { productImages } from "../../data/productImages";
import { getFeaturedImage } from "../../utils/getFeaturedImage";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ShopCollections = () => {
  const collectionContainer = useRef();
  const anim = useRef(null);
  useGSAP(
    () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: collectionContainer.current,
            start: "top 80%",
            end: "center 40%",
            scrub: 0.15, // smooth scrub
          },
        })
        .from(".shop-by-collection__item", {
          x: -80,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });
    },
    { scope: collectionContainer }
  );

  return (
    <>
      <div className="shop-by-collection" ref={collectionContainer}>
        <Container className="container">
          <h2>Shop By Collection</h2>
          <div className="shop-by-collection__list">
            {products.map((item, index) => (
              <div className="shop-by-collection__item" key={index}>
                <div className="shop-by-collection__img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="shop-by-collection__content">
                  <h4>{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ShopCollections;
