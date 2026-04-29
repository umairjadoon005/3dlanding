import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* --- THE MOVING BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-[-1] bg-[#050816]">
        {/* 1. Abstract Moving Grid (Floor) */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ perspective: "1000px" }}
        >
          <motion.div 
            animate={{ 
              backgroundPosition: ["0px 0px", "0px 50px"] 
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to right, #915EFF 1px, transparent 1px), 
                                linear-gradient(to bottom, #915EFF 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              transform: "rotateX(60deg) scale(2)",
              transformOrigin: "top",
              maskImage: "linear-gradient(to bottom, black, transparent)"
            }}
          />
        </div>

        {/* 2. Flowing Digital Lines (Vibe) */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: "100%", opacity: [0, 0.3, 0] }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear"
              }}
              className="absolute w-[1px] h-64 bg-gradient-to-b from-transparent via-[#915EFF] to-transparent"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-20 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            We engineer <span className="text-[#915EFF]">measurable</span> improvement.
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}>
            Transforming systems, software, and space through intelligent innovation.
          </p>

          {/* Modern CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="bg-[#915EFF] hover:bg-[#7c4dff] py-3 px-8 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(145,94,255,0.4)] transition-all transform hover:scale-105 active:scale-95">
              Book a Consultation
            </button>
            <button className="border-2 border-[#915EFF] py-3 px-8 text-white font-bold rounded-xl hover:bg-[#915EFF]/10 backdrop-blur-sm transition-all transform hover:scale-105">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>

      {/* --- 3D CANVAS LAYER --- */}
      {/* Positioned between background and text */}
      <div className="absolute inset-0 z-10">
        <ComputersCanvas />
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;