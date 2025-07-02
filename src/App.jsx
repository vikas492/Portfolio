// import styles from './App.module.css'
// import { Navbar } from './Components/Navbar/Navbar'
// import { Hero } from './Components/Hero/Hero'
// import { About } from './Components/About/About'
// import { Experience } from './Components/Experience/Experience'
// import { Projects } from './Components/Projects/Projects'
// import { Contact } from './Components/Contact/Contact'

// function App() {
//   return (
//    <div className={styles.App}>
//     <Navbar />
//     <Hero />
//     <About />
//     <Experience />
//     <Projects />
//     <Contact />
//    </div>
//   )
// }
// export default App

import styles from './App.module.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero';
import { About } from './Components/About/About';
import { Experience } from './Components/Experience/Experience';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { useEffect, useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      {isVisible && (
        <button className={styles.scrollUp} onClick={scrollToTop}>
          Scroll Up
        </button>
      )}
    </div>
  );
}

export default App;
