"use client";
import React from "react";
import Link from "next/link";

// import { motion } from "framer-motion";
// import Image from "next/image";

const Footer = () => {
  // Color constants - matching navbar
  // const colors = {
  //   primary: "#173C2C", // Dark green
  //   text: "#f5f1e8", // Light beige
  //   divider: "#f5f1e8", // Light beige for dividers
  // };

  // const footerLinks = {
  //   navigation: [
  //     { label: "About", href: "/about" },
  //     { label: "Services", href: "/services" },
  //     { label: "Shop", href: "/shop" },
  //     { label: "Contact", href: "/contact" },
  //   ],
  //   policies: [
  //     { label: "Terms & Conditions", href: "/terms" },
  //     { label: "Privacy Policy", href: "/privacy" },
  //     { label: "Refund Policy", href: "/refund" },
  //     { label: "Accessibility Statement", href: "/accessibility" },
  //   ],
  // };

  // const containerVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1,
  //       delayChildren: 0.2,
  //     },
  //   },
  // };

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 border-[#d5c2a0] bg-[#173c2c] text-[#d5c2a0]">
        <div className="p-6 flex flex-col justify-end md:text-end text-start border-b md:border-b-0 md:border-r border-[#d5c2a0]">
          <div className="block md:hidden p-6">
            <img src="/asset/images/footer_logo.png" alt="Healing hands" className="h-16 object-contain" />
          </div>
          <h3 className="text-base font-medium mb-2">Contact me</h3>
          <Link href="mailto:smita@tvisworld.com" className="text-sm md:text-base hover:opacity-80">
            smita@tvisworld.com
          </Link>
        </div>

        <div className="p-6 flex flex-col justify-end border-b md:border-b-0 md:border-r border-[#d5c2a0] text-left md:text-right">
          <Link href="/" className="mb-2 hover:opacity-80">
            Home
          </Link>
          <Link href="/about" className="mb-2 hover:opacity-80">
            About
          </Link>
          <Link href="/services" className="mb-2 hover:opacity-80">
            Services
          </Link>
          <Link href="/contact" className="mb-2 hover:opacity-80">
            Contact
          </Link>
        </div>

        <div className="p-6 flex flex-col justify-end border-b md:border-b-0 border-[#d5c2a0]">
          <Link href="/terms" className="mb-2 hover:opacity-80">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="mb-2 hover:opacity-80">
            Privacy Policy
          </Link>
          <Link href="/refund" className="mb-2 hover:opacity-80">
            Refund Policy
          </Link>
          <Link href="/accessibility" className="mb-2 hover:opacity-80">
            Accessibility Statement
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="col-span-1 md:col-span-1 p-6 flex items-center justify-center md:justify-end border-t md:border-r border-[#d5c2a0]">
            <img src="/asset/images/footer_logo.png" alt="Healing hands" className="h-16 object-contain" />
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 p-6 flex flex-col justify-center border-t border-[#d5c2a0]">
          <p>GKVK Road</p>
          <p>Bangalore, India</p>
        </div>

        <div className="col-span-1 md:col-span-3 py-4 flex items-center justify-center border-t border-[#d5c2a0]">
          <p className="text-sm text-center">©2026 by TVIS. All Rights Reserved</p>
        </div>
      </div>

      {/* <motion.footer className="w-full p-0 bg-[#173c2c] text-[#d5c2a0]" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }}>
      <div className="grid grid-cols-3 gap-0 min-h-100" style={{ gridTemplateRows: "1fr 1fr auto" }}>
        <motion.div className="col-span-3 row-start-3 row-end-4 py-3 flex items-center justify-center border-t border-[#d5c2a0]" variants={itemVariants}>
          <p className="font-sans text-base text-center">©2026 by TVIS. All Rights Reserved</p>
        </motion.div>

        <motion.div className="col-start-1 col-end-2 row-start-1 row-end-2  flex flex-col items-center md:items-end md:text-end   justify-end px-4 mb-4" variants={itemVariants}>
          <h3 className="font-sans text-base font-medium font-marcellus">Contact me</h3>

          <h3 href="mailto:smita@tvisworld.com" className="font-sans text-xs md:text-base hover:opacity-80 transition-opacity font-marcellus">
            smita@tvisworld.com
          </h3>
        </motion.div>

        <motion.div className="col-start-2 col-end-3 row-start-1 row-end-2 p-4 text-end  flex flex-col border-l border-r border-[#d5c2a0] justify-end" variants={itemVariants}>
          {footerLinks.navigation.map((link) => (
            <Link key={link.label} href={link.href} className="font-sans text-base hover:opacity-80 transition-opacity block mb-2">
              {link.label}
            </Link>
          ))}
        </motion.div>

        <motion.div className="col-start-3 col-end-4 row-start-1 row-end-2 p-4 text-start flex flex-col justify-end" variants={itemVariants}>
          {footerLinks.policies.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link href={link.href} className="font-sans text-base hover:opacity-80 transition-opacity block  mb-2">
                {link.label}
              </Link>
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div className="col-start-1 col-end-2 row-start-2 row-end-3 p-0 border-t border-[#d5c2a0]" variants={itemVariants}>
          <div className="flex h-full">
            <div className="flex-1"></div>

            <div className="flex items-center justify-center md:justify-end flex-1">
              <motion.div className="w-full mt-4 sm:mt-0">
                <motion.div className="w-32 h-32 sm:w-full sm:h-36 lg:w-full lg:h-7 md:block">
                  <Image src={"/asset/images/footer_logo.png"} height={100} width={400} alt="Healing hands" className="" />
                </motion.div>
              </motion.div>
            </div>

            <div className="flex-1"></div>
          </div>
        </motion.div>

        <motion.div className="col-start-2 col-end-4 row-start-2 row-end-3 p-4 text-start border-l border-t border-[#d5c2a0]" variants={itemVariants}>
          <div className="flex flex-col justify-center h-full">
            <p className="font-sans text-base">GKVK Road</p>
            <p className="font-sans text-base">Bangalore, India</p>
          </div>
        </motion.div>

        <motion.div className="col-span-3 row-start-2 row-end-3 p-0 h-px bg-[#d5c2a0] z-10" variants={itemVariants}></motion.div>
      </div>
    </motion.footer> */}
    </>
  );
};

export default Footer;
