export const executeTerminalCommand = (command) => {
  const cmd = command.toLowerCase().trim()
  
  switch (cmd) {
    case 'whoami':
      return `
        <div>John Doe - Software Engineer</div>
        <div>Location: San Francisco, CA</div>
        <div>Experience: 5+ years in full-stack development</div>
        <div>Passion: Building scalable web applications and clean code</div>
      `
    
    case 'skills':
      return `
        <div class="section-title">== TECHNICAL SKILLS ==</div>
        <div class="skill-item">▸ JavaScript/TypeScript - Advanced</div>
        <div class="skill-item">▸ React/Next.js - Advanced</div>
        <div class="skill-item">▸ Node.js/Express - Intermediate</div>
        <div class="skill-item">▸ Python/Django - Intermediate</div>
        <div class="skill-item">▸ PostgreSQL/MongoDB - Intermediate</div>
        <div class="skill-item">▸ AWS/Docker - Beginner</div>
      `
    
    case 'projects':
      return `
        <div class="section-title">== FEATURED PROJECTS ==</div>
        <div class="project-item">
          <div class="info-text">📁 e-commerce-platform/</div>
          <div>   Full-stack e-commerce solution with React & Node.js</div>
          <div>   Tech: React, Express, PostgreSQL, Stripe API</div>
          <div>   <span class="success-text">[DEPLOYED]</span> | <span class="contact-link">View Demo</span></div>
        </div>
        <div class="project-item">
          <div class="info-text">📁 task-management-app/</div>
          <div>   Collaborative task manager with real-time updates</div>
          <div>   Tech: Next.js, Socket.io, MongoDB, Tailwind CSS</div>
          <div>   <span class="success-text">[DEPLOYED]</span> | <span class="contact-link">View Demo</span></div>
        </div>
        <div class="project-item">
          <div class="info-text">📁 weather-dashboard/</div>
          <div>   Interactive weather dashboard with data visualization</div>
          <div>   Tech: React, D3.js, OpenWeather API, Chart.js</div>
          <div>   <span class="warning-text">[IN DEVELOPMENT]</span> | <span class="contact-link">View Code</span></div>
        </div>
      `
    
    case 'experience':
      return `
        <div class="section-title">== WORK EXPERIENCE ==</div>
        <div class="mb-4">
          <div class="info-text">2021-Present | Senior Software Engineer @ TechCorp</div>
          <div>▸ Led development of microservices architecture</div>
          <div>▸ Improved application performance by 40%</div>
          <div>▸ Mentored 3 junior developers</div>
        </div>
        <div class="mb-4">
          <div class="info-text">2019-2021 | Full Stack Developer @ StartupXYZ</div>
          <div>▸ Built MVP from scratch using React and Node.js</div>
          <div>▸ Implemented CI/CD pipelines with Docker</div>
          <div>▸ Collaborated with design team on UX improvements</div>
        </div>
      `
    
    case 'contact':
      return `
        <div class="section-title">== CONTACT INFORMATION ==</div>
        <div>Email: <span class="contact-link">john.doe@email.com</span></div>
        <div>LinkedIn: <span class="contact-link">linkedin.com/in/johndoe</span></div>
        <div>GitHub: <span class="contact-link">github.com/johndoe</span></div>
        <div>Portfolio: <span class="contact-link">johndoe.dev</span></div>
      `
    
    case 'help':
      return `
        <div class="section-title">== AVAILABLE COMMANDS ==</div>
        <div>whoami     - Display user information</div>
        <div>skills     - Show technical skills</div>
        <div>projects   - List featured projects</div>
        <div>experience - Show work history</div>
        <div>contact    - Display contact information</div>
        <div>clear      - Clear terminal screen</div>
        <div>download   - Download resume (PDF)</div>
      `
    
    case 'download':
      // Trigger download
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'john_doe_resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      return `<span class="success-text">Downloading resume...</span> <span class="info-text">[resume.pdf]</span>`
    
    case 'ls':
    case 'ls -la':
      return `
        <div>total 8</div>
        <div>drwxr-xr-x  5 john  staff   160 Dec  1 10:30 .</div>
        <div>drwxr-xr-x  3 john  staff    96 Dec  1 10:30 ..</div>
        <div>-rw-r--r--  1 john  staff  1024 Dec  1 10:30 skills.txt</div>
        <div>drwxr-xr-x  4 john  staff   128 Dec  1 10:30 projects/</div>
        <div>-rw-r--r--  1 john  staff  2048 Dec  1 10:30 experience.log</div>
        <div>-rw-r--r--  1 john  staff   512 Dec  1 10:30 contact.json</div>
      `
    
    case 'pwd':
      return '/Users/john/portfolio'
    
    case 'date':
      return new Date().toString()
    
    case 'uptime':
      return 'Portfolio has been running for: 5+ years'
    
    case 'cat /etc/hostname':
      return 'john-doe-portfolio'
    
    case 'ps aux':
      return `
        <div>USER       PID  %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND</div>
        <div>john      1234  95.0  80.0 512000 400000 pts/0   S+   10:30   5:42 /usr/bin/awesome-developer</div>
        <div>john      5678  2.0   5.0  64000  32000 pts/0    S    10:35   0:30 /usr/bin/coffee-consumer</div>
        <div>john      9012  1.0   2.0  32000  16000 pts/0    S    11:00   0:15 /usr/bin/code-reviewer</div>
      `
    
    default:
      // Check if it's a variation of known commands
      if (cmd.includes('skill')) {
        return executeTerminalCommand('skills')
      } else if (cmd.includes('project')) {
        return executeTerminalCommand('projects')
      } else if (cmd.includes('work') || cmd.includes('job') || cmd.includes('exp')) {
        return executeTerminalCommand('experience')
      } else if (cmd.includes('contact') || cmd.includes('email') || cmd.includes('reach')) {
        return executeTerminalCommand('contact')
      }
      
      return `<span class="error-text">Command not found: ${command}</span><br>Type 'help' for available commands.`
  }
}

// Additional utility functions
export const getCommandSuggestions = (input) => {
  const commands = ['whoami', 'skills', 'projects', 'experience', 'contact', 'help', 'clear', 'download', 'ls', 'pwd', 'date', 'uptime']
  return commands.filter(cmd => cmd.startsWith(input.toLowerCase()))
}

export const isValidCommand = (command) => {
  const validCommands = ['whoami', 'skills', 'projects', 'experience', 'contact', 'help', 'clear', 'download', 'ls', 'pwd', 'date', 'uptime', 'ps aux', 'cat /etc/hostname']
  return validCommands.includes(command.toLowerCase().trim())
}
