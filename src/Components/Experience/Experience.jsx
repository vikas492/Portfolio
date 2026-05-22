import React from "react";

import styles from "./Experience.module.css";

import img1 from "../../../assets/skills/html.png";
import img2 from "../../../assets/skills/css.png";
import img3 from "../../../assets/skills/react.png";
import img4 from "../../../assets/skills/js1.png";
import img5 from "../../../assets/skills/mysql.png";
import img6 from "../../../assets/skills/php.png";
import img7 from "../../../assets/skills/nodejs.svg";
import img8 from "../../../assets/skills/figma.png";
import img9 from "../../../assets/skills/python.png";

const techIcons = [
  { name: "HTML", src: img1 },
  { name: "CSS", src: img2 },
  { name: "JavaScript", src: img4 },
  { name: "React", src: img3 },
  { name: "My SQL", src: img5 },
  { name: "PHP", src: img6 },
  { name: "Node.js", src: img7 },
  { name: "DSA", src: img8 },
  { name: "Python", src: img9 },
];

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          <div className={styles.skillsGrid} aria-label="3D rotating skills">
              {techIcons.map((tech) => (
                <div key={tech.name} className={styles.skillNode} title={tech.name}>
                  <div className={styles.skillOrb}>
                  <img src={tech.src} alt={tech.name} />
                  </div>
                  <p>{tech.name}</p>
                </div>
              ))}
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
