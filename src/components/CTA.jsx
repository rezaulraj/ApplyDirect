import { ArrowRight } from "lucide-react";
import useReveal from "../lib/useReveal";
import useMagnetic from "../lib/useMagnetic";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";

export default function CTA() {
  const ref = useReveal("scale");
  const btnRef = useMagnetic();
  const sectionRef = useShrinkOnScroll();

  return (
    <section className="full-section" ref={sectionRef}>
      <div className="container section-inner">
        <div ref={ref} className="cta reveal">
          <div className="cta-blob" style={{ width: 400, height: 400, background: "var(--primary)", top: "-20%", left: "-10%" }} />
          <div className="cta-blob" style={{ width: 300, height: 300, background: "var(--accent)", bottom: "-20%", right: "-5%" }} />
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 600, maxWidth: 640, margin: "0 auto" }}>
              Ready to build your global team?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 18, maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
              Talk to ApplyDirect today and discover how fast world-class talent can move.
            </p>
            <a
              href="#contact"
              ref={btnRef}
              className="btn-primary"
              style={{ background: "#fff", color: "var(--dark)", marginTop: 34, display: "inline-flex" }}
            >
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
