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
      variants={fadeIn("up", "tween", index * 0.15, 0.8)}
      className="w-full sm:w-[280px] group"
    >
      <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-cyan-400/40 transition-all duration-700">
        <div className="relative bg-[#0b0b0c] rounded-2xl p-8 min-h-[260px] flex flex-col justify-between">

          {/* subtle glow */}
          <div className="absolute w-[100px] h-[100px] bg-cyan-400/5 blur-[60px] top-[-20px] right-[-20px] opacity-0 group-hover:opacity-100 transition duration-700" />

          <div>
            <div className="mb-6 p-3 rounded-xl border border-white/5 bg-white/5 group-hover:border-cyan-400/30 transition duration-500 w-fit">
              {icon}
            </div>

            <h3 className="text-white text-[18px] font-light tracking-wide">
              {name}
            </h3>

            <p className="mt-3 text-slate-400 text-[14px] leading-relaxed font-light">
              {description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5">
            <p
              className={`text-[10px] tracking-[0.3em] uppercase ${color} opacity-70`}
            >
              {tag}
            </p>
          </div>
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