import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThreeBackground from './ThreeBackground';
import TopSkills from './components/TopSkills';
import Testimonials from './components/Testimonials';
import CertificatePage from './components/CertificatePage.jsx'
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <ThreeBackground />
      <div className="App">
        <Navbar />
        <Home />
          <About />
          <TopSkills />
          <Projects />
          {/* <Services /> */}
          <CertificatePage/>
          <Testimonials />
          <Contact />
          <Footer/>
        
      </div>
    </>
  );
};

export default App;
