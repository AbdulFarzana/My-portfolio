import React from "react";
import Styles from "./hero.module.css";
import { getImageUrl } from "../utils.js";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <section id="home" className={Styles.container}>

            <div className={Styles.content}>

                <h1 className={Styles.title}>
                    Hi, I'm Farzana
                </h1>

                <h2 className={Styles.role}>
                    AI / ML Engineer
                </h2>

                <p className={Styles.description}>
                    Passionate AI & ML student at PVPSIT with a strong interest
                    in machine learning, data science and intelligent systems.
                </p>

                <div className={Styles.btnContainer}>

                    <a
                        href="#contact"
                        className={Styles.contactBtn}
                    >
                        Contact Me
                    </a>

                    <a
                        href="./resume_main.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className={Styles.resumeBtn}
                    >
                        Resume
                    </a>

                    <a
                        href="./resume_main.pdf"
                        download
                        className={Styles.downloadBtn}
                    >
                        Download CV
                    </a>

                </div>
            </div>

            <img
                src={getImageUrl("profile.jpeg")}
                alt="profile"
                className={Styles.heroImg}
            />

            <div className={Styles.topBlur}></div>
            <div className={Styles.bottomBlur}></div>

        </section>
    );
};