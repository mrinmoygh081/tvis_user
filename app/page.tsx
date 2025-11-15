"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.h1 className="text-3xl font-bold underline" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        Hello world!
      </motion.h1>
    </div>
  );
}
