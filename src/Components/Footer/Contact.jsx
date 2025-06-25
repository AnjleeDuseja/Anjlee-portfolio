import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = (color="bg-gray-100") => {
  return (
    <section id="contact" className={`${color} px-6 py-16`}>
      <h2 className="text-xl md:text-3xl font-bold text-center text-purple-900 mb-4">
        📬 Let's Connect
      </h2>
      <p className="text-center text-gray-600 text-base md:text-lg mb-10 max-w-xl mx-auto">
        Whether it’s a project, question, or opportunity — feel free to reach out.
      </p>

      <div className="flex flex-col items-center gap-6">
        {/* Email */}
        <a
          href="mailto:anjleeduseja13@gmail.com"
          className="flex items-center gap-3 text-gray-700 hover:text-purple-700 transition"
        >
          <FaEnvelope className="text-xl" />
        Anjleeduseja13@gmail.com
        </a>
        <div className='flex gap-5'>
        {/* GitHub */}
        <a
          href="https://github.com/anjleeduseja"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-purple-700 transition"
        >
          <FaGithub className="text-xl" />
          Github
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/anjlee-duseja-2a12aa1a0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-gray-700 hover:text-purple-700 transition"
        >
          <FaLinkedin className="text-xl" />
          Linkedin
        </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
