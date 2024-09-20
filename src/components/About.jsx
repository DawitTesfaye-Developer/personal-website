// components/About.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

// Initialize AOS for animation
AOS.init();

const AboutSection = styled.section`
  background-color: rgba(255, 192, 203, 0.6); /* Pink with opacity */
  padding: 5rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 3rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  }
`;

const ColumnRight = styled.div`
  flex: 1;
  padding-left: 1rem;
  color: #fff;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.5;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <AboutSection id="about">
      <Container>
        <Heading data-aos="fade-up">About Me</Heading>
        <Row>
          <ColumnLeft data-aos="fade-right">
            {/* <img src="your-image-url" alt="My Picture" className="img-fluid rounded-circle" /> */}
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
