import React from 'react'
import { Cloud, Server, Database, Shield, Code, Cpu } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "[Category 1]",
      icon: <Cloud className="h-8 w-8 text-primary-600" />,
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]", "[Skill 4]", "[Skill 5]"]
    },
    {
      title: "[Category 2]",
      icon: <Server className="h-8 w-8 text-primary-600" />,
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]", "[Skill 4]", "[Skill 5]", "[Skill 6]"]
    },
    {
      title: "[Category 3]",
      icon: <Code className="h-8 w-8 text-primary-600" />,
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]", "[Skill 4]", "[Skill 5]"]
    },
    {
      title: "[Category 4]",
      icon: <Database className="h-8 w-8 text-primary-600" />,
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]", "[Skill 4]", "[Skill 5]", "[Skill 6]"]
    },
    {
      title: "[Category 5]",
      icon: <Shield className="h-8 w-8 text-primary-600" />,
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]", "[Skill 4]", "[Skill 5]", "[Skill 6]"]
    },
    {
      title: "[Category 6]",
      icon: <Cpu className="h-8 w-8 text-primary-600" />,
      skills: ["[Skill 1]", "[Skill 2]", "[Skill 3]", "[Skill 4]", "[Skill 5]", "[Skill 6]"]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            [Description of your technical skills and areas of expertise]
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-dark-900 ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-dark-900 mb-4">Certifications & Awards</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary-50 p-4 rounded-lg mb-3">
                  <span className="text-primary-600 font-bold text-lg">[Cert 1]</span>
                </div>
                <p className="text-dark-700 font-medium">[Certification Name]</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-50 p-4 rounded-lg mb-3">
                  <span className="text-blue-600 font-bold text-lg">[Cert 2]</span>
                </div>
                <p className="text-dark-700 font-medium">[Certification Name]</p>
              </div>
              <div className="text-center">
                <div className="bg-green-50 p-4 rounded-lg mb-3">
                  <span className="text-green-600 font-bold text-lg">[Cert 3]</span>
                </div>
                <p className="text-dark-700 font-medium">[Certification Name]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
