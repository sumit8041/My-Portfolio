import React from 'react';
import ExperienceData from './ExperienceData';

const Experience = () => {
  return (
    <section id="experience">
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
        <div className="relative">
          <div className="border-r-2 border-gray-300 dark:border-gray-700 absolute h-full top-0" style={{ left: '50%' }}></div>
          {ExperienceData.map((experience, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className={`order-1 w-5/12 flex justify-${index%2==0?'center':'center'}`}>
                <div className={`text-gray-600 justify-center dark:text-gray-400 text-sm font-semibold`}>
                  {experience.dateRange}
                </div>
              </div>
              <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-700 shadow-xl w-12 h-12 rounded-full">
                <img src={experience.logo} alt={`${experience.company} logo`} className="w-full h-full rounded-full" />
              </div>
              <div className="order-1 bg-gray-200 dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4" style={{ height: 'auto' }}>
                <div className="square-card w-full h-full flex flex-col justify-center items-center p-4">
                  <h3 className="mb-2 text-xl font-bold">{experience.role}</h3>
                  <p className="mb-2 text-sm font-semibold">{experience.company}</p>
                  <ul className="list-disc list-inside text-sm">
                    {experience.description.map((item, idx) => (
                      <li key={idx} className="mb-1">{item}</li>
                    ))}
                  </ul>
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

export default Experience;
