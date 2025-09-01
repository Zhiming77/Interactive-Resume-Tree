import React from 'react'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: "[Job Title 1]",
      company: "[Company Name]",
      location: "[Location]",
      period: "[Start Year] - Present",
      description: "[Brief description of your role, responsibilities, and key accomplishments in this position.]",
      achievements: [
        "[Key achievement or responsibility 1]",
        "[Key achievement or responsibility 2]",
        "[Key achievement or responsibility 3]",
        "[Key achievement or responsibility 4]"
      ]
    },
    {
      title: "[Job Title 2]",
      company: "[Company Name]",
      location: "[Location]",
      period: "[Start Year] - [End Year]",
      description: "[Brief description of your role, responsibilities, and key accomplishments in this position.]",
      achievements: [
        "[Key achievement or responsibility 1]",
        "[Key achievement or responsibility 2]",
        "[Key achievement or responsibility 3]",
        "[Key achievement or responsibility 4]"
      ]
    },
    {
      title: "[Job Title 3]",
      company: "[Company Name]",
      location: "[Location]",
      period: "[Start Year] - [End Year]",
      description: "[Brief description of your role, responsibilities, and key accomplishments in this position.]",
      achievements: [
        "[Key achievement or responsibility 1]",
        "[Key achievement or responsibility 2]",
        "[Key achievement or responsibility 3]",
        "[Key achievement or responsibility 4]"
      ]
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            [Brief overview of your professional journey and career highlights]
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-sm"></div>
                  
                  <div className="ml-16 bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-dark-900">{exp.title}</h3>
                        <div className="flex items-center text-primary-600 font-medium mt-1">
                          <Building size={16} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col md:items-end mt-2 md:mt-0">
                        <div className="flex items-center text-dark-600 mb-1">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-dark-600">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-dark-700 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-dark-700">
                            <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
