$(document).ready(function () {

    const menuToggle = document.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', function () {
        const menuWrpr = document.querySelector('nav');
        const bar1 = document.querySelector('.bar-1');
        const bar2 = document.querySelector('.bar-2');
        const bar3 = document.querySelector('.bar-3');
        menuWrpr.classList.toggle('active');
        bar1.classList.toggle('active');
        bar2.classList.toggle('active');
        bar3.classList.toggle('active');

    });


    // slider
    $('.serviceSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Custom Buttons
    $('.custNext').on('click', function () {
        $('.serviceSlider').slick('slickNext');
    });

    $('.custPrev').on('click', function () {
        $('.serviceSlider').slick('slickPrev');
    });

    $('.reviewSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Custom Buttons
    $('.revNext').on('click', function () {
        $('.reviewSlider').slick('slickNext');
    });

    $('.revPrev').on('click', function () {
        $('.reviewSlider').slick('slickPrev');
    });

    // tabs

    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function closeAll() {
        buttons.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => {
            content.classList.remove("active");
            content.style.maxHeight = null;
        });
    }

    function openAccordion(button) {
        const target = document.getElementById(button.dataset.tab);

        closeAll();

        button.classList.add("active");
        target.classList.add("active");

        // Move content directly under button
        button.insertAdjacentElement("afterend", target);

        // Smooth height animation
        target.style.maxHeight = target.scrollHeight + "px";
    }

    function setupInitialState() {

        if (isMobile()) {

            const activeBtn = document.querySelector(".tab-btn.active");
            if (activeBtn) {
                openAccordion(activeBtn);
            }

        } else {

            // Reset layout for desktop
            closeAll();

            const firstBtn = buttons[0];
            const firstContent = document.getElementById(firstBtn.dataset.tab);

            firstBtn.classList.add("active");
            firstContent.classList.add("active");
            firstContent.style.maxHeight = null;

            document.querySelector(".location-tabs").appendChild(firstContent);
        }
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {

            if (isMobile()) {
                openAccordion(this);
            } else {

                closeAll();

                this.classList.add("active");
                const target = document.getElementById(this.dataset.tab);
                target.classList.add("active");

                document.querySelector(".location-tabs").appendChild(target);
            }
        });
    });

    window.addEventListener("resize", function () {
        setupInitialState();
    });

    setupInitialState(); // Run on load

});