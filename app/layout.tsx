import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "@/components/LayoutComponents/Navbar";
import Footer from "@/components/LayoutComponents/Footer";

const laLuxes = localFont({
  src: [{ path: "./fonts/LaLuxesScript-Regular.woff2", weight: "400", style: "normal" }],
  variable: "--font-laluxes",
});

const askha = localFont({
  src: [{ path: "./fonts/askha.woff2", weight: "400", style: "normal" }],
  variable: "--font-askha",
});

const quahon = localFont({
  src: [{ path: "./fonts/Quahon.woff2", weight: "400", style: "normal" }],
  variable: "--font-quahon",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ overflowX: "hidden" }}>
      <body className={`${laLuxes.variable} ${askha.variable} ${quahon.variable} antialiased overflow-x-hidden`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Ensure hero section doesn't create scrollbar on initial load
                // The hero section CSS already handles this with overflow-y: hidden
                // This script just ensures smooth initial render
                window.addEventListener('load', function() {
                  // Force reflow to ensure hero section height is calculated correctly
                  const heroSection = document.querySelector('[class*="bg-[#F3EDE5]"]');
                  if (heroSection) {
                    heroSection.style.height = '100vh';
                    heroSection.style.maxHeight = '100vh';
                    heroSection.style.overflowY = 'hidden';
                  }
                });
              })();
            `,
          }}
        />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
