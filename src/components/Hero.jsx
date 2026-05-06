import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  // Luxury Easing: Slow, confident, and smooth
  const luxEasing = [0.19, 1, 0.22, 1];

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden flex items-center justify-center">
      
      {/* 1. THE "WOW" CENTERPIECE (Cinematic Animation Placeholder) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        {/* 
           CLIENT NOTE: This is where the cinematic visual goes. 
           I've added a pulsing, high-intensity radial core to hold the space.
        */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 5, ease: luxEasing }}
          className="w-[80%] h-[80%] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
        />
      </div>

      {/* 2. ENHANCED BLUE GLOW ACCENTS (Stronger intensity & lines) */}
      <div className="absolute inset-0 z-0">
        {/* Top left deep glow */}
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[180px]" />
        
        {/* Animated Atmosphere - slowed down to 15s for "Calm Intelligence" */}
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(34,211,238,0.1), transparent 80%)",
            filter: "blur(100px)",
          }}
        />

        {/* Illuminated Bottom Line - Adds the "Premium Tech" feel */}
        <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
      </div>

      {/* 3. CONTENT (Refined Timing & Subtle Motion) */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        
        {/* Slower floating movement */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.5, ease: luxEasing }}
            className={`${styles.heroHeadText} text-white font-light tracking-[0.05em]`}
          >
            Calm technology.
            <br />
            {/* Slower Shimmer (12s instead of 8s) */}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              Engineered with precision.
            </span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 3.5, ease: "easeOut" }}
          className="mt-8 text-slate-300 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto font-extralight tracking-wide"
        >
          Luxury innovation meets <span className="text-white opacity-90 font-light">calm intelligence</span>.
          <br />
          Systems designed for clarity and transformation.
        </motion.p>

        {/* CTA Buttons (Slower transition for luxury feel) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 3 }}
          className="mt-14 flex justify-center gap-10 flex-wrap"
        >
          <a href="#contact" className="group relative px-12 py-5 rounded-full bg-white text-black text-xs tracking-[0.2em] font-semibold overflow-hidden transition-all duration-1000">
            <span className="relative z-10">BOOK CONSULTATION</span>
            <div className="absolute inset-0 bg-cyan-100 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-[800ms] ease-[0.19, 1, 0.22, 1]" />
          </a>

          <a href="#services" className="group px-12 py-5 rounded-full border border-white/10 text-white text-xs tracking-[0.2em] hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-1000">
            EXPLORE SERVICES
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shimmer {
          animation: shimmer 12s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;