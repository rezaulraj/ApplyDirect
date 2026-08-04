import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animates an element (and optionally its direct children, staggered)
 * into view the first time it crosses the trigger point.
 *
 * type: "blur" | "clip" | "slide-right" | "slide-left" | "diagonal" |
 *       "split" | "floating" | "zoom" | "parallax" | "scale" | "fade" |
 *       "stagger" | "stagger-grid"
 */
export default function useReveal(type = "fade", options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (type === "clip" || type === "mask") {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1.1,
            ease: "power4.inOut",
            scrollTrigger: {
              trigger: el,
              start: "top 82%",
              toggleActions: "restart reverse restart reverse",
            },
          }
        );
      } else if (type === "stagger" || type === "stagger-grid") {
        gsap.set(el, { opacity: 1 });
        gsap.from(el.children, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            toggleActions: "restart reverse restart reverse",
          },
        });
      } else {
        const fromVars = {
          blur: { opacity: 0, filter: "blur(14px)", y: 30 },
          "slide-right": { opacity: 0, x: -80 },
          "slide-left": { opacity: 0, x: 80 },
          diagonal: { opacity: 0, x: -60, y: 60 },
          split: { opacity: 0, y: 40 },
          floating: { opacity: 0, y: -30 },
          zoom: { opacity: 0, scale: 0.85 },
          parallax: { opacity: 0, y: 60 },
          scale: { opacity: 0, scale: 0.9 },
          fade: { opacity: 0, y: 20 },
        }[type] || { opacity: 0, y: 30 };

        gsap.set(el, { opacity: 1 });
        gsap.from(el, {
          ...fromVars,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 84%",
            toggleActions: "restart reverse restart reverse",
          },
          ...options,
        });
      }
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return ref;
}
