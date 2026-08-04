import useReveal from "../lib/useReveal";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";

const industries = [
  { name: "Construction", img: "1777919393730-463e2c0b7f4c", alt: "Construction site with workers building a concrete structure" },
  { name: "Healthcare", img: "1635585558406-23471c000853", alt: "Hospital corridor with medical staff" },
  { name: "Manufacturing", img: "1760818072388-4604d5cb39ac", alt: "Spools of thread on a machine in a textile factory" },
  { name: "Agriculture", img: "1605000797499-95a51c5269ae", alt: "Farm worker harvesting produce in the field" },
];

export default function Industries() {
  const introRef = useReveal("diagonal");
  const gridRef = useReveal("stagger-grid");
  const sectionRef = useShrinkOnScroll();

  return (
    <section className="full-section" id="industries" style={{ background: "#fff" }} ref={sectionRef}>
      <div className="container section-inner">
        <div ref={introRef} className="reveal">
          <div className="eyebrow-tag">Industries</div>
          <h2 className="section-title">Specialist recruitment across critical sectors</h2>
        </div>

        <div ref={gridRef} className="reveal grid-4">
          {industries.map((ind) => (
            <div className="industry-card" key={ind.name}>
              <img src={`https://images.unsplash.com/photo-${ind.img}?q=80&w=900&auto=format&fit=crop`} alt={ind.alt} />
              <div className="industry-content">
                <h3 style={{ fontSize: "1.4rem", fontWeight: 600 }}>{ind.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
