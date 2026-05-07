import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, Brain, LayoutGrid, BarChart3 } from "lucide-react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const outcomes = [
  {
    name: "Improved Efficiency",
    description:
      "Eliminate operational lag with automated systems that synchronize your team’s output and reduce manual overhead.",
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    tag: "Productivity",
    color: "text-cyan-400",
  },
  {
    name: "Cost Optimization",
    description:
      "Optimize resource allocation and reduce waste through data-driven insights that protect your bottom line.",
    icon: <BarChart3 className="w-6 h-6 text-slate-300" />,
    tag: "ROI",
    color: "text-slate-400",
  },
  {
    name: "Smarter Workflows",
    description:
      "Design intelligent pathways that simplify complex organizational processes.",
    icon: <Brain className="w-6 h-6 text-slate-300" />,
    tag: "Transformation",
    color: "text-slate-400",
  },
  {
    name: "Spatial Optimization",
    description:
      "Maximize every square inch through advanced spatial analytics and intelligent layout systems.",
    icon: <LayoutGrid className="w-6 h-6 text-slate-300" />,
    tag: "Utilization",
    color: "text-slate-400",
  },
  {
    name: "Reduced Errors",
    description:
      "Use 3D and VR previews to identify and eliminate issues before execution begins.",
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    tag: "Precision",
    color: "text-cyan-400",
  },
];

const OutcomeCard = ({ index, name, description, icon, tag, color }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", index * 0.18, 1)}
      whileHover={{ y: -8 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }} // Synced duration
      className="w-full sm:w-[300px] group"
    >
      {/* OUTER CONTAINER - Handling the dynamic border glow */}
      <div className="relative p-[1px] rounded-[30px] bg-white/10 group-hover:bg-cyan-400/60 transition-all duration-1000 overflow-hidden group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]">

        {/* MAIN CARD BODY */}
        <div className="relative bg-[#0b0b0c] backdrop-blur-xl rounded-[30px] p-8 min-h-[290px] flex flex-col justify-between border border-transparent">
          
          {/* Ambient Background Glow */}
          <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/[0.02] transition-colors duration-1000" />

          <div className="relative z-10">
            {/* ICON - Synced with button-style hover */}
            <div className="mb-7 p-4 rounded-2xl border border-white/5 bg-white/[0.03] group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.05] transition-all duration-1000 w-fit">
              <div className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
                {icon}
              </div>
            </div>

            {/* TITLE */}
            <h3 className="text-white text-[20px] font-extralight tracking-[0.03em] leading-snug">
              {name}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 text-slate-400 text-[15px] leading-[1.9] font-light">
              {description}
            </p>
          </div>

          {/* FOOTER */}
          <div className="relative z-10 mt-8 pt-5 border-t border-white/[0.05]">
            <p className={`text-[10px] tracking-[0.35em] uppercase ${color} opacity-60 group-hover:opacity-100 transition-all duration-1000 font-light`}>
              {tag}
            </p>
          </div>

          {/* BOTTOM GLOW LINE - Exact match to the "Explore" style */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/3 h-[1px] bg-cyan-400/50 transition-all duration-1000" />
        </div>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <section className="relative">

      {/* HEADER */}
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} tracking-[0.4em] uppercase text-cyan-400/70`}>
          Value
        </p>

        <h2 className={`${styles.sectionHeadText} text-white font-light`}>
          Outcomes that matter<span className="text-cyan-400">.</span>
        </h2>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-6 text-slate-400 text-center max-w-2xl mx-auto leading-relaxed font-light"
      >
        We focus on meaningful transformation — delivering systems that enhance
        clarity, reduce friction, and create long-term operational excellence.
      </motion.p>

      {/* GRID */}
      <div className="mt-20 flex flex-wrap justify-center gap-8">
        {outcomes.map((outcome, index) => (
          <OutcomeCard key={index} index={index} {...outcome} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(WhyChooseUs, "why-choose-us");