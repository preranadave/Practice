import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/herobanner.css";
import "./styles/offering-section.css";
import "./styles/header.css";
import "./styles/shopcollections.css";
import "./styles/offer-slider.css";
import "./styles/bestsellers.css";
import "./styles/customer-review.css";
import "./styles/fearturedproduct.css";
import "./styles/about-us.css";
import "./styles/guarantee-section.css";
import "./styles/article-section.css";
import "./styles/footer.css";
import App from "./App.jsx";
import Lenis from "lenis";
import "./styles/about-us.css"

import "./index.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
