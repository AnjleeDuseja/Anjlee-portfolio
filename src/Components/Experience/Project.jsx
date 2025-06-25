import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {TbLayoutDashboardFilled } from "react-icons/tb"
import {motion} from "framer-motion"

const categorizedProjects = {
  Frontend: [
    {
      title: 'React Basic Apps',
      description: 'A mini collection of React apps including a Counter, Color Changer, and Password Generator — all styled with Tailwind CSS and focused on reusability and clean UI.',
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'React Hooks'],
      github: 'https://github.com/AnjleeDuseja/React-Basic-App',
      live: 'https://anjleeduseja.github.io/React-Basic-App/',
    },
    {
      title: 'Currency Converter',
      description:
        'A simple and real-time Currency Converter built using HTML, CSS, and JavaScript. It allows users to convert amounts between different currencies using live exchange rates fetched from the Frankfurter API.',
      tech: ['HTML', 'CSS', 'JavaScript', 'API Handling' ],
      github: 'https://github.com/AnjleeDuseja/Currency_Converter',
      live: 'https://anjleeduseja.github.io/Currency_Converter/',
    },
    {
      title: 'Tic Tac Toe',
      description:
        'A classic Tic Tac Toe game built using HTML, CSS, and JavaScript.It features a clean UI, win detection logic, and real-time interactivity.',
        tech: ['HTML', 'CSS' ,'JavaScript', 'DOM Manipulation'],
      github: 'https://github.com/AnjleeDuseja/Tic_Tac_Toe',
      live: 'https://anjleeduseja.github.io/React-Basic-App/',
    },
  ],
  Backend: [],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 1 },
  visible: { opacity: 5, y: 0, transition: { duration: 1, ease: 'easeOut' } },
};

const Project = ({show=true}) => {
  return (
    <section id="projects" className="bg-gray-100 px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-4">
        💻 Projects
      </h2>
      <p className="text-center text-gray-600 text-base md:text-lg mb-12 max-w-xl mx-auto">
        Here are the recent projects that I've built — and what's coming next.
      </p>

      {Object.entries(categorizedProjects).map(([category, projects]) => (
        <motion.div key={category} className="mb-20 shadow" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={cardVariants}>
          <h3 className="text-2xl font-semibold text-purple-50  border border-y-purple-100 rounded-lg p-3 shadow-lg bg-purple-950 mb-10">
            {category === 'Frontend' ? <TbLayoutDashboardFilled className='inline text-4xl text-purple-100'/> : '🛠️'} {category} Projects
          </h3>

          {projects.length === 0 ? (
          
    <p className="text-gray-500 italic p-5">
      No {category.toLowerCase()} projects yet, coming soon...
    </p>
 
        ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {projects.map((project, index) => (
                <div
                   initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
                  key={index}
                  className="bg-purple-100 border-b-8 border-purple-900 text-purple-800 rounded-xl shadow-md hover:shadow-lg p-6 transition hover:scale-102"
                >
                  <h4 className="text-xl font-bold mb-2 text-purple-900">{project.title}</h4>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm py-2 bg-purple-300 font-medium text-purple-900 rounded-full px-3"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-800 transition flex items-center gap-2"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-purple-900 text-purple-900 px-4 py-2 rounded hover:scale-103 hover transition flex items-center gap-2"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </section>
  );
};

export default Project;
