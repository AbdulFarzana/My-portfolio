import React from "react";
import Styles from "./contact.module.css";

import {
    FaEnvelope,
    FaPhone,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

export const Contact = () => {
    return (

        <section
            id="contact"
            className={Styles.container}
        >

            <h1>Contact</h1>

            <div className={Styles.cardContainer}>


                <div className={Styles.card}>
                    <FaEnvelope className={Styles.icon} />

                    <h2>Email</h2>

                    <p>
                        abdulfarzana143@gmail.com
                    </p>

                    <a
                        href="mailto:abdulfarzana143@gmail.com"
                        className={Styles.btn}
                    >
                        Send Mail
                    </a>

                </div>


                <div className={Styles.card}>
                    <FaPhone className={Styles.icon} />

                    <h2>Phone</h2>

                    <p>
                        +91 8106768578
                    </p>

                    <a
                        href="tel:+918106768578"
                        className={Styles.btn}
                    >
                        Call
                    </a>

                </div>


                <div className={Styles.card}>
                    <FaLinkedin className={Styles.icon} />

                    <h2>LinkedIn</h2>

                    <p>
                        Connect with me
                    </p>

                    <a
                        href="https://www.linkedin.com/in/abdul-farzana-878b1a372/"
                        target="_blank"
                        className={Styles.btn}
                    >
                        Visit
                    </a>

                </div>


                <div className={Styles.card}>
                    <FaGithub className={Styles.icon} />

                    <h2>GitHub</h2>

                    <p>
                        Explore projects
                    </p>

                    <a
                        href="https://github.com/AbdulFarzana"
                        target="_blank"
                        className={Styles.btn}
                    >
                        Visit
                    </a>

                </div>

            </div>

        </section>

    );
};