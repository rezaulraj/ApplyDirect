import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useLenis from "./lib/useLenis";
import NoiseCanvas from "./components/NoiseCanvas";
import CursorGlow from "./components/CursorGlow";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import GlobalMap from "./components/GlobalMap";
import Industries from "./components/Industries";
import Process from "./components/Process";
import FeaturedJobs from "./components/FeaturedJobs";
import SuccessNumbers from "./components/SuccessNumbers";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  useLenis();
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  // Hide the floating header on scroll-down, reveal on scroll-up
  useEffect(() => {
    const header = document.querySelector("header");
    const handleScroll = () => {
      const y = window.scrollY;
      if (y > lastY.current && y > 200) {
        gsap.to(header, { y: -100, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(header, { y: 0, duration: 0.4, ease: "power2.out" });
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NoiseCanvas />
      <CursorGlow />
      <Header menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((v) => !v)} />
      <HamburgerMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <GlobalMap />
        <Industries />
        <Process />
        <FeaturedJobs />
        <SuccessNumbers />
        <Testimonials />
        <CTA />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
