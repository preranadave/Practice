document.addEventListener("DOMContentLoaded", (event) => {

  const scrollContainer = document.querySelector("[data-scroll-container]");

  const locoScroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
  });
  locoScroll.on("call", (func, dir, obj) => {
    if (func === "fadeIn") {
      obj.el.classList.add("is-inview");
    }
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(scrollContainer, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: scrollContainer.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();

  const buttons = document.querySelectorAll(".primary-button");

  buttons.forEach((btn) => {
    const liquid = btn.querySelector(".liquid-bg");
    let tl;

    btn.addEventListener("mouseenter", (e) => {
      if (tl) tl.kill();

      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      tl = gsap.timeline();

      // 1. Instantly move to mouse entry point
      gsap.set(liquid, {
        x: x,
        y: y,
        scale: 0,
        borderRadius: "50%",
      });

      // 2. The "Wobbly" expansion
      tl.to(liquid, {
        scale: 12, // Scale up enough to cover the button
        duration: 1.2,
        // Custom Bezier feel: fast start, slight bounce
        ease: "back.out(1.7)",
        x: r.width / 2, // Move toward center
        y: r.height / 2,
      }).to(
        liquid,
        {
          // Morph the shape while it sits there
          borderRadius: "40% 60% 70% 30% / 40% 40% 60% 60%",
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        },
        "-=0.2"
      );
    });

    btn.addEventListener("mouseleave", (e) => {
      if (tl) tl.kill();

      const r = btn.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;

      tl = gsap.timeline();

      tl.to(liquid, {
        x: x,
        y: y,
        scale: 0,
        duration: 0.5,
        ease: "sine.inOut",
      });
    });
  });

  // menu toggle js
  const menuToggle = document.getElementById("menuToggle");
  const navList = document.getElementById("navLink");
  const navItems = document.querySelectorAll(".nav-item");
  const menuBgCircle = document.querySelector(".menu-bg-circle");
  // 1. Create the GSAP Timeline
  const menuTimeline = gsap.timeline({ paused: true, reversed: true });

  menuTimeline
    .to(navList, {
      x: 0,
      duration: 0.6,
      ease: "expo.inOut",
    })
    .to(
      navItems,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.4"
    );

  // 2. Toggle Function
  menuToggle.addEventListener("click", () => {
    const isOpening = menuTimeline.reversed();

    if (isOpening) {
      // --- OPENING ---
      navList.classList.add("active");

      // Play at normal speed
      menuTimeline.timeScale(1).play();

      gsap.to(menuBgCircle, {
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      });

      // Animate Hamburger to X
      gsap.to(".bar-1", {
        rotation: 45,
        y: 3,
        transformOrigin: "center",
        duration: 0.3,
      });
      gsap.to(".bar-2", { opacity: 0, duration: 0.2 });
      gsap.to(".bar-3", {
        rotation: -45,
        y: -3,
        transformOrigin: "center",
        duration: 0.3,
      });
    } else {
      // --- CLOSING ---

      // 1. Animate items out quickly
      gsap.to(navItems, {
        opacity: 0,
        y: 30,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      });

      // 2. Slide menu out faster
      gsap.to(navList, {
        x: "-100%",
        duration: 0.4,
        ease: "power2.inOut",
        delay: 0.5, // Wait for items to start fading
        onComplete: () => {
          navList.classList.remove("active");
          // IMPORTANT: Reset the timeline to its start state (reversed)
          // so 'isOpening' becomes true again for the next click
          menuTimeline.progress(0).pause().reversed(true);
        },
      });

      // 3. Circle and Icon back to normal
      gsap.to(menuBgCircle, { scale: 0, duration: 0.4, ease: "power2.in" });
      gsap.to([".bar-1", ".bar-3"], { rotation: 0, y: 0, duration: 0.3 });
      gsap.to(".bar-2", { opacity: 1, duration: 0.3 });
    }
  });

  //   hero section animation
  const heroSectionImgs = document.querySelectorAll(
    ".hero-section .img-wrapper.float img"
  );
  const heroSectionmoveImgs = document.querySelectorAll(
    ".hero-section .img-wrapper.float.move img"
  );

  heroSectionImgs.forEach((img, index) => {
    // Create a unique floating animation for each image
    gsap.to(img, {
      y: "-=20", // Move up by 20px
      rotation: index % 2 === 0 ? 10 : -10, // Slight tilt (left or right)
      duration: 2 + Math.random() * 2, // Random duration between 2-4 seconds
      ease: "sine.inOut", // Smooth, organic easing
      repeat: -1, // Infinite loop
      yoyo: true, // Go back to start position
      delay: Math.random() * 1, // Random start delay so they aren't in sync
    });

    // Optional: Add a subtle side-to-side sway
    gsap.to(img, {
      x: "+=20",
      duration: 3 + Math.random() * 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: Math.random() * 1,
    });
  });

  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
    const xPos = clientX / window.innerWidth - 0.5;
    const yPos = clientY / window.innerHeight - 0.5;

    heroSectionmoveImgs.forEach((img, index) => {
      const factor = (index + 1) * 15;
      gsap.to(img, {
        x: xPos * factor,
        y: yPos * factor,
        duration: 1,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  });

  gsap.registerPlugin(ScrollTrigger, Observer);

  let rotation = 0;
  let smoothDir = 0; // smoothed scroll direction
  let tween;

  ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "bottom bottom",

    onUpdate: (self) => {
      smoothDir = gsap.utils.interpolate(smoothDir, self.direction, 0.9);

      rotation += smoothDir * 2;

      if (tween) tween.kill();

      const kick = smoothDir * -8;
      const badgeImg = document.querySelector(".badge-img");
      if (badgeImg) {
        const tween = gsap.timeline({ overwrite: "auto" })
          .to(badgeImg, {
            rotate: rotation + kick,
            duration: 0.8,
            ease: "power2.out",
          })
          .to(badgeImg, {
            rotate: rotation,
            duration: 0.9,
            ease: "elastic.out(1, 0.45)",
          });
      }
      // tween = gsap.timeline({ overwrite: "auto" })
      //   .to(".badge-img", {
      //     rotate: rotation + kick,
      //     duration: 0.8,
      //     ease: "power2.out",
      //   })
      //   .to(".badge-img", {
      //     rotate: rotation,
      //     duration: 0.9,
      //     ease: "elastic.out(1, 0.45)",
      //   });
    },
  });

  // vet card scroll
  gsap.registerPlugin(ScrollTrigger, Observer);

  let index = -1;
  let isAnimating = false;
  let isActive = false;

  const cards = gsap.utils.toArray(".vet-card");
  if (cards.length > 0) {
    gsap.set(cards, {
      y: -80,
      opacity: 0,
      scale: 0.95,
    });

    function showCard(i) {
      isAnimating = true;
      gsap.to(cards[i], {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        onComplete: () => (isAnimating = false),
      });
    }

    function hideCard(i) {
      isAnimating = true;
      gsap.to(cards[i], {
        y: -80,
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => (isAnimating = false),
      });
    }
  }
  /* ---------------- OBSERVER ---------------- */

  const observer = Observer.create({
    target: scrollContainer,
    type: "wheel,touch",
    tolerance: 10,

    onDown: () => {
      if (!isActive || isAnimating) return;

      if (index < cards.length - 1) {
        index++;
        showCard(index);
      } else {
        locoScroll.start(); // RELEASE SCROLL
        observer.disable();
        isActive = false;
      }
    },

    onUp: () => {
      if (!isActive || isAnimating) return;

      if (index >= 0) {
        hideCard(index);
        index--;
      } else {
        locoScroll.start();
        observer.disable();
        isActive = false;
      }
    },
  });

  observer.disable();

  /* ---------------- SCROLL GATE ---------------- */
  const vetcardList = document.querySelector(".vet-card-list");
  if (vetcardList) {
    ScrollTrigger.create({
      trigger: ".vet-card-list",
      scroller: scrollContainer,
      start: "top center",
      end: "bottom center",

      onEnter: () => {
        index = -1;
        isActive = true;
        locoScroll.stop();   // 🔥 FREEZE PAGE SCROLL
        observer.enable();
      },

      onEnterBack: () => {
        isActive = true;
        locoScroll.stop();
        observer.enable();
      },

      onLeave: () => {
        observer.disable();
        locoScroll.start();
        isActive = false;
      },

      onLeaveBack: () => {
        observer.disable();
        locoScroll.start();
        isActive = false;
      },
    });
  }


  // product sliders

  $('.product-slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hiding default arrows to use custom ones
    fade: true,    // Smooth transition
    asNavFor: '.product-slider-nav',
    infinite: true
  });

  // Initialize Thumbnail Slider
  $('.product-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slider-main',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,
    infinite: true,
    centerPadding: '0px',
    responsive: [

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      },

    ]

  });

  // Custom Button Functionality
  // $('.prev-btn').click(function() {
  //     $('.product-slider-main').slick('slickPrev');
  // });

  // $('.next-btn').click(function() {
  //     $('.product-slider-main').slick('slickNext');
  // });
  const dropdown = document.querySelector(".form-input.dropdown");
  const trigger = dropdown.querySelector(".dropdown-trigger");
  const label = dropdown.querySelector(".dropdown-label");
  const items = dropdown.querySelectorAll(".dropdown-item");

  // Toggle
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("is-active");
  });

  // Select
  items.forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      label.innerHTML = `${item.textContent} <i class="bx bx-chevron-down"></i>`;
      dropdown.classList.remove("is-active");
    });
  });

  // Outside click
  window.addEventListener("click", () => {
    dropdown.classList.remove("is-active");
  });



});
