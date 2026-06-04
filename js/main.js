document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Update GSAP ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time)=>{
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0, 0);

    // 2. Hero Section Animations
    const heroTl = gsap.timeline();

    heroTl.to(".hero-title", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
    })
    .to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8")
    .to(".hero .btn", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8");

    // Parallax effect on hero dolphin
    document.addEventListener("mousemove", (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 20;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(".floating-dolphin", {
            x: xPos,
            y: yPos,
            rotationY: xPos * 0.5,
            rotationX: -yPos * 0.5,
            duration: 1,
            ease: "power1.out"
        });
    });

    // Generate Floating Bubbles
    const bubbleContainer = document.getElementById('bubble-container');
    if (bubbleContainer) {
        for (let i = 0; i < 15; i++) {
            let bubble = document.createElement('div');
            bubble.classList.add('bubble');
            
            let size = Math.random() * 20 + 5; // 5px to 25px
            let left = Math.random() * 100;
            let animDuration = Math.random() * 10 + 5;
            let animDelay = Math.random() * 5;

            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${left}%`;
            bubble.style.animationDuration = `${animDuration}s`;
            bubble.style.animationDelay = `${animDelay}s`;

            bubbleContainer.appendChild(bubble);
        }
    }

    // 3. ScrollTrigger Reveals
    gsap.registerPlugin(ScrollTrigger);

    function animateFrom(elem, direction) {
        direction = direction || 1;
        let x = 0,
            y = direction * 100;
        
        if (elem.classList.contains("gs_reveal_fromLeft")) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
            x = 100;
            y = 0;
        }
        
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
            duration: 1.25, 
            x: 0,
            y: 0, 
            autoAlpha: 1, 
            ease: "expo", 
            overwrite: "auto"
        });
    }

    function hide(elem) {
        gsap.set(elem, {autoAlpha: 0});
    }

    document.querySelectorAll(".gs_reveal").forEach(function(elem) {
        hide(elem);
        ScrollTrigger.create({
            trigger: elem,
            start: "top 85%",
            onEnter: function() { animateFrom(elem) }, 
            onEnterBack: function() { animateFrom(elem, -1) },
            onLeave: function() { hide(elem) } 
        });
    });

    // 4. Parallax About Image
    gsap.to(".about-image", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".about",
            start: "top bottom", 
            end: "bottom top",
            scrub: true
        } 
    });

    // 5. Counters in Conservation Section
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        ScrollTrigger.create({
            trigger: counter,
            start: "top 90%",
            once: true,
            onEnter: () => {
                const target = +counter.getAttribute('data-target');
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power1.inOut",
                    onUpdate: function() {
                        counter.innerHTML = Math.round(this.targets()[0].innerHTML);
                    }
                });
            }
        });
    });
});
