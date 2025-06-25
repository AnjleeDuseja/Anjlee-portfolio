
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaLaptopCode,
  FaChrome,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman,
  SiCanva
} from 'react-icons/si';
import { TbServer } from 'react-icons/tb';
import { RiToolsFill } from 'react-icons/ri';
import { DiVisualstudio } from "react-icons/di";

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

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaLaptopCode,
       confidence: 80,
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
        { name: 'React', icon: FaReact, color: 'text-cyan-400' },
        { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
        { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
        { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
      ],
    },
    {
      title: 'Backend',
      icon: TbServer,
      confidence: 50,
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, color: 'text-gray-300' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Tools',
      icon: RiToolsFill,
       confidence: 75,
      skills: [
        { name: 'VS Code', icon: DiVisualstudio, color: 'text-blue-400' },
        { name: 'GitHub', icon: FaGithub, color: 'text-gray-300' },
        { name: 'Chrome DevTools', icon: FaChrome, color: 'text-yellow-400' },
        { name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
        { name: 'Canva', icon: SiCanva, color: 'text-indigo-300' },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 px-6 py-16" id="skills">
     <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4">
  My Tech Stack
</h2>
<p className="text-center text-gray-700 text-sm mb-12 max-w-xl mx-auto leading-relaxed">
  From frontend to backend, here's what I use—and what I'm learning along the way!
</p>



      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="bg-white p-6 rounded-2xl shadow  hover:scale-105 hover:shadow-lg transition duration-300 ease-in-out
"
            >
              <h3 className="text-xl font-bold text-gray-700 mb-2 text-center">
                {category.title}{' '}
                <Icon className="text-3xl text-purple-700 mx-2 inline" />
              </h3>
              <div className="w-3/4 mx-auto mb-4">
  
  <div className="w-full h-3 bg-purple-200 rounded-full overflow-hidden">
    <div
      className="h-full bg-purple-600 transition-all duration-500"
      style={{ width: `${category.confidence}%` }}
    ></div>
  </div>
</div>


              <motion.div
                className="flex flex-wrap gap-3 justify-center py-8 rounded-2xl bg-purple-950 text-center"
                variants={containerVariants}
              >
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      
                      className="flex flex-col justify-center items-center p-3 bg-purple-900 min-w-[100px] rounded-xl py-6 shadow-md  hover:scale-105"
                    >
                      <SkillIcon className={`text-4xl mb-2 ${skill.color}`} />
                      <p className="text-sm text-gray-200">{skill.name}</p>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Skills;
