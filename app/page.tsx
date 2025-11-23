"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HomeComponents/HeroSection";
import AreYouReady from "@/components/HomeComponents/AreYouReady";
import LovingWord from "@/components/HomeComponents/LovingWord";
import MarqueeComponent from "../components/HomeComponents/MarqueeComponent";
import ReturnToClarity from "../components/HomeComponents/ReturnToClarity";
import HealingServices from "../components/HomeComponents/HealingServices";
import GiftOfLight from "../components/HomeComponents/GiftOfLight";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ReturnToClarity />
      <HealingServices />
      <MarqueeComponent />
      <GiftOfLight />
      <LovingWord />
      <AreYouReady />
    </div>
  );
}
