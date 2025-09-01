import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-blue-50">
      <div className="container-max text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-dark-900 mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">
              [Your Name]
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-dark-700 mb-8">
            [Your Professional Title]
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            [Your professional summary will go here. This is where you'll describe your expertise, 
            passion, and what makes you unique in your field.]
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="btn-primary">
              <Download size={20} />
              Download Resume
            </button>
            <button className="btn-secondary">
              <Mail size={20} />
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="#" 
              className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="#" 
              className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="#" 
              className="text-dark-600 hover:text-primary-600 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce-slow">
            <a href="#about" className="inline-block text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
