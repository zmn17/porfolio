'use client'

import { useEffect, useRef } from 'react'

const MatrixRain = () => {
  const matrixRef = useRef(null)

  useEffect(() => {
    const chars = '01アカサタナハマヤラワンabcdefghijklmnopqrstuvwxyz'
    const matrix = matrixRef.current
    
    if (!matrix) return

    const createChar = () => {
      const char = document.createElement('div')
      char.className = 'matrix-char absolute text-terminal-text opacity-30 animate-matrix-fall text-xs font-mono'
      char.textContent = chars.charAt(Math.floor(Math.random() * chars.length))
      char.style.left = Math.random() * 100 + '%'
      char.style.animationDuration = (Math.random() * 3 + 2) + 's'
      char.style.animationDelay = Math.random() * 2 + 's'
      
      matrix.appendChild(char)
      
      // Remove char after animation
      setTimeout(() => {
        if (char.parentNode) {
          char.parentNode.removeChild(char)
        }
      }, 7000)
    }

    // Create initial chars
    for (let i = 0; i < 20; i++) {
      setTimeout(createChar, i * 100)
    }

    // Continue creating chars
    const interval = setInterval(createChar, 200)

    return () => {
      clearInterval(interval)
      if (matrix) {
        matrix.innerHTML = ''
      }
    }
  }, [])

  return (
    <div 
      ref={matrixRef}
      className="matrix-bg absolute inset-0 pointer-events-none overflow-hidden"
    />
  )
}

export default MatrixRain
