import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Cpu, LineChart } from 'lucide-react';
import { SectionWrapper } from '../hoc';

const WorkflowSection = () => {
  const steps = [
    {
      title: "Diagnose",
      subtitle: "Transformation Audit",
      description: "Analyzing existing systems, processes, and bottlenecks to understand your unique challenges.",
      icon: <Search className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-500",
      glow: "shadow-blue-500/20"
    },
    {
      title: "Design",
      subtitle: "Strategic Blueprinting",
      description: "Architecting bespoke solutions and workflows that map the ideal path to efficient transformation.",
      icon: <PenTool className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-500",
      glow: "shadow-cyan-500/20"
    },
    {
      title: "Build",
      subtitle: "Agile Engineering",
      description: "Implementing and developing the defined systems, integrating them seamlessly into your environment.",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-teal-500 to-emerald-500",
      glow: "shadow-teal-500/20"
    },
    {
      title: "Improve",
      subtitle: "Long-Term Excellence",
      description: "Continuous optimization and performance monitoring to ensure your operations evolve and excel.",
      icon: <LineChart className="w-6 h-6" />,
      color: "from-emerald-500 to-green-400",
      glow: "shadow-emerald-500/20"
    }
  ];

  return (
    <section className="bg-slate-950 py-24 px-6 font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-teal-400 font-semibold tracking-[0.2em] uppercase text-sm mb-3">Our Process</h2>
          <h3 className="text-4xl md:text-5xl text-white font-bold tracking-tight">Your Transformation Journey</h3>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:flex items-start justify-between relative">
          {/* Animated Connecting Line */}
          <div className="absolute top-12 left-0 w-full h-[2px] bg-slate-800">
            <motion.div 
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 shadow-[0_0_15px_rgba(20,184,166,0.5)]"
            />
          </div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="relative z-10 flex flex-col items-center w-1/4 px-6 group"
            >
              {/* Hex-style/Rounded Icon Container */}
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className={`relative w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} p-[1px] shadow-2xl transition-all duration-300`}
                >
                  <div className="w-full h-full bg-slate-950 rounded-[23px] flex items-center justify-center text-white group-hover:text-teal-400 transition-colors duration-300">
                    {step.icon}
                  </div>
                </motion.div>
              </div>

              {/* Text Content */}
              <div className="mt-10 text-center">
                <motion.span 
                  className="text-slate-600 font-mono text-xs mb-3 block group-hover:text-teal-500 transition-colors"
                >
                  STEP 0{index + 1}
                </motion.span>
                <h4 className="text-xl text-white font-bold mb-2 uppercase tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all">
                  {step.title}
                </h4>
                <p className="text-teal-500/80 text-[10px] font-bold mb-4 tracking-[0.15em] uppercase">{step.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-16 relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800" />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 items-start relative"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white z-10 shadow-lg`}>
                {step.icon}
              </div>
              <div className="pt-1">
                <h4 className="text-lg text-white font-bold uppercase tracking-tight">{step.title}</h4>
                <p className="text-teal-500 text-[10px] font-bold mb-3 tracking-widest">{step.subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(WorkflowSection, "workflow");