// components/About.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import $ from 'jquery';
import myImage from '../assets/T.png'

// Initialize AOS for animation
AOS.init();

// Styled-components for modern design
const AboutSection = styled.section`
  background-color: rgba(255, 255, 255, 0.8); /* Light transparent background */
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff1493; /* Vibrant hover effect */
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

const ColumnLeft = styled.div`
  flex: 1;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 50%;
    max-width: 100%;
    height: auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Modern shadow */
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1); /* Image hover effect */
    }
  }
`;

const ColumnRight = styled.div`
  flex: 1;
  padding-left: 1rem;
  color: #333;

  p {
    font-size: 1.4rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.8;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    opacity: 0.9;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1; /* Hover text fade-in */
    }
  }
`;

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });

    // jQuery effect for smooth scroll when heading is clicked
    $('h2').on('click', function() {
      $('html, body').animate({ scrollTop: $('#about').offset().top }, 1000);
    });

    return () => {
      // Clean up event listeners
      $('h2').off('click');
    };
  }, []);

  return (
    <AboutSection id="about">
      <Container>
        <Heading data-aos="fade-up">About Me</Heading>
        <Row>
          <ColumnLeft data-aos="fade-right">
            {/* Add your image source */}
            <img src={myImage} alt='myimage' />
          </ColumnLeft>
          <ColumnRight data-aos="fade-left">
            <p>
              I'm a passionate web developer with experience in frontend technologies like
              React.js, Bootstrap, and modern web development practices. My goal is to build dynamic
              and responsive websites with great user experiences.
            </p>
          </ColumnRight>
        </Row>
      </Container>
    </AboutSection>
  );
};

export default About;
