import React from "react";
import Styles from "./certificates.module.css";

import rCertificate from "../assets/r-software.pdf";
import javaCertificate from "../assets/java_nptel.pdf";
import daaCertificate from "../assets/DS_nptel.pdf";
import googleCertificate from "../assets/google-aiml.pdf";
import awsCertificate from "../assets/aws-genai.pdf";
import ccnaCertificate from "../assets/ccna.pdf";

export const Certificates = () => {
    const certificates = [
        {
            id: "01",
            title: "Foundation of R Software",
            issuer: "NPTEL",
            file: rCertificate,
        },
        {
            id: "02",
            title: "Programming in Java",
            issuer: "NPTEL",
            file: javaCertificate,
        },
        {
            id: "03",
            title: "Design & Analysis of Algorithms",
            issuer: "NPTEL",
            file: daaCertificate,
        },
        {
            id: "04",
            title: "Google AI/ML Virtual Internship",
            issuer: "Google",
            file: googleCertificate,
        },
        {
            id: "05",
            title: "AWS Generative AI Internship",
            issuer: "AWS Academy",
            file: awsCertificate,
        },
        {
            id: "06",
            title: "CCNA",
            issuer: "Cisco",
            file: ccnaCertificate,
        },
    ];

    return (
        <section className={Styles.section} id="certificates">
            <h2 className={Styles.title}>Certificates</h2>

            <div className={Styles.grid}>
                {certificates.map((certificate) => (
                    <a
                        key={certificate.id}
                        href={certificate.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={Styles.card}
                    >
                        <span className={Styles.number}>
                            {certificate.id}
                        </span>

                        <h3>{certificate.title}</h3>

                        <p>{certificate.issuer}</p>

                        <div className={Styles.view}>
                            View Certificate →
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};