import "./app.scss"
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import Parallax from "../components/parallax/Parallax";
import Skills from "../components/skills/Skills";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import Cursor from "../components/cursor/Cursor";
import About from "../components/about/About";





const App = () => {
  return (
     <div>
    <Cursor/>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Skills/></section>
    <section id="Portfolio">
      <Parallax type="Portfolio"/>
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
