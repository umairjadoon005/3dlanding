import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("up", "tween", index * 0.15, 0.8)}
    className="w-full sm:w-[280px] group"
  >
    {/* Main Card Container */}
    <div className="relative bg-[#0b0b0c] rounded-3xl p-8 min-h-[280px] flex flex-col items-center justify-center overflow-hidden border border-white/10 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-1000">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/[0.03] transition-colors duration-1000" />

      {/* Icon container */}
      <div className="relative z-10 mb-8 p-6 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm group-hover:border-cyan-400/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-1000">
        <img
          src={icon}
          alt={title}
          className="w-12 h-12 object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
        />
      </div>

      {/* Title - Matched to button tracking and style */}
      <h3 className="relative z-10 text-white text-[11px] tracking-[0.2em] uppercase text-center font-medium opacity-70 group-hover:opacity-100 transition-all duration-1000">
        {title}
      </h3>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-cyan-400/50 group-hover:w-1/4 transition-all duration-1000" />
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section className="relative">

      {/* HEADER */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} tracking-[0.4em] uppercase text-cyan-400/70`}>
          Capabilities
        </p>

        <h2 className={`${styles.sectionHeadText} text-white font-light`}>
          Systems designed for clarity<span className="text-cyan-400">.</span>
        </h2>
      </motion.div>

      {/* SUBTEXT */}
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-6 text-slate-400 text-[16px] max-w-2xl mx-auto text-center leading-relaxed font-light"
      >
        We simplify complexity through intelligent design — delivering
        precision-engineered solutions across software, systems, and spatial environments.
      </motion.p>

      {/* SERVICES GRID */}
      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Services, "services");