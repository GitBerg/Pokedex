'use client'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { darkTheme, lightTheme, ThemeType } from '../../styles/theme'

interface ThemeCtx {
  theme: ThemeType
  toggle: () => void
}

const ThemeContext = createContext<ThemeCtx>({
  theme: lightTheme,
  toggle: () => {},
})

export const useThemeCtx = () => useContext(ThemeContext)


export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(lightTheme)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') setTheme(darkTheme)
  }, [])

  const toggle = () => {
    const next = theme.name === 'light' ? darkTheme : lightTheme
    setTheme(next)
    localStorage.setItem('theme', next.name)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
