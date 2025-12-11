"use client";

import { motion } from "framer-motion";

export function Loader() {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <motion.img
        src="/logo.png" // <-- replace with your logo path
        alt="Logo"
        className="w-24 h-24"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Pulsing ring animation */}
      <motion.div
        className="absolute w-32 h-32 border-4 border-primary rounded-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [1, 0],
          scale: [1, 1.5],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </div>
  );
}
