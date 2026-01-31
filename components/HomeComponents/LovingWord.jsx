"use client";
import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "@/data/testimonials";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const blurVariants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const LovingWord = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-8">
      <motion.div className="w-full mx-auto text-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
        {/* Heading */}
        <motion.h2 className="font-laluxes text-[#ff8a80] text-5xl md:text-6xl lg:text-8xl mb-8" variants={blurVariants}>
          {/* Loving Words */} Testimonials
        </motion.h2>

        {/* <motion.h3 className="font-marcellus text-[#2d5016] text-xl md:text-2xl lg:text-3xl mb-12 font-medium" variants={blurVariants}>
          We have blossomed to new heights
        </motion.h3> */}

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          // autoplay={{ delay: 5000 }}
          loop={true}
          className="max-w-5xl mx-auto testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div>
                <p className="text-[#2d5016] text-base md:text-lg lg:text-xl leading-relaxed mb-8 whitespace-pre-line">{item.text}</p>
                <p className="font-askha text-[#2d5016] text-sm md:text-base lg:text-lg font-semibold uppercase tracking-[3px]">{item.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default LovingWord;
