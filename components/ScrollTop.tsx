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

  return (
    <button className={isVisible ? "scrollTop" : "scrollTop active"} onClick={scrollToTop}>
      {/* SCROLL UP */}
      <img src="/asset/images/icon-bottom.png" alt="" />
    </button>
  );
};

export default ScrollTop;
