import React from "react";
import styles from "../css/Footer.module.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a
          href="https://github.com/Hamida-Fathi"
          target="_blank"
         
        >
          <FaGithub className={styles.icon} />
        </a>

        <a
          href="https://www.linkedin.com/in/hamida-fathi/"
          target="_blank"
          
        >
          <FaLinkedin className={styles.icon} />
        </a>

        <a href="hamidafathi62@gmail.com">
          <FaEnvelope className={styles.icon} />
        </a>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} Hamida Fathi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
