'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const BootSequence = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const bootLines = [
    "Starting portfolio system...",
    "Loading user profile... [OK]",
    "Initializing skills database... [OK]",
    "Mounting project files... [OK]",
    "System ready. Welcome to John Doe's Portfolio Terminal."
  ]

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 600)
      return () => clearTimeout(timer)
    } else if (!isComplete) {
      setIsComplete(true)
      setTimeout(() => {
        onComplete && onComplete()
      }, 500)
    }
  }, [currentLine, bootLines.length, isComplete, onComplete])

  const formatBootLine = (line) => {
    if (line.includes('[OK]')) {
      const parts = line.split('[OK]')
      return (
        <>
          {parts[0]}
          <span className="success-text">[OK]</span>
          {parts[1]}
        </>
      )
    }
    return line
  }

  return (
    <motion.div 
      className="boot-sequence mb-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {bootLines.slice(0, currentLine).map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="boot-line mb-1 text-terminal-text"
        >
          {formatBootLine(line)}
        </motion.div>
      ))}
      
      {currentLine < bootLines.length && (
        <motion.div
          className="boot-line text-terminal-text"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <span className="cursor inline-block w-2 h-4 bg-terminal-text"></span>
        </motion.div>
      )}
    </motion.div>
  )
}

export default BootSequence
