import React from "react";
import styles from "./project.module.css";

const projects = [
    {
        title: "Buzz & Bites",
        description:
            " a responsive coffee ordering website  with category based menu filtering and cart functionality.",
        tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/cb/ba/02/i-haven-t-taken-any-snaps.jpg?w=700&h=400&s=1",
        demo: "https://harika047.github.io/Buzz-and-Bites-App/",
        source: "https://github.com/harika047/Buzz-and-Bites-App.git",
    },
    {
        title: "Customer-purchase-prediction",
        description:
            "Developed a machine learning web application to predict customer purchase intent using customer behavioral data.",
        tech: ["Python", "Flask", "Scikit - learn", "HTML", "CSS"],
        image: "https://storage.googleapis.com/kaggle-datasets-images/5236181/8725150/13a926ac64411703d05e5afc871ad93c/dataset-cover.jpg?t=2024-06-19-03-02-48",
        demo: "https://customer-purchase-prediction-app.onrender.com",
        source: "https://github.com/harika047/customer-purchase-prediction-app.git",
    },
    {
        title: "Ideathon",
        description:
            "Built a dynamic college news and events platform during an 8-hour Ideathon hackathon",
        tech: ["MongoDB", "node", "React"],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57AP5rlKpUuDGuDj9nl7fZeIqwjO9Kf5pOg&s",
        demo: "https://your-live-link.com",
        source: "https://github.com/AbdulFarzana/ideathon_1.git",
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