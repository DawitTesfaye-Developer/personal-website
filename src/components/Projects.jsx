// components/Projects.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3Alt, FaJs ,FaReact, FaAndroid, FaPaintBrush, FaCode } from 'react-icons/fa';
import '../assets/and1.jpg';
import Android from "../assets/design.gif"
import website from "../assets/drum.png"
import ux from "../assets/and2.jpg";
import ux2 from "../assets/and3.jpg"
import ux3 from "../assets/and4.jpg"
import "../components/css/project.css"

// Keyframes for background color movement
const backgroundColorMovement = keyframes`
  0% {
   background-color: rgba(15, 15, 36, 0.9);
    opacity:0.7;
  }
    25%{
    background-color:rgba(72,61,139,0.3);
    }
  50% {
    background-color: rgba(72,61,145, 0.5);
  }
  100% {
    background-color: rgba(50, 50, 50, 0.9);
    opacity:0.7;
  }
`;

// Keyframes for the border animations
const borderAnimationPhase1 = keyframes`
  0% {
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }
  50% {
    border-top: 5px solid #AA00AA;
    border-left: 5px solid  rgba(15, 15, 36, 0.9);
  }
  100% {
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
  }
`;

const borderAnimationPhase2 = keyframes`
  0% {
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }
  50% {
    border-bottom: 2px solid #AA0000;
    border-right: 2px solid #AA0000;
  }
  100% {
    border-bottom: 2px solid transparent;
    border-right: 2px solid transparent;
  }
`;

// Styled components for custom styles
const Section = styled.section`
  background-color: rgba(15, 15, 36, 0.9); // Dark gray background
  color: #fff; // White text color
  padding: 3rem 0; // Padding top and bottom
`;

const Card = styled.div`
   // Dark gray background
  background: rgba(15, 15, 36, 0.7);
  color: #f8f9fa; // Light text color
  border: none; // No border initially
  border-radius: 0.5rem; // Rounded corners
  padding : 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Initial shadow
  position: relative; // Position relative for pseudo-element
  transition: background-color 0.3s ease, color 0.3s ease; // Smooth color transition

  // Shadow for non-hover state
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 0.8rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    pointer-events: none; // Prevent interaction with pseudo-element
    z-index: -1; // Behind the card
    transition: box-shadow 0.3s ease; // Smooth shadow transition
  }

  // On hover
  &:hover {
    background-color: transparent; // Make background transparent on hover
    animation: ${backgroundColorMovement} 9s ease infinite, ${borderAnimationPhase1} 1s ease forwards, ${borderAnimationPhase2} 1s ease 1s forwards;

    // Adjust the pseudo-element for shadow effect on hover
    &::before {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
  }

  // Media query for a 2x2 grid layout
  @media (min-width: 300px) and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px, 4fr)); // Create 2 equal columns
    gap: 20px; // Space between cards
  }
`;

const CardTitle = styled.h5`
  font-weight: 700; // Bold text
  font-size: 1.25rem; // Font size
`;

const CardText = styled.p`
  font-size: 1rem; // Font size
`;

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledListItem = styled.li`
  float: left;
  padding: 3px;
`;

const StyledIconHtml = styled(FaHtml5)`
   font-size: 2rem;
   color: #e34f26;
`;

const StyledIconCSS = styled(FaCss3Alt)`
   font-size: 2rem;
   color: #1572b6;
`;

const StyledIconJs = styled(FaJs)`
   font-size: 2rem;
   color: #f7df1e;
`;

const StyledIconReact = styled(FaReact)`
   font-size: 2rem;
   color: #61dafb;
`;

const StyledIconAndroid = styled(FaAndroid)`
   font-size: 2rem;
   color: #a4c639;
`;

const StyledIconUxUi = styled(FaPaintBrush)`
   font-size: 2rem;
   color: #ff1493;
`;

const StyledIconWebDesign = styled(FaCode)`
   font-size: 2rem;
   color: #4b0082;
`;

const Projects = () => {
  return (
    <Section id="projects">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
          {/* Website Development */}
          <div className="col-md-4 mb-4">
            <Card className="card shadow-lg">
              <div className="card-body align-items-center display-flex">
                <img src={website} style={{width :'100%',height :'200px'}} alt="website development" />
                <CardTitle>Website Development</CardTitle>
                <CardText>Developed responsive websites using HTML, CSS, and JavaScript frameworks.</CardText>
                <StyledList>
                  <StyledListItem><StyledIconHtml /></StyledListItem>
                  <StyledListItem><StyledIconCSS /></StyledListItem>
                  <StyledListItem><StyledIconJs /></StyledListItem>
                </StyledList>
                <a href="https://drum-09ic.onrender.com/" className="btn btn-light" style={{margin:'70px -120px', borderBottom: '5px solid #ee9211', borderRadius: ' 10px 10px', backgroundColor:'transparent', color:'white'}}>View Project</a>
              </div>
            </Card>
          </div>
          {/* Android Development */}
          <div className="col-md-4 mb-4">
            <Card className="card shadow-lg">
              <div className="card-body">
                <img src= {Android} style={{width:'100%'}}/>
                <CardTitle>Android Development</CardTitle>
                <CardText>Built Android applications with Java and Kotlin, focusing on UX and performance.</CardText>
                <StyledList>
                  <StyledListItem><StyledIconAndroid /></StyledListItem>
                  <StyledListItem><StyledIconCSS /></StyledListItem>
                </StyledList>
                <a href="https://github.com/Dawi6825github/maaddii-food-Ordering-system/tree/main" className="btn btn-light" style={{margin:'70px -120px', borderBottom: '5px solid #ee9211', borderRadius: ' 10px 10px', backgroundColor:'transparent', color:'white'}}>View Project</a>
              </div>
            </Card>
          </div>
          {/* UX/UI Design */}
          <div className="col-md-4 mb-4">
            <Card className="card shadow-lg">
              <div className="card-body ">
                <img src={ux} style={{width:'50px',borderRadius:'0px'}} alt="ux/ui design" />
                <img src={ux2} style={{width:'50px',borderRadius:'0px'}} alt="ux/ui design" />
                <img src={ux3} style={{width:'50px',borderRadius:'0px'}} alt="ux/ui design" />
                <CardTitle>UX/UI Design</CardTitle>
                <CardText>Designed user-centric interfaces using Figma and Adobe XD, focusing on usability and aesthetics.</CardText>
                <StyledList>
                  <StyledListItem><StyledIconUxUi /></StyledListItem>
                </StyledList>
                <a href="https://www.figma.com/files/team/1265252548534775182/recents-and-sharing?fuid=1265252546421034971" className="btn btn-light" style={{margin:'70px -120px', borderBottom: '5px solid #ee9211', borderRadius: ' 10px 10px', backgroundColor:'transparent', color:'white'}}>View Project</a>
              </div>
            </Card>
          </div>
          {/* Website Design */}
          <div className="col-md-4 mb-4">
            <Card className="card shadow-lg">
              <div className="card-body">
                <img src="../../public/logo192.png" alt="aa" />
                <CardTitle>Website Design</CardTitle>
                <CardText>Created visually appealing websites with a focus on modern aesthetics and functionality.</CardText>
                <StyledList>
                  <StyledListItem><StyledIconWebDesign /></StyledListItem>
                </StyledList>
                <a href="#" className="btn btn-light" style={{margin:'70px -120px', borderBottom: '5px solid #ee9211', borderRadius: ' 10px 10px', backgroundColor:'transparent', color:'white'}}>View Project</a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;