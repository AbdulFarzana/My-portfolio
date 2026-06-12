import styles from "./App.module.css";

import Navbar from "./components/navbar";

import { Hero } from "./components/hero";
import { About } from "./components/about";

import Skills from "./components/skills";
import Project from "./components/project";

import { Achievements } from "./components/achievements";
import { Certificates } from "./components/certificates";

import { Contact } from "./components/contact";
import { Footer } from "./components/footer";


function App() {
  return (
    <div className={styles.App}>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Project />

      <Achievements />

      <Certificates />

      {/* ADD CONTACT AT END */}
      <Contact />

      <Footer />

    </div>
  );
}

export default App;