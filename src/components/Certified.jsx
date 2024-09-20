import React from 'react';

const Certified = () => {
  const sectionStyle = {
    background: '#f5f5f5', // Light background color for the section
    padding: '2rem 0'
  };

  const wrapperStyle = {
    display: 'flex',
    overflowX: 'auto',
    gap: '1rem',
    padding: '1rem'
  };

  const certificateStyle = {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
    flex: '0 0 auto', // Ensure certificates do not shrink
    textAlign: 'center',
    maxWidth: '300px' // Adjust the size as needed
  };

  const imgStyle = {
    maxWidth: '100%',
    borderRadius: '4px'
  };

  const descriptionStyle = {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '#333'
  };

  return (
    <section id="certified" style={sectionStyle}>
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-primary mb-12">
          My Certificates
        </h2>
        <div style={wrapperStyle}>
          <div style={certificateStyle}>
            <img src="/path-to-your-certificate1.jpg" alt="Certificate 1" style={imgStyle} />
            <p style={descriptionStyle}>Description of Certificate 1</p>
          </div>
          <div style={certificateStyle}>
            <img src="/path-to-your-certificate2.jpg" alt="Certificate 2" style={imgStyle} />
            <p style={descriptionStyle}>Description of Certificate 2</p>
          </div>
          <div style={certificateStyle}>
            <img src="/path-to-your-certificate3.jpg" alt="Certificate 3" style={imgStyle} />
            <p style={descriptionStyle}>Description of Certificate 3</p>
          </div>
          {/* Add more certificates as needed */}
        </div>
      </div>
    </section>
  );
};

export default Certified;
