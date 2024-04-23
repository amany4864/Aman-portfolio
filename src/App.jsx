import "./app.scss"
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import Parallax from "../components/parallax/Parallax";
import Skills from "../components/skills/Skills";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";





const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    
    <section id="Services"><Parallax type="services"/></section>
    <section><Skills/></section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <Portfolio />
    <section id=" contact">
      <Contact/>
    </section>
    
  </div>;

};

export default App;
