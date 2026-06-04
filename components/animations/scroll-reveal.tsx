"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "scale-in" | "fade" | "slide-right" | "slide-left";
  delay?: number;
  duration?: number;
  stagger?: number;
};

export default function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 1,
  stagger = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let context: { revert?: () => void } | undefined;

    const init = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap || gsapModule.default;
      const ScrollTrigger =
        scrollTriggerModule.ScrollTrigger || scrollTriggerModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const target = ref.current;
      if (!target) return;

      context = gsap.context(() => {
        const items = stagger
          ? Array.from(target.children)
          : [target];

        const config: gsap.TweenVars = {
          opacity: 0,
          y: animation === "fade-up" ? 30 : 0,
          x:
            animation === "slide-right"
              ? -40
              : animation === "slide-left"
              ? 40
              : 0,
          scale: animation === "scale-in" ? 0.95 : 1,
          filter: "blur(8px)",
          duration,
          ease: "power3.out",
          delay,
          stagger,
          scrollTrigger: {
            trigger: target,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        };

        gsap.to(items, {
          ...config,
          filter: "blur(0px)",
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
        });
      });
    };

    init();

    return () => {
      context?.revert?.();
    };
  }, [animation, delay, duration, stagger]);

  return (
    <div
      ref={ref}
      className={cn("w-full", className)}
      data-animate={animation}
    >
      {children}
    </div>
  );
}
