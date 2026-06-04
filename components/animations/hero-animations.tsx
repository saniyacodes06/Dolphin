"use client";

import { useEffect } from "react";

export default function HeroAnimations() {
  useEffect(() => {
    let context: { revert?: () => void } | undefined;

    const init = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.gsap || gsapModule.default;

      context = gsap.context(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set(".hero-word", { opacity: 1, y: 0, filter: "blur(0px)" });
        gsap.set(".hero-subtitle", { opacity: 1, y: 0, filter: "blur(0px)" });
        gsap.set(".hero-actions", { opacity: 1, y: 0 });
        gsap.set(".hero-card", { opacity: 1, y: 0, x: 0 });
        gsap.set(".hero-bg", { scale: 1.15 });

        timeline
          .fromTo(
            ".hero-bg",
            { scale: 1.15 },
            { scale: 1, duration: 1.4 }
          )
          .fromTo(
            ".hero-word",
            { opacity: 0, y: 40, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.08 },
            "-=0.9"
          )
          .fromTo(
            ".hero-subtitle",
            { opacity: 0, y: 25, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
            "-=0.7"
          )
          .fromTo(
            ".hero-actions",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
            "-=0.6"
          )
          .fromTo(
            ".hero-card",
            { opacity: 0, y: 30, x: 30 },
            { opacity: 1, y: 0, x: 0, duration: 0.9 },
            "-=0.7"
          );
      });
    };

    init();

    return () => {
      context?.revert?.();
    };
  }, []);

  return null;
}
