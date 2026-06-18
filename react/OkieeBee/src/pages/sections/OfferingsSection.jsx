import React, { useRef } from "react";
import Container from "../../layouts/Container";
// import "../../styles/offering-section.css";
import { offerings } from "../../data/offerings";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const OfferingsSection = () => {
  const offeringsContainer = useRef();
  const anim = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ paused: true });

      tl.from(".offerings-section__heading > *", {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      }).from(
        ".dietary-box",
        {
          y: 60,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3"
      );

      ScrollTrigger.create({
        trigger: offeringsContainer.current,
        start: "center 90%",
        end: "top 50%",
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
        scrub: 0.7,
      });
    },
    { scope: offeringsContainer }
  );
  return (
    <>
      <div className="offerings-section" ref={offeringsContainer}>
        <Container className="container--1480">
          <div className="offerings-section__heading">
            <h2 className="font-oleo">Proudly Offering</h2>
            <p>
              Quality recipes created with different dietary and lifestyle needs
              in mind.
            </p>
          </div>
          <div className="offering-section__list">
            {offerings.map((item, index) => (
              <div className="dietary-box" key={index}>
                <div className="dietary-box__img">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="dietary-box__content">
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default OfferingsSection;
