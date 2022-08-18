import React from "react";
import Hero from "./components/hero/Hero.component";
import "./App.styles.scss";
import Navigation from "./components/navigation/Navigation.component";
import NavigationModal from "./components/navigation-modal/NavigationModal.component";
import Projects from "./components/projects/Projects.component";
import About from "./components/about/About.component";
import { Element } from "react-scroll";
import Playground from "./components/playground/Playground.component";
import Contact from "./components/contact/Contact.component";
import ContactAlt from "./components/contact-2/ContactAlt.component";
import Footer from "./components/Footer/Footer.component";
import Intro from "./components/Intro/Intro.component";
import Aos from "aos";
import "aos/dist/aos.css";
import ProblemTwo from "./components/problem-2/ProblemTwo.component";
import Crud from "./components/crud/Crud.component";

function App() {
  Aos.init();
  React.useEffect(() => {
    document.title = "Argel Miralles | Web Developer";
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Element name="yngen">
        <Intro />
      </Element>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="playground">
        <Playground />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="contact-alt">
        <ContactAlt />
      </Element>
      <Element name="problem-two">
        <ProblemTwo />
      </Element>
      <Element name="crud">
        <Crud />
      </Element>
      <Footer />
      <NavigationModal />
    </div>
  );
}

export default App;
