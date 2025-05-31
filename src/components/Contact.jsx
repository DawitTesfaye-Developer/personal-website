import React, { useState } from "react";
import { motion } from "framer-motion";
import "../components/css/Contact.css";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="#181717" d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2v3.26c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5Z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "www.linkedin.com/in/dawit-tesfaye-hatau-60a17b311",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <rect width="24" height="24" rx="4" fill="#0A66C2"/>
        <path d="M7.5 8.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm.75 2.25H6.75v7.25h1.5v-7.25Zm3.25 0h-1.5v7.25h1.5v-3.75c0-1.1.9-2 2-2s2 .9 2 2v3.75h1.5v-4.25c0-2.07-1.68-3.75-3.75-3.75s-3.75 1.68-3.75 3.75v4.25h1.5v-7.25Z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#1DA1F2"/>
        <path d="M19 8.3a5.6 5.6 0 0 1-1.6.44A2.8 2.8 0 0 0 18.5 7a5.6 5.6 0 0 1-1.78.68A2.8 2.8 0 0 0 12 10.5c0 .22.02.43.07.63A7.95 7.95 0 0 1 5.5 7.6a2.8 2.8 0 0 0 .87 3.74 2.8 2.8 0 0 1-1.27-.35v.04a2.8 2.8 0 0 0 2.25 2.75c-.2.05-.42.08-.64.08-.16 0-.3-.01-.45-.04a2.8 2.8 0 0 0 2.62 1.95A5.6 5.6 0 0 1 5 17.1a7.9 7.9 0 0 0 4.29 1.26c5.15 0 7.97-4.27 7.97-7.97 0-.12 0-.23-.01-.35A5.7 5.7 0 0 0 19 8.3Z" fill="#fff"/>
      </svg>
    ),
  },
];

const inputVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, type: "spring" },
  }),
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <motion.h2
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Interested in collaborating or just want to say hi? Fill out the form below!
        </motion.p>
        <motion.div
          className="contact-socials"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              aria-label={link.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
        {submitted ? (
          <motion.div
            className="contact-success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#4ade80"/>
              <path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Thank you for reaching out!</span>
          </motion.div>
        ) : (
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            autoComplete="off"
            initial="hidden"
            animate="visible"
          >
            {["name", "email", "message"].map((field, i) => (
              <motion.div
                className="input-group"
                key={field}
                custom={i}
                variants={inputVariants}
                initial="hidden"
                animate="visible"
              >
                {field !== "message" ? (
                  <>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      placeholder=" "
                      value={form[field]}
                      onChange={handleChange}
                      required
                      id={`contact-${field}`}
                    />
                    <label htmlFor={`contact-${field}`}>
                      {field === "name"
                        ? "Your Name"
                        : field === "email"
                        ? "Your Email"
                        : ""}
                    </label>
                  </>
                ) : (
                  <>
                    <textarea
                      name="message"
                      placeholder=" "
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      id="contact-message"
                    />
                    <label htmlFor="contact-message">Your Message</label>
                  </>
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              className="contact-btn"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Send Message</span>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;