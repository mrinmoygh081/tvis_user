"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LovingWord = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y }}
      className="w-full bg-white py-16 px-4 md:px-8 relative z-50"
    >
      <div className="w-full mx-auto text-center">
        {/* Main Heading - "Loving Words" */}
        <h2 className="font-laluxes text-[#ff8a80] text-5xl md:text-6xl lg:text-7xl mb-8">Loving Words</h2>

        {/* Sub-heading */}
        <h3 className="font-askha text-[#2d5016] text-xl md:text-2xl lg:text-3xl mb-8 font-medium">We have blossomed to new heights</h3>

        {/* Testimonial Body Text */}
        <p className=" text-[#2d5016] text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-5xl mx-auto">
          As a mother of a six year old autistic daughter, working with Smita has been transformative for both of <br /> us. I began the sessions for my child, and she has opened up
          beautifully. She responds better, expresses <br /> herself more, and the changes are noticeable to her teachers as well. At the same time, the journey <br /> helped my own soul expand.
          Through Smita's guided weekly practices and steady support, <br /> I became more conscious, aligned, and deeply connected within myself. <br /> This inner clarity has helped me show up
          for my daughter <br /> with stronger intuition and confidence.
        </p>

        {/* Attribution */}
        <p className="font-askha text-[#2d5016] text-sm md:text-base lg:text-lg font-semibold tracking-wide uppercase">TANVI SINHA, IT PROFESSIONAL</p>
      </div>
    </motion.section>
  );
};

export default LovingWord;
