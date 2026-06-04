"use client";

import { useEffect } from "react";

type ParallaxProps = {
  selector: string;
  strength?: number;
};

export default function Parallax({ selector, strength = 60 }: ParallaxProps) {
  useEffect(() => {
    let context: { revert?: () => void } | undefined;

    const init = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const targets = document.querySelectorAll(selector);
      if (!targets.length) return;

      const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
      const adjustedStrength = isSmallScreen ? strength * 0.4 : strength;

      context = gsap.context(() => {
        targets.forEach((target) => {
          gsap.to(target, {
            y: adjustedStrength,
            ease: "none",
            scrollTrigger: {
              trigger: target,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      });
    };

    init();

    return () => {
      context?.revert?.();
    };
  }, [selector, strength]);

  return null;
}
