import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useReveal from "../lib/useReveal";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discovery Call",
    desc: "We learn your business, culture and the exact profile you need to hire.",
  },
  {
    title: "Global Sourcing",
    desc: "Our network surfaces vetted candidates across every relevant market.",
  },
  {
    title: "Screening & Vetting",
    desc: "Rigorous interviews, reference checks and compliance verification.",
  },
  {
    title: "Mobilisation",
    desc: "Visas, relocation and onboarding handled end-to-end by our team.",
  },
  {
    title: "Ongoing Support",
    desc: "We stay engaged well past day one to ensure long-term success.",
  },
];

export default function Process() {
  const introRef = useReveal("split");
  const stepRefs = useRef([]);
  const fillRef = useRef(null);
  const sectionRef = useShrinkOnScroll();
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const triggers = stepRefs.current.map((el, i) =>
      ScrollTrigger.create({
        trigger: el,
        start: "top 55%",
        end: "bottom 55%",
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      })
    );
    return () => triggers.forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (active < 0) return;
    gsap.to(fillRef.current, {
      height: `${((active + 1) / steps.length) * 100}%`,
      duration: 0.6,
      ease: "power2.out",
    });
  }, [active]);

  return (
    <section className="section-pad" id="process" ref={sectionRef}>
      <div className="container section-inner" style={{ display: "grid", gridTemplateColumns: "0.7fr 1.3fr", gap: 60 }}>
        <div ref={introRef} className="reveal" style={{ alignSelf: "start", position: "sticky", top: 140 }}>
          <div className="eyebrow-tag">Our Process</div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
            A clear path, from brief to placement
          </h2>
          <p className="section-sub">
            Every engagement follows the same disciplined roadmap — refined over a decade of global
            placements.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <div className="process-line">
            <div className="process-line-fill" ref={fillRef} />
          </div>
          {steps.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => (stepRefs.current[i] = el)}
              className={`process-step ${active >= i ? "active" : ""}`}
            >
              <div className="process-dot">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
