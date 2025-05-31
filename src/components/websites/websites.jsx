import React, { useState } from "react";
import { motion } from "framer-motion";

// Example websites data (added more cards)
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

// Tag component
const Tag = ({ children }) => (
    <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #ee9211%,rgb(74, 124, 32) 100%)",
            color: "#fff",
            borderRadius: "12px",
            padding: "2px 12px",
            fontSize: "12px",
            marginRight: "8px",
            marginBottom: "6px",
            fontWeight: 500,
            letterSpacing: "0.02em"
        }}
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
        style={{
            borderRadius: "18px",
            overflow: "hidden",
            margin: "16px",
            width: "360px",
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "pointer",
            border: "1px solid rgba(200,200,200,0.15)",
            backdropFilter: "blur(2px)",
            position: "relative"
        }}
    >
        <a href={website.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <motion.div
                style={{ overflow: "hidden", height: "200px", position: "relative" }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    src={website.image}
                    alt={website.title}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.3s",
                    }}
                />
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(180deg,rgba(0,0,0,0.08) 0%,rgba(0,0,0,0.18) 100%)"
                }} />
            </motion.div>
            <div style={{ padding: "22px 20px 18px" }}>
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.08, duration: 0.4 }}
                    style={{
                        margin: "0 0 10px",
                        color: "#FA812F",
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        letterSpacing: "-0.01em"
                    }}
                >
                    {website.title}
                </motion.h3>
                <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + idx * 0.08, duration: 0.4 }}
                    style={{
                        margin: "0 0 16px",
                        color: "#444",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        minHeight: "48px"
                    }}
                >
                    {website.description}
                </motion.p>
                <div style={{ marginBottom: "14px" }}>
                    {website.tags && website.tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
                </div>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.35 + idx * 0.08, duration: 0.3 }}
                    style={{
                        color: "#2563eb",
                        fontWeight: 600,
                        fontSize: "1rem",
                        textDecoration: "underline",
                        letterSpacing: "0.01em"
                    }}
                >
                    Visit Website &rarr;
                </motion.span>
            </div>
        </a>
    </motion.div>
);

const FILTERS = [
    { label: "All", value: "all" },
    { label: "Blog", value: "blog" },
    { label: "Portfolio", value: "portfolio" },
    { label: "fullstack", value: "fullstack" }
];

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
            style={{
                minHeight: "100vh",
                background: "rgba(15, 15, 36, 0.9)",
                padding: "0",
                fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif"
            }}
        >
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "48px 24px 32px"
            }}>
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                        fontSize: "2.5rem",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        background: "linear-gradient(90deg,rgb(219, 165, 16) 0%,rgb(237, 58, 142) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Website Portfolio Showcase
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "18px",
                        marginBottom: "36px"
                    }}
                >
                    {FILTERS.map(f => (
                        <motion.button
                            key={f.value}
                            onClick={() => setFilter(f.value)}
                            whileTap={{ scale: 0.95 }}
                            whileHover={{ scale: 1.07 }}
                            style={{
                                gap: '100px',
                                padding: "8px 22px",
                                borderRadius: "18px",
                                border: "none",
                                background: filter === f.value
                                    ? "linear-gradient(90deg,rgb(218, 108, 18) 0%,rgb(218, 124, 18) 100%)"
                                    : "#e0e7ff",
                                color: filter === f.value ? "#fff" : "#333",
                                fontWeight: 600,
                                fontSize: "1rem",
                                cursor: "pointer",
                                boxShadow: filter === f.value ? "0 2px 8px rgba(31,38,135,0.10)" : "none",
                                transition: "all 0.18s"
                            }}
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
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "32px"
                    }}
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