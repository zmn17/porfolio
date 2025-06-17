'use client'

import { useState, useCallback } from 'react'
import { executeTerminalCommand } from '../utils/command.js'

export const useTerminal = () => {
  const [commandHistory, setCommandHistory] = useState([])

  const executeCommand = useCallback((command) => {
    const output = executeTerminalCommand(command)
    
    setCommandHistory(prev => [
      ...prev,
      {
        command,
        output,
        timestamp: new Date().toISOString()
      }
    ])

    // Scroll to bottom after command execution
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      })
    }, 100)
  }, [])

  const clearTerminal = useCallback(() => {
    setCommandHistory([])
  }, [])

  const scrollToSection = useCallback((section) => {
    const sectionMap = {
      'skills': 'skills-section',
      'projects': 'projects-section',
      'experience': 'experience-section',
      'contact': 'contact-section',
      'help': 'help-section'
    }

    const sectionId = sectionMap[section]
    if (sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        })
      }
    }
  }, [])

  return {
    commandHistory,
    executeCommand,
    clearTerminal,
    scrollToSection
  }
}
