"use client";
import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, gitUrl, demoUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full sm:w-[360px] lg:w-[380px] rounded-2xl overflow-hidden shadow-xl 
                 bg-[#1f1f1f] border-2 border-transparent
                 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-500/10 
                 hover:border-pink-500/30 transition-all duration-300 transform hover:scale-105"
    > 
      {/* Image Section */}
      <div className="relative group">
        <img
          src={imgUrl}
          alt={title}
          className="h-64 w-full object-cover 
                   group-hover:scale-105 group-hover:brightness-75 
                   transition-all duration-500 ease-in-out"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-purple-900/30 
                       backdrop-blur-sm flex items-center justify-center gap-4 
                       opacity-0 group-hover:opacity-100 
                       transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Link
            href={gitUrl}
            target="_blank"
            aria-label={`View ${title} source code`}
            className="h-14 w-14 border-2 rounded-full border-[#000000] hover:border-white 
                       flex items-center justify-center transition duration-300 
                       hover:shadow-lg hover:shadow-white/50 focus:ring-2 focus:ring-white focus:outline-none"
          >
            <CodeBracketIcon className="h-8 w-8 text-white group-hover:text-pink-400 transition-colors duration-300" />
          </Link>
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              aria-label={`View ${title} live demo`}
              className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold 
                         hover:bg-opacity-80 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] 
                         transition focus:ring-2 focus:ring-white focus:outline-none"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>

      {/* Text Section */}
      <div className="py-6 px-5 text-white group">
        <h5 className="text-2xl font-semibold mb-2 group-hover:text-pink-400 transition-colors duration-200">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  ); 
};

export default ProjectCard;
