import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">
                Portfolio
            </a>

            <ul className={styles.menuItems}>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skills">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#achievements">Achievements</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;