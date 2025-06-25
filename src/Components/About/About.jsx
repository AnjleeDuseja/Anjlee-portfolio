
import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa'; // You can change icon as needed
import Skills from '../Home/Skills'

function About() {
  return (
    <>
    <section className="bg-purple-100 py-16 px-4" id="about">
      <div className="max-w-4xl mx-auto bg-purple-50 p-8 md:p-12 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <FaUserAstronaut className="text-4xl text-purple-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900">About Me</h2>
        </div>

        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          I'm a passionate frontend developer with a background in computer science and a love for building visually engaging, user-friendly web experiences.
          I enjoy turning ideas into interactive products using technologies like <span className="font-semibold">React, JavaScript and Tailwind CSS</span>.
          My projects often reflect my focus on clean code, responsive design, and real-world problem solving.
        </p>

        <p className="text-gray-700 text-base md:text-lg mt-4 leading-relaxed">
          Currently, I’m diving deeper into backend development with <span className="font-semibold ">Node.js and Express</span> to grow as a full stack developer.
          I thrive on learning, iterating, and collaborating — whether I’m styling components or structuring APIs, I believe every line of code is a chance to create something meaningful.
        </p>

        <p className="text-gray-700 text-base md:text-lg mt-4 leading-relaxed">
          Outside of code, I enjoy design,  and exploring tools that help people connect and create.
        </p>
      </div>
    </section>

  <Skills/>
  </>


  )
}

export default About
