import React from 'react'
import Image from "next/image";
import backGroundImg from "../../public/asset/images/GiftOfLightBG.jpg";

const GiftOfLight = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* Background */}
      <Image
        src={backGroundImg}
        alt="Gift Of Light Background"
        fill
        priority
        className="object-cover object-center z-0"
        sizes="100vw"
      />

      {/* CONTENT OVERLAY */}
      <div className="relative z-10 w-full h-full flex items-center">
        
        {/* FLEX CONTAINER (LEFT IMG ALREADY EXISTS IN BG) */}
        <div className="w-full  flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-10 bg-rose-600">

          {/* LEFT side is already placed in your background image */}

          {/* RIGHT SIDE CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            {/* Star Icon */}
            <div className="flex justify-center md:justify-start mb-3">
              <span className="text-3xl text-[#244a37]">✦</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#244a37] font-semibold leading-tight">
              “A Gift Of Light That Heals”
            </h2>

            {/* Subheading */}
            <p className="mt-4 text-base md:text-lg text-[#244a37] font-medium leading-relaxed max-w-lg">
              Envelop your space in serene light and restorative energy with our reiki-infused luxury crystal candles.
            </p>

            {/* FEATURES ROW */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-10">

              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#244a37] flex items-center justify-center text-[#d5dacd] text-2xl">
                  ●
                </div>
                <p className="mt-3 text-sm md:text-base text-[#244a37] font-semibold text-center">
                  AA+ GRADE<br/>SOY WAX
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#244a37] flex items-center justify-center text-[#d5dacd] text-2xl">
                  💧
                </div>
                <p className="mt-3 text-sm md:text-base text-[#244a37] font-semibold text-center">
                  100% NATURAL<br/>ESSENTIAL OILS
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#244a37] flex items-center justify-center text-[#d5dacd] text-2xl">
                  ✦
                </div>
                <p className="mt-3 text-sm md:text-base text-[#244a37] font-semibold text-center">
                  NATURAL HEALING<br/>CRYSTALS
                </p>
              </div>

            </div>

            {/* SHOP NOW BUTTON */}
            <div className="mt-10">
              <button className="px-8 py-3 bg-[#FF8F71] text-white rounded-full font-medium shadow-md hover:opacity-90 transition">
                Shop Now
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GiftOfLight;
