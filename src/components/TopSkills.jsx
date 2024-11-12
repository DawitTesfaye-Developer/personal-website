import React from "react";
import styled from "styled-components";
import HTMLIcon from "../assets/icons8-html-48.png";
import CSS3 from "../assets/icons8-css-48.png";
import canva from "../assets/icons8-canva-48.png";
import reactnative from "../assets/icons8-react-native-24.png";
import JavaScript from "../assets/icons8-javascript-64.png";
import ReactJs from "../assets/icons8-react-js-64.png";
import AndroidStudio from "../assets/icons8-android-studio-48.png";
import Figma from "../assets/icons8-figma-48.png";
import Firebase from "../assets/icons8-firebase-48.png";
import Bootstrap from "../assets/icons8-bootstrap-48.png";
import TailWinds from "../assets/icons8-tailwind-css-64.png";
import NodeJs from "../assets/icons8-node-js-48.png";
import CPlus from "../assets/icons8-c++-48.png";
import git from "../assets/icons8-git-48.png";
import Github from "../assets/icons8-github-50.png";
import Java from "../assets/icons8-java-48.png";
import jQuery from "../assets/icons8-jquery-48.png";

const TopSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(15, 15, 36, 0.9); /* Transparent background */
  color: white;
  padding: 30px 20px;
  position: relative;
  z-index: 10;
  width: 100vw;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 4fr)); /* Responsive columns */
  gap: 5px;
  justify-items: center;
  width: 100%;

 
    @media (min-width: 300px) and (max-width: 800px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 4fr)); /* Responsive columns */
      gap: 10px;
      justify-items: center;
      width: 100%;
      
    }
`;

const SkillIconWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover .tooltip {
    visibility: visible;
    opacity: 1;
  }


`;

const SkillIcon = styled.img`
  width: 60px;
  height: 60px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }


`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 130%; /* Adjust tooltip positioning */
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
`;

const Title = styled.h2`
  font-size: 2rem;
   color: #ebb222;
     margin-bottom: 40px;

  &:hover {
    color: #ff1493;
    cursor: pointer;
  }

`;

const skills = [
  { src: HTMLIcon, alt: "HTML5" },
  { src: CSS3, alt: "CSS3" },
  { src: JavaScript, alt: "JavaScript" },
  { src: canva, alt: "Canva" },
  { src: ReactJs, alt: "React" },
  { src: reactnative, alt: "React Native" },
  { src: Figma, alt: "Figma" },
  { src: AndroidStudio, alt: "Android Studio" },
  { src: Firebase, alt: "Firebase" },
  { src: Bootstrap, alt: "Bootstrap" },
  { src: TailWinds, alt: "Tailwind CSS" },
  { src: NodeJs, alt: "Node.js" },
  { src: CPlus, alt: "C++" },
  { src: Java, alt: "Java" },
  { src: jQuery, alt: "jQuery" },
  { src: git, alt: "Git" },
  { src: Github, alt: "GitHub" },
];

const TopSkills = () => {
  return (
    <section id="TopSkills">
      <TopSkillsContainer>
        <Title>Top Skills</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillIconWrapper key={index}>
              <SkillIcon src={skill.src} alt={skill.alt} />
              <Tooltip className="tooltip">{skill.alt}</Tooltip>
            </SkillIconWrapper>
          ))}
        </SkillsGrid>
      </TopSkillsContainer>
    </section>
  );
};

export default TopSkills;
