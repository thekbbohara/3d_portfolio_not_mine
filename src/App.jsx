
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="bg-[#1d1c2a]">

    <div>
    <Navbar />
    <div className="mt-24 mb-44 block max-sm:mb-[350px]">
        <Hero />
    </div>
    <div className="md:mt-64 mb-44 block sm:mt-72 max-sm:mt-[300px]">
        <TechStack />
    </div>
    <div>
        <About />
    </div>
    <Projects />
    <Contact />
    <div className="mt-44">

    <Footer />
    </div>
    </div>
    </main>
  );
}
