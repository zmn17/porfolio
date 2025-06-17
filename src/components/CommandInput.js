'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const CommandInput = ({ onCommand }) => {
  const [command, setCommand] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef(null)

  useEffect(() => {
    // Focus input on mount and when clicking anywhere
    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    focusInput()
    document.addEventListener('click', focusInput)
    
    return () => {
      document.removeEventListener('click', focusInput)
    }
  }, [])

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && command.trim()) {
      const trimmedCommand = command.trim()
      
      // Add to history
      setCommandHistory(prev => [...prev, trimmedCommand])
      setHistoryIndex(-1)
      
      // Execute command
      onCommand(trimmedCommand)
      
      // Clear input
      setCommand('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setCommand(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setCommand('')
        } else {
          setHistoryIndex(newIndex)
          setCommand(commandHistory[newIndex])
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Simple autocomplete for common commands
      const commands = ['whoami', 'skills', 'projects', 'experience', 'contact', 'help', 'clear', 'download']
      const matches = commands.filter(cmd => cmd.startsWith(command.toLowerCase()))
      if (matches.length === 1) {
        setCommand(matches[0])
      }
    }
  }

  return (
    <motion.div 
      className="prompt flex items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="prompt-symbol text-terminal-success mr-2">$</span>
      <input
        ref={inputRef}
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyPress}
        className="command-input bg-transparent border-none outline-none text-terminal-accent flex-1"
        placeholder="Type a command... (try 'help')"
        autoComplete="off"
        spellCheck="false"
      />
      <motion.span 
        className="cursor inline-block w-2 h-4 bg-terminal-text ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.div>
  )
}

export default CommandInput
