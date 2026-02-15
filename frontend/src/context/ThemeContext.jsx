import { createContext, useContext, useState, useEffect } from 'react'
import { profile } from '../data/content'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'default'
  })

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((t) => (t === 'default' ? 'orange' : 'default'))
  }

  const accentColor = theme === 'orange' ? '#FA8112' : '#d0b691'
  const profileImage = theme === 'orange' ? profile.profileImage : (profile.profileImageSkin || profile.profileImage)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor, profileImage }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
