import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

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
          to_email: "innovellakl@gmail.com",
          message: form.message,
          company: form.company,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will be in touch shortly.");

          setForm({
            name: "",
            company: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section className="relative bg-[#0b0b0c] py-24 overflow-hidden">

      {/* 🔵 Ambient background (subtle luxury feel) */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-slate-700/10 blur-[100px] rounded-full bottom-[-100px] right-[-100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <motion.div variants={textVariant()} className="text-center">
          <p className={`${styles.sectionSubText} tracking-[0.4em] uppercase text-cyan-400/70`}>
            Initiate
          </p>

          <h2 className={`${styles.sectionHeadText} text-white font-light`}>
            Begin your transformation<span className="text-cyan-400">.</span>
          </h2>
        </motion.div>

        {/* SUBTEXT */}
        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-6 text-slate-400 text-center max-w-2xl mx-auto font-light leading-relaxed"
        >
          Tell us about your vision. We will respond with clarity, precision, 
          and a structured path forward.
        </motion.p>

        {/* FORM */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          variants={fadeIn("up", "", 0.4, 1)}
          className="mt-16 flex flex-col gap-6"
        >
          {/* Inputs */}
          {[
            { label: "Full Name", name: "name", type: "text", placeholder: "e.g. Alexander Sterling" },
            { label: "Organization", name: "company", type: "text", placeholder: "e.g. Innovella Global" },
            { label: "Email Address", name: "email", type: "email", placeholder: "e.g. alexander@sterling.com" },
          ].map((field) => (
            <label key={field.name} className="flex flex-col">
              <span className="text-slate-400 text-xs tracking-[0.3em] uppercase mb-3">
                {field.label}
              </span>

              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="bg-transparent border-b border-white/10 py-3 px-1 text-white placeholder:text-slate-600 outline-none focus:border-cyan-400 transition-all duration-300"
              />
            </label>
          ))}

          {/* Message */}
          <label className="flex flex-col">
            <span className="text-slate-400 text-xs tracking-[0.3em] uppercase mb-3">
              Project Description
            </span>

            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Outline your requirements and objectives."
              className="bg-transparent border-b border-white/10 py-3 px-1 text-white placeholder:text-slate-600 outline-none focus:border-cyan-400 transition-all duration-300 resize-none"
            />
          </label>

          {/* CTA */}
          <button
            type="submit"
            className="mt-8 self-center px-12 py-4 rounded-full border border-white/20 text-white text-sm tracking-wide hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            {loading ? "Processing..." : "Submit Inquiry"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");