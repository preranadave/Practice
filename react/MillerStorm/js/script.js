// Miller Storm - Main JavaScript File

// Wait for DOM and jQuery to be ready
$(document).ready(function () {
    'use strict';

    // Initialize all functions
    init();

    /**
     * Initialize all functions
     */
    function init() {
        // Add your initialization functions here
        initCarousel();
        // initNavigation();
        // initAnimations();
    }

    /**
     * Example: Initialize Slick Carousel
     */
    function initCarousel() {
        $('.whyChooseUsSlider').slick({
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 3,
            arrows: false,

            cssEase: 'linear',
            easing: 'linear',

            swipeToSlide: true,     // important
            touchThreshold: 500,
            responsive: [

                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                },

            ]


        });

        $('.customerSlider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false, // we use custom arrows
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: false,
            cssEase: 'linear',
            easing: 'linear',
            cssEase: 'cubic-bezier(.34,1.56,.64,1)',
            swipeToSlide: true,
            touchThreshold: 500,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                },{
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // Custom Buttons
        $('.custNext').on('click', function () {
            $('.customerSlider').slick('slickNext');
        });

        $('.custPrev').on('click', function () {
            $('.customerSlider').slick('slickPrev');
        });

    }

    /**
     * Example: Navigation functionality
     */
    function initNavigation() {
        // Add navigation logic here
    }

    /**
     * Example: Animation handlers
     */
    function initAnimations() {
        // Add animation logic here
    }
    $('.whyChooseUsSlider')
        .on('mousedown touchstart', function () {
            $(this).addClass('is-grabbing');
        })
        .on('mouseup touchend mouseleave', function () {
            $(this).removeClass('is-grabbing');
        });


    // Add your custom functions below
    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function () {
        const menuWrpr = document.querySelector('.menuWrpr');
        const bar1 = document.querySelector('.bar-1');
        const bar2 = document.querySelector('.bar-2');
        const bar3 = document.querySelector('.bar-3');
        menuWrpr.classList.toggle('active');
        bar1.classList.toggle('active');
        bar2.classList.toggle('active');
        bar3.classList.toggle('active');

    });


    // accordion

    const faqs = document.querySelectorAll(".faqWrpr");

    faqs.forEach(faq => {
        const question = faq.querySelector(".faqQues");
        const answer = faq.querySelector(".faqAns");

        faq.addEventListener("click", () => {

            // OPTIONAL: close others
            faqs.forEach(item => {
                if (item !== faq) {
                    item.classList.remove("active");
                    const ans = item.querySelector(".faqAns");
                    ans.style.height = "0px";
                }
            });

            faq.classList.toggle("active");

            if (faq.classList.contains("active")) {
                answer.style.height = answer.scrollHeight + "px";
                requestAnimationFrame(() => {
                    answer.style.height = answer.scrollHeight + "px";
                  });
            } else {
                answer.style.height = "0px";
            }
        });
    });


});