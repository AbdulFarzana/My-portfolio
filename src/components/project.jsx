import React from "react";
import styles from "./project.module.css";
import placementPilotImg from "../assets/placement-pilot.jpeg";
import shopperImg from "../assets/shopper-intent.png";
import buzzImg from "../assets/buzz-bites.png";

const projects = [
    {
        title: "PlacementPilot AI",
        description:
            "An AI-powered placement preparation platform built during a 24-hour hackathon. It provides aptitude practice, coding challenges, interview preparation, personalized learning paths, AI assistance, and progress tracking.",
        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "JWT",
            "AI",
        ],
        image: placementPilotImg,
        demo: "https://placement-prep-ai-kappa.vercel.app",
        source: "https://github.com/AbdulFarzana/PlacementPrep-AI-farru",
    },
    {
        title: "Shopper Intent Prediction",
        description:
            "Developed a machine learning web application to predict customer purchase intent using customer behavioral data.",
        tech: [
            "Python",
            "Flask",
            "Scikit-learn",
            "HTML",
            "CSS",
        ],
        image: shopperImg,
        demo: "https://customer-purchase-prediction-app.onrender.com",
        source: "https://github.com/harika047/customer-purchase-prediction-app.git",
    },
    {
        title: "Buzz & Bites",
        description:
            "A responsive coffee ordering website with category-based menu filtering and shopping cart functionality for a seamless user experience.",
        tech: [
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
        ],
        image: buzzImg,
        demo: "https://harika047.github.io/Buzz-and-Bites-App/",
        source: "https://github.com/harika047/Buzz-and-Bites-App.git",
    },
];

const Project = () => {
    return (
        <section className={styles.projectsSection} id="projects">
            <h2 className={styles.heading}>Projects</h2>

            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div className={styles.card} key={index}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className={styles.image}
                        />

                        <div className={styles.content}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className={styles.tech}>
                                {project.tech.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </div>

                            <div className={styles.buttons}>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.demo}
                                >
                                    Demo
                                </a>

                                <a
                                    href={project.source}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.source}
                                >
                                    Source
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;