import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      gsap.to(glowRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div id="cursor-glow" ref={glowRef} />;
}
