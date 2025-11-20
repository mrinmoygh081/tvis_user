"use client";

import React, { useRef } from "react";
import Image from "next/image";
import yelloWbg from "../../public/asset/images/yellowBG.png";
import treeImg from "../../public/asset/images/tree.png";
import { Circle, Droplet, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const GiftOfLight = () => {
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
      className="relative w-full mmax-h-[100vh] overflow-hidden z-40"
    >
      {/* Background Image */}
      <Image src={yelloWbg} alt="Yellow background" fill priority className="object-cover object-center z-0" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center lg:items-center justify-between px-6 md:px-12 lg:px-20 py-16 lg:py-0">
        {/* LEFT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0">
          <div className="relative w-[320px] sm:w-[380px] md:w-[420px] lg:w-[520px] xl:w-[580px]">
            <Image src={treeImg} alt="Tree with candle" className="object-contain" priority />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left max-w-xl lg:max-w-[600px]">
          {/* Small Star Icon */}
          <div className="flex justify-center lg:justify-start mb-3">
            <span className="text-3xl text-[#244a37]">
              <Sparkles className="w-7 h-7" />
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#244a37] font-semibold leading-tight">“A Gift Of Light That Heals”</h2>

          {/* Subheading */}
          <p className="mt-4 text-base md:text-lg text-[#244a37] font-medium leading-relaxed">
            Envelop your space in serene light and restorative energy with our reiki-infused luxury crystal candles.
          </p>

          {/* FEATURES */}
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#244a37] flex items-center justify-center text-[#d5dacd] text-2xl">
                <Circle className="w-7 h-7" />
              </div>
              <p className="mt-3 text-xs md:text-sm tracking-wide font-semibold text-[#244a37] text-center">
                AA+ GRADE
                <br />
                SOY WAX
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#244a37] flex items-center justify-center text-[#d5dacd] text-2xl">
                <Droplet className="w-7 h-7" />
              </div>
              <p className="mt-3 text-xs md:text-sm tracking-wide font-semibold text-[#244a37] text-center">
                100% NATURAL
                <br />
                ESSENTIAL OILS
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#244a37] flex items-center justify-center text-[#d5dacd] text-2xl">
                <Sparkles className="w-7 h-7" />
              </div>
              <p className="mt-3 text-xs md:text-sm tracking-wide font-semibold text-[#244a37] text-center">
                NATURAL HEALING
                <br />
                CRYSTALS
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <button className="px-8 py-3 bg-[#FF8F71] text-white rounded-full font-medium shadow-lg hover:opacity-90 transition">Shop Now</button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GiftOfLight;
