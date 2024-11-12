import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/services.css';

const Services = () => {
  return (
    <>
      {/* Transparent Background Container */}
      <div className="background-container"></div>

      {/* Services section */}
      <section id="services" className="services-section py-5">
        <div className="container">
          <h2 className="Service-title text-center text-4xl font-extrabold text-white mb-5">
            Our Services
          </h2>
          <div className="row justify-content-center">

            {/* Service Cards */}
            <ServiceCard
              iconClass="fas fa-code"
              title="Web Development"
              description="Building responsive websites with modern frameworks and tools like React.js, HTML5, and CSS3."
              borderColor="var(--primary-color)"
              iconColor="var(--blue)"
            />

            <ServiceCard
              iconClass="fas fa-paint-brush"
              title="UI/UX Design"
              description="Creating visually appealing and user-friendly interfaces using Figma and Adobe XD."
              borderColor="var(--success-color)"
              iconColor="var(--green)"
              
            />

            <ServiceCard
              iconClass="fas fa-mobile-alt"
              title="Mobile App Development"
              description="Building cross-platform mobile apps using React Native and Android Studio."
              borderColor="var(--warning-color)"
              iconColor="var(--yellow)"
            />

            <ServiceCard
              iconClass="fas fa-globe"
              title="Website Development"
              description="Developing custom websites with cutting-edge technologies and frameworks."
              borderColor="var(--purple-color)"
              iconColor="var(--purple)"
            />
          </div>
        </div>
      </section>
    </>
  );
};


// ServiceCard Component
const ServiceCard = ({ iconClass, title, description, borderColor, iconColor }) => {
  return (
    <div id="section" className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card service-card border-0 shadow-lg"
        style={{ borderColor }}
      >
        <div className="card-body text-center p-4">
          <i className={`${iconClass} fa-3x mb-4`} style={{ color: iconColor }}></i>
          <h5 className="card-title font-weight-bold text-2xl mb-2">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
