"use client";
import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

const Footer = () => {
  // Color constants - matching navbar
  const colors = {
    primary: "#173C2C", // Dark green
    text: "#f5f1e8", // Light beige
    divider: "#f5f1e8", // Light beige for dividers
  };

  const footerLinks = {
    navigation: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Shop", href: "/shop" },
      { label: "Contact", href: "/contact" },
    ],
    policies: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.footer 
      className="w-full p-0 bg-[#173c2c] text-[#d5c2a0]"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="grid grid-cols-3 gap-0 min-h-[400px]" style={{ gridTemplateRows: "1fr 1fr auto" }}>
        {/* div1 - Bottom row (spans all columns) */}
        <motion.div 
          className="col-span-3 row-start-3 row-end-4 py-3 flex items-center justify-center border-t border-[#d5c2a0]"
          variants={itemVariants}
        >
          <p className="font-sans text-base text-center">©2026 by TVIS. All Rights Reserved</p>
        </motion.div>

        {/* div2 - Row 1, Column 1 (Contact) */}
        <motion.div 
          className="col-start-1 col-end-2 row-start-1 row-end-2  flex flex-col items-center md:items-end md:text-end   justify-end px-4 mb-2"
          variants={itemVariants}
        >
          <h3 className="font-sans text-base font-medium">Contact me</h3>
          
          <h3 href="mailto:smita@tvisworld.com" className="font-sans text-sm hover:opacity-80 transition-opacity">
            smita@tvisworld.com
          </h3>
        </motion.div>

        {/* div3 - Row 1, Column 2 (Navigation Links) */}
        <motion.div 
          className="col-start-2 col-end-3 row-start-1 row-end-2 p-4 text-end flex flex-col border-l border-r border-[#d5c2a0]"
          variants={itemVariants}
        >
          {footerLinks.navigation.map((link) => (
            <Link key={link.label} href={link.href} className="font-sans text-base hover:opacity-80 transition-opacity block mb-2">
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* div4 - Row 1, Column 3 (Policy Links) */}
        <motion.div 
          className="col-start-3 col-end-4 row-start-1 row-end-2 p-4 text-start flex flex-col"
          variants={itemVariants}
        >
          {footerLinks.policies.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link href={link.href} className="font-sans text-base hover:opacity-80 transition-opacity block  mb-2">
                {link.label}
              </Link>
            </React.Fragment>
          ))}
        </motion.div>

        {/* div5 - Row 2, Column 1 (Logo area - divided by 3) */}
        <motion.div 
          className="col-start-1 col-end-2 row-start-2 row-end-3 p-0 border-t border-[#d5c2a0]"
          variants={itemVariants}
        >
          <div className="flex h-full">
            {/* Part 1 - Empty */}
            <div className="flex-1"></div>

            {/* Part 2 - Logo */}
            <div className="flex items-center justify-center flex-1">
              <h2 className="text-4xl md:text-7xl font-serif tracking-wide text-[#d5c2a0]">~TVIS~</h2>
            </div>

            {/* Part 3 - Empty */}
            <div className="flex-1"></div>
          </div>
        </motion.div>

        {/* div6 - Row 2, Columns 2-3 (Address) */}
        <motion.div 
          className="col-start-2 col-end-4 row-start-2 row-end-3 p-4 text-start border-l border-t border-[#d5c2a0]"
          variants={itemVariants}
        >
          <div className="flex flex-col justify-center h-full">
            <p className="font-sans text-base">GKVK Road</p>
            <p className="font-sans text-base">Bangalore, India</p>
          </div>
        </motion.div>

        {/* div7 - Horizontal divider between rows (spans all columns) */}
        <motion.div 
          className="col-span-3 row-start-2 row-end-3 p-0 h-px bg-[#d5c2a0] z-10"
          variants={itemVariants}
        ></motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
