"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services" },
    // { label: "SHOP", href: "/shop" },
    // { label: "BLOG", href: "/blog" },
  ];

  // Handle scroll event to add blur effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex items-center justify-end bg-transparent z-50">
      {/* Desktop Navigation Bar */}
      <div
        className={`hidden lg:flex items-stretch border border-[#2d5016] rounded-full overflow-hidden transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-[#2d5016]/15" : "bg-transparent"
        }`}
      >
        {/* Navigation Links */}
        {navItems.map((item, index) => {
          const active = isActive(item.href);
          return (
            <React.Fragment key={item.label}>
              <Link
                href={item.href}
                className={`px-5 py-3 font-sans uppercase text-sm font-semibold tracking-wide transition-all duration-200 text-[#2d5016] ${
                  active ? "bg-[#e75f47] text-[#2d5016] hover:bg-[#ff5252]" : "bg-[#f5f1e8] hover:bg-[#dddddd]"
                }`}
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && <div className="w-px bg-[#2d5016] self-stretch"></div>}
            </React.Fragment>
          );
        })}

        {/* Divider before CTA */}
        <div className="w-px bg-[#2d5016] self-stretch"></div>

        {/* Call-to-Action Button */}
        <Link
          href="/contact"
          className={`px-5 py-3 font-sans uppercase text-sm font-semibold tracking-wide transition-all duration-200 rounded-r-full text-[#2d5016] ${
            isActive("/contact") ? "bg-[#e75f47] text-[#2d5016] hover:bg-[#ff5252]" : "bg-[#f5f1e8] hover:bg-[#dddddd]"
          }`}
        >
          SCHEDULE SESSION
        </Link>
      </div>

      {/* Mobile/Tablet Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border-2 border-[#2d5016] bg-transparent hover:bg-[#f5f1e8] transition-all duration-200"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`block w-5 h-0.5 bg-[#2d5016] transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}></span>
        <span className={`block w-5 h-0.5 bg-[#2d5016] transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span className={`block w-5 h-0.5 bg-[#2d5016] transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}></span>
      </button>

      {/* Mobile/Tablet Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-[#f5f1e8] z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center w-10 h-10 rounded-full border-2 border-[#2d5016] bg-transparent hover:bg-[#e8e3d8] transition-all duration-200 z-50"
          aria-label="Close menu"
        >
          <svg className="w-5 h-5 text-[#2d5016]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center h-full px-6 py-20 space-y-6">
          {/* Navigation Links */}
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`w-full max-w-xs px-6 py-4 font-sans uppercase text-base font-semibold tracking-wide text-center rounded-full border-2 border-[#2d5016] transition-all duration-200 ${
                  active ? "bg-[#e75f47] text-[#2d5016] hover:bg-[#ff5252]" : "bg-transparent text-[#2d5016] hover:bg-[#e8e3d8]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Call-to-Action Button */}
          <Link
            href="/schedule"
            onClick={() => setIsMenuOpen(false)}
            className={`w-full max-w-xs px-6 py-4 font-sans uppercase text-base font-semibold tracking-wide text-center rounded-full border-2 border-[#2d5016] transition-all duration-200 ${
              isActive("/schedule") ? "bg-[#e75f47] text-[#2d5016] hover:bg-[#ff5252]" : "bg-transparent text-[#2d5016] hover:bg-[#e8e3d8]"
            }`}
          >
            SCHEDULE SESSION
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
