var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        575.98: {
            slidesPerView: 2,
        },
        767.98: {
            slidesPerView: 2.3,
        },
        991.98: {
            slidesPerView: 3,
        },
    },
});

var swiper2 = new Swiper(".testimonials-carousel", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".testimonias-bullts",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

var swiper3 = new Swiper(".blog-carousel", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".blog-bullets",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        575.98: {
            slidesPerView: 2.3,
        },
        767.98: {
            slidesPerView: 3,
        }
    },
});

var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".cls-btn");
var overlay = document.querySelector(".overlay");

var tl = gsap.timeline();

tl.to(".mobile-menu", {
    right: 0,
    duration: 0.57,
});

tl.from(".mobile-menu ul li", {
    x: 150,
    opacity: 0,
    stagger: 0.28,
    duration: 0.77,
});

tl.from(".cls-btn", {
    opacity: 0,
});

tl.pause();

menuBtn.addEventListener("click", function () {
    tl.play();
    overlay.style.opacity = 1;
    overlay.style.pointerEvents = "auto";
});

closeBtn.addEventListener("click", function () {
    tl.reverse();
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
});

overlay.addEventListener("click", function () {
    tl.reverse();
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";
});

// jQuery dropdown code

jQuery(document).ready(function () {

    $(".footer-menu").eq(0).find(".drop-down-list").show();
    $(".footer-menu").eq(0).find(".drop-down-icon").addClass("rotate");

    $(".drop-down").click(function () {
        $(this).find(".drop-down-icon").toggleClass("rotate");
        $(this).parent(".footer-menu").children(".drop-down-list").slideToggle("slow");
        $(this).parent().siblings(".footer-menu").each(function () {
            $(this).children(".drop-down-list").slideUp("slow");
            $(this).find(".drop-down-icon").removeClass("rotate");
        });
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $("header").css({
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e0e0e0",
            });
        } else {
            $("header").css({
                boxShadow: "none",
                border: "none",
            });
        }
    });
});

// gsap animations

var tl2 = gsap.timeline();
var tl3 = gsap.timeline();
var tl4 = gsap.timeline();
var tl5 = gsap.timeline();
let mm = gsap.matchMedia();

mm.add("(min-width: 991.98px)", () => {
    
    tl3.from(".img-area img", {
        x: -250,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
    });

    tl3.from(".card", {
        x: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
    });

    gsap.from(".text-area h1", {
        y: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
    });

    gsap.from(".top p", {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".button-area a.btn-2", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".button-area a.btn-3", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".engagement p", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".students", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".courses", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".awesome-platform-wrapper .image-content .img-1, .awesome-platform-wrapper .image-content .img-2", {
        x: -250,
        opacity: 0,
        duration: 1.2,
        stagger: 0.38,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".awesome-platform-wrapper",
            scroller: "body",
            start: "top 65%",
        },
    });

    gsap.from(".awesome-platform-wrapper .text-content", {
        x: 250,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".awesome-platform-wrapper",
            scroller: "body",
            start: "top 65%",
        },
    });

    gsap.from(".goals-wrapper .goals-text", {
        x: -250,
        opacity: 0,
        duration: 1.2,
        stagger: 0.38,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".goals-wrapper",
            scroller: "body",
            start: "top 65%",
        },
    });

    gsap.from(".goals-wrapper .goals-img", {
        x: 250,
        opacity: 0,
        duration: 1.2,
        stagger: 0.38,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".goals-wrapper",
            scroller: "body",
            start: "top 65%",
        },
    });
});

mm.add("(min-width: 767.98px)", () => {
    tl2.from("header .logo", {
        x: -100,
        opacity: 0,
        duration: 0.78,
        ease: "power2.out",
    });

    tl2.from(".menus a.btn", {
        x: 100,
        opacity: 0,
        duration: 0.78,
        ease: "power2.out",
    });

    tl2.from(".menus ul li", {
        x: -100,
        opacity: 0,
        duration: 0.78,
        stagger: 0.28,
        ease: "power2.out",
    });
});

mm.add("(max-width: 991.98px)", () => {
    tl3.from(".img-area img", {
        y: -250,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
    });

    tl3.from(".card", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
    });

    SplitText.create(".top h1, .top p", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
            duration: 1.5,
            yPercent: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".top h1",
                scroller: "body",
                start: "top 70%",
            },
            });
        }
    });

    gsap.from(".hero-wrapper .button-area", {
        y: 100,
        opacity: 0,
        duration: .78,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".hero-wrapper .button-area",
            scroller: "body",
            start: "top 60%",
        },
    });

    gsap.from(".engagement", {
        y: 100,
        opacity: 0,
        duration: .78,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".engagement",
            scroller: "body",
            start: "top 60%",
        },
    });

    gsap.from(".awesome-platform-wrapper .image-content .img-1", {
        y: 150,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".awesome-platform-wrapper .image-content",
            scroller: "body",
            start: "top 70%",
        },
    });

    gsap.from(".awesome-platform-wrapper .image-content .img-2", {
        y: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".awesome-platform-wrapper .image-content",
            scroller: "body",
            start: "top 70%",
        },
    });

    SplitText.create(".awesome-platform-wrapper .text-content h3, .awesome-platform-wrapper .text-content p", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
            duration: 1.5,
            yPercent: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".awesome-platform-wrapper .text-content",
                scroller: "body",
                start: "top 70%",
            },
            });
        }
    });

    gsap.from(".goals-wrapper .goals-img", {
        y: -150,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".goals-wrapper .goals-img",
            scroller: "body",
            start: "top 70%",
        },
    });

    SplitText.create(".goals-wrapper .goals-text h3, .goals-wrapper .goals-text p", {
    type: "words,lines",
    linesClass: "line",
    autoSplit: true,
    mask: "lines",
        onSplit: (self) => {
            split = gsap.from(self.lines, {
            duration: 1.5,
            yPercent: 100,
            opacity: 0,
            stagger: 0.2,
            ease: "expo.out",
            scrollTrigger: {
                trigger: ".goals-wrapper .goals-text",
                scroller: "body",
                start: "top 70%",
            },
            });
        }
    });

});

gsap.from(".courses-title h3, .courses-title p", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".courses-title",
        scroller: "body",
        start: "top 70%",
    },
});

gsap.from(".blog-title h3, .blog-title p", {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".blog-title",
        scroller: "body",
        start: "top 70%",
    },
});