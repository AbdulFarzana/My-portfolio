import React from "react";
import Styles from "./achievements.module.css";

export const Achievements = () => {
    const achievements = [
        {
            year: "2024",
            title: "Top 5 Hackathon",
            description:
                "Secured Top 5 position among 34 teams in the PVPSIT Full Stack Hackathon."
        },
        {
            year: "2025",
            title: "AI Chatbot Hackathon",
            description:
                "Built and deployed an interactive AI chatbot during a 12-hour hackathon."
        },
        {
            year: "2026",
            title: "New Nest Ideathon",
            description:
                "Developed sustainability-focused innovative solutions through teamwork."
        }
    ];

    return (
        <section className={Styles.section} id="achievements">
            <h2 className={Styles.title}>Achievements</h2>

            <div className={Styles.timeline}>
                <div className={Styles.progressLine}></div>

                {achievements.map((item, index) => (
                    <div
                        className={Styles.milestone}
                        key={index}
                        style={{ animationDelay: `${index * 0.4}s` }}
                    >
                        <span className={Styles.year}>{item.year}</span>

                        <div className={Styles.dot}></div>

                        <div className={Styles.card}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};