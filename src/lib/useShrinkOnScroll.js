import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attach the returned ref to a full-viewport <section>. As the section
 * scrolls up past the top of the screen, its content smoothly shrinks
 * and fades — then grows back to full size just as smoothly if the
 * person scrolls back up. Driven by scrub, so it never needs manual
 * enter/exit logic to feel reversible.
 */
export default function useShrinkOnScroll(innerSelector = ":scope > .section-inner") {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const inner = section.querySelector(innerSelector) || section;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { scale: 1, opacity: 1 },
        {
          scale: 0.88,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return sectionRef;
}
