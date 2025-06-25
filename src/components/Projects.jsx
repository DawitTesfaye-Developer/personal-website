import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAndroid, FaPaintBrush, FaCode } from 'react-icons/fa';
import Android from "../assets/design.gif";
import website from "../assets/fbi.png";
import ux from "../assets/and2.jpg";
import ux2 from "../assets/and3.jpg";
import ux3 from "../assets/and4.jpg";
import "./css/project.css";

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="container">
      <h2 className="text-center mb-4">Projects</h2>
      <motion.div
        className="cards-grid"
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.18, delayChildren: 0.2 },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Website Development */}
        <motion.div
          className="project-card"
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80 } },
          }}
        >
          <img src={website} alt="website development" className="card-image" />
          <h5 className="card-title">Website Development</h5>
          <p className="card-text">Developed responsive websites using HTML, CSS, and JavaScript frameworks.</p>
          <ul className="icon-list">
            <li><FaHtml5 className="icon-html" /></li>
            <li><FaCss3Alt className="icon-css" /></li>
            <li><FaJs className="icon-js" /></li>
          </ul>
          <a href="../components/websites/websites.jsx" rel="noopener noreferrer" className="project-button">View Project</a>
        </motion.div>
        {/* Android Development */}
        <motion.div
          className="project-card"
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80 } },
          }}
        >
          <img src={Android} alt="android development" className="card-image" />
          <h5 className="card-title">Android Development</h5>
          <p className="card-text">Built Android applications with Java and Kotlin, focusing on UX and performance.</p>
          <ul className="icon-list">
            <li><FaAndroid className="icon-android" /></li>
            <li><FaCss3Alt className="icon-css" /></li>
          </ul>
          <a href="https://github.com/Dawi6825github/maaddii-food-Ordering-system/tree/main" className="project-button">View Project</a>
        </motion.div>
        {/* UX/UI Design */}
        <motion.div
          className="project-card"
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80 } },
          }}
        >
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <img src={ux} alt="ux/ui design" className="card-image-small" />
            <img src={ux2} alt="ux/ui design" className="card-image-small" />
            <img src={ux3} alt="ux/ui design" className="card-image-small" />
          </div>
          <h5 className="card-title">UX/UI Design</h5>
          <p className="card-text">Designed user-centric interfaces using Figma and Adobe XD, focusing on usability and aesthetics.</p>
          <ul className="icon-list">
            <li><FaPaintBrush className="icon-uxui" /></li>
          </ul>
          <a href="https://www.figma.com/files/team/1265252548534775182/recents-and-sharing?fuid=1265252546421034971" className="project-button">View Project</a>
        </motion.div>
        {/* Website Design */}
        <motion.div
          className="project-card"
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80 } },
          }}
        >
          <img src="/logo192.png" alt="website design" className="card-image" />
          <h5 className="card-title">Website Design</h5>
          <p className="card-text">Created visually appealing websites with a focus on modern aesthetics and functionality.</p>
          <ul className="icon-list">
            <li><FaCode className="icon-webdesign" /></li>
          </ul>
          <a href="#" className="project-button">View Project</a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
