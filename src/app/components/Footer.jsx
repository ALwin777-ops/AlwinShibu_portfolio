import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id ="contact"className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white mt-8">
      <div className="container p-4 flex justify-between items-center gap-3">
        {/* GitHub and LinkedIn Icons on the Left */}
        <div className="flex gap-6 text-3xl">
          <a href="https://github.com/ALwin777-ops" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-pink-500 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/alwinshibu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
          </a>
        </div>

        {/* Logo on the Right */}
        <span className="text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-4xl font-extrabold tracking-widest">
          A
        </span>
      </div>

      {/* All Rights Reserved Text in the Center of the Footer */}
      <p className= "text-gray-400 text-sm sm:text-base text-center pb-4">
  All rights reserved © 2025
</p>
    </footer>
  );
};

export default Footer;
