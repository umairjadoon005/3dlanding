const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  // 1) HERO SECTION: Switched font-black to font-extralight/light
  // Added tracking-tighter for that high-end editorial look
  heroHeadText:
    "font-extralight text-white lg:text-[90px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[1.1] mt-2 tracking-tighter",
  
  // 2) HERO SUBTEXT: Removed purple (#dfd9ff) for Slate-400 (Muted Graphite)
  heroSubText:
    "text-slate-400 font-light lg:text-[24px] sm:text-[20px] xs:text-[18px] text-[16px] lg:leading-[1.6] max-w-2xl tracking-wide",

  // 3) SECTION HEADERS: Reduced weight to font-light/extralight 
  // Added a specific letter spacing for "Intelligent Order"
  sectionHeadText:
    "text-white font-extralight md:text-[60px] sm:text-[50px] xs:text-[40px] text-[35px] tracking-tighter leading-tight",
  
  // 4) SECTION SUBTEXT: Updated to Cool Blue/Cyan glow accent
  // Increased letter spacing (tracking-widest) to emphasize "Luxury"
  sectionSubText:
    "text-cyan-400/70 sm:text-[12px] text-[10px] uppercase tracking-[0.5em] font-bold",
};

export { styles };