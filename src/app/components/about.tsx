import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import CV from './downloadcv';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about flex flex-col md:flex-row lg:max-w-7xl mx-auto px-6 pt-20 gap-16 md:gap-32 font-mono items-center justify-between">
      {/* About Left Section */}
      <div className="about-left flex-1 p-4 mt-10">
        <div className="about-text justify-center">
          <h1 className="font-stinger text-[#C9C9C9] text-4xl md:text-6xl font-regular mb-6">welcome,</h1>
          <h1 className="font-stinger text-[#C9C9C9] text-4xl md:text-6xl font-regular mb-6">my name is</h1>
          <h1 className="font-stingerbold text-4xl md:text-6xl font-regular mb-6">KYLA RONQUILLO</h1>
          <h1 className="text-sm md:text-3xl font-regular mb-6 text-gray-500 min-h-[60px]">
            <Typewriter
              options={{
                strings: ['- Data Analytics', '- Project Management'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>

          {/* <p className="text-gray-600 mb-6 text-justify">
            I’m Kyla, a Computer Science undergraduate navigating the thrilling
            world of data science and project management 📊 I thrive on
            uncovering insights from data and love tackling challenges in CTF
            competitions to sharpen my problem-solving skills.
          </p> */}
        </div>

        {/* Icons */}
        <div className="my-icons flex space-x-6 mt-4">
          <a 
            href="https://github.com/kylaronquillo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black text-3xl hover:text-gray-600 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a 
            href="https://www.linkedin.com/in/kylaronquillo/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black text-3xl hover:text-gray-600 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a 
            href="https://medium.com/@kylasbronquillo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black text-3xl hover:text-gray-600 transition-colors"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>

        {/* Button-Contact */}
        <div className="about-buttons flex space-x-4">
          <button className="learn-more mt-10  text-grey-600 py-2 px-4 border-black hover:bg-white hover:text-[#6EA0BA] hover:border-[#6EA0BA] border-2 transition-all">
            <a href="mailto:kylasbronquillo@gmail.com">Leave a message</a>
          </button>
          <CV />
        </div>
      </div>

      {/* Right Side of About Section */}
      <div className="about-right flex justify-center p-4 md:p-8 lg:p-12">
        <Image
          src="/images/mi-logo.png"
          alt="Kyla"
          width={400} // Increased width
          height={400} // Increased height
          className="icon rounded-lg"
        />
      </div>

    </section>
  );
};

export default AboutSection;
