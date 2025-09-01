import React from 'react'
import { Award, Users, Zap, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      title: "[Years] Experience",
      description: "[Brief description of your experience level]"
    },
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      title: "[Number]+ Projects",
      description: "[Description of your project experience]"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary-600" />,
      title: "[Key Achievement]",
      description: "[Description of a key achievement or metric]"
    },
    {
      icon: <Target className="h-8 w-8 text-primary-600" />,
      title: "[Another Achievement]",
      description: "[Description of another key achievement]"
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-900 mb-4">About Me</h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            [Brief description of who you are and what you do]
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-dark-700 leading-relaxed">
              [First paragraph about your background, experience, and what drives you professionally.]
            </p>
            <p className="text-lg text-dark-700 leading-relaxed">
              [Second paragraph about your specializations, key skills, and approach to work.]
            </p>
            <p className="text-lg text-dark-700 leading-relaxed">
              [Third paragraph about your interests, hobbies, or what you do outside of work.]
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-dark-900 mb-2">{item.title}</h3>
                <p className="text-dark-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
