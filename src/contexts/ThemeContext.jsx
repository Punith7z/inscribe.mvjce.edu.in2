import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // 'mode' can be 'light', 'dark', or 'system'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('themeMode')
    return savedMode || 'system' // Default to system if nothing saved
  })

  // 'theme' is the actual applied style: 'light' or 'dark'
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    localStorage.setItem('themeMode', mode)

    const handleThemeChange = () => {
      if (mode === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        setTheme(systemTheme)
      } else {
        setTheme(mode)
      }
    }

    handleThemeChange() // Initial check

    // Listen for system changes if in system mode
    if (mode === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      mediaQuery.addEventListener('change', handleThemeChange)
      return () => mediaQuery.removeEventListener('change', handleThemeChange)
    }
  }, [mode])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    // Legacy support: also update 'theme' in localStorage for simple checks if needed, 
    // though 'themeMode' is our source of truth now.
    localStorage.setItem('theme', theme)
  }, [theme])

  const cycleTheme = () => {
    const modes = ['light', 'dark', 'system']
    const nextIndex = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[nextIndex])
  }

  // Keep toggleTheme for backward compatibility if used elsewhere, mapping it to cycle
  const toggleTheme = cycleTheme

  return (
    <ThemeContext.Provider value={{ theme, mode, cycleTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

