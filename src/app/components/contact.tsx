import React from "react";
import Image from "next/image"; // Make sure you import the Image component from Next.js

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <h1 className="text-2xl md:text-4xl font-medium text-[#6EA0BA] mb-6 text-center">/Contact</h1>
      <div className="text-center mb-16">
        <p className="text-lg md:text-xl font-mono text-gray-600">Get in touch with me</p>
        <p className="text-lg md:text-xl font-mono font-bold text-gray-600">kylasbronquillo@gmail.com</p>
      </div>

      {/* Icons */}
      <div className="my-icons flex justify-center space-x-4 mt-4 mb-20">
        <a href="https://github.com/kylaronquillo" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/icons/Github Squared.png" 
            alt="GitHub" 
            width={50} 
            height={50} 
            className="icon cursor-pointer hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://www.linkedin.com/in/kylaronquillo/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/icons/LinkedIn.png" 
            alt="LinkedIn" 
            width={50} 
            height={50} 
            className="icon cursor-pointer hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://medium.com/@your-medium-profile" target="_blank" rel="noopener noreferrer">
          <Image 
            src="/icons/Medium.png" 
            alt="Medium" 
            width={50} 
            height={50} 
            className="icon cursor-pointer hover:scale-110 transition-transform"
          />
        </a>
      </div>

      <p>© 2024. All rights reserved by Kyla Ronquillo</p>
    </section>
  );
};

export default Contact;
