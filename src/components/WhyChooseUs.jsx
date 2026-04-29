import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Update this constant in your constants/index.js or define it here
const outcomes = [
  {
    name: "Improved Efficiency",
    description: "Eliminate operational lag with automated systems that synchronize your team’s output and reduce manual overhead.",
    icon: "⚡", // Replace with high-quality SVG or Image imports
    tag: "Productivity",
    color: "blue-text-gradient",
  },
  {
    name: "Cost Savings",
    description: "Optimize resource allocation and reduce waste through data-driven insights that protect your bottom line.",
    icon: "💰",
    tag: "ROI",
    color: "green-text-gradient",
  },
  {
    name: "Smarter Workflows",
    description: "Not just digital tools, but evolved processes. We design intelligent pathways that simplify complex organizational tasks.",
    icon: "🧠",
    tag: "Transformation",
    color: "pink-text-gradient",
  },
  {
    name: "Spatial Optimization",
    description: "Maximize every square inch. Our spatial analytics ensure your physical assets are utilized to their peak performance.",
    icon: "📐",
    tag: "Utilization",
    color: "orange-text-gradient",
  },
  {
    name: "Reduced Mistakes",
    description: "Bridge the gap between imagination and reality with 3D/VR previews that catch errors before construction begins.",
    icon: "🛡️",
    tag: "Precision",
    color: "blue-text-gradient",
  }
];

const OutcomeCard = ({ index, name, description, icon, tag, color }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.4, 0.75)}>
      <Tilt
        options={{ max: 25, scale: 1.05, speed: 450 }}
        className='bg-tertiary p-8 rounded-2xl sm:w-[320px] w-full min-h-[380px] flex flex-col justify-between border-b-4 border-transparent hover:border-teal-500 transition-all shadow-card'
      >
        <div>
          <div className='w-16 h-16 rounded-full flex justify-center items-center bg-black-200 text-[32px] mb-5'>
            {icon}
          </div>

          <div className='mt-2'>
            <h3 className='text-white font-bold text-[22px] tracking-tight'>{name}</h3>
            <p className='mt-3 text-secondary text-[15px] leading-relaxed'>
              {description}
            </p>
          </div>
        </div>

        <div className='mt-6'>
          <p className={`text-[14px] font-semibold tracking-widest uppercase ${color}`}>
            #{tag}
          </p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Value We Deliver</p>
        <h2 className={styles.sectionHeadText}>Why Partner with Innovella KL?</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          We aren't just software providers; we are transformation partners. Our approach 
          goes beyond "solving" problems—we focus on fundamental improvement, 
          ensuring your business is more resilient, efficient, and future-ready.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {outcomes.map((outcome, index) => (
          <OutcomeCard key={`outcome-${index}`} index={index} {...outcome} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WhyChooseUs, "why-choose-us");