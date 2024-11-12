import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Home.css';


const Home = () => {
  const [currentText, setCurrentText] = useState('Frontend Developer');
  const texts = ['Frontend Developer', 'Website Designer', 'Website Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % texts.length;
        return texts[nextIndex];
      });
    }, 4000); // Change text every 5 seconds

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <section id="home" className="home-section flex-direction-row justify-content-center align-items-center">
      <div className="content">
        <h1 className="first">Hello Everyone<span className='wave'>👋</span></h1>
        <h1 className="mb-4">I'm Dawit Tesfaye</h1>
        <p className="lead mb-4">{currentText}</p>
        <button className="button">Hire me</button>
      </div>
      <div className="portfolio-image-container">
        <img className="img" src={require('../assets/aa.gif')} alt="portfolio" />
      </div>
    </section>
  );
};

export default Home;
