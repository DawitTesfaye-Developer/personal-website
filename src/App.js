import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThreeBackground from './ThreeBackground'; // Ensure this file exists and is imported correctly
import TopSkills from './components/TopSkills';
import './App.css';
import Certified from './components/Certified';


const App = () => {
  return (
    <>
      <ThreeBackground /> {/* The style prop is unnecessary here */}
      <div className="App bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 min-h-screen">
        <Navbar />
        <Home />
        <About />
        <TopSkills />
        <Projects />
        <Services />
        {/* <Certified /> */}
        <Contact />
      </div>
    </>
  );
};

export default App;
