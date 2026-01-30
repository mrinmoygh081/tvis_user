"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import greenBg from "../../public/asset/images/GreenBg3.png";
import { servicesHome } from "@/data/services";
import Link from "next/link";

export default function HealingServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
        mass: 1.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const bgVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden text-[#e9f0ea] bg-[#173c2b]">
      {/* decorative background */}
      <motion.div className="absolute inset-0 z-0" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={bgVariants}>
        <Image src={greenBg} alt="Decorative background" fill priority className="object-cover object-bottom-right opacity-100" sizes="100vw" />
      </motion.div>

      {/* content container */}
      <div className="relative z-10 mx-auto container px-6 md:px-10 py-16 md:py-28 lg:py-28">
        {/* Title */}
        <motion.header className="mb-10 md:mb-14 text-center" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={headerVariants}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-marcellus tracking-tight">
            <span className="mr-2">Reiki &amp; Other</span>
            <span className="inline-block  px-3 py-1 rounded-sm text-[#d7f0e5]">Healing Services</span>
          </h2>
        </motion.header>

        {/* layout: list left, empty right (background decoration sits on right) */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* left column (services) */}
          <div className="md:w-3/5">
            <ul className="space-y-8">
              {servicesHome.map((s, i) => (
                <motion.li
                  key={s.title}
                  className="flex items-start gap-6 md:gap-8 p-4 rounded-xl transition-all duration-300 hover:bg-[#1a4d40]/40 cursor-default border border-transparent hover:border-[#e9f0ea]/20 hover:shadow-lg service_item"
                  initial={{ opacity: 0, y: 40, x: -20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {/* icon */}
                  <motion.div className="shrink-0 w-16 h-16 md:w-28 md:h-28 service_item_icon">
                    <Image src={`/asset/ICONS/ICONS/${s.icon}`} width={200} height={200} alt="" className="w-full h-full object-contain" aria-hidden="true" />
                  </motion.div>

                  {/* text */}
                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-[#ff8f71] mb-2 font-marcellus">{s.title}</h3>
                    <p className="text-sm md:text-base leading-relaxed text-[#dfe9e3]">{s.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div className="shrink-0 mb-5 mt-10 text-center">
              <Link href={"/services"} className="px-8 py-3 bg-[#e75f47] text-black rounded-full font-medium shadow-lg transform transition-all duration-300">
                Explore More
              </Link>
            </motion.div>
          </div>

          {/* spacer / right column - background art sits here */}
          <div className="md:w-2/5 flex items-center justify-center md:justify-end">
            {/* optional: place a small duplication of decorative SVG or leave empty so bg shows */}
            <div className="hidden md:block max-w-65 opacity-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
