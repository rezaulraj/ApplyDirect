import useReveal from "../lib/useReveal";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";

const jobs = [
  { flag: "🇭🇷", type: "Full-time", title: "Warehouse Operative", location: "Zagreb, Croatia", salary: "€900 – €1,100 / mo" },
  { flag: "🇷🇴", type: "Full-time", title: "Production Line Worker", location: "Bucharest, Romania", salary: "€800 – €1,000 / mo" },
  { flag: "🇷🇸", type: "Contract", title: "General Construction Labourer", location: "Belgrade, Serbia", salary: "€850 – €1,200 / mo" },
];

export default function FeaturedJobs() {
  const introRef = useReveal("floating");
  const gridRef = useReveal("stagger-grid");
  const sectionRef = useShrinkOnScroll();

  return (
    <section className="full-section" id="jobs" style={{ background: "#fff" }} ref={sectionRef}>
      <div className="container section-inner">
        <div ref={introRef} className="reveal">
          <div className="eyebrow-tag">Featured Jobs</div>
          <h2 className="section-title">Opportunities open right now</h2>
        </div>

        <div ref={gridRef} className="reveal grid-3">
          {jobs.map((job) => (
            <div className="job-card" key={job.title}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="job-flag">{job.flag}</div>
                <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>{job.type}</span>
              </div>
              <h3 style={{ marginTop: 20, fontSize: "1.2rem", fontWeight: 600 }}>{job.title}</h3>
              <p style={{ color: "#64748b", fontSize: "0.88rem", marginTop: 6 }}>{job.location}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 24 }}>
                <span style={{ fontWeight: 700 }}>{job.salary}</span>
                <a href="#contact" className="service-link" style={{ marginTop: 0 }}>
                  Apply
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
