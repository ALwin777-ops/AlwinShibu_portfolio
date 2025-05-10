'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaShieldAlt, FaTools } from 'react-icons/fa';

const skills = {
  'Programming Languages': [
    {
      name: 'Java',
      icon: (
        <img
          src="/images/java.png"
          alt="java"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Solid expertise in Object-Oriented Programming, with extensive experience in building scalable web and enterprise applications.'
    },
    {
      name: 'Python',
      icon: (
        <img
          src="/images/python.png"
          alt="Python"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Proficient in developing automation tools, web applications, and utilizing data science libraries for data analysis and machine learning.'
    },
    {
      name: 'C++',
      icon: (
        <img
          src="/images/cpp.png"
          alt="c++"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Advanced knowledge in system-level programming, algorithm design, performance optimization, and competitive programming.'
    },
    {
      name: 'C Programming',
      icon: (
        <img
          src="/images/c-icon.png"
          alt="c programming"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Strong understanding of low-level programming, memory management, and development of embedded systems and hardware interfaces.'
    },
    {
      name: 'JavaScript',
      icon: (
        <img
          src="/images/js.png"
          alt="JavaScript"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Experienced in building dynamic, interactive web applications using JavaScript, with a strong foundation in modern frameworks like React.'
    },
    {
      name: 'SQL',
      icon: (
        <img
          src="/images/sql.png"
          alt="SQL"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Skilled in writing complex SQL queries, designing relational databases, and optimizing database performance for large-scale applications.'
    },
    {
      name: 'Bash',
      icon: (
        <img
          src="/images/bash.png"
          alt="Bash"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Proficient in writing and automating tasks with Bash scripts for system administration, file management, and server configuration.'
    }
  ],
  'Tools': [
    {
      name: 'Git',
      icon: (
        <img
          src="/images/git.png"
          alt="Git"
          className="w-20 h-20 mx-auto"
        />
      ),
      description: 'Skilled in using Git for version control, enabling efficient team collaboration and tracking code changes throughout the software development lifecycle.'
    },
    {
      name: 'GitHub',
      icon: (
        <img
          src="/images/github.png"
          alt="GitHub"
          className="w-20 h-10 mx-auto"
        />
      ),
      description: 'Proficient in using GitHub for version control, hosting repositories, and managing collaborative software development projects.'
    },{
      name: 'Gitlab',
      icon: (
        <img
          src="/images/images (3).png"
          alt="GitHub"
          className="w-20 h-10 mx-auto"
        />
      ),
      description: 'Proficient in using GitLab for version control, CI/CD automation, and efficient project collaboration.'
    }
  ],
  'Cybersecurity Tools': [
    {
      name: 'Linux',
      icon: (
        <img
          src="/images/linux.png"
          alt="Linux"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Experienced in system administration, shell scripting, and managing Linux-based environments for development and production.'
    },
    {
      name: 'Kali Linux',
      icon: (
        <img
          src="/images/kali.png"
          alt="Kali Linux"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Expert in using Kali Linux for penetration testing, ethical hacking, and security auditing, with a comprehensive suite of pre-installed tools.'
    },
    {
      name: 'Nmap',
      icon: (
        <img
          src="/images/nmap.png"
          alt="Nmap"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Experienced in using Nmap for network exploration, vulnerability scanning, and security auditing of systems and networks.'
    },
    {
      name: 'theHarvester',
      icon: (
        <img
          src="/images/theHarvester.png"
          alt="theHarvester"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Proficient with theHarvester, an open-source tool for gathering and analyzing information about targets during reconnaissance in penetration testing.'
    },
    {
      name: 'Shodan',
      icon: (
        <img
          src="/images/shodan.png"
          alt="Shodan"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Familiar with Shodan for discovering exposed IoT devices and networked systems, useful for identifying vulnerabilities in real-time.'
    },
    {
      name: 'Nikto',
      icon: (
        <img
          src="/images/nikto.png"
          alt="Nikto"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Experienced in using Nikto to identify potential security vulnerabilities in web servers by scanning for common issues like outdated software and misconfigurations.'
    },
    {
      name: 'SQLmap',
      icon: (
        <img
          src="/images/sqlmap.png"
          alt="SQLmap"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Skilled in using SQLmap to detect and exploit SQL injection vulnerabilities in web applications, automating the exploitation process.'
    },
    {
      name: 'Netcat',
      icon: (
        <img
          src="/images/netcat.png"
          alt="Netcat"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Proficient with Netcat for network diagnostics, creating connections, and transferring data during penetration testing engagements.'
    },
    {
      name: 'Gobuster',
      icon: (
        <img
          src="/images/gobuster.png"
          alt="Gobuster"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Experience in using Gobuster for directory and DNS brute-forcing to discover hidden files and directories in web applications.'
    },
    {
      name: 'GTFOBins',
      icon: (
        <img
          src="/images/GTFOBins.png"
          alt="GTFOBins"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Familiar with GTFOBins, a collection of Unix binaries that can be used for privilege escalation during penetration testing.'
    },
    {
      name: 'Wireshark',
      icon: (
        <img
          src="/images/wireshark.png"
          alt="Wireshark"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Experienced with Wireshark for capturing and analyzing network traffic, identifying vulnerabilities and security breaches.'
    },
    {
      name: 'BloodHound',
      icon: (
        <img
          src="/images/bloodhound.png"
          alt="Wireshark"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Proficient in using BloodHound for Active Directory enumeration and privilege escalation analysis.'
    },
    {
      name: 'Nessus',
      icon: (
        <img
          src="/images/nessus.png"
          alt="Nessus"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Experienced with Nessus for vulnerability scanning and identifying security weaknesses in both network and web-based systems.'
    },
    {
      name: 'Zenmap',
      icon: (
        <img
          src="/images/nmap.png"
          alt="Zenmap"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Used for network exploration, security auditing, and vulnerability scanning, with an easy-to-use GUI version of Nmap.'
    },
    {
      name: 'Burp Suite',
      icon: (
        <img
          src="/images/burp.png"
          alt="Burp Suite"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Proficient in using Burp Suite for web application security testing and vulnerability scanning, particularly for identifying security flaws in web apps.'
    },
    {
      name: 'MITRE ATT&CK',
      icon: (
        <img
          src="/images/5bfdce88cd3820f7c5c21e02_mitre.webp"
          alt="Metasploit"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Familiarize with mitre att&ck framework'
    },
    {
      name: 'Metasploit',
      icon: (
        <img
          src="/images/metasploit.png"
          alt="Metasploit"
          className="w-10 h-10 mx-auto"
        />
      ),
      description: 'Experienced with Metasploit for penetration testing, exploiting vulnerabilities, and gaining unauthorized access to systems.'
    }
  ]
};



const categoryIcons = {
  'Programming Languages': <FaCode className="text-blue-400" />,
  'Tools': <FaTools className="text-green-400" />,
  'Cybersecurity Tools': <FaShieldAlt className="text-red-400" />
};  

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Animated background elements */}
      
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-600 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-purple-600 blur-[120px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto "
      >
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Technical Expertise
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            My comprehensive toolkit for building, securing, and optimizing digital solutions
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="space-y-20">
          {Object.keys(skills).map((category) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="text-3xl p-3 rounded-full bg-white/10">
                  {categoryIcons[category]}
                </div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  {category}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skills[category].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="group relative h-full"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    <div className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-6 rounded-xl backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col items-center h-full">
                        <div className="mb-4 p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition duration-300">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {skill.icon}
                          </motion.div>
                        </div>
                        <h4 className="text-xl font-bold text-center text-blue-300 mb-2 group-hover:text-purple-300 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-gray-300 text-sm text-center flex-grow">
                          {skill.description}
                        </p>
                        <div className="mt-4 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;

