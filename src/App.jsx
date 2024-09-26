"use client"
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FoundMe from "./components/FoundMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Song from "./components/Song";
import TechStack from "./components/TechStack";

export default function Home() {
    const comp = useRef(null)

    useLayoutEffect(() => {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline()
        t1.from("#intro-slider", {
          xPercent: "-100",
          duration: 0,
          delay: 0,
        })
          .from(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
          })
          .to(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "-=30",
            delay: 0.3,
            stagger: 0.5,
          })
          .to("#intro-slider", {
            xPercent: "-100",
            duration: 1.3,
          })
          .from("#welcome", {
            opacity: 0,
            duration: 0.5,
          })
      }, comp)

      return () => ctx.revert()
    }, [])

  return (

    <main className="bg-[#1d1c2a] relative" ref={comp}>
        <div
        id="intro-slider"
        className="h-full p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="md:text-9xl sm:text6xl text-4xl" id="title-1">
          Software Engineer
        </h1>
        <h1 className="md:text-9xl sm:text6xl text-4xl" id="title-2">
          Designer
        </h1>
        <h1 className="md:text-9xl sm:text6xl text-4xl" id="title-3">
          Freelancer
        </h1>
      </div>

  <div>
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
        <Song />
        <FoundMe />
        <Projects />
        <Contact />
        <div className="mt-44">

        <Footer />
        </div>
        </div>
    </div>
    </main>
  );
}
