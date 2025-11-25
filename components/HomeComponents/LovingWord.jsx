"use client";
import React from "react";

import { motion } from "framer-motion";

const LovingWord = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const blurVariants = {
    hidden: { 
      opacity: 0, 
      filter: "blur(10px)", 
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1], // Smooth ease-out
      },
    },
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <motion.div 
        className="w-full mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Main Heading - "Loving Words" */}
        <motion.h2 
          className="font-laluxes text-[#ff8a80] text-5xl md:text-6xl lg:text-7xl mb-8"
          variants={blurVariants}
        >
          Loving Words
        </motion.h2>

        {/* Sub-heading */}
        <motion.h3 
          className="font-marcellus text-[#2d5016] text-xl md:text-2xl lg:text-3xl mb-8 font-medium"
          variants={blurVariants}
        >
          We have blossomed to new heights
        </motion.h3>

        {/* Testimonial Body Text */}
        <motion.p 
          className=" text-[#2d5016] text-base md:text-lg lg:text-xl leading-relaxed mb-8 max-w-5xl mx-auto"
          variants={blurVariants}
        >
          As a mother of a six year old autistic daughter, working with Smita has been transformative for both of <br /> us. I began the sessions for my child, and she has opened up
          beautifully. She responds better, expresses <br /> herself more, and the changes are noticeable to her teachers as well. At the same time, the journey <br /> helped my own soul expand.
          Through Smita's guided weekly practices and steady support, <br /> I became more conscious, aligned, and deeply connected within myself. <br /> This inner clarity has helped me show up
          for my daughter <br /> with stronger intuition and confidence.
        </motion.p>

        {/* Attribution */}
        <motion.p 
          className="font-askha text-[#2d5016] text-sm md:text-base lg:text-lg font-semibold tracking-wide uppercase"
          variants={blurVariants}
        >
          TANVI SINHA, IT PROFESSIONAL
        </motion.p>
      </motion.div>
    </section>
  );
};

export default LovingWord;
