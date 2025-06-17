'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const PortfolioContent = () => {
  const progressBarsRef = useRef([])

  useEffect(() => {
    const timer = setTimeout(() => {
      progressBarsRef.current.forEach((bar) => {
        if (bar) {
          const width = bar.getAttribute('data-width')
          bar.style.width = width + '%'
        }
      })
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const skills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React/Next.js', level: 85 },
    { name: 'Node.js/Express', level: 75 },
    { name: 'Python/Django', level: 70 },
    { name: 'PostgreSQL/MongoDB', level: 65 },
    { name: 'AWS/Docker', level: 45 }
  ]

  const projects = [
    {
      name: 'e-commerce-platform',
      description: 'Full-stack e-commerce solution with React & Node.js',
      tech: 'React, Express, PostgreSQL, Stripe API',
      status: 'DEPLOYED',
      statusColor: 'success-text'
    },
    {
      name: 'task-management-app',
      description: 'Collaborative task manager with real-time updates',
      tech: 'Next.js, Socket.io, MongoDB, Tailwind CSS',
      status: 'DEPLOYED',
      statusColor: 'success-text'
    },
    {
      name: 'weather-dashboard',
      description: 'Interactive weather dashboard with data visualization',
      tech: 'React, D3.js, OpenWeather API, Chart.js',
      status: 'IN DEVELOPMENT',
      statusColor: 'warning-text'
    }
  ]

  return (
    <div className="space-y-6">
      {/* whoami */}
      <div>
        <div className="prompt">
          <span className="prompt-symbol">$</span>
          <span className="command">whoami</span>
        </div>
        <motion.div 
          className="output typing-container"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: "linear" }}
        >
          <div>John Doe - Software Engineer</div>
          <div>Location: San Francisco, CA</div>
          <div>Experience: 5+ years in full-stack development</div>
          <div>Passion: Building scalable web applications and clean code</div>
        </motion.div>
      </div>

      {/* Skills */}
      <div id="skills-section">
        <div className="prompt">
          <span className="prompt-symbol">$</span>
          <span className="command">cat skills.txt</span>
        </div>
        <div className="output">
          <div className="section-title">== TECHNICAL SKILLS ==</div>
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="skill-item mb-3 hover:translate-x-2 transition-transform duration-300"
            >
              <div>▸ {skill.name} - {skill.level >= 80 ? 'Advanced' : skill.level >= 60 ? 'Intermediate' : 'Beginner'}</div>
              <div className="progress-bar">
                <div 
                  ref={el => progressBarsRef.current[index] = el}
                  className="progress-fill"
                  data-width={skill.level}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div id="projects-section">
        <div className="prompt">
          <span className="prompt-symbol">$</span>
          <span className="command">ls projects/</span>
        </div>
        <div className="output">
          <div className="section-title">== FEATURED PROJECTS ==</div>
          {projects.map((project, index) => (
            <motion.div 
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="project-item"
            >
              <div className="info-text">📁 {project.name}/</div>
              <div>   {project.description}</div>
              <div>   Tech: {project.tech}</div>
              <div>   <span className={project.statusColor}>[{project.status}]</span> | <span className="contact-link">View Demo</span></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div id="experience-section">
        <div className="prompt">
          <span className="prompt-symbol">$</span>
          <span className="command">cat experience.log</span>
        </div>
        <motion.div 
          className="output"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="section-title">== WORK EXPERIENCE ==</div>
          <div className="mb-4">
            <div className="info-text">2021-Present | Senior Software Engineer @ TechCorp</div>
            <div>▸ Led development of microservices architecture</div>
            <div>▸ Improved application performance by 40%</div>
            <div>▸ Mentored 3 junior developers</div>
          </div>
          <div className="mb-4">
            <div className="info-text">2019-2021 | Full Stack Developer @ StartupXYZ</div>
            <div>▸ Built MVP from scratch using React and Node.js</div>
            <div>▸ Implemented CI/CD pipelines with Docker</div>
            <div>▸ Collaborated with design team on UX improvements</div>
          </div>
        </motion.div>
      </div>

      {/* Contact */}
      <div id="contact-section">
        <div className="prompt">
          <span className="prompt-symbol">$</span>
          <span className="command">curl -X GET contact.json</span>
        </div>
        <motion.div 
          className="output"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="section-title">== CONTACT INFORMATION ==</div>
          <div>Email: <span className="contact-link">john.doe@email.com</span></div>
          <div>LinkedIn: <span className="contact-link">linkedin.com/in/johndoe</span></div>
          <div>GitHub: <span className="contact-link">github.com/johndoe</span></div>
          <div>Portfolio: <span className="contact-link">johndoe.dev</span></div>
        </motion.div>
      </div>

      {/* Help */}
      <div id="help-section">
        <div className="prompt">
          <span className="prompt-symbol">$</span>
          <span className="command">help</span>
        </div>
        <motion.div 
          className="output"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="section-title">== AVAILABLE COMMANDS ==</div>
          <div>whoami     - Display user information</div>
          <div>skills     - Show technical skills</div>
          <div>projects   - List featured projects</div>
          <div>experience - Show work history</div>
          <div>contact    - Display contact information</div>
          <div>clear      - Clear terminal screen</div>
          <div>download   - Download resume (PDF)</div>
        </motion.div>
      </div>
    </div>
  )
}

export default PortfolioContent
