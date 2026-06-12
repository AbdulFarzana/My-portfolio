import React, { useEffect, useRef, useState } from "react";
import styles from "./skill.module.css";

import {
    FaPython,
    FaReact,
    FaJava,
    FaDatabase,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiJavascript,
    SiFlask,
    SiTensorflow,
    SiMysql,
} from "react-icons/si";

function Skills() {
    const [animate, setAnimate] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
                }
            },
            {
                threshold: 0.4,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="skills"
            ref={sectionRef}
            className={styles.skills}
        >
            <h2>Skills</h2>

            <div className={styles["skills-container"]}>
                {/* Programming */}
                <div className={styles["skill-category"]}>
                    <h3>Programming</h3>

                    <div className={styles.skill}>
                        <FaPython />
                        <span>Python</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "90%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <FaJava />
                        <span>Java</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "80%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <SiJavascript />
                        <span>JavaScript</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "80%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* AI / ML */}
                <div className={styles["skill-category"]}>
                    <h3>AI / ML</h3>

                    <div className={styles.skill}>
                        <SiTensorflow />
                        <span>Machine Learning</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "88%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <FaPython />
                        <span>Data Analysis</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "85%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <SiTensorflow />
                        <span>Deep Learning</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "75%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Web Development */}
                <div className={styles["skill-category"]}>
                    <h3>Web Development</h3>

                    <div className={styles.skill}>
                        <FaReact />
                        <span>React</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "80%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <FaHtml5 />
                        <span>HTML</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "95%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <FaCss3Alt />
                        <span>CSS</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "90%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <SiFlask />
                        <span>Flask</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "75%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Database */}
                <div className={styles["skill-category"]}>
                    <h3>Database</h3>

                    <div className={styles.skill}>
                        <SiMysql />
                        <span>MySQL</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "85%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>

                    <div className={styles.skill}>
                        <FaDatabase />
                        <span>SQL</span>
                        <div className={styles.progress}>
                            <div
                                className={animate ? styles.fill : ""}
                                style={{
                                    width: animate ? "85%" : "0%",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;