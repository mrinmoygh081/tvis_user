"use client";

import React from "react";
import Image from "next/image";
import yelloWbg from "../../public/asset/images/GiftOfLightBG.jpg";
import icon1 from "../../public/asset/ICONS/ICONS/a.png";
import icon2 from "../../public/asset/ICONS/ICONS/b.png";
import icon3 from "../../public/asset/ICONS/ICONS/c.png";






import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: icon1,
    label: "AA+ GRADE\nSOY WAX",
    delay: 0.3,
  },
  {
    icon: icon2,
    label: "100% NATURAL\nESSENTIAL OILS",
    delay: 0.4,
  },
  {
    icon: icon3,
    label: "NATURAL HEALING\nCRYSTALS",
    delay: 0.5,
  },
];

const GiftOfLight = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
        duration: 1.0,
        ease: [0.25, 0.1, 0.25, 1],
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
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Graceful Fade for Features with Icon Animation
  const featureVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // Icon Badge Animation
  const iconBadgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative w-full py-12 md:py-16 lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image src={yelloWbg} alt="Yellow background" fill priority className="object-cover object-right lg:object-center z-0" />
      
      {/* Black Overlay - Mobile & Tablet Only */}
      <div className="absolute inset-0 bg-black/10 z-1 lg:hidden"></div>

      {/* CONTENT WRAPPER */}
      <motion.div 
        className="relative z-10 container mx-auto h-full flex flex-col lg:flex-row items-center justify-center lg:justify-end px-4 sm:px-6 md:px-8 lg:px-20 py-0 lg:py-0 "
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* RIGHT CONTENT */}
        <div className="w-full  lg:w-1/2 text-center lg:text-center max-w-2xl font-semibold lg:max-w-[650px] ">
          {/* Small Star Icon */}
          <motion.div 
            className="flex justify-center mb-3"
            variants={elegantTextVariants}
          >
            <span className="text-3xl text-[#244a37]">
              <Sparkles className="w-7 h-7" />
            </span>
          </motion.div>

          {/* Heading */}
          <div className="overflow-hidden">
            <motion.h2 
              className="text-3xl md:text-3xl lg:text-4xl  text-[#244a37] font-marcellus leading-tight"
              variants={elegantTextVariants}
            >
              "A Gift Of Light That Heals"
            </motion.h2>
          </div>

          {/* Subheading */}
          <motion.p 
            className="mt-4 text-base md:text-lg text-[#244a37] font-medium leading-relaxed"
            variants={elegantTextVariants}
          >
            Envelop your space in serene light and restorative <br /> energy with our reiki-infused luxury crystal candles.
          </motion.p>

          {/* FEATURES */}
          <div className="mt-12 flex flex-wrap justify-evenly gap-10  items-center">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center cursor-pointer" 
                variants={featureVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.5 }}
                  variants={{
                    hidden: { scale: 0, rotate: -180 },
                    visible: {
                      scale: 1,
                      rotate: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: feature.delay,
                      },
                    },
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    filter: "drop-shadow(0 0 20px rgba(36, 74, 55, 0.8)) drop-shadow(0 0 40px rgba(36, 74, 55, 0.4))",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={feature.icon} 
                    alt="" 
                    className="w-full h-full object-contain"
                    aria-hidden="true"
                  />
                </motion.div>
                <p className="-mt-2 text-xs md:text-sm tracking-wide font-semibold text-[#244a37] text-center whitespace-pre-line">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* BUTTON */}
          <motion.div className="mt-10" variants={elegantTextVariants}>
            <motion.button 
              className="px-8 py-3 bg-[#e75f47] text-black rounded-full font-medium shadow-lg transform transition-all duration-300"
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
