import React from "react";
import Styles from "./about.module.css";

export const About = () => {
    return (
        <section className={Styles.section} id="about">
            <h2 className={Styles.title}>About Me</h2>

            <div className={Styles.content}>
                <p className={Styles.text}>
                    I am a <strong>4th-year B.Tech student</strong> specializing in Computer Science and
                    Engineering with a strong focus on Artificial Intelligence and Machine Learning
                    at Prasad V. Potluri Siddhartha Engineering College. I have consistently
                    maintained a strong academic record with a <strong>CGPA of 9.06</strong>.
                </p>

                <p className={Styles.text}>
                    I am passionate about building AI-driven solutions that solve real-world
                    problems and enjoy transforming innovative ideas into intelligent,
                    user-centric applications.
                </p>

                <p className={Styles.text}>
                    I continuously explore emerging technologies, participate in hackathons,
                    and work on impactful projects that strengthen my technical expertise while
                    enabling me to develop scalable, innovative, and AI-powered solutions.
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