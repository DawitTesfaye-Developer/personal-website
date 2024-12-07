// Certifications.js
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import '../components/css/Certifications.css';
import frontendCertificate from '../assets/certificates/frontend_development_certificate.png';
import canva from '../assets/certificates/canva.png';
import Digital_marketing from '../assets/certificates/digital_marketing.png';
import Programming from "../assets/certificates/udacity_programming.png";
import AmazonDB from "../assets/certificates/amazon_document_db.png";
import Frontend_simplilearn from  "../assets/certificates/frontend_simpli.png"
import Android from "../assets/certificates/udacity_android.jpg"
import Simpli_learn_mobile from "../assets/certificates/simplilearn_mobile_app.png"
import meta_frontend from "../assets/certificates/meta_frontend.png";
import 'bootstrap/dist/css/bootstrap.min.css';

const certificationsData = [

  { id: 1, 
    title: 'Introduction to Frontend Development', 
    provider: 'Simplilearn', 
    imageUrl:meta_frontend
  },
  { id: 2, 
    title: 'Mobile Application Development', 
    provider: 'Simpli Learn',
    imageUrl: Simpli_learn_mobile
  },
  { id: 3, 
    title: 'Digital Marketing 101: Digital Marketer Beginners Guide', 
    provider: 'Simplilearn', 
    imageUrl: Digital_marketing
  },
  { id: 4,
    title: 'Frontend Development Libraries', 
    provider: 'Freecodecamp', 
    imageUrl:frontendCertificate 
    },
  { id: 10, 
    title: 'Amazon DocumentDB', 
    provider: 'Simplilearn', 
    imageUrl:AmazonDB
  },
  { id: 5, 
    title: 'Canva', 
    provider: 'Coursera', 
    imageUrl:canva
  },
  { id: 6, 
    title: 'Android Developer Fundamental', 
    provider: 'Udacity', 
    imageUrl:Android
  },
  { id: 7, 
    title: 'Frontend Development', 
    provider: 'Meta', 
    imageUrl:frontendCertificate
  },
  { id: 8, 
    title: 'Programming Fundamental', 
    provider: 'Udacity', 
    imageUrl:Programming
  },
  { id: 9, 
    title: 'Introduction to Frontend Development', 
    provider: 'Simplilearn', 
    imageUrl:Frontend_simplilearn
  },

];

function Certifications() {
  const [certifications, setCertifications] = useState(certificationsData);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    $('.certificate-card').on('mouseenter', function () {
      $(this).css({ transform: 'scale(1.05)', transition: '1.4s' });
    }).on('mouseleave', function () {
      $(this).css({ transform: 'scale(1)' });
    });

    if (filter !== 'All') {
      $('.certificate-card').hide();
      $(`.certificate-card[data-provider="${filter}"]`).show();
    } else {
      $('.certificate-card').show();
    }
  }, [filter]);

  return (
    <Section id="CertificatePage">
    <div className="certifications-container">
      <h1>My Certifications</h1>
      <div className="certificates-slider">
        <div className="slider-wrapper">
          {certifications.map(cert => (
            <div key={cert.id} className="certificate-card">
              {cert.imageUrl && (
                <img src={cert.imageUrl} alt={cert.title} className="certificate-image" />
              )}
              <div className="certificate-content">
                <h2>{cert.title}</h2>
                <p>{cert.provider}</p>
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
  );
}

export default Certifications;
