import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import '../components/css/Testimonial.css'
import React from "react";

// Minimal styled-components for missing components
const Section = ({ children, ...props }) => <section {...props}>{children}</section>;
const Heading = ({ as: Component = "h2", children, ...props }) => <Component {...props}>{children}</Component>;
const TestimonialGrid = ({ children }) => (
  <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", marginTop: "2rem" }}>
    {children}
  </div>
);
const TestimonialCard = ({ children, ...props }) => (
  <motion.div
    style={{
      background: "#fff",
      borderRadius: "1rem",
      boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
      cursor: "pointer",
      perspective: "1000px",
      minHeight: "320px",
      position: "relative",
      overflow: "hidden"
    }}
    {...props}
  >
    {children}
  </motion.div>
);
const InnerCard = ({ children, className }) => (
  <div className={className} style={{ padding: "2rem", height: "100%" }}>
    {children}
  </div>
);
const Name = ({ children, ...props }) => (
  <motion.h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }} {...props}>{children}</motion.h3>
);
const Position = ({ children, ...props }) => (
  <motion.p style={{ color: "#888", marginBottom: "1rem", fontStyle: "italic" }} {...props}>{children}</motion.p>
);
const TestimonialText = ({ children, ...props }) => (
  <motion.p style={{ fontSize: "1.1rem", marginBottom: "0" }} {...props}>{children}</motion.p>
);
const DetailsText = ({ children, ...props }) => (
  <motion.p style={{ fontSize: "1rem", color: "#555" }} {...props}>{children}</motion.p>
);
const testimonialsData = [
  {
    name: "Mohmmed Mekuria (MTech.CSE)",
    position: "MWU Computer Science Department Head",
    testimonial:
      "I strongly recommend Mr. Dawit Tesfaye to anyone interested in recruiting him for academic or career programs, and I wish him the best of luck in his future career that he so much deserves.",
    pdfUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/cs%20department%20.pdf?alt=media&token=f12558ce-6a82-487b-a4ae-650f4354b40b",
  },
  {
    name: "Million Sime (MTech.CSE)",
    position: "MWU Computing College Dean",
    testimonial:
      "I am pleased to write this letter of recommendation for Mr. Dawit who has been an exemplary student and remarkable individual during his time at MWU. Knowing him from 2021, I wholeheartedly recommend him and believe he has the potential to excel in any endeavor he pursues.",
    pdfUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/mr.million.pdf?alt=media&token=5fb4a0f6-6b91-4bac-886a-7424ddfd9d5b",
  },
  {
    name: "Mabratu Fana (Ass. Professor)",
    position: "Freelancer",
    testimonial:
      "I strongly recommend him; he can excellently perform whatever tasks he will be assigned, be it academic career or practical problem solving in computer science. Hence, once again I testify that he will be an invaluable asset to any employer or organization that offers him the opportunity.",
    pdfUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/Mr.Dawit-signed.pdf?alt=media&token=31becfb9-6d8c-4313-a285-4da83944da63",
  },
];



const headingVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, type: "spring" },
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  const handleCardClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <Section id="Testimonials">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headingVariants}
      >
        <Heading as={motion.h2}>What People Are Saying</Heading>
      </motion.div>
      <TestimonialGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            onClick={() => handleCardClick(testimonial.pdfUrl)}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <InnerCard className="inner">
              <div className="front">
                <Name variants={textVariants}>{testimonial.name}</Name>
                <Position variants={textVariants}>{testimonial.position}</Position>
                <TestimonialText variants={textVariants}>
                  {testimonial.testimonial}
                </TestimonialText>
              </div>
              <div className="back">
                <DetailsText variants={textVariants}>
                  {testimonial.details}
                </DetailsText>
              </div>
            </InnerCard>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </Section>
  );
};

export default Testimonials;
