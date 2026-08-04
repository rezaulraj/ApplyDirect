import { useState } from "react";
import { Send } from "lucide-react";
import useReveal from "../lib/useReveal";
import useShrinkOnScroll from "../lib/useShrinkOnScroll";
import useMagnetic from "../lib/useMagnetic";

export default function ContactForm() {
  const introRef = useReveal("slide-right");
  const formRef = useReveal("slide-left");
  const sectionRef = useShrinkOnScroll();
  const submitRef = useMagnetic();

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="full-section" id="contact" ref={sectionRef} style={{ background: "#fff" }}>
      <div className="container section-inner" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 60, alignItems: "center" }}>
        <div ref={introRef} className="reveal">
          <div className="eyebrow-tag">Get In Touch</div>
          <h2 className="section-title">Tell us who you're looking for</h2>
          <p className="section-sub">
            Whether you're hiring or looking to be placed abroad, a member of our team will respond
            within one business day.
          </p>
        </div>

        <form ref={formRef} className="reveal contact-form" onSubmit={handleSubmit}>
          <div>
            <label className="field-label" htmlFor="cf-name">Full name</label>
            <input
              id="cf-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="field-label" htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="jane@company.com"
            />
          </div>
          <div className="full">
            <label className="field-label" htmlFor="cf-phone">Phone (optional)</label>
            <input
              id="cf-phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="field-input"
              placeholder="+1 000 000 0000"
            />
          </div>
          <div className="full">
            <label className="field-label" htmlFor="cf-message">How can we help?</label>
            <textarea
              id="cf-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="Tell us about the role or the opportunity you're looking for..."
            />
          </div>
          <button ref={submitRef} type="submit" className="btn-primary contact-submit" style={{ border: "none", cursor: "pointer" }}>
            {sent ? "Message Sent" : "Send Message"} <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
