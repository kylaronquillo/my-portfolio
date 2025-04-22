import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMedium } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <h1 className="text-2xl md:text-4xl font-hagrid font-medium text-black mb-6 text-center">/Contact</h1>
      {/* <div className="text-center mb-16">
        <p className="text-lg md:text-xl font-mono text-gray-600">Get in touch with me</p>
        <p className="text-lg md:text-xl font-mono font-bold text-gray-600">kylasbronquillo@gmail.com</p>
      </div> */}

      {/* Icons */}
      <div className="my-icons flex justify-center space-x-6 mt-4 mb-20">
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

      <p>© 2025. All rights reserved by Kyla Ronquillo</p>
    </section>
  );
};

export default Contact;
