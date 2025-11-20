"use client";

import React from "react";
import Image from "next/image";
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

const Icon = ({ name }) => {
  // simple inline svgs; style colors by currentColor
  const size = 20;
  switch (name) {
    case "drop":
      return (
        <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 3s5 5 5 9a5 5 0 1 1-10 0c0-4 5-9 5-9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "cup":
      return (
        <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M3 7h14v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 8v2a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "spiral":
      return (
        <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
          <path d="M12 20a6 6 0 1 0 0-12 4 4 0 1 1 0 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "sun":
      return (
        <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function HealingServices() {
  return (
    <section className="relative w-full overflow-hidden bg-[#123a30] text-[#e9f0ea]">
      {/* decorative background */}
      <Image
        src={greenBg}
        alt="Decorative background"
        fill
        priority
        className="object-cover object-right-bottom opacity-100"
        sizes="100vw"
      />

      {/* content container */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 py-20 md:py-28 lg:py-36">
        {/* Title */}
        <header className="mb-10 md:mb-14 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-tight">
            <span className="mr-2">Reiki &amp; Other</span>
            <span className="inline-block bg-[#15382f]/70 px-3 py-1 rounded-sm text-[#d7f0e5]">Healing Services</span>
          </h2>
        </header>

        {/* layout: list left, empty right (background decoration sits on right) */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* left column (services) */}
          <div className="md:w-3/5">
            <ul className="space-y-8">
              {services.map((s, i) => (
                <li key={s.title} className="flex items-start gap-6 md:gap-8">
                  {/* icon badge */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#e9f0ea] text-[#123a30] flex items-center justify-center shadow-sm">
                      <Icon name={s.icon} />
                    </div>
                  </div>

                  {/* text */}
                  <div className="min-w-0">
                    <h3 className="text-base md:text-lg font-semibold text-[#ff8f71] mb-2">{s.title}</h3>
                    <p className="text-sm md:text-base leading-relaxed text-[#dfe9e3]">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
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
