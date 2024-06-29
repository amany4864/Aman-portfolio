import "./app.scss"
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import Parallax from "../components/parallax/Parallax";
import Skills from "../components/skills/Skills";
import Contact from "../components/contact/Contact";
import Cursor from "../components/cursor/Cursor";
import About from "../components/about/About";
import Projects from "../components/projects/Projects";





const App = () => {
  return (
     <div>
    <Cursor/>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section><Skills/></section>
    <section id="Projects">
      <Parallax type="Projects"/>
    </section>
    <Projects />
    <section id="Contact">
      <Contact/>
    </section>
    <section id="About"> 
      <About/>
     </section>
    
  </div>
  )
};

export default App;
