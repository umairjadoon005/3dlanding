import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#0b0b0c] overflow-hidden">

      {/* Ambient glow background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bg-slate-700/10 blur-[100px] rounded-full animate-pulse" />

      {/* Brand text animation */}
      <div className="relative text-center">

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.2em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-white text-xl md:text-2xl font-light tracking-[0.3em]"
        >
          INNOVELLA KL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-slate-400 text-xs tracking-[0.3em] uppercase"
        >
          Loading...
        </motion.p>

        {/* Minimal progress line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto mt-6"
        />
      </div>
    </div>
  );
};

export default PageLoader;