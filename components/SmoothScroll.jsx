"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Ensure body doesn't exceed viewport on initial load
    const checkHeight = () => {
      if (window.innerHeight >= document.body.scrollHeight) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    };
    
    // Check immediately and after a short delay
    checkHeight();
    const timer = setTimeout(checkHeight, 100);
    
    // Also check on resize
    window.addEventListener("resize", checkHeight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkHeight);
      document.body.style.overflowY = "";
    };
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isMounted]);

  return <>{children}</>;
}
