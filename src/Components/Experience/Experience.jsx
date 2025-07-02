import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import img1 from "../../../assets/skills/html.png";
import img2 from "../../../assets/skills/css.png";
import img3 from "../../../assets/skills/react.png";
import img4 from "../../../assets/skills/js1.png";
import img5 from "../../../assets/skills/mysql.png";
import img6 from "../../../assets/skills/php.png";
import img7 from "../../../assets/skills/nodejs.svg";
import img8 from "../../../assets/skills/figma.png";
import img9 from "../../../assets/skills/python.png";

const images = skills.map((skill) => skill.imageSrc);
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
      <div className={styles.skills}>
          {/* Directly adding images */}
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={img1} alt="HTML" />
            </div>
            <p>HTML</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={img2} alt="HTML" />
            </div>
            <p>CSS</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={img4} alt="HTML" />
            </div>
            <p>Javascript</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={img3} alt="HTML" />
            </div>
            <p>React</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={img5} alt="HTML" />
            </div>
            <p>My SQL</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={img6} alt="HTML" />
            </div>
            <p>PHP</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={img7} alt="HTML" />
            </div>
            <p>Node.js</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={img8} alt="HTML" />
            </div>
            <p>DSA</p>
          </div>
          <div className={styles.skill}>
            <div className={styles.skillImageContainer}>
              <img src={img9} alt="HTML" />
            </div>
            <p>Python</p>
          </div>
          </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
              
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};