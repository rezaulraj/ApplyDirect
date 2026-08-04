import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const links = [
  // { label: "Home", href: "#hero" },
  { label: "About", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Jobs", href: "#jobs" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const overlayVariants = {
  hidden: { clipPath: "circle(0% at calc(100% - 46px) 46px)" },
  visible: {
    clipPath: "circle(150% at calc(100% - 46px) 46px)",
    transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    clipPath: "circle(0% at calc(100% - 46px) 46px)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.15 },
  },
};

const listContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.35 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
};

const listItem = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    y: "-110%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.4, 0, 1, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
};

const imagePanel = {
  hidden: { opacity: 0, scale: 1.06, clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

export default function HamburgerMenu({ open, onClose }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    onClose();
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -20 });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[180] overflow-hidden"
          style={{ background: "var(--dark)" }}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="menu-watermark"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1.1, delay: 0.2 },
            }}
            exit={{ opacity: 0 }}
          >
            ApplyDirect
          </motion.div>
          <div
            className="menu-blob"
            style={{
              width: 500,
              height: 500,
              background: "var(--primary)",
              top: "-10%",
              left: "-10%",
            }}
          />
          <div
            className="menu-blob"
            style={{
              width: 400,
              height: 400,
              background: "var(--accent)",
              bottom: "-10%",
              right: "-5%",
            }}
          />

          <div className="menu-inner-grid relative z-[2] h-full w-full">
            <motion.ul
              className="menu-list"
              variants={listContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {links.map((link, i) => (
                <motion.li key={link.href} variants={listItem}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    <span className="num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="menu-image-panel"
              variants={imagePanel}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <img
                src="https://images.unsplash.com/photo-1758520144437-f068ecaf0d83?q=80&w=800&auto=format&fit=crop"
                alt="Recruiter meeting with a candidate"
              />
              <div className="menu-image-caption glass-dark">
                Global talent, matched right.
              </div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 z-[2] flex justify-between items-end flex-wrap gap-5"
            style={{ padding: "6vw 8vw" }}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* <div className="menu-footer flex gap-6">
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
            <div className="menu-footer flex gap-6">
              <a href="mailto:hello@mayerdua.com" className="flex items-center gap-2"><Mail size={15} /> hello@mayerdua.com</a>
              <a href="tel:+10000000000" className="flex items-center gap-2"><Phone size={15} /> +1 (000) 000 0000</a>
            </div> */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
