import { div } from "framer-motion/client";
import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
    </main>
  );
}
