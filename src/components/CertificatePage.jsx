import React, { useState } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';

const certificationsData = [
  { id: 1, title: 'Introduction to Frontend Development', provider: 'Coursera', imageUrl: meta_frontend },
  { id: 2, title: 'Mobile Application Development', provider: 'Simplilearn', imageUrl: Simpli_learn_mobile }, // changed
  { id: 3, title: 'Digital Marketing 101: Digital Marketer Beginners Guide', provider: 'Simplilearn', imageUrl: Digital_marketing },
  { id: 4, title: 'Frontend Development Libraries', provider: 'Freecodecamp', imageUrl: frontendCertificate },
  { id: 10, title: 'Amazon DocumentDB', provider: 'Simplilearn', imageUrl: AmazonDB },
  { id: 5, title: 'Canva', provider: 'Coursera', imageUrl: canva },
  { id: 6, title: 'Android Developer Fundamental', provider: 'Udacity', imageUrl: Android },
  { id: 8, title: 'Programming Fundamental', provider: 'Udacity', imageUrl: Programming },
  { id: 9, title: 'Introduction to Frontend Development', provider: 'Simplilearn', imageUrl: Frontend_simplilearn },
];

const providers = ['All', ...Array.from(new Set(certificationsData.map(c => c.provider.trim().toLowerCase())))
  .map(provider => {
    // Capitalize first letter and handle special cases
    if (provider === 'simplilearn') return 'Simplilearn';
    if (provider === 'freecodecamp') return 'Freecodecamp';
    if (provider === 'coursera') return 'Coursera';
    if (provider === 'udacity') return 'Udacity';
    return provider.charAt(0).toUpperCase() + provider.slice(1);
  })
];


function Certifications() {
  const [filter, setFilter] = useState('All');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredCerts = filter === 'All'
    ? certificationsData
    : certificationsData.filter(cert => cert.provider === filter);

  // Carousel logic
  React.useEffect(() => {
    if (filteredCerts.length <= 1) return;
    const interval = setInterval(() => {
      setCarouselIndex(prev => (prev + 1) % filteredCerts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [filteredCerts.length]);

  // Show 4 at a time, scroll horizontally
  const visibleCount = 4;
  let visibleCerts = [];
  if (filteredCerts.length <= visibleCount) {
    visibleCerts = filteredCerts;
  } else {
    for (let i = 0; i < visibleCount; i++) {
      visibleCerts.push(filteredCerts[(carouselIndex + i) % filteredCerts.length]);
    }
  }

  return (
    <div id="Certification" className="certifications-container py-5" style={{ background: '#f8fafc', minHeight: '100vh' }}>
      <h1 className="text-center mb-4" style={{ fontWeight: 700, letterSpacing: 1 }}>My Certifications</h1>
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {providers.map(provider => (
          <button
            key={provider}
            className={`btn ${filter === provider ? 'btn-primary' : 'btn-outline-primary'} rounded-pill px-4`}
            onClick={() => {
              setFilter(provider);
              setCarouselIndex(0);
            }}
          >
            {provider}
          </button>
        ))}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div style={{ overflow: 'hidden', width: '100%' }}>
            <AnimatePresence initial={false}>
              <motion.div
                key={carouselIndex}
                className="d-flex"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.7, type: 'spring', stiffness: 60 }}
              >
                {visibleCerts.map(cert => (
                  <motion.div
                    key={cert.id}
                    className="col-12 col-sm-6 col-md-3"
                    style={{ minWidth: 250, maxWidth: 300, marginRight: 24 }}
                    whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(0,0,0,0.16)' }}
                  >
                    <div className="card certificate-card shadow-sm border-0">
                      {cert.imageUrl && (
                        <img
                          src={cert.imageUrl}
                          className="card-img-top certificate-image"
                          style={{ objectFit: 'cover', height: 180, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                          alt={cert.title}
                        />
                      )}

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {filteredCerts.length === 0 && (
            <div className="text-center text-muted py-5">No certifications found.</div>
          )}
        </div>
      </div>
      <style>{`
        .certificate-card:hover {
          transform: scale(1.04);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }
        .certificate-image {
          transition: filter 0.3s;
        }
        .certificate-card:hover .certificate-image {
          filter: brightness(0.95) saturate(1.1);
        }
      `}</style>
    </div>
  );
}

export default Certifications;
