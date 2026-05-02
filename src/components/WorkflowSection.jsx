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
              variants={fadeIn("up", "tween", index * 0.15, 0.8)}
              className="text-center group"
            >
              {/* ICON */}
              <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full border border-white/10 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-400/40 transition duration-500">
                {step.icon}
              </div>

              {/* TITLE */}
              <h4 className="mt-6 text-white text-[15px] tracking-[0.2em] uppercase font-light">
                {step.title}
              </h4>

              {/* LINE */}
              <div className="mx-auto mt-3 w-6 h-[1px] bg-slate-700 group-hover:w-10 group-hover:bg-cyan-400 transition-all duration-500" />

              {/* DESCRIPTION */}
              <p className="mt-4 text-slate-400 text-sm leading-relaxed font-light px-2">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(WorkflowSection, "workflow");