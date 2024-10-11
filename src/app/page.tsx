"use client";

import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Projects from './components/projectsection';// Adjust the path as needed
import Contact from './components/contact';
import Header from './components/header';
import About from './components/about';

export default function Home() {
  return (
    <div className="homepage bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header with Navigation */}
      <Header />

      {/* About Section */}
      <section id="about" className="about pb-10">        
       <About />
      </section>
      
      {/* Call the Projects Component */}
      <section id="projects" className="projects pt-10 pb-10">
        <Projects />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="contact pt-10 pb-10 drop-shadow">
        <Contact />
      </section>
                      
    </div>
  );
}
