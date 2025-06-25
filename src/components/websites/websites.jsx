import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/website.css";

// Example websites data
const websites = [
    {
        title: "Portfolio Site",
        description: "A personal portfolio website built with React and styled-components.",
        url: "https://dawit-me.onrender.com",
        image: "https://via.placeholder.com/400x200?text=Portfolio+Site",
        tags: ["React", "Styled-Components", "Frontend"],
        category: "portfolio",
    },
    {
        title: "E-commerce Store",
        description: "A modern e-commerce platform with shopping cart and payment integration.",
        url: "https://your-ecommerce.com",
        image: "https://via.placeholder.com/400x200?text=E-commerce+Store",
        tags: ["E-commerce", "Payments", "Fullstack"],
        category: "anothers",
    },
    {
        title: "Blog Platform",
        description: "A full-featured blog platform with markdown support and comments.",
        url: "https://fbi-church-gelan.onrender.com",
        image: "https://via.placeholder.com/400x200?text=Blog+Platform",
        tags: ["Blog", "Markdown", "Comments"],
        category: "blog",
    },
    {
        title: "Photography Portfolio",
        description: "A gallery website for showcasing photography work.",
        url: "https://photography-portfolio.com",
        image: "https://via.placeholder.com/400x200?text=Photography+Portfolio",
        tags: ["Portfolio", "Gallery", "Photography"],
        category: "portfolio",
    },
    {
        title: "Tech Blog",
        description: "A blog focused on technology news and tutorials.",
        url: "https://techblog.com",
        image: "https://via.placeholder.com/400x200?text=Tech+Blog",
        tags: ["Blog", "Tech", "Tutorials"],
        category: "blog",
    },
    {
        title: "Recipe Finder",
        description: "Find and share recipes from around the world.",
        url: "https://recipefinder.com",
        image: "https://via.placeholder.com/400x200?text=Recipe+Finder",
        tags: ["Food", "Recipes", "Search"],
        category: "anothers",
    },
    {
        title: "Resume Builder",
        description: "Create and download professional resumes easily.",
        url: "https://resumebuilder.com",
        image: "https://via.placeholder.com/400x200?text=Resume+Builder",
        tags: ["Resume", "Builder", "Portfolio"],
        category: "portfolio",
    },
    {
        title: "Travel Blog",
        description: "Stories and tips from traveling the world.",
        url: "https://travelblog.com",
        image: "https://via.placeholder.com/400x200?text=Travel+Blog",
        tags: ["Blog", "Travel", "Stories"],
        category: "blog",
    },
];

const FILTERS = [
    { label: "All", value: "all" },
    { label: "Blog", value: "blog" },
    { label: "Portfolio", value: "portfolio" },
    { label: "Fullstack", value: "fullstack" }
];

// Tag component
const Tag = ({ children }) => (
    <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="website-tag"
    >
        {children}
    </motion.span>
);

// Card component
const WebsiteCard = ({ website, idx }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.08, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.04, boxShadow: "0 12px 36px 0 rgba(31,38,135,0.22)" }}
        className="website-card"
    >
        <a href={website.url} target="_blank" rel="noopener noreferrer" className="website-card-link">
            <motion.div
                className="website-card-image-container"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={website.image}
                    alt={website.title}
                    className="website-card-image"
                />
                <div className="website-card-overlay" />
            </motion.div>
            <div className="website-card-content">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08, duration: 0.4 }}
                    className="website-card-title"
                >
                    {website.title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + idx * 0.08, duration: 0.4 }}
                    className="website-card-description"
                >
                    {website.description}
                </motion.p>
                <div className="website-card-tags">
                    {website.tags && website.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
                </div>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 + idx * 0.08, duration: 0.3 }}
                    className="website-card-link-text"
                >
                    Visit Website &rarr;
                </motion.span>
            </div>
        </a>
    </motion.div>
);

const WebsitesPortfolio = () => {
    const [filter, setFilter] = useState("all");
    const filteredWebsites =
        filter === "all"
            ? websites
            : websites.filter(site => site.category === filter);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="websites-portfolio"
        >
            <div className="websites-container">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="websites-title"
                >
                    Website Portfolio Showcase
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="websites-filters"
                >
                    {FILTERS.map(f => (
                        <motion.button
                            key={f.value}
                            onClick={() => setFilter(f.value)}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.07 }}
                            className={`filter-button ${filter === f.value ? 'active' : ''}`}
                        >
                            {f.label}
                        </motion.button>
                    ))}
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.08
                            }
                        }
                    }}
                    className="websites-grid"
                >
                    {filteredWebsites.map((website, idx) => (
                        <WebsiteCard website={website} key={idx} idx={idx} />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default WebsitesPortfolio;
