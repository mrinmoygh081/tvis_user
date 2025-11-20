"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import profileImg from "../../public/asset/images/HerosecImg/profile.jpg";

// Count Up Number Component
const CountUpNumber = ({ target, suffix = "+", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView && !isVisible) {
      setIsVisible(true);
      let startTime = null;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * target));
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, isVisible, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const ReturnToClarity = () => {
  const sectionRef = useRef(null);
  const rightColumnRef = useRef(null);
  const statsRef = useRef(null);
  const rightInView = useInView(rightColumnRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ y }}
      className="bg-[#d5dacd] text-[#244a37] relative z-10"
    >
      <motion.div
        className="mx-auto w-full lg:max-w-[1400px] px-6 md:px-10 py-10 md:py-16 min-h-screen flex flex-col md:flex-row"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* LEFT: 2/5 on md+, centered on mobile */}
        <div className="w-full md:w-2/5 flex flex-col items-center md:items-center lg:items-start justify-center md:justify-center lg:justify-center gap-6 py-8 md:py-12 ">
          <div className="flex flex-col items-center justify-center w-full ">
            {/* Circular photo */}
            <motion.div
              className="relative rounded-full overflow-hidden border-2 border-transparent shadow-sm bg-white w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 mx-auto"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={profileImg} alt="Smita Saha - Certified Energy Healer" className="object-cover" fill />
            </motion.div>

            {/* Signature */}
            <div className="text-center md:text-center lg:text-left mt-2">
              <motion.h3
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-laluxes leading-tight text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                Smita Saha
              </motion.h3>
              <motion.p
                className="mt-2 text-sm sm:text-base md:text-base font-semibold text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Certified Energy Healer
              </motion.p>
            </div>

            {/* Stats row */}
            <motion.div
              ref={statsRef}
              className="w-full max-w-md mt-6 flex justify-center  items-center "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="flex flex-wrap justify-center items-center gap-8">
                {[
                  { value: 800, label: "Sessions" },
                  { value: 14, label: "Modalities" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    className="text-center  flex flex-col justify-center items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  >
                    <p className="text-2xl sm:text-3xl md:text-3xl font-semibold">
                      <CountUpNumber target={stat.value} suffix="+" duration={2} />
                    </p>
                    <p className="mt-1 text-sm sm:text-base md:text-base font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT */}
        <div ref={rightColumnRef} className="w-full md:w-3/5 mt-8 md:mt-0 md:pl-8 lg:pl-12 flex flex-col justify-start">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            “A Return to Clarity”
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-base leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <strong className="italic">Smita Saha, is a professional certified “Psychic Energy Healing Therapist and a Reiki Grandmaster”,</strong> based out of Bangalore, India.
          </motion.p>

          <motion.p
            className="mt-2 text-sm sm:text-base md:text-base leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            I am an intuitive Psychic Energy Healer dedicated to helping individuals unlock their inner potentials. I have experienced clairvoyance and psychic occurrences from an
            early age and under divine guidance, I was nudged to pursue the path of a professional energy healing therapist after a corporate career in fashion & retail spanning
            over 17+ years.
          </motion.p>

          <motion.p
            className="mt-2 text-sm sm:text-base md:text-base leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            With a profound connection to the unseen realms, I practise and offer transformative healing experiences through various healing modalities like{" "}
            <strong className="italic">
              PLR (Past Life Regression), Reiki Healing, Akashic Records, Life Between Life Therapist, Psychic Surgery, Inner Child Healing, Oracle Card Reading, Animal Telepathic
              Communication, EFT (Emotional Freedom Technique)
            </strong>
            , and Ho’oponopono Master. I also offer Angelic Healing, Chakra Balancing, EMDR, Ancestor Healing, and Family Constellations.
          </motion.p>

          <motion.p
            className="mt-2 text-sm sm:text-base md:text-base leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <strong className="font-semibold">With more than 800+ client sessions and 14+ healing modalities,</strong> I continue to serve people with a compassionate and
            personalised approach, helping them to step into their fullest potential and live a life filled with purpose, love, and light.
          </motion.p>

          <motion.p
            className="mt-2 text-sm sm:text-base md:text-base leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Beyond my one-on-one sessions, I was encouraged to share the universal energy more widely. Which inspired me to initiate TVIS, the healing light™, a brand that offers
            pure energised luxury wellness products in small batches. Each product is meticulously handcrafted and energised to radiate positive energy, transforming body & soul
            into a sanctuary of peace and light.
          </motion.p>

          <motion.p
            className="mt-2 text-sm sm:text-base md:text-base leading-relaxed"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            My life’s purpose, passion, and joy lies in channeling this universal light energy for collective spiritual expansion.
          </motion.p>

          <motion.p
            className="mt-6 italic font-semibold text-sm sm:text-base md:text-base"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Discover the Healing Light within, with me.
          </motion.p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ReturnToClarity;
