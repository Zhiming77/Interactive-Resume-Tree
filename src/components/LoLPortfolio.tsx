import { useState } from 'react'
import { ChevronRight, ChevronDown, Linkedin, Github, ExternalLink, Mail } from 'lucide-react'

interface TreeNode {
  name: string
  color: string
  size?: number
  url?: string
  children?: TreeNode[]
}

interface TreeNodeProps {
  node: TreeNode
  level: number
  isExpanded: boolean
  onToggle: () => void
}

const TreeNodeComponent: React.FC<TreeNodeProps> = ({ node, level, isExpanded, onToggle }) => {
  const hasChildren = node.children && node.children.length > 0
  
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-600 hover:bg-green-500 border-green-400'
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-500 border-blue-400'
      case 'purple':
        return 'bg-purple-600 hover:bg-purple-500 border-purple-400'
      case 'orange':
        return 'bg-orange-600 hover:bg-orange-500 border-orange-400'
      case 'red':
        return 'bg-red-600 hover:bg-red-500 border-red-400'
      case 'yellow':
        return 'bg-yellow-600 hover:bg-yellow-500 border-yellow-400'
      case 'gray':
        return 'bg-gray-600 hover:bg-gray-500 border-gray-400'
      default:
        return 'bg-gray-600 hover:bg-gray-500 border-gray-400'
    }
  }

  const handleNodeClick = () => {
    if (node.url) {
      window.open(node.url, '_blank')
    } else if (hasChildren) {
      onToggle()
    }
  }

  return (
    <div className="relative">
      {/* Connection Line */}
      {level > 0 && (
        <div className="absolute -left-6 top-4 w-6 h-0.5 bg-gray-400"></div>
      )}
      
      {/* Vertical Line for Parent */}
      {level > 0 && (
        <div className="absolute -left-6 top-4 w-0.5 h-6 bg-gray-400"></div>
      )}

      {/* Node */}
      <div 
        className={`flex items-center space-x-2 p-3 rounded-lg border-2 cursor-pointer transition-all duration-200 ${getColorClasses(node.color)} text-white shadow-lg hover:shadow-xl transform hover:scale-105`}
        onClick={handleNodeClick}
        style={{ marginLeft: `${level * 40}px` }}
      >
        {/* Expand/Collapse Icon */}
        {hasChildren && (
          <div className="flex-shrink-0">
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </div>
        )}
        
        {/* Node Content */}
        <div className="flex-1 min-w-0">
          <span 
            className="text-sm font-medium block"
            dangerouslySetInnerHTML={{
              __html: node.name
            }}
          />
        </div>
        
        {/* External Link Icon */}
        {node.url && (
          <ExternalLink className="w-4 h-4 flex-shrink-0" />
        )}
      </div>
    </div>
  )
}

