import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about"><span className={styles.navText}>About</span></a>
          </li>
          <li>
            <a href="#experience"><span className={styles.navText}>Experience</span></a>
          </li>
          <li>
            <a href="#projects"><span className={styles.navText}>Projects</span></a>
          </li>
          <li>
            <a href="#contact"><span className={styles.navText}>Contact</span></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
