import React from "react";

const uiuxProjects = [
    {
        title: "Mobile Banking App Redesign",
        description:
            "A modern, user-friendly redesign of a banking app focusing on accessibility and intuitive navigation.",
        image: "/assets/uiux/banking-app.png",
        link: "https://www.behance.net/gallery/123456789/Banking-App-Redesign",
    },
    {
        title: "E-commerce Website UI Kit",
        description:
            "A comprehensive UI kit for e-commerce platforms, including product pages, carts, and checkout flows.",
        image: "/assets/uiux/ecommerce-kit.png",
        link: "https://www.behance.net/gallery/987654321/E-commerce-UI-Kit",
    },
    {
        title: "Travel Booking Platform UX",
        description:
            "End-to-end UX design for a travel booking platform, emphasizing seamless booking and trip management.",
        image: "/assets/uiux/travel-booking.png",
        link: "https://www.behance.net/gallery/192837465/Travel-Booking-UX",
    },
];

export default function UIUXPortfolio() {
    return (
        <section
            style={{
                padding: "3rem 0 4rem 0",
                background: "linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%)",
                minHeight: "100vh",
            }}
        >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                <header style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                    <h1
                        style={{
                            fontSize: "2.8rem",
                            fontWeight: 800,
                            letterSpacing: "-1px",
                            margin: 0,
                            color: "#1a2236",
                        }}
                    >
                        UI/UX Design <span style={{ color: "#3b82f6" }}>Showcase</span>
                    </h1>
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "1.25rem",
                            marginTop: "1rem",
                            maxWidth: "600px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Explore a curated selection of professional UI and UX projects, demonstrating expertise in user-centered design, visual storytelling, and seamless digital experiences.
                    </p>
                </header>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                        gap: "2.5rem",
                    }}
                >
                    {uiuxProjects.map((project) => (
                        <a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: "none",
                                color: "inherit",
                                borderRadius: "18px",
                                overflow: "hidden",
                                background: "#fff",
                                boxShadow:
                                    "0 6px 32px 0 rgba(60,72,100,0.10), 0 1.5px 6px 0 rgba(60,72,100,0.04)",
                                transition: "transform 0.18s, box-shadow 0.18s",
                                display: "flex",
                                flexDirection: "column",
                                minHeight: "420px",
                                border: "1.5px solid #e5e7eb",
                                position: "relative",
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.transform = "translateY(-6px) scale(1.025)";
                                e.currentTarget.style.boxShadow =
                                    "0 12px 40px 0 rgba(60,72,100,0.16), 0 2px 8px 0 rgba(60,72,100,0.06)";
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.transform = "none";
                                e.currentTarget.style.boxShadow =
                                    "0 6px 32px 0 rgba(60,72,100,0.10), 0 1.5px 6px 0 rgba(60,72,100,0.04)";
                            }}
                        >
                            <div style={{ position: "relative" }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: "100%",
                                        height: "240px",
                                        objectFit: "cover",
                                        display: "block",
                                        borderBottom: "1.5px solid #e5e7eb",
                                        background: "#f1f5f9",
                                    }}
                                />
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "16px",
                                        right: "16px",
                                        background: "rgba(59,130,246,0.92)",
                                        color: "#fff",
                                        fontSize: "0.95rem",
                                        fontWeight: 600,
                                        padding: "0.35em 1em",
                                        borderRadius: "999px",
                                        boxShadow: "0 2px 8px rgba(59,130,246,0.10)",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    Case Study
                                </span>
                            </div>
                            <div style={{ padding: "1.5rem 1.3rem 1.2rem 1.3rem", flex: 1 }}>
                                <h2
                                    style={{
                                        margin: "0 0 0.7rem 0",
                                        fontSize: "1.45rem",
                                        fontWeight: 700,
                                        color: "#1a2236",
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {project.title}
                                </h2>
                                <p
                                    style={{
                                        margin: 0,
                                        color: "#475569",
                                        fontSize: "1.08rem",
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {project.description}
                                </p>
                            </div>
                            <div
                                style={{
                                    padding: "0 1.3rem 1.3rem 1.3rem",
                                    marginTop: "auto",
                                }}
                            >
                                <span
                                    style={{
                                        display: "inline-block",
                                        marginTop: "0.7rem",
                                        color: "#3b82f6",
                                        fontWeight: 600,
                                        fontSize: "1.05rem",
                                        letterSpacing: "0.2px",
                                        transition: "color 0.15s",
                                    }}
                                >
                                    View Project &rarr;
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}