import React from "react";
import Styles from "./footer.module.css";

import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";

import {
    SiLeetcode,
    SiCodechef
} from "react-icons/si";

export const Footer = () => {
    return (

        <footer className={Styles.footer}>

            <a
                href="https://github.com/AbdulFarzana"
                target="_blank"
            >
                <FaGithub />
            </a>


            <a
                href="https://www.linkedin.com/in/abdul-farzana-878b1a372/"
                target="_blank"
            >
                <FaLinkedin />
            </a>


            <a
                href="https://leetcode.com/"
                target="_blank"
            >
                <SiLeetcode />
            </a>


            <a
                href="https://www.codechef.com/"
                target="_blank"
            >
                <SiCodechef />
            </a>

        </footer>

    );
};