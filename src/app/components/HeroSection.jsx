'use client';

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="text-white py-16 px-6 sm:px-10 lg:px-16 relative z-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-12 items-center">

        {/* Left Section */}
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold animate__animated animate__fadeInUp">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Hi, I’m Alwin{" "}</span>

            <br />
            <TypeAnimation
              sequence={[
                'Computer Engineer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Programmer',
                1000,
                'Developer',
                1000,
                'Cybersecurity Enthusiast',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="animate__animated animate__fadeIn animate__delay-1s"
            />
          </h1>

          <p className="text-white text-base sm:text-lg mb-6 lg:text-xl max-w-2xl animate__animated animate__fadeInUp animate__delay-2s">
         Welcome to my portfolio!
I'm a Computer Science professional with expertise in software development, cybersecurity, and data analysis. Skilled in Python, Java, C++, HTML/CSS, and cloud technologies, I'm passionate about ethical hacking and network security.
Explore my projects and certifications, and feel free to connect with me!
          </p>

          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-300 hover:bg-slate-200 text-white transition-all transform hover:scale-105 duration-300 ease-in-out">
              Hire Me
            </button>
            <a href="/Alwin_Shibu_Resume.pdf" download="Alwin_Resume.pdf">
  <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-300 hover:bg-slate-800 text-white mt-3 transition-all transform hover:scale-105 duration-300 ease-in-out">
    <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
  </button>
</a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="col-span-5 flex justify-center mt-10 lg:mt-0">
          <div className="rounded-full bg-black overflow-hidden w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] flex items-center justify-center shadow-lg shadow-white/10 animate__animated animate__fadeIn animate__delay-3s">
            <Image
              src="/images/hero-image.jpg"
              alt="Hero Image"
              width={350}
              height={350}
              className="object-cover w-full h-full transition-all transform hover:scale-105 duration-300 ease-in-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
