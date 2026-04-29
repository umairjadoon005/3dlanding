import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, WhyChooseUs, StarsCanvas } from "./components";
import WorkflowSection from "./components/WorkflowSection";
import Services from "./components/Services";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
<Services />

        <WorkflowSection/>
        {/* <Experience /> */}
        {/* <Tech /> */}
        <WhyChooseUs />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
