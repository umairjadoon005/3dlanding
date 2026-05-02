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
    {/* Outer subtle frame */}
    <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-400/40 transition-all duration-700">
      
      {/* Inner container */}
      <div className="relative bg-[#0b0b0c] rounded-2xl py-10 px-8 min-h-[260px] flex flex-col items-center justify-center overflow-hidden">

        {/* Ambient glow (very subtle, premium feel) */}
        <div className="absolute w-[120px] h-[120px] bg-cyan-400/5 blur-[60px] top-[-30px] right-[-30px] opacity-0 group-hover:opacity-100 transition duration-700" />

        {/* Icon container */}
        <div className="mb-6 p-4 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm group-hover:border-cyan-400/30 transition duration-500">
          <img
            src={icon}
            alt={title}
            className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* Title */}
        <h3 className="text-slate-300 text-[16px] tracking-wide text-center font-light group-hover:text-white transition duration-300">
          {title}
        </h3>

        {/* Minimal indicator line */}
        <div className="mt-4 h-[1px] w-6 bg-slate-700 group-hover:w-12 group-hover:bg-cyan-400 transition-all duration-500" />
      </div>
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