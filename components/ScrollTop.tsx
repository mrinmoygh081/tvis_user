"use client";

import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToNext = () => {
    const sections: any = Array.from(document.querySelectorAll("[data-section]"));

    const currentScroll = window.scrollY;

    // Find the first section below current scroll
    const nextSection = sections.find((section: any) => {
      return section.offsetTop > currentScroll + 10;
    });

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button className={isVisible ? "scrollTop" : "scrollTop active"} onClick={isVisible ? scrollToTop : scrollToNext}>
      {/* SCROLL UP */}
      <img src="/asset/images/icon-bottom.png" alt="" />
    </button>
  );
};

export default ScrollTop;
