import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-[#0b0b0c] flex items-center justify-center">

      {/* 🔵 BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        
        {/* Primary Blue Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* Secondary Soft Glow */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-slate-700/10 blur-[120px]" />

        {/* Subtle animated breathing light */}
        <motion.div
          animate={{ opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(34,211,238,0.15), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* 🧠 CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`${styles.heroHeadText} text-white font-light tracking-wide`}
        >
          Calm technology.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-slate-300">
            Engineered with precision.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="mt-6 text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light"
        >
          Luxury innovation meets calm intelligence.
          <br />
          We design systems, software, and environments that bring clarity,
          control, and measurable transformation.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <a href="#contact" className="px-10 py-4 rounded-full bg-white text-black text-sm tracking-wide hover:bg-gray-200 transition">
            Book Consultation
          </a>

          <a href="#services" className="px-10 py-4 rounded-full border border-white/20 text-white text-sm tracking-wide hover:border-cyan-400 hover:text-cyan-400 transition">
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* ⬇ Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center text-slate-500 text-xs tracking-widest"
      >
        <span>SCROLL</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-slate-500 to-transparent mt-2" />
      </motion.div>
    </section>
  );
};

export default Hero;