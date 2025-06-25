import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import AboutImg from "../../assets/AboutMe-Dark1.svg"





function HeroSection() {
    
      const resumeLink = '/AnjleeResume.pdf';
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-between items-center bg-purple-950 text-white p-6 md:p-12 gap-10"
    >
      {/* Text content */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8"
      >
        <h1 className="text-purple-200 text-3xl md:text-4xl tracking-wide">
          Hi there! <motion.span
  className="inline-block text-5xl origin-bottom"
  animate={{
    rotate: [0, 20, -10, 20, -5, 0],
  }}
  transition={{
    duration: 1.5,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 4,
  }}
>
  👋
</motion.span>

        </h1>

        <h2 className="text-purple-400 text-3xl md:text-4xl mt-4 italic tracking-widest">
          <span className="text-purple-100 font-normal">I'm</span>{' '}
          <span className="hover:text-white transition duration-300">Anjlee Duseja</span>
        </h2>

        <p className="mt-4 text-sm md:text-base text-purple-100 leading-relaxed text-justify">
         A software developer with a background in computer science and a passion for building thoughtful, user-centric applications. I work primarily with React, JavaScript, and Tailwind CSS, and am currently expanding my skills in Node.js and Express to craft clean interfaces and efficient backend systems.
        </p>

        <a
          href={resumeLink}
          download
          className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-white text-purple-700 border border-purple-700 rounded-lg shadow hover:bg-purple-50 text-sm md:text-base w-fit"
        >
          <FaDownload className="mr-2 text-lg" /> Download Resume
        </a>
      </div>

      {/* Image with zoom-in animation */}
      <div
        className="w-full md:w-1/2"
        whileHover={{ scale: 1.02 }}
      >
        <img
          src={AboutImg}
          alt="About"
          className="w-full h-auto rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
}

export default HeroSection;
