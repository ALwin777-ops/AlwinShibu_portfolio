// ProjectsSection.jsx
"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "Speech to Sign Language",
    description: "Python Flask-based system translating speech into sign language visuals.",
    image: "/images/siglang.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/ALwin777-ops/RSET2020-24-S8-Alpha/tree/main/Group%204%20Speech_to_sign_language",
   // previewUrl: "https://your-deployed-link.com/speech-to-sign",
  },
  {
    id: 2,
    title: "The Merchant of Venice - Ren'Py Game",
    description: "A narrative-driven visual novel with interactive storytelling.",
    image: "/images/visual_studio.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/AnkitJAbraham/Miniproject_VisualNovelGame",
   // previewUrl: "https://your-deployed-link.com/renpy-game",
  },
  {
    id: 3,
    title: " AI Tic-Tac-Toe using Minimax Algorithm",
    description: "A GUI-based Tic-Tac-Toe game in Python using Tkinter, featuring intelligent AI moves through the Minimax algorithm.",
    image: "/images/AI Tic-Tac-Toe Using alpha-beta pruning.jpg",
    tag: ["All", "Python"],
    gitUrl: "https://github.com/ALwin777-ops/AI_Tic_tac_Toe_Using_Alpha_Beta",
    //previewUrl: "https://your-deployed-link.com/tic-tac-toe",
  },
  
  {
    id: 4,
    title: "Gold Price Prediction Using Random Forest",
    description: "Gold price prediction model using the Random Forest algorithm in Python, leveraging historical data to forecast future prices with visual performance analysis.",
    image: "/images/gold.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ALwin777-ops/Gold-price-using-random-forest-algorithm-",
   // previewUrl: "https://your-deployed-link.com/renpy-game",
  },
  
  {
    id: 5,
    title: "File Tranfer Protocol ",
    description: "FTP client-server system in Python enabling secure file transfer, upload, and download functionalities over a network using the ftplib module.",
    image: "/images/ftp.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ALwin777-ops/FTP",
   // previewUrl: "https://your-deployed-link.com/renpy-game",
  },
  
  {
    id: 6,
    title: "Port Scanner",
    description: "Python-based port scanner inspired by Nmap, using sockets to scan a range of ports on a target system, displaying open ports with real-time feedback and a user-friendly terminal interface.",
    image: "/images/ppp.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ALwin777-ops/Port-Scanner-like-nmap",
   // previewUrl: "https://your-deployed-link.com/renpy-game",
  },
  {
    id: 7,
    title: "TCP Messenger",
    description: "A simple TCP chat application using Python sockets where the client and server exchange messages in real-time until either side types 'bye' to end the connection.",
    image: "/images/tcp.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ALwin777-ops/Simple-client-and-server-using-TCP-protocol-",
    // previewUrl: "https://your-deployed-link.com/renpy-game",
  },
  {
    id: 8,
    title: "SQL Injection Scanner",
    description: "SQL Injection scanner that automates vulnerability detection in web forms through intelligent payload injection and real-time feedback.",
    image: "/images/sqlinjection.jpg",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/ALwin777-ops/SQL-Injection-Scanner-",
    // previewUrl: "https://your-deployed-link.com/renpy-game",
  }

 
];
 
const ProjectsSection = () => {
  return (
    <div id="projects" className="px-4 py-8">
      <h2 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-8 transition-all duration-1000">
  Projects
</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
