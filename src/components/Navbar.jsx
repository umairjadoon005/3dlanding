import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 w-full z-30 transition-all duration-500 ${
        scrolled
          ? "bg-[#0b0b0c]/70 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <span className="text-white text-[16px] tracking-[0.2em] font-light">
            INNOVELLA KL
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden sm:flex gap-10">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`text-[13px] tracking-[0.2em] uppercase transition duration-300 ${
                  active === nav.title
                    ? "text-white"
                    : "text-slate-400 hover:text-cyan-400"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 cursor-pointer opacity-80 hover:opacity-100 transition"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="sm:hidden absolute top-full left-0 w-full bg-[#0b0b0c]/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="flex flex-col items-center py-10 gap-6">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                    className="text-slate-300 text-sm tracking-[0.3em] uppercase hover:text-cyan-400 transition"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;