import CountUp from "react-countup";
import useReveal from "../lib/useReveal";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";

const stats = [
  { end: 15, suffix: "+", label: "Years of Experience" },
  { end: 42, suffix: "K", label: "Successful Placements" },
  { end: 68, suffix: "", label: "Countries Served" },
  { end: 98, suffix: "%", label: "Client Retention" },
];

export default function SuccessNumbers() {
  const ref = useReveal("zoom");
  const sectionRef = useShrinkOnScroll();

  return (
    <section className="full-section" style={{ background: "var(--dark)", color: "#fff" }} ref={sectionRef}>
      <div ref={ref} className="container section-inner reveal stats-grid">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="stat-num grad-text">
              <CountUp end={s.end} duration={2} enableScrollSpy scrollSpyOnce />
              {s.suffix}
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", marginTop: 8 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
