import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Process from './component/Process';
import Services from './component/Services';
import Testimonials from './component/Testimonials';
import Contact from './component/Contact';
import Footer from "./component/Footer"


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  console.log("Hello world")

  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <Process/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;