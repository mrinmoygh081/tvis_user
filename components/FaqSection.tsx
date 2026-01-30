"use client";

import { servicesFAQs } from "@/data/services";
import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full">
      <div className="border rounded-2xl overflow-hidden border-[#d5c2a0]">
        {servicesFAQs.map((item, index) => (
          <div key={index} className={`${openIndex === index && "bg-white"}`}>
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-white transition"
            >
              <span className="font-medium text-base">{item.q}</span>

              <span className={`text-2xl transition-transform duration-600 ${openIndex === index ? "rotate-45" : ""}`}>+</span>
            </button>

            <div className={`overflow-hidden transition-all duration-600 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-6 pb-6 text-sm text-gray-700">{item.a}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
