import { ArrowRight } from "lucide-react";
import useReveal from "../lib/useReveal";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";

const services = [
  {
    num: "01 — Executive Search",
    title: "Leadership placements across every market",
    desc: "We identify, vet and secure senior leaders who understand both local nuance and global ambition.",
    img: "1758520144437-f068ecaf0d83",
    alt: "A recruiter interviewing a candidate at an office desk",
    reveal: "slide-right",
  },
  {
    num: "02 — Workforce Mobilisation",
    title: "End-to-end relocation, visas and onboarding",
    desc: "Our teams manage documentation, compliance and logistics so your new hires arrive ready to perform.",
    img: "1720842223498-7b933206062c",
    alt: "Rows of empty airplane seats before a late-night departure",
    reveal: "slide-left",
    reverse: true,
  },
  {
    num: "03 — Talent Pipelines",
    title: "Continuous pipelines for high-volume hiring",
    desc: "We build long-term talent pools across healthcare, construction and manufacturing sectors.",
    img: "1638262052640-82e94d64664a",
    alt: "Two people shaking hands over a wooden table",
    reveal: "slide-right",
  },
];

function ServiceRow({ service }) {
  const ref = useReveal(service.reveal);
  return (
    <div ref={ref} className={`service-row reveal ${service.reverse ? "reverse" : ""}`}>
      <div className="service-img">
        <img
          src={`https://images.unsplash.com/photo-${service.img}?q=80&w=1000&auto=format&fit=crop`}
          alt={service.alt}
        />
      </div>
      <div>
        <span className="service-num">{service.num}</span>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.desc}</p>
        <a href="#contact" className="service-link">
          Learn more <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const introRef = useReveal("blur");
  const sectionRef = useShrinkOnScroll();

  return (
    <section className="full-section" id="services" ref={sectionRef}>
      <div className="container section-inner">
        <div ref={introRef} className="reveal">
          <div className="eyebrow-tag">What We Do</div>
          <h2 className="section-title">Recruitment services built for a borderless workforce</h2>
          <p className="section-sub">
            From executive search to full workforce mobilisation, ApplyDirect manages every stage of the
            international hiring journey.
          </p>
        </div>

        {services.map((s) => (
          <ServiceRow key={s.num} service={s} />
        ))}
      </div>
    </section>
  );
}
