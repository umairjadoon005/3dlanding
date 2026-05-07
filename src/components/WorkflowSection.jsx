import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Cpu, LineChart } from "lucide-react";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const steps = [
  {
    title: "Diagnose",
    description:
      "Analyzing systems, workflows, and constraints to understand the true source of inefficiency.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    title: "Design",
    description:
      "Creating structured, intelligent solutions that define a clear and efficient operational path.",
    icon: <PenTool className="w-5 h-5" />,
  },
  {
    title: "Build",
    description:
      "Engineering and integrating systems seamlessly into your environment with precision.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    title: "Improve",
    description:
      "Continuously refining performance to ensure long-term clarity, efficiency, and growth.",
    icon: <LineChart className="w-5 h-5" />,
  },
];

const WorkflowSection = () => {
  return (
    <section className="bg-[#0b0b0c] py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div variants={textVariant()} className="text-center">
          <p className={`${styles.sectionSubText} tracking-[0.4em] uppercase text-cyan-400/70`}>
            Process
          </p>

          <h2 className={`${styles.sectionHeadText} text-white font-light`}>
            A structured approach to transformation<span className="text-cyan-400">.</span>
          </h2>
        </motion.div>

        {/* SUBTEXT */}
        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-6 text-slate-400 text-center max-w-2xl mx-auto leading-relaxed font-light"
        >
          Every engagement follows a precise and methodical framework — ensuring clarity, 
          control, and measurable progress at every stage.
        </motion.p>

        {/* STEPS */}
        <div className="mt-20 grid md:grid-cols-4 gap-10">

      {steps.map((step, index) => (
  <motion.div
    key={index}
    variants={fadeIn("up", "tween", index * 0.18, 1)}
    whileHover={{ y: -6 }}
    transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
    className="relative text-center group px-4 py-8 rounded-[28px] border border-white/10 bg-[#0b0b0c] overflow-hidden hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-1000"
  >
    {/* AMBIENT INTERNAL GLOW */}
    <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/[0.02] transition-colors duration-1000 pointer-events-none" />

    {/* ICON - Synced with button styling */}
    <div className="relative z-10 mx-auto w-16 h-16 flex items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-slate-400 group-hover:text-cyan-300 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all duration-1000">
      <div className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
        {step.icon}
      </div>
    </div>

    {/* TITLE - Matched to the wide tracking of the button */}
    <h4 className="relative z-10 mt-7 text-white text-[13px] tracking-[0.25em] uppercase font-light opacity-80 group-hover:opacity-100 transition-all duration-1000">
      {step.title}
    </h4>

    {/* CENTER DIVIDER LINE */}
    <div className="relative z-10 mx-auto mt-4 w-6 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-cyan-400/60 transition-all duration-1000" />

    {/* DESCRIPTION */}
    <p className="relative z-10 mt-5 text-slate-400 text-[14px] leading-[1.8] font-light px-2 opacity-90">
      {step.description}
    </p>

    {/* BOTTOM ACCENT LINE */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/3 h-[1px] bg-cyan-400/50 transition-all duration-1000" />
  </motion.div>
))}

        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(WorkflowSection, "workflow");