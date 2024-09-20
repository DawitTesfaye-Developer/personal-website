// components/Contact.js
import React from 'react';
import { useForm } from 'react-hook-form';
import "../components/contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      // Handle form submission
      console.log('Form Data:', data);
      
      // Simulate a form submission with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      reset(); // Reset form fields
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative contact-container">
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: 'url(/path-to-your-background-image.jpg)' }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Higher opacity for better readability */}
      
      <h2 className="text-center text-4xl font-extrabold text-white mb-6">Contact Us</h2>
      
      <div className="container mx-auto relative z-10 h-full flex items-center justify-center">
        <div className="w-full bg-white bg-opacity-10 p-8 rounded-lg shadow-xl border border-gray-300 contact-form-container">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-group">
              <label htmlFor="fullname" className="block text-lg font-semibold text-white mb-2">Full Name</label>
              <input
                type="text"
                className={`form-control ${errors.fullname ? 'border-red-500' : 'border-gray-300'} p-4 rounded-md w-full`}
                id="fullname"
                placeholder="Your Full Name"
                {...register('fullname', { required: 'Full Name is required' })}
              />
              {errors.fullname && <p className="text-red-500 text-sm mt-1">{errors.fullname.message}</p>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="block text-lg font-semibold text-white mb-2">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? 'border-red-500' : 'border-gray-300'} p-4 rounded-md w-full`}
                id="email"
                placeholder="Your Email"
                {...register('email', { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' } })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="block text-lg font-semibold text-white mb-2">Message</label>
              <textarea
                className={`form-control ${errors.message ? 'border-red-500' : 'border-gray-300'} p-4 rounded-md w-full`}
                id="message"
                rows="3"
                placeholder="Your Message"
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              className="submit-button w-full text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
          
          {/* Social Media Links */}
          <div className="social-links mt-8 flex justify-center space-x-4">
            <a className="facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a className="twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a className="linkedin" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a className="instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
