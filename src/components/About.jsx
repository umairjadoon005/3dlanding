import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <section className="relative text-center max-w-5xl mx-auto">

      {/* HEADER */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} tracking-[0.4em] uppercase text-cyan-400/70`}>
          Introduction
        </p>

        <h2 className={`${styles.sectionHeadText} text-white font-light`}>
          A different approach to innovation<span className="text-cyan-400">.</span>
        </h2>
      </motion.div>

      {/* BODY TEXT */}
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-8 text-slate-400 text-[17px] leading-relaxed max-w-3xl mx-auto font-light"
      >
        Innovella KL is not simply a software provider — it is a transformation partner 
        focused on redefining how modern systems operate. We move beyond isolated solutions, 
        designing intelligent environments where technology, process, and space work in 
        complete harmony.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.4, 1)}
        className="mt-6 text-slate-400 text-[17px] leading-relaxed max-w-3xl mx-auto font-light"
      >
        Our philosophy is grounded in continuous, measurable refinement. Every system we 
        design is built to evolve — bringing clarity, control, and long-term performance 
        without unnecessary complexity.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.6, 1)}
        className="mt-6 text-slate-300 text-[17px] leading-relaxed max-w-3xl mx-auto font-light"
      >
        Because true innovation is not noise — it is precision, calm, and mastery.
      </motion.p>

    </section>
  );
};

export default SectionWrapper(About, "about");