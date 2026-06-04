"use client";

import { useEffect, useRef, useState } from "react";

type CounterProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function Counter({
  value,
  suffix = "",
  duration = 1.2,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

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
        const counter = { val: 0 };
        gsap.to(counter, {
          val: value,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: target,
            start: "top 80%",
          },
          onUpdate: () => {
            setDisplay(Math.round(counter.val));
          },
        });
      });
    };

    init();

    return () => {
      context?.revert?.();
    };
  }, [duration, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
