"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import greenBg from "../../public/asset/images/GreenBg.png";

const services = [
  {
    title: "Reiki Healing",
    desc: "Neque porro quisquam est quilo wesmonas feltori, consectetur, adipisci velit dolorem ipsum quia dolor sit amet.",
    icon: "drop",
  },
  {
    title: "Past Life Regression",
    desc: "Neque porro quisquam est quilo wesmonas feltori, consectetur, adipisci velit dolorem ipsum quia dolor sit amet.",
    icon: "cup",
  },
  {
    title: "Akashik Records",
    desc: "Neque porro quisquam est quilo wesmonas feltori, consectetur, adipisci velit dolorem ipsum quia dolor sit amet.",
    icon: "spiral",
  },
  {
    title: "Inner Child Healing",
    desc: "Neque porro quisquam est quilo wesmonas feltori, consectetur, adipisci velit dolorem ipsum quia dolor sit amet.",
    icon: "sun",
  },
];

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

  // Icon Path Drawing Variants
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  // Updated Icon Component with motion.path
  const Icon = ({ name }) => {
    const size = 24; // Slightly larger for better visibility
    const commonProps = {
      stroke: "currentColor",
      strokeWidth: "1.6",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      variants: pathVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
    };

    switch (name) {
      case "drop":
        return (
          <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <motion.path d="M12 3s5 5 5 9a5 5 0 1 1-10 0c0-4 5-9 5-9z" {...commonProps} />
          </svg>
        );
      case "cup":
        return (
          <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <motion.path d="M3 7h14v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7z" {...commonProps} />
            <motion.path d="M21 8v2a3 3 0 0 1-3 3" {...commonProps} transition={{ ...pathVariants.visible.transition, delay: 0.5 }} />
          </svg>
        );
      case "spiral":
        return (
          <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <motion.path d="M12 20a6 6 0 1 0 0-12 4 4 0 1 1 0 8" {...commonProps} />
          </svg>
        );
      case "sun":
        return (
          <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
            <motion.circle cx="12" cy="12" r="3" {...commonProps} variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } } }} />
            <motion.path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" {...commonProps} transition={{ ...pathVariants.visible.transition, delay: 0.3 }} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#123a30] text-[#e9f0ea]">
      {/* decorative background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={bgVariants}
      >
        <Image
          src={greenBg}
          alt="Decorative background"
          fill
          priority
          className="object-cover object-right-bottom opacity-100"
          sizes="100vw"
        />
      </motion.div>

      {/* content container */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-28 lg:py-36">
        {/* Title */}
        <motion.header 
          className="mb-10 md:mb-14 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headerVariants}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-tight">
            <span className="mr-2">Reiki &amp; Other</span>
            <span className="inline-block  px-3 py-1 rounded-sm text-[#d7f0e5]">Healing Services</span>
          </h2>
        </motion.header>

        {/* layout: list left, empty right (background decoration sits on right) */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* left column (services) */}
          <div className="md:w-3/5">
            <ul className="space-y-8">
              {services.map((s, i) => {
                const [isHovered, setIsHovered] = React.useState(false);
                
                return (
                  <motion.li 
                    key={s.title} 
                    className="flex items-start gap-6 md:gap-8 p-4 rounded-xl transition-all duration-300 hover:bg-[#1a4d40]/40 cursor-default border border-transparent hover:border-[#e9f0ea]/20 hover:shadow-lg"
                    initial={{ opacity: 0, y: 40, x: -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.05,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                  >
                    {/* icon badge */}
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#e9f0ea] text-[#123a30] flex items-center justify-center shadow-sm"
                        animate={isHovered ? { 
                          scale: 1.15,
                          boxShadow: "0 0 25px rgba(233, 240, 234, 0.8), 0 0 50px rgba(233, 240, 234, 0.4)",
                        } : {
                          scale: 1,
                          boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon name={s.icon} />
                      </motion.div>
                    </div>

                    {/* text */}
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-[#ff8f71] mb-2">{s.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed text-[#dfe9e3]">
                        {s.desc}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          {/* spacer / right column - background art sits here */}
          <div className="md:w-2/5 flex items-center justify-center md:justify-end">
            {/* optional: place a small duplication of decorative SVG or leave empty so bg shows */}
            <div className="hidden md:block max-w-[260px] opacity-0" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
