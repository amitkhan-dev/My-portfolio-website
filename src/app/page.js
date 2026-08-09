import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import Services from "./components/sections/Services";
import Timeline from "./components/sections/Timeline";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Timeline/>
      <ContactSection/>
      <Footer/>
    </main>
  );
}
