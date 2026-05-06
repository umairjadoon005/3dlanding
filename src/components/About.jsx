import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
// Note: Adjusted the fadeIn duration directly in the component for a premium feel
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  // Luxury Easing for consistent brand feel
  const luxEasing = [0.19, 1, 0.22, 1];

  return (
    <section className="relative text-center max-w-5xl mx-auto py-20">
      
      {/* 🔵 SUBTLE BACKGROUND ACCENT 
          Adds that "richer premium-tech atmosphere" without being overpowering
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/[0.03] blur-[120px] pointer-events-none z-0" />

      {/* HEADER */}
      <motion.div 
        variants={textVariant(0.5)} // Added delay for a more sequential flow from Hero
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={`${styles.sectionSubText} tracking-[0.6em] uppercase text-cyan-400/60 font-light mb-2`}>
          Introduction
        </p>

        <h2 className={`${styles.sectionHeadText} text-white font-extralight tracking-tight`}>
          A different approach to innovation
          <motion.span 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-cyan-400"
          >
            .
          </motion.span>
        </h2>
        
        {/* ENHANCED BLUE LINE 
            A "slightly thicker illuminated line" to ground the header
        */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "80px", opacity: 1 }}
          transition={{ duration: 2.5, delay: 1, ease: luxEasing }}
          className="h-[1px] bg-cyan-400/50 mx-auto mt-4 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
        />
      </motion.div>

      {/* BODY TEXT - Slower durations (1.5s - 2s) for confidence and restraint */}
      <div className="relative z-10">
        <motion.p
          variants={fadeIn("up", "tween", 0.8, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 text-slate-400 text-[18px] md:text-[20px] leading-[1.8] max-w-3xl mx-auto font-light tracking-wide"
        >
          Innovella KL is not simply a software provider — it is a transformation partner 
          focused on redefining how modern systems operate. We move beyond isolated solutions, 
          designing <span className="text-white/80">intelligent environments</span> where technology, process, and space work in 
          complete harmony.
        </motion.p>

        <motion.p
          variants={fadeIn("up", "tween", 1.2, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 text-slate-400 text-[18px] md:text-[20px] leading-[1.8] max-w-3xl mx-auto font-light tracking-wide"
        >
          Our philosophy is grounded in continuous, measurable refinement. Every system we 
          design is built to evolve — bringing clarity, control, and long-term performance 
          without unnecessary complexity.
        </motion.p>

        <motion.p
          variants={fadeIn("up", "tween", 1.6, 2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 text-cyan-100/80 text-[19px] md:text-[21px] leading-relaxed max-w-3xl mx-auto font-extralight italic tracking-[0.05em]"
        >
          "Because true innovation is not noise — it is precision, calm, and mastery."
        </motion.p>
      </div>

      {/* SECTION DIVIDER GLOW
          Soft background motion requested by client for visual continuity
      */}
      <motion.div 
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.05, 1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
      />

    </section>
  );
};

export default SectionWrapper(About, "about");