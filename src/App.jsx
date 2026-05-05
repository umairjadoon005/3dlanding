import { BrowserRouter } from "react-router-dom";
import { 
  About, 
  Contact, 
  Hero, 
  Navbar, 
  WhyChooseUs, 
  StarsCanvas 
} from "./components";
import WorkflowSection from "./components/WorkflowSection";
import Services from "./components/Services";
import Loader from "./components/PageLoader";

import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // adjust timing if needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <BrowserRouter>
      {/* 
          Changed bg-primary to a deep charcoal #050505.
          Added selection styling for that "Cool Blue" brand alignment.
      */}
      <div className='relative z-0 bg-[#050505] selection:bg-cyan-500/30 selection:text-cyan-100'>
        
        {/* 
            Hero Wrapper: 
            Ensure 'bg-hero-pattern' in your tailwind.config.js is either removed 
            or updated to a soft, dark radial gradient to avoid the "gaming" look.
        */}
        <div className='relative'>
          <Navbar />
          <Hero />
          
          {/* Subtle Ambient Glow for the Hero Section */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px]" />
          </div>
          <StarsCanvas />

        </div>
<div className='relative z-0'>
        <About />

          {/* StarsCanvas provides that "Futuristic/Intelligence" feel the client requested */}
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
        <Services />

          {/* StarsCanvas provides that "Futuristic/Intelligence" feel the client requested */}
          <StarsCanvas />
        </div>
        {/* Services Section: Ensure this reflects all 5 core services mentioned in the brief */}

        <div className='relative z-0'>
        <WorkflowSection />

          {/* StarsCanvas provides that "Futuristic/Intelligence" feel the client requested */}
          <StarsCanvas />
        </div>



        {/* 
            WhyChooseUs: Re-styled to emphasize "Clarity + Calm" 
        */}
        <div className='relative z-0'>
        <WhyChooseUs />

          {/* StarsCanvas provides that "Futuristic/Intelligence" feel the client requested */}
          <StarsCanvas />
        </div>

        <div className='relative z-0'>
          <Contact />
          {/* StarsCanvas provides that "Futuristic/Intelligence" feel the client requested */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;