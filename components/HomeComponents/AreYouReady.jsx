"use client";
import Image from "next/image";
import React from "react";
import leftsideImg from "../../public/asset/images/leftSideImg.jpg";

const AreYouReady = () => {
  return (
    <section className="w-full flex min-h-screen">
      {/* Left Column - Image */}
      <div className="w-[40%] relative">
        <Image src="/asset/images/leftSideImg.jpg" alt="Spiritual crystals and herbs" fill className="object-cover" priority />
      </div>

      {/* Right Column - Form */}
      <div className="w-[60%] bg-[#d4d9c4] flex flex-col justify-center px-0 py-0">
        <div className="px-10 mx-auto w-full">
          {/* Headline */}
          <h2 className="text-[#2d5016] font-sans text-3xl md:text-4xl font-bold mb-6">Are you ready for a soul-altering transformation?</h2>

          {/* Sub-headlines */}
          <p className="text-[#2d5016] font-sans text-base md:text-lg italic mb-2">This is the sign from the Universe you have been waiting for...</p>
          <p className="text-[#2d5016] font-sans text-base md:text-lg italic mb-8">All you need to do is say YES TO YOU!</p>

          {/* Form */}
          <form className="space-y-4">
            {/* Row 1: First Name and Last Name */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-[#2d5016] font-sans text-sm mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-[#2d5016] rounded bg-transparent text-[#2d5016] font-sans focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-[#2d5016] font-sans text-sm mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-[#2d5016] rounded bg-transparent text-[#2d5016] font-sans focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
                />
              </div>
            </div>

            {/* Row 2: Email and Phone */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="block text-[#2d5016] font-sans text-sm mb-1">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-[#2d5016] rounded bg-transparent text-[#2d5016] font-sans focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="phone" className="block text-[#2d5016] font-sans text-sm mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-2 border border-[#2d5016] rounded bg-transparent text-[#2d5016] font-sans focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
                />
              </div>
            </div>

            {/* Row 3: Message */}
            <div>
              <label htmlFor="message" className="block text-[#2d5016] font-sans text-sm mb-1">
                Message <span className="text-red-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-[#2d5016] rounded bg-transparent text-[#2d5016] font-sans resize-none focus:outline-none focus:ring-2 focus:ring-[#2d5016]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full py-3 px-6 bg-[#ff6b6b] text-white font-sans font-semibold rounded-lg hover:bg-[#ff5252] transition-colors duration-200 mt-6">
              BOOK A SESSION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AreYouReady;