const TreeCV = () => {
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['root', 'Technical Skills', 'Additional Skills', 'Soft Skills']))

  const resumeData: TreeNode = {
    name: "Benjamin Harry Skoler",
    color: "purple",
    children: [
      {
        name: "Technical Skills",
        color: "green",
        children: [
          {
            name: "Programming Languages  ",
            color: "green",
            children: [
              { name: "Python (2.x & 3.x)", color: "gray", size: 1000 },
              { name: "JavaScript ES6+", color: "gray", size: 900 },
              { name: "SQL", color: "gray", size: 900 },
              { name: "Java", color: "gray", size: 900 },
              { name: "React", color: "gray", size: 900 }

            ]
          },
          {
            name: "Web Technologies",
            color: "green",
            children: [
              { name: "Node.js & Express", color: "gray", size: 900 },
              { name: "Django & Flask", color: "gray", size: 700 },
              { name: "Git", color: "gray", size: 600 },
              { name: "HTML", color: "gray", size: 700 },
              { name: "CSS", color: "gray", size: 700 },
              { name: "AWS", color: "gray", size: 700 },
              { name: "Terraform", color: "gray", size: 700 },
              { name: "Docker", color: "gray", size: 700 },
              { name: "Kubernetes", color: "gray", size: 700 },
              { name: "Google Colab", color: "gray", size: 700 },
            ]
          },
          {
            name: "Operating Systems",
            color: "green",
            children: [
              { name: "Linux", color: "gray", size: 600 },
              { name: "Windows", color: "gray", size: 700 },
              { name: "macOS", color: "gray", size: 800 }
            ]
          },
          {
            name: "Other Relevant Skills",
            color: "green",
            children: [
              { name: "Python scripting", color: "gray", size: 600 },
              { name: "Windows Powershell", color: "gray", size: 700 },
              { name: "Networking (IT)", color: "gray", size: 700 },
              { name: "Virtualization (Hyper-V & VMware)", color: "gray", size: 700 },
              { name: "Microsoft Excel", color: "gray", size: 700 },
              { name: "Google Sheets", color: "gray", size: 700 },
              { name: "Adobe Photoshop", color: "gray", size: 700 },
              { name: "Adobe Illustrator", color: "gray", size: 700 },
              { name: "AWS CLI", color: "gray", size: 800 },
              { name: "Blender", color: "gray", size: 800 }
            ]
          }
        ]
      },
      {
        name: "Education",
        color: "yellow",
        children: [
          {
            name: "Israel Tech Challenge CTO Coding Bootcamp, Tel Aviv, Israel ",
            color: "yellow",
            children: [
              { name: "Completed: An intense hands-on software development Training Program, focused on web technologies, <i>March 2016</i>", color: "gray", size: 1000 },
              { name: "Curriculum Covered: Java, Python, JavaScript, ReactJS, SQL, jQuery, Django, HTML/CSS, Web App Security", color: "gray", size: 500 }
            ]
          },
          {
            name: "New York University, New York, NY",
            color: "yellow",
            children: [
              { name: "Completed: Bachelor of Economics; Bachelor of Chinese Language & Culture, <i>August 2008</i>", color: "gray", size: 1000 },
              { name: "Cumulative GPA: 3.5", color: "gray", size: 500 }
            ]
          },
          {
            name: "Harvard University, Cambridge, MA",
            color: "yellow",
            children: [
              { name: "Completed: Intermediate Chinese (Reading/Writing/Speaking), <i>August 2006</i>", color: "gray", size: 1000 },
              { name: "Cumulative GPA: 3.7", color: "gray", size: 500 }
            ]
          },
          {
            name: "Liaoning University, Shenyang, China",
            color: "yellow",
            children: [
              { name: "Completed: Advanced Chinese (Reading/Writing) & Advanced Spoken Chinese, <i>August 2007</i>", color: "gray", size: 1000 },
              { name: "Cumulative GPA: 3.7", color: "gray", size: 500 }
            ]
          },
          {
            name: "<strong>Technical Certifications</strong>",
            color: "yellow",
            children: [
              { name: "AWS CLF-C01: AWS Certified Cloud Practitioner", color: "gray", size: 800 },
              { name: "AWS AIF-C01: AWS Certified AI Practitioner", color: "gray", size: 700 },
              { name: "CISCO CCST: Cisco Certified Support Technician", color: "gray", size: 600 }
            ]
          }
        ]
      },
      {
        name: "Work Experience",
        color: "blue",
        children: [
          {
            name: "<strong>Self-Employed</strong>,  Jerusalem, Israel ",
            color: "blue",
            children: [
              {
                name: "<em>Freelance Designer/Writer</em>, January 2018-Present",
                color: "blue",
                children: [
                  { name: "<strong>Implemented</strong> tone and brand of clients via professional writing & web design.", color: "gray", size: 1000 },
                  { name: "<strong>Investigated</strong>, uncovered and remedied internally inefficient processes.", color: "gray", size: 700 },
                  { name: "<strong>Strengthened</strong> quality of client products and services functionally and aesthetically.", color: "gray", size: 800 }
                ]
              }
            ]
          },
          {
            name: "<strong>CodersClan</strong>, Tel Aviv, Israel ",
            color: "blue",
            children: [
              {
                name: "<em>Technical Project Manager</em>, October 2017-December 2017",
                color: "blue",
                children: [
                  { name: "<strong>Formulated</strong>, scheduled, and instituted technical projects with clients.", color: "gray", size: 1000 },
                  { name: "<strong>Maintained</strong> ongoing relationships with clients and developers.", color: "gray", size: 900 },
                  { name: "<strong>Investigated</strong>, uncovered and remedied internally inefficient processes.", color: "gray", size: 700 }
                ]
              }
            ]
          },
          {
            name: "<strong>Zengaming</strong>, Tel Aviv, Israel ",
            color: "blue",
            children: [
              {
                name: "<em>Support/Growth Specialist</em>, June 2016-October 2017",
                color: "blue",
                children: [
                  { name: "<strong>Created</strong> and <strong>orchestrated</strong> the growth of two Facebook pages/influencer-communities to 100k+ followers (each) within two months.", color: "gray", size: 1000 },
                  { name: "<strong>Authored</strong> and <strong>enhanced</strong> extensive amounts of copyright.", color: "gray", size: 900 },
                  { name: "<strong>Improved</strong> customer satisfaction via the increased articulation, automation and humanization of the support system and process.", color: "gray", size: 700 }
                ]
              }
            ]
          },
          {
            name: "<strong>Academy of Aerospace & Engineering</strong>, Hartford, CT",
            color: "blue",
            children: [
              {
                name: "<em>Long-Term Substitute Teacher</em>, March 2015-October 2015",
                color: "blue",
                children: [
                  { name: "<strong>Directed</strong> students in accordance with the lesson plans provided by head instructors.", color: "gray", size: 1000 },
                  { name: "<strong>Mentored</strong> and <strong>instructed</strong> students in proper essay writing techniques.", color: "gray", size: 900 },
                  { name: "<strong>Cultivated</strong> an atmosphere of auto-didacticism in classrooms otherwise devoid of it.", color: "gray", size: 700 }
                ]
              }
            ]
          },
          {
            name: "<strong>Skadden, Arps, Slate, Meagher & Flom LLP</strong>, Boston, MA ",
            color: "blue",
            children: [
              {
                name: "<em>Records Management Clerk/Legal-Assistant</em>, March 2010-December 2014,",
                color: "blue",
                children: [
                  { name: "<strong>Assumed</strong> managerial duties during four-month medical leave of supervisor.", color: "gray", size: 1000 },
                  { name: "<strong>Implemented</strong> up-to-date management of all on-site files and records.", color: "gray", size: 900 },
                  { name: "<strong>Executed</strong> and <strong>arranged</strong> retrieval of records for attorneys and paralegals.", color: "gray", size: 700 }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Additional Skills",
        color: "green",
        children: [
                    {
            name: "Languages",
            color: "green",
            children: [
              { name: "English (Native)", color: "gray", size: 1000 },
              { name: "Mandarin Chinese (Proficient)", color: "gray", size: 700 },
              { name: "Hebrew (Proficient)", color: "gray", size: 400 }
            ]
          },
          {
            name: "Mastered Disciplines",
            color: "green",
            children: [
              { name: "Brazilian Jiu-Jitsu Black Belt 1st Degree (Instructor from 2008-Present)", color: "gray", size: 800 },
              { name: "Hatha Yoga Coach and Instructor (2019-Present)", color: "gray", size: 600 },
              { name: "Meditation Coach (2022-Present)", color: "gray", size: 900 }
            ]
          },
          {
            name: "Other Competencies",
            color: "green",
            children: [
              { name: "Project Management", color: "gray", size: 800 },
              { name: "Public Speaking", color: "gray", size: 600 },
              { name: "Digital Marketing", color: "gray", size: 900 },
              { name: "Content Creation", color: "gray", size: 900 },
              { name: "Social Media Management", color: "gray", size: 900 },
              { name: "Copywriting", color: "gray", size: 900 },
              { name: "3D Modeling", color: "gray", size: 900 },
              { name: "Video Editing", color: "gray", size: 900 },
              { name: "Audio Editing", color: "gray", size: 900 },
              { name: "Computer Hardware Troubleshooting", color: "gray", size: 900 },
              { name: "Leadership", color: "gray", size: 900 },
              { name: "Critical Thinking", color: "gray", size: 900 },
              { name: "Time Management", color: "gray", size: 900 },
              { name: "Growth Hacking", color: "gray", size: 900 }
            ]
          }
        ]
      },
      {
        name: "Projects",
        color: "orange",
        children: [
          {
            name: "YouTube Shorts Editor",
            color: "orange",
            url: "https://github.com/Zhiming77/YouTube-Shorts-Editor",
            children: [
              { name: "Python", color: "gray", size: 1500 }
            ]
          },
          {
            name: "Telegram Cryptocurrency Bot",
            color: "orange",
            url: "https://github.com/Zhiming77/Telegram-Crypto-Bot",
            children: [
              { name: "Python", color: "gray", size: 1200 },
            ]
          },
          {
            name: "Spotify Extended Sleep Timer",
            color: "orange",
            url: "https://github.com/Zhiming77/Spotify-Shabbat-Timer",
            children: [
              { name: "Python", color: "gray", size: 1200 },
            ]
          },
          {
            name: "Dharma Bums: A simple meditation web app",
            color: "orange",
            url: "https://github.com/Zhiming77/Dharma-Bums",
            children: [
              { name: "Python", color: "gray", size: 1200 },
              { name: "CSS", color: "gray", size: 1200 },
              { name: "JavaScript", color: "gray", size: 1200 },
              { name: "HTML", color: "gray", size: 1200 },
            ]
          }
        ]
      }
    ]
  }

  const toggleNode = (nodePath: string) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(nodePath)) {
      newExpanded.delete(nodePath)
    } else {
      newExpanded.add(nodePath)
    }
    setExpandedNodes(newExpanded)
  }

  const renderTree = (node: TreeNode, level: number = 0, path: string = 'root'): React.ReactNode => {
    const isExpanded = expandedNodes.has(path)
    const hasChildren = node.children && node.children.length > 0

    return (
      <div key={path} className="mb-2">
        <TreeNodeComponent
          node={node}
          level={level}
          isExpanded={isExpanded}
          onToggle={() => toggleNode(path)}
        />
        
        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="ml-6 mt-2 space-y-2 relative">
            {/* Vertical connecting line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-400"></div>
            
            {node.children!.map((child, index) => 
              renderTree(child, level + 1, `${path}-${index}`)
            )}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Benjamin Harry Skoler</h1>
          <p className="text-gray-300 text-base mb-6">Aspiring Cloud Engineer | Freelance Designer/Content Writer | Technical Project Management | Growth Hacking</p>
          
          {/* Email Link */}
          <div className="flex justify-center mb-8">
            <a 
              href="mailto:bhs240@nyu.edu" 
              className="group flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg border border-gray-600 transition-all duration-200 hover:scale-105"
            >
              <Mail className="w-5 h-5 text-white group-hover:text-blue-300" />
              <span className="text-white text-sm font-medium">bhs240@nyu.edu</span>
            </a>
          </div>
          
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-6 mx-auto"></div>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
          {/* Profile Picture */}
          <div className="relative mt-0 mb-8">
            <div className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-blue-600">
              <img 
                src="/profile-picture.jpg" 
                alt="Profile Picture" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient background if image fails to load
                  e.currentTarget.style.display = 'none'
                }}
              />
              {/* Fallback content when image doesn't load */}
              <div className="w-full h-full flex items-center justify-center text-white text-4xl font-bold">
                YN
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 w-32 h-32 rounded-full bg-purple-500 opacity-20 animate-pulse"></div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/benjaminskoler" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg border border-blue-600 transition-all duration-200 hover:scale-105"
            >
              <Linkedin className="w-5 h-5 text-white group-hover:text-blue-200" />
              <span className="text-white text-sm font-medium">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/zhiming77" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg border border-gray-600 transition-all duration-200 hover:scale-105"
            >
              <Github className="w-5 h-5 text-white group-hover:text-purple-400" />
              <span className="text-white text-sm font-medium">GitHub</span>
            </a>

            {/* Behance */}
            <a 
              href="https://behance.net/benzhiming" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 bg-purple-600 hover:bg-purple-500 px-4 py-2 rounded-lg border border-purple-500 transition-all duration-200 hover:scale-105"
            >
              {/* Art-themed Icon (Brush) */}
              <svg className="w-5 h-5 text-white group-hover:text-purple-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/>
                <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04v-3.54"/>
              </svg>
              <span className="text-white text-sm font-medium">Behance</span>
            </a>
          </div>
          
          {/* Gradient divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mt-8 mb-6 mx-auto"></div>
          
          {/* Subtitle moved here */}
          <div className="text-center">
            <p className="text-gray-200 text-lg mb-4">Interactive Resume Tree:</p>
            <p className="text-gray-300 text-lg">
              Click on nodes to expand/collapse sections.
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <i>Nodes with links will open in a new tab when clicked.</i>
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-600 rounded"></div>
            <span className="text-white text-sm">Skills</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-600 rounded"></div>
            <span className="text-white text-sm">Education</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span className="text-white text-sm">Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-600 rounded"></div>
            <span className="text-white text-sm">Projects</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-600 rounded"></div>
            <span className="text-white text-sm">Details</span>
          </div>
        </div>

        {/* Tree Visualization */}
        <div className="bg-black/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
          {renderTree(resumeData)}
        </div>

      
      </div>
    </div>
  )
}

export default TreeCV
