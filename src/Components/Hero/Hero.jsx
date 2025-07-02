import React from 'react'
import styles from './Hero.module.css'




export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Vikas Zende</h1>
            <p className={styles.description}>Passionate web developer focused on building responsive, user-friendly websites.
Constantly exploring new tools and aiming for greater heights. </p>
            <a href='mailto:vikaszende2004@gmail.com' className={styles.contactBtn}>Contact Me</a>
        </div>
       <img src="/assets/hero/9022809.webp" alt="Hero Image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}
