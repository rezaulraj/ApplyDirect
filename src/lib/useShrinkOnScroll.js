import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attach the returned ref to a full-viewport <section>. As the section
 * scrolls into view its content grows in to full size, holds there while
 * it's fully visible, then smoothly shrinks and fades as it scrolls back
 * out past the top — and reverses cleanly if the person scrolls back up.
 * Driven by scrub across the section's entire time in the viewport, so
 * the effect is visible throughout scrolling, not just at the boundary.
 */
export default function useShrinkOnScroll(innerSelector = ":scope > .section-inner") {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const inner = section.querySelector(innerSelector) || section;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.4,
        },
      });

      tl.fromTo(
        inner,
        { scale: 0.9, opacity: 0.5 },
        { scale: 1, opacity: 1, ease: "none", duration: 0.35 }
      )
        .to(inner, { scale: 1, opacity: 1, ease: "none", duration: 0.3 })
        .to(inner, { scale: 0.88, opacity: 0.35, ease: "none", duration: 0.35 });
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return sectionRef;
}
