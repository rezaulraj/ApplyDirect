import { Globe2, Award, Zap, Clock, ShieldCheck, Users } from "lucide-react";
import useReveal from "../lib/useReveal";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";

export default function WhyChooseUs() {
  const introRef = useReveal("clip");
  const bentoRef = useReveal("stagger");
  const sectionRef = useShrinkOnScroll();

  return (
    <section className="full-section" id="why" style={{ background: "#fff" }} ref={sectionRef}>
      <div className="container section-inner">
        <div ref={introRef} className="reveal">
          <div className="eyebrow-tag">Why ApplyDirect</div>
          <h2 className="section-title">A trusted partner on both sides of the hire</h2>
          <p className="section-sub">
            Employers and professionals alike rely on ApplyDirect for precision, speed and integrity.
          </p>
        </div>

        <div ref={bentoRef} className="bento reveal">
          <div className="bento-card b1" style={{ background: "linear-gradient(135deg,var(--dark),#0d2140)", color: "#fff" }}>
            <div className="glow" />
            <div className="bento-icon">
              <Globe2 size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: "1.6rem", fontWeight: 600 }}>Global Infrastructure</h3>
              <p style={{ color: "rgba(255,255,255,0.6)", marginTop: 10, maxWidth: 340 }}>
                Offices and partner networks spanning 68 countries give us reach most agencies can't match.
              </p>
            </div>
          </div>

          <div className="bento-card b2">
            <div className="glow" />
            <div className="bento-icon">
              <Award size={20} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600 }}>Vetted, Verified Talent</h3>
          </div>

          <div className="bento-card b3">
            <div className="glow" />
            <div className="bento-icon">
              <Zap size={18} />
            </div>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600 }}>Fast Turnaround</h3>
          </div>

          <div className="bento-card b4">
            <div className="glow" />
            <div className="bento-icon">
              <Clock size={18} />
            </div>
            <h3 style={{ fontSize: "1.05rem", fontWeight: 600 }}>24/7 Support</h3>
          </div>

          <div className="bento-card b5">
            <div className="glow" />
            <div className="bento-icon">
              <ShieldCheck size={20} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600 }}>Compliance-First Process</h3>
          </div>

          <div className="bento-card b6" style={{ background: "linear-gradient(135deg,var(--primary),var(--secondary))", color: "#fff" }}>
            <div className="glow" />
            <div className="bento-icon" style={{ background: "rgba(255,255,255,0.2)" }}>
              <Users size={20} />
            </div>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 600 }}>Dedicated Account Teams</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
