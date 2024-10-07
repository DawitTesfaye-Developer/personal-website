// src/CertificatePage.js
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCertificates } from './certificateSlice';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CertificatePage.scss'; // Import your SASS file here
import $ from 'jquery';


const CertificatePage = () => {
  const certificates = useSelector(selectCertificates);

  useEffect(() => {
    // On page load, slide the certificate cards continuously
    const slide = () => {
      $('.slider-wrapper').animate(
        { left: '-=100%' },
        10000,
        'linear',
        function () {
          $(this).css({ left: '100%' });
          slide();
        }
      );
    };
    slide();
  }, []);

  
  
  return (
    <div className="certificate-page container">
      <h2 className="text-center">My Certificates</h2>
      <div className="certificates-slider">
        <div className="slider-wrapper">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <object
                data={certificate.url}
                type="application/pdf"
                width="100%"
                height="300px"
                aria-label={certificate.title}
              >
                <p>Your browser does not support PDFs. <a href={certificate.url}>Download the PDF</a>.</p>
              </object>
              <p className="text-center">{certificate.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
