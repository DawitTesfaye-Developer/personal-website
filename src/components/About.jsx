// components/About.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import myImage from '../assets/T.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/About.css'; // Import the CSS file

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Event handler function
    const handleHeadingClick = () => {
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    };

    // Add event listener
    const headingElement = document.querySelector('.heading');
    headingElement.addEventListener('click', handleHeadingClick);

    // Clean up the event listener on component unmount
    return () => {
      headingElement.removeEventListener('click', handleHeadingClick);
    };
  }, []);


  return (
    <section className="about-section" id="about">
      <div className="content-wrapper">
        <h2 className="heading" data-aos="fade-up">About Me</h2>
        <div className="row">
          <div className="col-md-6 col-sm-12" data-aos="fade-right">
            <div className="image-wrapper">
              <img src={myImage} alt="myimage" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12" data-aos="fade-left">
            <p className="about-text">
              I'm a passionate web developer with experience in frontend technologies like React.js, Bootstrap, and modern web development practices. My goal is to build dynamic and responsive websites with great user experiences.
            </p>
          </div>
        </div>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/dawit-tesfaye-hatau-60a17b311" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/Dawi6825github" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </li>
        
        </ul>
      </div>
    </section>
  );
};

export default About;
