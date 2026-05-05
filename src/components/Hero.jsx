import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden flex items-center justify-center">
      
      {/* 🌌 DYNAMIC STAR-FIELD BACKGROUND (Subtle & Global Feel) */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            initial={{ 
              opacity: Math.random() * 0.5, 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%" 
            }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{
              width: Math.random() * 2 + "px",
              height: Math.random() * 2 + "px",
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>

      {/* 🔵 ENHANCED BLUE GLOWS (Static & Pulsing) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[70%] h-[70%] rounded-full bg-cyan-500/15 blur-[160px]" />
        
        {/* Animated Atmosphere */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 40%, rgba(34,211,238,0.15), transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      {/* 🧠 CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        
        {/* Constant Floating Heading */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
            className={`${styles.heroHeadText} text-white font-light tracking-wide`}
          >
            Calm technology.
            <br />
            {/* ✨ CONSTANTLY SHIMMERING TEXT */}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-[length:200%_auto] animate-shimmer">
              Engineered with precision.
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 2.5, ease: "easeOut" }}
          className="mt-6 text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light"
        >
          Luxury innovation meets calm intelligence.
          <br />
          We design systems that bring clarity, control, and measurable transformation.
        </motion.p>

        {/* CTA Buttons with Hover Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 2 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <a href="#contact" className="group relative px-10 py-4 rounded-full bg-white text-black text-sm tracking-widest font-medium overflow-hidden transition-all duration-700">
            <span className="relative z-10">BOOK CONSULTATION</span>
            <div className="absolute inset-0 bg-cyan-100 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700" />
          </a>

          <a href="#services" className="px-10 py-4 rounded-full border border-white/20 text-white text-sm tracking-widest hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-700">
            EXPLORE SERVICES
          </a>
        </motion.div>
      </div>

   

      {/* 🎨 ADD THIS TO YOUR GLOBAL CSS OR TAILWIND CONFIG */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;