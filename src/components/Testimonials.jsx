import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useReveal from "../lib/useReveal";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";

const testimonials = [
  {
    quote:
      "ApplyDirect mobilised forty engineers across three countries in under six weeks. Flawless execution.",
    name: "Amara Okafor",
    role: "VP Operations, BuildCore",
  },
  {
    quote: "The visa and relocation support meant our new hires landed ready to work from day one.",
    name: "Daniel Reyes",
    role: "Head of HR, Meridian Health",
  },
  {
    quote: "ApplyDirect found me a role abroad in three weeks — the entire process felt effortless.",
    name: "Priya Sharma",
    role: "Registered Nurse, placed in AU",
  },
  {
    quote: "A genuine partner, not just a vendor. Their pipeline never runs dry.",
    name: "Lukas Weber",
    role: "COO, Nordic Manufacturing",
  },
];

export default function Testimonials() {
  const introRef = useReveal("parallax");
  const sectionRef = useShrinkOnScroll();

  return (
    <section className="full-section" id="testimonials" ref={sectionRef}>
      <div className="container section-inner">
        <div ref={introRef} className="reveal">
          <div className="eyebrow-tag">Testimonials</div>
          <h2 className="section-title">Trusted by employers and professionals worldwide</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          className="testimonial-swiper"
          style={{ marginTop: 50 }}
          slidesPerView={1.15}
          spaceBetween={24}
          loop
          autoplay={{ delay: 3200, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2.2 },
            1100: { slidesPerView: 2.6 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="t-card glass">
                <p style={{ fontSize: "1.1rem", lineHeight: 1.6 }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ marginTop: 26 }}>
                  <strong>{t.name}</strong>
                  <div style={{ color: "#64748b", fontSize: "0.85rem" }}>{t.role}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
