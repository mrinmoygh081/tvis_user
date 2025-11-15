"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Color constants - not hardcoded
  const colors = {
    primary: "#2d5016", // Dark green
    background: "#f5f1e8", // Light beige
    active: "#ff6b6b", // Orange/coral for active state
    activeHover: "#ff5252", // Darker orange on hover
    hover: "#e8e3d8", // Light beige hover
  };

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT US", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "SHOP", href: "/shop" },
    { label: "BLOG", href: "/blog" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-8 py-6 flex items-center justify-end bg-transparent z-50">
      {/* Navigation Bar */}
      <div className="flex items-stretch border-2 border-[#2d5016] rounded-full overflow-hidden">
        {/* Navigation Links */}
        {navItems.map((item, index) => {
          const active = isActive(item.href);
          return (
            <React.Fragment key={item.label}>
              <Link
                href={item.href}
                className="px-6 py-3 font-sans uppercase text-sm font-semibold tracking-wide transition-all duration-200 text-[#2d5016]"
                style={{
                  backgroundColor: active ? colors.active : colors.background,
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.backgroundColor = colors.hover;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.backgroundColor = colors.background;
                  }
                }}
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
          href="/schedule"
          className="px-6 py-3 font-sans uppercase text-sm font-semibold tracking-wide transition-all duration-200 rounded-r-full text-[#2d5016]"
          style={{
            backgroundColor: isActive("/schedule") ? colors.active : colors.background,
          }}
          onMouseEnter={(e) => {
            if (!isActive("/schedule")) {
              e.currentTarget.style.backgroundColor = colors.hover;
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive("/schedule")) {
              e.currentTarget.style.backgroundColor = colors.background;
            }
          }}
        >
          SCHEDULE SESSION
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
