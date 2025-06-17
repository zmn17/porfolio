'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BootSequence from './BootSequence.js'
import MatrixRain from './MatrixRain'
import CommandInput from './CommandInput'
import PortfolioContent from './PortfolioContent'
import { useTerminal } from '../hooks/useTerminal.js'

const Terminal = () => {
  const [isBooted, setIsBooted] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const terminalRef = useRef(null)
  const { 
    commandHistory, 
    executeCommand, 
    clearTerminal,
    scrollToSection 
  } = useTerminal()

  useEffect(() => {
    // Boot sequence timing
    const bootTimer = setTimeout(() => {
      setIsBooted(true)
      setTimeout(() => setShowContent(true), 500)
    }, 3000)

    return () => clearTimeout(bootTimer)
  }, [])

  const handleCommand = (command) => {
    if (command === 'clear') {
      clearTerminal()
      return
    }
    executeCommand(command)
  }

  return (
    <div className="terminal-container" ref={terminalRef}>
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button close"></div>
          <div className="terminal-button minimize"></div>
          <div className="terminal-button maximize"></div>
        </div>
        <div className="terminal-title text-terminal-text">zamyn.ahmadi@portfolio: ~</div>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        {/* <MatrixRain /> */}
        
        <div className="terminal-content">
          {/* Boot Sequence */}
          <BootSequence onComplete={() => setIsBooted(true)} />

          {/* ASCII Art */}
          <AnimatePresence>
            {isBooted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "backOut" }}
                className="ascii-art glitch mb-6"
              >
{`     ██╗ ██████╗ ██╗  ██╗███╗   ███╗    ██████╗  ██████╗ ███████╗
     ██║██╔═══██╗██║  ██║████╗ ████║    ██╔══██╗██╔═══██╗██╔════╝
     ██║██║   ██║███████║██╔████╔██║    ██║  ██║██║   ██║█████╗  
██   ██║██║   ██║██╔══██║██║╚██╔╝██║    ██║  ██║██║   ██║██╔══╝  
╚█████╔╝╚██████╔╝██║  ██║██║ ╚═╝ ██║    ██████╔╝╚██████╔╝███████╗
 ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝
                    SOFTWARE ENGINEER | FULL STACK DEVELOPER`}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Portfolio Content */}
          <AnimatePresence>
            {showContent && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <PortfolioContent />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Command History */}
          <div className="command-history">
            {commandHistory.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="prompt">
                  <span className="prompt-symbol">$</span>
                  <span className="command">{entry.command}</span>
                </div>
                {entry.output && (
                  <div className="output" dangerouslySetInnerHTML={{ __html: entry.output }} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Command Input */}
          {showContent && (
            <CommandInput onCommand={handleCommand} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Terminal
