"use client";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeComponent = () => {
  const services = ["Reiki Healing", "Guided Meditations", "Past Life Regression"];

  return (
    <section className="w-full bg-[#e75f47] relative overflow-hidden">
      <div className="py-8 md:py-10 overflow-hidden">
        <Marquee speed={50} gradient={false} pauseOnHover={false} autoFill={true} className="marquee-seamless">
          {services.map((service, idx) => (
            <div key={idx} className="flex items-center justify-center whitespace-nowrap">
              <span className="font-quahon text-[#2d5016] text-2xl md:text-3xl lg:text-5xl font-medium leading-none">
                {service}
              </span>

              <div className="mx-6 flex items-center justify-center">
                <div className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full bg-[#d5dacd] flex-shrink-0" />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default MarqueeComponent;
