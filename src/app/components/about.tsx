import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import CV from './downloadcv';
const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about flex flex-col md:flex-row max-w-7xl pt-20 space-y-10 md:space-y-0 md:space-x-40 font-mono content-center">
      {/* About Left Section */}
      <div className="about-left flex-1 p-4 mt-10">
        <div className="about-text justify-center">
          <h1 className="text-4xl md:text-6xl font-regular mb-6">Hi! I am Kyla</h1>
          <h1 className="text-4xl md:text-5xl font-regular mb-6 text-[#6EA0BA]">
            <Typewriter
              options={{
                strings: ['- ML/AI Enthusiast', '- Project Manager'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-gray-600 mb-6 text-justify">
            I’m Kyla, a Computer Science undergraduate navigating the thrilling
            world of data science and project management 📊 I thrive on
            uncovering insights from data and love tackling challenges in CTF
            competitions to sharpen my problem-solving skills.
          </p>
        </div>

        {/* Icons */}
        <div className="my-icons flex space-x-4 mt-4">
          <a
            href="https://github.com/kylaronquillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/Github Squared.png"
              alt="GitHub"
              width={50}
              height={50}
              className="icon cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kylaronquillo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/LinkedIn.png"
              alt="LinkedIn"
              width={50}
              height={50}
              className="icon cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://medium.com/@kylasbronquillo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/Medium.png"
              alt="Medium"
              width={50}
              height={50}
              className="icon cursor-pointer hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Button-Contact */}
        <div className="about-buttons flex space-x-4">
          <button className="learn-more mt-10 bg-[#6EA0BA] text-white py-2 px-4 rounded-lg drop-shadow-xl hover:bg-white hover:text-[#6EA0BA] hover:border-[#6EA0BA] border-2 transition-all">
            <a href="mailto:kylasbronquillo@gmail.com">Leave a message</a>
          </button>
          <CV />
        </div>
      </div>

      {/* Right Side of About Section */}
      <div className="about-right flex justify-center hidden md:block">
        <Image
          src="/images/my-image.jpg"
          alt="Kyla"
          width={500} // Adjusted width for responsiveness
          height={500} // Adjusted height accordingly
          className="icon rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default AboutSection;
