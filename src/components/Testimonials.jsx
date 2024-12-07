import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const testimonialsData = [
  {
    name: "Mohmmed Mekuria (MTech.CSE)",
    position: "MWU Computer Science Department Head",
    testimonial:
      "I strongly recommend Mr. Dawit Tesfaye to anyone interested in recruiting him for academic or career programs, and I wish him the best of luck in his future career that he so much deserves.",
    details:
      "He led the team with innovative solutions and met all deadlines with precision. Please feel free to contact me for further clarification at: phone number: +251917851204, Email: mohammed.adem856@gmail.com",
    pdfUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/cs%20department%20.pdf?alt=media&token=f12558ce-6a82-487b-a4ae-650f4354b40b",
  },
  {
    name: "Million Sime (MTech.CSE)",
    position: "MWU Computing College Dean",
    testimonial:
      "I am pleased to write this letter of recommendation for Mr. Dawit who has been an exemplary student and remarkable individual during his time at MWU. Knowing him from 2021, I wholeheartedly recommend him and believe he has the potential to excel in any endeavor he pursues.",
    details:
      "His work exceeded our expectations, especially with the complex integrations we required. Please feel free to contact me at phone number: +251900267857 or Email: simemillion@gmail.com if you have any questions regarding his qualifications. I am confident that you will find him to be an exceptional candidate.",
    pdfUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/mr.million.pdf?alt=media&token=5fb4a0f6-6b91-4bac-886a-7424ddfd9d5b",
  },
  {
    name: "Mabratu Fana (Ass. Professor)",
    position: "Freelancer",
    testimonial:
      "I strongly recommend him; he can excellently perform whatever tasks he will be assigned, be it academic career or practical problem solving in computer science. Hence, once again I testify that he will be an invaluable asset to any employer or organization that offers him the opportunity.",
    details:
      "During this period, he has proved to be one of the most efficient and highly committed students of his batch. In need of any information regarding Mr. Dawit Tesfaye‘s qualification, please feel free to contact me at: +251932-038827 or fanamebratu47@gmail.com.",
    pdfUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-datnet.appspot.com/o/Mr.Dawit-signed.pdf?alt=media&token=31becfb9-6d8c-4313-a285-4da83944da63",
  },
];

const TestimonialSection = styled.section`
  background-color: rgba(15, 15, 36, 0.9);
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100vw;
 padding: 00px;

  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (min-width: 501px) and (max-width: 768px) {
   padding-top:500px;
    height: 1700px;
    width:100%;
    
  }

  @media (min-width: 300px) and (max-width: 499px) {
    display: grid;
    height: 2500px;
   
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #ebb222;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);


    &:hover {
    color: #ff1493;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
  }

   @media (min-width: 300px) and (max-width: 499px) {
    margin-top: 700px;
    font-size: 1.5rem;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  

  @media (max-width: 800px) {
    grid-template-columns: repeat(2,1fr); /* 2 columns for widths between 500px and 800px */
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr; /* Single column for widths below 500px */
    margin-top: 1rem; /* Add some space from the heading */
  }

  @media (min-width: 300px) and (max-width: 499px) {
    display: block;
    grid-template-columns: 1fr; /* Single column for widths below 500px */
    margin-top: 1rem; /* Add some space from the heading */
  }
`;

const TestimonialCard = styled.div`
  perspective: 1000px;
  height: 300px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px; /* Ensures it takes the full width of its container */

  &:hover .inner {
    transform: rotateY(180deg);
  }

  @media (max-width: 800px) {
    height: 800px; /* Decrease height on smaller screens */
  }

  @media (min-width: 500px) and (max-width:799px) {
    height: 300px; /* Further decrease height on very small screens */
    padding-bottom: 10px;
  }
    
  @media (min-width: 300px) and (max-width: 499px) {
    height: 500px;
    font-size: 8px;
  grid-gap: 10px;
  }
`;

const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 12px;
    padding: 1rem; /* Reduce padding for smaller screens */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  }

  .front {
    background-color: rgba(15, 15, 45, 0.8);
  }

  .back {
    background-color: white;
    transform: rotateY(180deg);
  }
`;

const Name = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #007bff;
`;

const Position = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

const DetailsText = styled.p`
  font-size: 1rem;
  color: #aaa;
  line-height: 1.6;
`;

const Testimonials = () => {
  const handleCardClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <TestimonialSection id="Testimonials">
      <Heading>What People Are Saying</Heading>
      <TestimonialGrid>
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            onClick={() => handleCardClick(testimonial.pdfUrl)}
          >
            <InnerCard className="inner">
              <div className="front">
                <Name>{testimonial.name}</Name>
                <Position>{testimonial.position}</Position>
                <TestimonialText>{testimonial.testimonial}</TestimonialText>
              </div>
              <div className="back">
                <DetailsText>{testimonial.details}</DetailsText>
              </div>
            </InnerCard>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialSection>
  );
};

export default Testimonials;
