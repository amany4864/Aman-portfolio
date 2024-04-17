import "./app.scss"
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero.jsx";




const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id=" contact">Contact</section>
    {/* <Test/>
    <Test/> */}
    
  </div>;

};

export default App;
