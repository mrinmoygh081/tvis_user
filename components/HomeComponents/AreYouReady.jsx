"use client";
import Image from "next/image";
import React from "react";
import leftsideImg from "../../public/asset/images/leftSideImg.jpg";

import { motion } from "framer-motion";

const AreYouReady = () => {
  // Animation Variants
  const shutterVariants = {
    hidden: { scaleX: 1, originX: 0 },
    visible: {
      scaleX: 0,
      originX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    },
  };

  const imageScaleVariants = {
    hidden: { scale: 1.2 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const formContainerVariants = {
    hidden: { opacity: 0, x: 50, rotateY: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full flex flex-col lg:flex-row min-h-screen overflow-hidden" style={{ perspective: "1000px" }}>
      {/* Left Column - Image with Shutter Reveal */}
      <div className="w-full lg:w-[40%] h-[50vh] md:h-[60vh] lg:h-auto relative overflow-hidden">
        {/* Shutter Overlay */}
        <motion.div 
          className="absolute inset-0 z-20 bg-[#d4d9c4]"
          variants={shutterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        />
        
        {/* Video with Scale Effect */}
        <motion.div 
          className="relative w-full h-full"
          variants={imageScaleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <video 
            src="/asset/video/contactImg.mp4"
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Right Column - Form with 3D Perspective Entrance */}
      <motion.div 
        className="w-full lg:w-[60%] bg-[#d4d9c4] flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12 lg:py-0"
        variants={formContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="mx-auto w-full max-w-2xl">
          {/* Headline */}
          <motion.h2 
            className="text-[#2d5016] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 font-marcellus"
            variants={itemVariants}
          >
            Are you ready for a soul-altering transformation?
          </motion.h2>

          {/* Sub-headlines */}
          <motion.p 
            className="text-[#2d5016] font-sans text-sm sm:text-base md:text-lg italic mb-2"
            variants={itemVariants}
          >
            This is the sign from the Universe you have been waiting for...
          </motion.p>
          <motion.p 
            className="text-[#2d5016] font-sans text-sm sm:text-base md:text-lg italic mb-6 sm:mb-8"
            variants={itemVariants}
          >
            All you need to do is say YES TO YOU!
          </motion.p>

          {/* Form */}
          <form className="space-y-4">
            {/* Row 1: First Name and Last Name */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div className="flex-1" variants={itemVariants}>
                <label htmlFor="firstName" className="block text-[#2d5016] font-sans text-sm mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2.5 sm:py-2 border-2 border-[#2d5016]  bg-transparent text-[#2d5016] font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
                />
              </motion.div>
              <motion.div className="flex-1" variants={itemVariants}>
                <label htmlFor="lastName" className="block text-[#2d5016] font-sans text-sm mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2.5 sm:py-2 border-2 border-[#2d5016]  bg-transparent text-[#2d5016] font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
                />
              </motion.div>
            </div>

            {/* Row 2: Email and Phone */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div className="flex-1" variants={itemVariants}>
                <label htmlFor="email" className="block text-[#2d5016] font-sans text-sm mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 sm:py-2 border-2 border-[#2d5016]  bg-transparent text-[#2d5016] font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
                />
              </motion.div>
              <motion.div className="flex-1" variants={itemVariants}>
                <label htmlFor="phone" className="block text-[#2d5016] font-sans text-sm mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2.5 sm:py-2 border-2 border-[#2d5016]  bg-transparent text-[#2d5016] font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
                />
              </motion.div>
            </div>

            {/* Row 3: Message */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-[#2d5016] font-sans text-sm mb-1">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2.5 sm:py-2 border-2 border-[#2d5016]  bg-transparent text-[#2d5016] font-sans text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full sm:w-auto py-3 px-6 sm:px-8 bg-[#e75f47] text-black font-sans font-semibold text-sm sm:text-base rounded-full hover:bg-[#ff5252] transition-colors duration-200 mt-6"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK A SESSION
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default AreYouReady;
