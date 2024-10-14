"use client";

import Projects from './components/projectsection'; // Adjust the path as needed
import Contact from './components/contact';
import Header from './components/header';
import About from './components/about';
import Head from 'next/head'; // Import Head from next/head

export default function Home() {
  return (
    <>
      <Head>
        <title>Kyla Ronquillo</title>
        <meta name="description" content="A portfolio showcasing Kyla Ronquillo's projects." />
      </Head>
      
      <div className="homepage bg-gray-50 min-h-screen flex flex-col items-center">
        {/* Header with Navigation */}
        <Header />

        {/* About Section */}
        <section id="about" className="about pb-10">        
          <About />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="projects pt-10 pb-10">
          <Projects />
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="contact pt-10 pb-10 drop-shadow">
          <Contact />
        </section>
      </div>
    </>
  );
}
