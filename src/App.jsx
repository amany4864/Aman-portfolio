import "./app.scss"
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import Parallax from "../components/parallax/Parallax";
import Skills from "../components/skills/Skills";
import Portfolio from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Cursor from "../components/cursor/Cursor";
import About from "../components/about/About";





const App = () => {
  return (
     <div>
    <Cursor/>
    <section id="Home">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Parallax type="Skills"/></section>
    <section><Skills/></section>
    <section id="Projects">
      <Parallax type="Projects"/>
    </section>
    <Portfolio />
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
