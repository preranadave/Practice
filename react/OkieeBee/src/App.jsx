import { useEffect, useState } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/home/HomePage";
import Lenis from "@studio-freight/lenis";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update(); // sync GSAP
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // optional debug (remove later)
    lenis.on("scroll", () => {
      // console.log("Lenis running");
    });

    ScrollTrigger.addEventListener("refresh", () => lenis.resize());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}

export default App;
