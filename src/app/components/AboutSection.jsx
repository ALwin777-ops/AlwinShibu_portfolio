'use client';

import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaGraduationCap, FaBriefcase, FaCertificate } from 'react-icons/fa';

const TAB_CONTENT = {
  Skills: {
    icon: <FaCode className="text-blue-400" />,
    content: (
      <ul className="space-y-3 pl-5">
        {[
          { title: "Languages", items: "Java, Python, C, C++, SQL, JavaScript", color: "text-blue-400" },
          { title: "Tools & Tech", items: "Linux, Git, GitHub, Bash, Machine Learning", color: "text-green-400" },
          { title: "Cybersecurity", items: "Nmap, Burp Suite, Metasploit, Wireshark, Hydra", color: "text-pink-400" },
          { title: "Soft Skills", items: "Teamwork, Creativity, Communication", color: "text-yellow-300" }
        ].map((item, index) => (
          <li key={index} className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-current">
            <span className={`${item.color} font-semibold`}>{item.title}:</span> {item.items}
          </li>
        ))}
      </ul>
    )
  },
  Education: {
    icon: <FaGraduationCap className="text-purple-400" />,
    content: (
      <div className="space-y-4">
        <div className="border-l-2 border-purple-400 pl-4 py-1">
          <h3 className="text-lg font-bold text-purple-300">B.Tech in Computer Science</h3>
          <p className="text-gray-300">Rajagiri School of Engineering & Technology</p>
          <p className="text-sm text-gray-400 italic">kakkanad, Kerala</p>
          <p className="text-sm text-gray-400">2020 - 2024</p>
        </div>
      </div>
    )
  },
  Experience: {
    icon: <FaBriefcase className="text-teal-400" />,
    content: (
      <div className="space-y-4">
        <div className="border-l-2 border-amber-400 pl-4 py-1">
          <h3 className="text-lg font-bold text-amber-300">RedTeam Hacker Academy</h3>
          <p className="text-gray-300">Cybersecurity Internship</p>
          <p className="text-sm text-gray-400 italic">Kochi, Kerala</p>
          <p className="text-sm text-gray-400">Dec 2024 – Present</p>
        </div>

        <div className="border-l-2 border-blue-400 pl-4 py-1">
          <h3 className="text-lg font-bold text-blue-300">lpdevosolutions</h3>
          <p className="text-gray-300">Freelance</p>
          <p className="text-sm text-gray-400 italic">Remote</p>
          <p className="text-sm text-gray-400">August 2024 – Present</p>
        </div>

        <div className="border-l-2 border-teal-400 pl-4 py-1">
          <h3 className="text-lg font-bold text-teal-300"> NeST Cyber Campus </h3>
          <p className="text-gray-300">IoT Intern</p>
          <p className="text-sm text-gray-400 italic">Aluva, Kerala</p>
          <p className="text-sm text-gray-400">October 2022</p>
        </div>
        
      </div>
    )
  },
  Certification: {
    icon: <FaCertificate className="text-red-400" />,
    content: (
      <ul className="space-y-3 pl-5">
        {[
          { title: "CEH", desc: "Certified Ethical Hacker", color: "text-yellow-300" },
          { title: "CPT", desc: "RedTeam Certified Penetration Tester", color: "text-blue-400" },
         
          { title: "C++", desc: "OOP Certification", color: "text-green-400" }
        ].map((cert, index) => (
          <li key={index} className="relative before:absolute before:-left-5 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-current">
            <span className={`${cert.color} font-semibold`}>{cert.title}:</span> {cert.desc}
          </li>
        ))}
      </ul>
    )
  }
};

const AboutSection = () => {
  const [tab, setTab] = useState('Skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="relative py-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-purple-600 blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-75 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500"></div>
          <div className="relative rounded-2xl overflow-hidden border-2 border-white/10">
            <Image
              src="/images/ab_image.jpg"
              width={600}
              height={600}
              alt="About Alwin"
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                About Me
              </span>
            </h2>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hello! I'm <span className="font-semibold text-blue-300">Alwin Shibu</span>, a passionate Computer Science professional specializing in <span className="text-green-300">Cybersecurity</span>, <span className="text-pink-300">Software development</span>,<span className="text-blue-300">Cloud technology</span> and <span className="text-yellow-300">Data analysis</span>. With expertise across the tech stack, I build secure and scalable solutions while actively exploring ethical hacking and IoT security innovations.
            </motion.p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-6">
            {Object.keys(TAB_CONTENT).map((key) => (
              <TabButton 
                key={key} 
                selectTab={() => handleTabChange(key)} 
                active={tab === key}
                icon={TAB_CONTENT[key].icon}
              >
                {key}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6 rounded-xl backdrop-blur-sm shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">
                  {TAB_CONTENT[tab].icon}
                </div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  {tab}
                </h3>
              </div>
              <div className="text-gray-300">
                {TAB_CONTENT[tab].content}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};
 
export default AboutSection;