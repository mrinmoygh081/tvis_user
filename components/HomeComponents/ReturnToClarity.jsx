"use client";

import React from "react";
import Image from "next/image";
import profileImg from "../../public/asset/images/HerosecImg/profile.jpg";

const ReturnToClarity = () => {
  return (
    <section className="bg-[#d5dacd] text-[#244a37]">
      <div className="mx-auto w-full lg:max-w-[1400px] px-6 md:px-10 py-10 md:py-16 min-h-screen flex flex-col md:flex-row">

        {/* LEFT: 2/5 on md+, centered on mobile */}
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-center lg:items-start justify-center md:justify-center lg:justify-center gap-6 py-8 md:py-12 ">
          <div className="flex flex-col items-center justify-center w-full ">
         
             {/* Circular photo */}
             <div className="relative rounded-full overflow-hidden border-2 border-transparent shadow-sm bg-white
                            w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 mx-auto">
              {/* Use fill with parent sized element */}
              <Image src={profileImg} alt="Smita Saha - Certified Energy Healer" className="object-cover" fill />
            </div>

            {/* Signature */}
            <div className="text-center md:text-center lg:text-left mt-4">
              {/* Replace 'font-handwritten' with your signature font utility if available */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-laluxes leading-tight text-center">
                Smita Saha
              </h3>
              <p className="mt-2 text-sm sm:text-base md:text-base font-semibold text-center">Certified Energy Healer</p>
            </div>

            {/* Stats row — side-by-side, wraps on very small screens */}
            <div className="w-full max-w-md mt-6 flex justify-center  items-center ">
              <div className="flex flex-wrap justify-center items-center gap-8">
                <div className="text-center  flex flex-col justify-center items-center">
                  <p className="text-2xl sm:text-3xl md:text-3xl font-semibold">800+</p>
                  <p className="mt-1 text-sm sm:text-base md:text-base font-medium">Sessions</p>
                </div>

                <div className="text-center  flex flex-col justify-center items-center">
                  <p className="text-2xl sm:text-3xl md:text-3xl font-semibold">14+</p>
                  <p className="mt-1 text-sm sm:text-base md:text-base font-medium">Modalities</p>
                </div>
              </div>
            </div>
         
          </div>
        </div>

        {/* RIGHT: 3/5 on md+ — content stacks under left on mobile */}
        <div className="w-full md:w-3/5 mt-8 md:mt-0 md:pl-8 lg:pl-12 flex flex-col justify-start">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-3">
            “A Return to Clarity”
          </h2>

          <p className="text-sm sm:text-base md:text-base leading-relaxed">
            <strong className="italic">
              Smita Saha, is a professional certified “Psychic Energy Healing Therapist and a Reiki Grandmaster”,
            </strong>{" "}
            based out of Bangalore, India.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-base leading-relaxed">
            I am an intuitive Psychic Energy Healer dedicated to helping individuals unlock their inner
            potentials. I have experienced clairvoyance and psychic occurrences from an early age and
            under divine guidance, I was nudged to pursue the path of a professional energy healing
            therapist after a corporate career in fashion & retail spanning over 17+ years.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-base leading-relaxed">
            With a profound connection to the unseen realms, I practise and offer transformative healing
            experiences through various healing modalities like{" "}
            <strong className="italic">
              PLR (Past Life Regression), Reiki Healing, Akashic Records, Life Between Life Therapist, Psychic Surgery,
              Inner Child Healing, Oracle Card Reading, Animal Telepathic Communication, EFT (Emotional Freedom Technique)
            </strong>
            , and Ho’oponopono Master. I also offer Angelic Healing, Chakra Balancing, EMDR, Ancestor Healing, and Family
            Constellations.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-base leading-relaxed">
            <strong className="font-semibold">With more than 800+ client sessions and 14+ healing modalities,</strong>{" "}
            I continue to serve people with a compassionate and personalised approach, helping them to step into their
            fullest potential and live a life filled with purpose, love, and light.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-base leading-relaxed">
            Beyond my one-on-one sessions, I was encouraged to share the universal energy more widely. Which inspired me
            to initiate TVIS, the healing light™, a brand that offers pure energised luxury wellness products in small
            batches. Each product is meticulously handcrafted and energised to radiate positive energy, transforming body
            & soul into a sanctuary of peace and light.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-base leading-relaxed">
            My life’s purpose, passion, and joy lies in channeling this universal light energy for collective spiritual expansion.
          </p>

          <p className="mt-6 italic font-semibold text-sm sm:text-base md:text-base">
            Discover the Healing Light within, with me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReturnToClarity;
