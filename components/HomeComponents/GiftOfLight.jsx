"use client";

import React from "react";
import Image from "next/image";
import yelloWbg from "../../public/asset/images/yellowBG.png";
import treeImg from "../../public/asset/images/tree.png";
import { Circle, Droplet, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

const GiftOfLight = () => {
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

  // Soft Ethereal Zoom for Image
  const imageVariants = {
    hidden: { 
      scale: 1.15, 
      opacity: 0, 
      filter: "blur(5px)" 
    },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.8,
        ease: [0.25, 0.1, 0.25, 1], // Very smooth, slow ease
      },
    },
  };

  // Elegant Text Reveal (Slow Slide Up)
  const elegantTextVariants = {
    hidden: { 
      y: 30, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Graceful Fade for Features
  const featureVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full mmax-h-[100vh] overflow-hidden">
      {/* Background Image */}
      <Image src={yelloWbg} alt="Yellow background" fill priority className="object-cover object-center z-0" />

      {/* CONTENT WRAPPER */}
      <motion.div 
        className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 md:px-12 lg:px-20 py-16 lg:py-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* LEFT IMAGE - Soft Zoom */}
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0"
          variants={imageVariants}
        >
          <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[520px] xl:w-[580px]">
            <Image src={treeImg} alt="Tree with candle" className="object-contain" priority />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left max-w-xl lg:max-w-[600px]">
          {/* Small Star Icon */}
          <motion.div 
            className="flex justify-center lg:justify-start mb-3"
            variants={elegantTextVariants}
          >
            <span className="text-3xl text-[#244a37]">
              <Sparkles className="w-7 h-7" />
            </span>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#244a37] font-semibold leading-tight"
              variants={elegantTextVariants}
            >
              “A Gift Of Light That Heals”
            </motion.h2>
          </div>

          {/* Subheading */}
          <motion.p 
            className="mt-4 text-base md:text-lg text-[#244a37] font-medium leading-relaxed"
            variants={elegantTextVariants}
          >
            Envelop your space in serene light and restorative energy with our reiki-infused luxury crystal candles.
          </motion.p>

          {/* FEATURES */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-10">
            {/* Feature 1 */}
            <motion.div 
              className="flex flex-col items-center cursor-pointer" 
              variants={featureVariants}
              whileHover="hover"
            >
              <div className="w-14 h-14 rounded-full bg-[#244a37] flex items-center justify-center text-[#d5dacd] text-2xl shadow-md transition-all duration-300 hover:bg-[#1a3829] hover:shadow-lg">
                <Circle className="w-7 h-7" />
              </div>
              <p className="mt-3 text-xs md:text-sm tracking-wide font-semibold text-[#244a37] text-center">
                AA+ GRADE
                <br />
                SOY WAX
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              className="flex flex-col items-center cursor-pointer" 
              variants={featureVariants}
              whileHover="hover"
            >
              <div className="w-14 h-14 rounded-full bg-[#244a37] flex items-center justify-center text-[#d5dacd] text-2xl shadow-md transition-all duration-300 hover:bg-[#1a3829] hover:shadow-lg">
                <Droplet className="w-7 h-7" />
              </div>
              <p className="mt-3 text-xs md:text-sm tracking-wide font-semibold text-[#244a37] text-center">
                100% NATURAL
                <br />
                ESSENTIAL OILS
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              className="flex flex-col items-center cursor-pointer" 
              variants={featureVariants}
              whileHover="hover"
            >
              <div className="w-14 h-14 rounded-full bg-[#244a37] flex items-center justify-center text-[#d5dacd] text-2xl shadow-md transition-all duration-300 hover:bg-[#1a3829] hover:shadow-lg">
                <Sparkles className="w-7 h-7" />
              </div>
              <p className="mt-3 text-xs md:text-sm tracking-wide font-semibold text-[#244a37] text-center">
                NATURAL HEALING
                <br />
                CRYSTALS
              </p>
            </motion.div>
          </div>

          {/* BUTTON */}
          <motion.div className="mt-10" variants={elegantTextVariants}>
            <motion.button 
              className="px-8 py-3 bg-[#FF8F71] text-white rounded-full font-medium shadow-lg transform transition-all duration-300"
              whileHover={{ scale: 1.05, backgroundColor: "#ff7a57", boxShadow: "0 10px 20px rgba(255, 143, 113, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftOfLight;
