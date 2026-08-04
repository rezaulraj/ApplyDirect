import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import CountUp from "react-countup";
import { ArrowRight } from "lucide-react";
import useMagnetic from "../lib/useMagnetic";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headingRef = useRef(null);
  const visualRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const heroRef = useRef(null);

  const getStartedRef = useMagnetic();
  const exploreRef = useMagnetic();

  // Entrance timeline: split headline, fade lede/CTAs, scale in the collage
  useEffect(() => {
    const ctx = gsap.context(() => {
      let split;
      try {
        split = new SplitType(headingRef.current, { types: "chars,words" });
        gsap.from(split.chars, {
          yPercent: 120,
          opacity: 0,
          duration: 1,
          stagger: 0.012,
          ease: "power4.out",
          delay: 0.2,
        });
      } catch {
        gsap.from(headingRef.current, { opacity: 0, y: 30, duration: 1 });
      }

      gsap.from(".hero-eyebrow", { opacity: 0, y: 10, duration: 0.8, delay: 0.1 });
      gsap.from(".hero-lede, .hero-cta", {
        opacity: 0,
        y: 20,
        duration: 0.9,
        delay: 0.6,
        stagger: 0.15,
      });
      gsap.from(visualRef.current, {
        opacity: 0,
        scale: 0.92,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      // Shrink the whole hero smoothly away as the next screen scrolls up over it.
      gsap.fromTo(
        ".hero-grid",
        { scale: 1, opacity: 1 },
        {
          scale: 0.9,
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.4,
          },
        }
      );

      return () => split && split.revert();
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax across the image collage
  useEffect(() => {
    const el = heroRef.current;
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      gsap.to(img1Ref.current, { x: x * 0.6, y: y * 0.6, duration: 0.8, ease: "power2.out" });
      gsap.to(img2Ref.current, { x: -x * 0.8, y: -y * 0.8, duration: 0.8, ease: "power2.out" });
      gsap.to([card1Ref.current, card2Ref.current], {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.8,
        ease: "power2.out",
      });
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="hero" id="hero" ref={heroRef}>
      <div className="container hero-grid">
        <div>
          <div className="eyebrow hero-eyebrow">Global Recruitment Agency</div>
          <h1 ref={headingRef}>Connecting Global Talent with Exceptional Opportunities</h1>
          <p className="lede hero-lede">
            ApplyDirect places exceptional professionals inside the world's most ambitious companies —
            across construction, healthcare, manufacturing and beyond.
          </p>
          <div className="hero-cta">
            <a href="#contact" ref={getStartedRef} className="btn-primary">
              Get Started <ArrowRight size={16} />
            </a>
            <a href="#jobs" ref={exploreRef} className="btn-secondary">
              Explore Jobs <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-visual" ref={visualRef}>
          <div className="hero-img hero-img-1" ref={img1Ref}>
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1000&auto=format&fit=crop"
              className="duo"
              alt="Team collaborating around a table during a briefing"
            />
          </div>
          <div className="hero-img hero-img-2" ref={img2Ref}>
            <img
              src="https://images.unsplash.com/photo-1758599543152-a73184816eba?q=80&w=800&auto=format&fit=crop"
              className="duo"
              alt="Two business partners shaking hands outside a modern building"
            />
          </div>

          <div className="float-card glass" style={{ top: "8%", left: "-6%" }} ref={card1Ref}>
            <div style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "'Bricolage Grotesque'" }} className="grad-text">
              <CountUp end={5} duration={2} enableScrollSpy scrollSpyOnce />K+
            </div>
            <div style={{ fontSize: "0.72rem", color: "#64748b" }}>Placements Made</div>
          </div>

          <div className="float-card glass" style={{ bottom: "6%", right: "-4%" }} ref={card2Ref}>
            <div style={{ fontSize: "1.6rem", fontWeight: 700, fontFamily: "'Bricolage Grotesque'" }} className="grad-text">
              <CountUp end={30} duration={2} enableScrollSpy scrollSpyOnce />+
            </div>
            <div style={{ fontSize: "0.72rem", color: "#64748b" }}>Countries Served</div>
          </div>

        </div>
      </div>
    </section>
  );
}
