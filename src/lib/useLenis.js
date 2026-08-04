import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Buttery smooth scrolling wired directly into GSAP's ticker so
// ScrollTrigger stays perfectly in sync with Lenis's interpolated scroll.
export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    // Expose the instance so other components (e.g. the fullscreen menu)
    // can drive scroll through Lenis instead of calling the native
    // scrollIntoView, which fights Lenis's virtual scroll position and
    // causes the page to snap back instead of landing on the target.
    window.__lenis = lenis;

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Smooth anchor navigation
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -20 });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);
}
