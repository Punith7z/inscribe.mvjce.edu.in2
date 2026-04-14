import { createContext, useContext, useState, useEffect } from 'react'
import { useTheme as useNextTheme } from 'next-themes'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme, resolvedTheme } = useNextTheme()
  const [mounted, setMounted] = useState(false)

  // Hydration check
  useEffect(() => {
    setMounted(true)
  }, [])

  const cycleTheme = () => {
    const modes = ['light', 'dark', 'system']
    const currentIndex = modes.indexOf(theme || 'system')
    const nextIndex = (currentIndex + 1) % modes.length
    setTheme(modes[nextIndex])
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  // Value for the context
  const value = {
    theme: mounted ? resolvedTheme : 'light',
    mode: mounted ? theme : 'system',
    cycleTheme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

