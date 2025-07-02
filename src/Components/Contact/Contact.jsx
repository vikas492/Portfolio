import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
// import img1 from "Vikas_Portfolio/public/assets/contact/emailIcon.png";
// import img2 from "Vikas_Portfolio/public/assets/contact/linkedinIcon.png";
// import img3 from "Vikas_Portfolio/public/assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
         <img src="/assets/contact/emailIcon.png" alt="Email Icon" />
          <a href="mailto:vikaszende2004@gmail.com">vikaszende2004@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/linkedinIcon.png" alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/vikas-zende-874323262/">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src="/assets/contact/githubIcon.png" alt="GitHub Icon" />
          <a href="https://github.com/vikas492">github.com</a>
        </li>
      </ul>
    </footer>
  );
};