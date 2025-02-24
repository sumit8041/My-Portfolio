import React from 'react';
import ProjectData from './ProjectData';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id='projects'>
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {ProjectData.map((project, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
              <a href={project.link}>
                <img className="rounded-t-lg" src={project.image} alt={project.title} />
              </a>
              <div className="p-5 flex-1 flex flex-col">
                <a href={project.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-1">{project.description}</p>
                <div className="px-6 pt-4 pb-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a href={project.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <FaGithub/>
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
