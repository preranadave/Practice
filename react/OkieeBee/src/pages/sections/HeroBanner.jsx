import React from "react";
import Container from "../../layouts/Container";
// import "../../styles/herobanner.css";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useLayoutEffect } from "react";
import { useGSAP } from "@gsap/react";

const HeroBanner = () => {
  // without timeline
  // const content = useRef(null);
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       content.current,
  //       {
  //         x: -180,
  //         opacity: 0,
  //       },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 1.2,
  //         ease: "power3.out",
  //       }
  //     );
  //   }, content);

  //   return () => ctx.revert();
  // }, []);

  // with timeline
  const bannerRef = useRef(null);
  const wrapperRef = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.current
        .fromTo(
          ".hero-banner__content",
          {
            x: -180,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
          }
        )
        .fromTo(
          ".primary-btn",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5"
        );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);
  useGSAP(() => {
    // Target the two specific elements we have asigned the animate class
    gsap.to(
      bannerRef.current,
      {
        "--after-translate": 1,
        repeat: -1,
        repeatDelay: 0,
        duration: 3,
        ease: "sine.inOut",
        yoyo: true,
      },
      bannerRef
    );
  }, []); // <-- scope for selector text (optional)

  return (
    <section className="hero-banner-wrapper" ref={wrapperRef}>
      <Container className="container-fluid">
        <div className="hero-banner" ref={bannerRef}>
          <div className="hero-banner__wrap">
            <div className="hero-banner__content">
              <h6>Educate On Health </h6>
              <h2 className="font-oleo">From a Young Age</h2>
              <p>
                Raise your family with health as a priority and model healthy
                living in your day to day routines.
              </p>
              <PrimaryButton>Shop Now</PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroBanner;
