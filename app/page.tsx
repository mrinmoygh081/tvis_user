"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HomeComponents/HeroSection";
import AreYouReady from "@/components/HomeComponents/AreYouReady";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <AreYouReady />
   </div>
  );
}
