import React from 'react'
import { ExternalLink, Github, Cloud, Database, Shield } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "[Project Title 1]",
      description: "[Brief description of what this project does, the problem it solves, and its impact.]",
      image: "/api/placeholder/600/400",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]", "[Tech 4]", "[Tech 5]"],
      features: [
        "[Key feature 1]",
        "[Key feature 2]",
        "[Key feature 3]",
        "[Key feature 4]"
      ],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Cloud className="h-6 w-6" />
    },
    {
      title: "[Project Title 2]",
      description: "[Brief description of what this project does, the problem it solves, and its impact.]",
      image: "/api/placeholder/600/400",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]", "[Tech 4]", "[Tech 5]"],
      features: [
        "[Key feature 1]",
        "[Key feature 2]",
        "[Key feature 3]",
        "[Key feature 4]"
      ],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "[Project Title 3]",
      description: "[Brief description of what this project does, the problem it solves, and its impact.]",
      image: "/api/placeholder/600/400",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]", "[Tech 4]", "[Tech 5]"],
      features: [
        "[Key feature 1]",
        "[Key feature 2]",
        "[Key feature 3]",
        "[Key feature 4]"
      ],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Shield className="h-6 w-6" />
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            [Description of your project portfolio and what makes them special]
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    {project.icon}
                    <p className="mt-2 text-sm">Project Screenshot</p>
                  </div>
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">{project.title}</h3>
                  <p className="text-dark-700 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-dark-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-dark-700">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-dark-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="btn-primary"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="btn-secondary"
                  >
                    <Github size={20} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
