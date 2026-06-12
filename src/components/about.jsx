import React from "react";
import Styles from "./about.module.css";

export const About = () => {
    return (
        <section className={Styles.section} id="about">
            <h2 className={Styles.title}>About Me</h2>

            <div className={Styles.content}>
                <p className={Styles.text}>
                    I am a 3rd year B.Tech student specializing in Computer Science and
                    Engineering with a strong focus on Artificial Intelligence and
                    Machine Learning at Prasad V. Potluri Siddhartha Engineering College.
                </p>

                <p className={Styles.text}>
                    I am passionate about building AI-driven solutions that create
                    real-world impact and enjoy developing intelligent systems.
                </p>

                <p className={Styles.text}>
                    I continuously explore new technologies and apply them to create
                    innovative and scalable solutions.
                </p>
            </div>

            <ul className={Styles.skills}>
                <li className={Styles.skill}>
                    <div className={Styles.icon}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                            alt="AI"
                        />
                    </div>

                    <div className={Styles.skillInfo}>
                        <h3>Artificial Intelligence</h3>
                        <p>
                            Building intelligent systems, automation solutions and AI-powered
                            applications.
                        </p>
                    </div>
                </li>
                <li className={Styles.skill}>
                    <div className={Styles.icon}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
                            alt="Machine Learning"
                        />
                    </div>

                    <div className={Styles.skillInfo}>
                        <h3>Machine Learning</h3>
                        <p>
                            Developing predictive models, classification systems and intelligent
                            analytics.
                        </p>
                    </div>
                </li>
                <li className={Styles.skill}>
                    <div className={Styles.icon}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png"
                            alt="Web Development"
                        />
                    </div>

                    <div className={Styles.skillInfo}>
                        <h3>Web Development</h3>
                        <p>
                            Creating responsive websites using HTML, CSS, JavaScript and React.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    );
};