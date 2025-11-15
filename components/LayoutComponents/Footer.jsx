"use client";
import React from "react";
import Link from "next/link";

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

  return (
    <footer className="w-full p-0 bg-[#173c2c] text-[#dcae59]">
      <div className="grid grid-cols-3 gap-0 min-h-[400px]" style={{ gridTemplateRows: "1fr 1fr auto" }}>
        {/* div1 - Bottom row (spans all columns) */}
        <div className="col-span-3 row-start-3 row-end-4 py-3 flex items-center justify-center border-t border-[#dcae59]">
          <p className="font-sans text-sm text-center">©2026 by TVIS. All Rights Reserved</p>
        </div>

        {/* div2 - Row 1, Column 1 (Contact) */}
        <div className="col-start-1 col-end-2 row-start-1 row-end-2  flex flex-col text-end p-6 mb-2">
          <h3 className="font-sans text-sm font-medium">Contact me</h3>
          <a href="mailto:smita@tvisworld.com" className="font-sans text-sm hover:opacity-80 transition-opacity">
            smita@tvisworld.com
          </a>
        </div>

        {/* div3 - Row 1, Column 2 (Navigation Links) */}
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 p-6 text-end flex flex-col border-l border-r border-[#dcae59]">
          {footerLinks.navigation.map((link) => (
            <Link key={link.label} href={link.href} className="font-sans text-sm hover:opacity-80 transition-opacity block mb-2">
              {link.label}
            </Link>
          ))}
        </div>

        {/* div4 - Row 1, Column 3 (Policy Links) */}
        <div className="col-start-3 col-end-4 row-start-1 row-end-2 p-6 text-start flex flex-col">
          {footerLinks.policies.map((link, index) => (
            <React.Fragment key={link.label}>
              <Link href={link.href} className="font-sans text-sm hover:opacity-80 transition-opacity block  mb-2">
                {link.label}
              </Link>
            </React.Fragment>
          ))}
        </div>

        {/* div5 - Row 2, Column 1 (Logo area - divided by 3) */}
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 p-0 border-t border-[#dcae59]">
          <div className="flex h-full">
            {/* Part 1 - Empty */}
            <div className="flex-1"></div>

            {/* Part 2 - Logo */}
            <div className="flex items-center justify-center flex-1">
              <h2 className="text-4xl md:text-5xl font-serif tracking-wide text-[#dcae59]">-TVIS-</h2>
            </div>

            {/* Part 3 - Empty */}
            <div className="flex-1"></div>
          </div>
        </div>

        {/* div6 - Row 2, Columns 2-3 (Address) */}
        <div className="col-start-2 col-end-4 row-start-2 row-end-3 p-6 text-start border-l border-t border-[#dcae59]">
          <div className="flex flex-col justify-center h-full">
            <p className="font-sans text-sm">GKVK Road</p>
            <p className="font-sans text-sm">Bangalore, India</p>
          </div>
        </div>

        {/* div7 - Horizontal divider between rows (spans all columns) */}
        <div className="col-span-3 row-start-2 row-end-3 p-0 h-px bg-[#dcae59] z-10"></div>
      </div>
    </footer>
  );
};

export default Footer;
