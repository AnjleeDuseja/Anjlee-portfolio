import React from 'react';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';


function Resume() {
  const resumeLink = '/AnjleeResume.pdf'; 

  return (
    <>
    <section id="resume" className="bg-gray-100 px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-4">
        📄 My Resume
      </h2>
      <p className="text-center text-gray-600 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
        Here’s my resume — feel free to explore or download it.
      </p>

      <div className="flex justify-center gap-6">
      
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-800 flex items-center gap-2 transition"
        >
          <FaExternalLinkAlt /> View Resume
        </a>

        <a
          href={resumeLink}
          download
          className="bg-white border border-purple-700 text-purple-700 px-6 py-3 rounded-lg shadow-md hover:bg-purple-50 flex items-center gap-2 transition"
        >
          <FaDownload /> Download PDF
        </a>
      </div>
    </section>
    </>

  );
}

export default Resume;
