import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const luxEasing = [0.19, 1, 0.22, 1];

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Innovella KL",
          from_email: form.email,
          to_email: "umair.jadoon05@gmail.com",
          message: form.message,
          company: form.company,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will be in touch shortly.");
          setForm({ name: "", company: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* 🔵 ENHANCED AMBIENT GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-cyan-500/[0.08] blur-[150px] rounded-full -top-40 -left-40" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <motion.div 
          variants={textVariant(0.2)} 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className={`${styles.sectionSubText} tracking-[0.6em] uppercase text-cyan-400 font-medium`}>
            Initiate
          </p>
          <h2 className={`${styles.sectionHeadText} text-white font-extralight tracking-tight`}>
            Begin your transformation<span className="text-cyan-400">.</span>
          </h2>
        </motion.div>

        {/* SUBTEXT - Increased contrast from slate-400 to slate-300 */}
        <motion.p
          variants={fadeIn("up", "tween", 0.6, 1.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 text-slate-200 text-center max-w-2xl mx-auto font-light leading-relaxed tracking-wide text-lg opacity-90"
        >
          Tell us about your vision. We will respond with clarity, precision, 
          and a structured path forward.
        </motion.p>

        {/* FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-20 flex flex-col gap-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { label: "Full Name", name: "name", type: "text", placeholder: "Alexander Sterling" },
              { label: "Organization", name: "company", type: "text", placeholder: "Innovella Global" },
              { label: "Email Address", name: "email", type: "email", placeholder: "alexander@sterling.com" },
            ].map((field, index) => (
              <motion.label 
                key={field.name} 
                variants={fadeIn("up", "tween", 0.8 + (index * 0.1), 1.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-col group"
              >
                {/* LABEL: Increased contrast and visibility */}
                <span className="text-white text-[11px] tracking-[0.4em] uppercase mb-4 group-focus-within:text-cyan-400 transition-colors duration-500 font-semibold">
                  {field.label}
                </span>
                
                {/* INPUT: Added a subtle bg-white/5 for field definition against the black background */}
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="bg-white/[0.03] border-b-2 border-white/10 py-5 px-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 focus:bg-white/[0.07] focus:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.3)] transition-all duration-500 font-light tracking-wide text-base rounded-t-lg"
                />
              </motion.label>
            ))}
          </div>

          {/* Message Area */}
          <motion.label 
            variants={fadeIn("up", "tween", 1.2, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col group"
          >
            <span className="text-white text-[11px] tracking-[0.4em] uppercase mb-4 group-focus-within:text-cyan-400 transition-colors duration-500 font-semibold">
              Project Description
            </span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Outline your requirements and objectives."
              className="bg-white/[0.03] border-b-2 border-white/10 py-5 px-4 text-white placeholder:text-slate-500 outline-none focus:border-cyan-400 focus:bg-white/[0.07] focus:shadow-[0_10px_30px_-15px_rgba(34,211,238,0.3)] transition-all duration-500 font-light tracking-wide text-base rounded-t-lg resize-none"
            />
          </motion.label>

          {/* CTA - High Contrast Button */}
          <motion.div
            variants={fadeIn("up", "tween", 1.5, 1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex justify-center mt-6"
          >
           <button
  type="submit"
  className="group relative px-12 py-5 rounded-full bg-white text-black text-xs tracking-[0.2em] font-semibold overflow-hidden transition-all duration-1000 active:scale-95"
>
  <span className="relative z-10">
    {loading ? "SENDING..." : "SUBMIT INQUIRY"}
  </span>
  <div 
    className="absolute inset-0 bg-cyan-100 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-[800ms] ease-[0.19, 1, 0.22, 1]" 
  />
</button>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");