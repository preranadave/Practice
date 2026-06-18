import React from "react";
import HeroBanner from "../sections/HeroBanner";
import OfferingsSection from "../sections/OfferingsSection";

import ShopCollections from "../sections/ShopCollections";
import OfferSlider from "../sections/OfferSlider";
import BestSellers from "../sections/BestSellers";
import CustomerReviewSection from "../sections/CustomerReviewSection";
import FearturedProduct from "../sections/FearturedProduct";
import GuaranteeSection from "../sections/GuaranteeSection";

import AboutUs from "../sections/AboutUs";
import { products } from "../../data/products";
import ArticlesSection from "../sections/ArticlesSection";
import { useGSAP } from "@gsap/react";

const HomePage = () => {

  const featuredProduct = products.find((product) => product.isFeatured);
  return (
    <>
      <HeroBanner />
      <OfferingsSection />
      <ShopCollections />
      <OfferSlider />
      <BestSellers />
      <CustomerReviewSection />
      <FearturedProduct product={featuredProduct} />
      <AboutUs></AboutUs>
      <GuaranteeSection />
      <ArticlesSection />
    </>
  );
};

export default HomePage;
