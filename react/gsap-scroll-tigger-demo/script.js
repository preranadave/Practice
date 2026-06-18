gsap.registerPlugin(ScrollTrigger, Observer);

// Initialize Lenis (Keep it for general smoothness)

const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);

  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const slides = gsap.utils.toArray(".img-text-scrl-wrap");

let currentIndex = -1; // -1 represents the Hero Section

let isAnimating = false;

// 1. Initial State: Set all slides to the right

gsap.set(slides, { x: "100vw", autoAlpha: 0 });

function goToSection(index) {
  if (isAnimating) return;

  // Boundary checks

  if (index < -1 || index >= slides.length) return;

  isAnimating = true;

  let tl = gsap.timeline({
    onComplete: () => {
      isAnimating = false;
    },
  });

  // LEAVING CURRENT

  if (currentIndex === -1) {
    // Hero moving UP

    tl.to(".hero-section", {
      y: "-100vh",
      autoAlpha: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  } else if (index > currentIndex) {
    // Previous slide moving LEFT

    tl.to(slides[currentIndex], {
      x: "-100vw",
      autoAlpha: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  } else if (index < currentIndex) {
    // Current slide moving back RIGHT (on scroll up)

    tl.to(slides[currentIndex], {
      x: "100vw",
      autoAlpha: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }

  // ENTERING NEW

  if (index === -1) {
    // Bringing Hero BACK down

    tl.to(
      ".hero-section",
      { y: "0%", autoAlpha: 1, duration: 1, ease: "power2.out" },
      "<"
    );
  } else {
    // Bringing Slide in from RIGHT or LEFT

    let startX = index > currentIndex ? "100vw" : "-100vw";

    tl.fromTo(
      slides[index],

      { x: startX, autoAlpha: 0 },

      { x: "0%", autoAlpha: 1, duration: 1, ease: "power2.out" },

      "<"
    );
  }

  currentIndex = index;
}

// 2. Observer: Listens for single "scroll" events

Observer.create({
  target: window,

  type: "wheel,touch,pointer",

  wheelSpeed: -1,

  onDown: () => !isAnimating && goToSection(currentIndex - 1),

  onUp: () => !isAnimating && goToSection(currentIndex + 1),

  tolerance: 20,

  preventDefault: true,
});

// Pin the wrapper so the background stays black

ScrollTrigger.create({
  trigger: ".scrl-wrapper",

  pin: true,

  start: "top top",

  end: "+=100%", // This just keeps it pinned while Observer works
});
