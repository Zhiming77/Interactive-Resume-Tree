import React, { useState } from 'react'
import { Zap, Shield, Target, Cpu } from 'lucide-react'

interface Skill {
  id: string
  name: string
  icon: React.ReactNode
  description: string
  details: string[]
  cooldown: number
  manaCost: number
  level: number
  maxLevel: number
  keyBinding: string
  color: string
  glowColor: string
}

const HeroSkills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)
  const [skillCooldowns, setSkillCooldowns] = useState<{[key: string]: number}>({})
  const [heroLevel] = useState(18)
  const [heroMana] = useState(450)
  const [maxMana] = useState(500)

  const skills: Skill[] = [
    {
      id: 'q',
      name: '[Skill Name Q]',
      icon: <Zap className="w-8 h-8" />,
      description: '[Brief skill description - what this ability represents in your career]',
      details: [
        '[Detailed description of this skill/experience]',
        '[Key achievement or project]',
        '[Impact or result achieved]',
        '[Technologies or methods used]'
      ],
      cooldown: 8,
      manaCost: 60,
      level: 5,
      maxLevel: 5,
      keyBinding: 'Q',
      color: 'from-yellow-400 to-orange-500',
      glowColor: 'shadow-yellow-400/50'
    },
    {
      id: 'w',
      name: '[Skill Name W]',
      icon: <Shield className="w-8 h-8" />,
      description: '[Brief skill description - what this ability represents in your career]',
      details: [
        '[Detailed description of this skill/experience]',
        '[Key achievement or project]',
        '[Impact or result achieved]',
        '[Technologies or methods used]'
      ],
      cooldown: 12,
      manaCost: 80,
      level: 5,
      maxLevel: 5,
      keyBinding: 'W',
      color: 'from-blue-400 to-cyan-500',
      glowColor: 'shadow-blue-400/50'
    },
    {
      id: 'e',
      name: '[Skill Name E]',
      icon: <Target className="w-8 h-8" />,
      description: '[Brief skill description - what this ability represents in your career]',
      details: [
        '[Detailed description of this skill/experience]',
        '[Key achievement or project]',
        '[Impact or result achieved]',
        '[Technologies or methods used]'
      ],
      cooldown: 15,
      manaCost: 100,
      level: 5,
      maxLevel: 5,
      keyBinding: 'E',
      color: 'from-green-400 to-emerald-500',
      glowColor: 'shadow-green-400/50'
    },
    {
      id: 'r',
      name: '[Ultimate Skill R]',
      icon: <Cpu className="w-10 h-10" />,
      description: '[Brief ultimate skill description - your most impressive career achievement]',
      details: [
        '[Detailed description of your ultimate skill/achievement]',
        '[Major project or leadership role]',
        '[Significant impact or transformation]',
        '[Advanced technologies or methodologies]'
      ],
      cooldown: 60,
      manaCost: 150,
      level: 3,
      maxLevel: 3,
      keyBinding: 'R',
      color: 'from-purple-400 to-pink-500',
      glowColor: 'shadow-purple-400/50'
    }
  ]

  const castSkill = (skill: Skill) => {
    if (skillCooldowns[skill.id] > 0 || heroMana < skill.manaCost) return

    setSkillCooldowns(prev => ({
      ...prev,
      [skill.id]: skill.cooldown
    }))

    // Simulate cooldown
    const interval = setInterval(() => {
      setSkillCooldowns(prev => {
        const newCooldown = Math.max(0, prev[skill.id] - 1)
        if (newCooldown === 0) {
          clearInterval(interval)
        }
        return { ...prev, [skill.id]: newCooldown }
      })
    }, 1000)
  }

  const getSkillOpacity = (skill: Skill) => {
    const onCooldown = skillCooldowns[skill.id] > 0
    const insufficientMana = heroMana < skill.manaCost
    return onCooldown || insufficientMana ? 'opacity-50' : 'opacity-100'
  }

  return (
    <section id="hero-skills" className="section-padding bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Hero Abilities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose your path. Master your skills. Level up your career.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Hero Stats Panel */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 sticky top-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-4xl font-bold text-white">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">[Your Hero Name]</h3>
                <p className="text-purple-300">Level {heroLevel} Developer</p>
              </div>

              {/* Mana Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>Mana</span>
                  <span>{heroMana}/{maxMana}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(heroMana / maxMana) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Selected Skill Details */}
              {selectedSkill && (
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-600">
                  {(() => {
                    const skill = skills.find(s => s.id === selectedSkill)!
                    return (
                      <>
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} mr-4`}>
                            {skill.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                            <p className="text-sm text-gray-400">
                              Cooldown: {skill.cooldown}s | Mana: {skill.manaCost}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{skill.description}</p>
                        <div className="space-y-2">
                          {skill.details.map((detail, index) => (
                            <div key={index} className="flex items-start text-sm text-gray-400">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                              {detail}
                            </div>
                          ))}
                        </div>
                      </>
                    )
                  })()}
                </div>
              )}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-8 mb-12">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className={`relative group cursor-pointer transition-all duration-300 ${getSkillOpacity(skill)}`}
                  onMouseEnter={() => setSelectedSkill(skill.id)}
                  onClick={() => castSkill(skill)}
                >
                  {/* Skill Icon Container */}
                  <div className={`
                    relative w-24 h-24 mx-auto mb-6 rounded-2xl 
                    bg-gradient-to-r ${skill.color} 
                    flex items-center justify-center
                    shadow-2xl ${skill.glowColor}
                    group-hover:scale-110 group-hover:shadow-3xl
                    transition-all duration-300
                    ${skill.id === 'r' ? 'w-28 h-28 border-4 border-yellow-400' : ''}
                  `}>
                    {skill.icon}
                    
                    {/* Key Binding */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center text-xs font-bold text-white">
                      {skill.keyBinding}
                    </div>

                    {/* Cooldown Overlay */}
                    {skillCooldowns[skill.id] > 0 && (
                      <div className="absolute inset-0 bg-black/70 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{skillCooldowns[skill.id]}</span>
                      </div>
                    )}

                    {/* Level Indicators */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      {Array.from({ length: skill.maxLevel }).map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index < skill.level ? 'bg-yellow-400' : 'bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Skill Name */}
                  <h4 className="text-center text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {skill.name}
                  </h4>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
              <h4 className="text-xl font-bold text-white mb-4">How to Play</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-slate-700 rounded mr-3 flex items-center justify-center text-xs font-bold">Q</span>
                  Hover to preview skills
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-slate-700 rounded mr-3 flex items-center justify-center text-xs font-bold">W</span>
                  Click to cast abilities
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-slate-700 rounded mr-3 flex items-center justify-center text-xs font-bold">E</span>
                  Watch cooldown timers
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 bg-slate-700 rounded mr-3 flex items-center justify-center text-xs font-bold">R</span>
                  Ultimate ability (most powerful)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSkills
