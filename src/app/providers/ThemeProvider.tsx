'use client'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ReactNode, useEffect, useState } from 'react'
import { darkTheme, lightTheme, ThemeType } from '../../styles/theme'

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
    <StyledThemeProvider theme={theme}>
      <button
        onClick={toggle}
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          padding: '8px 12px',
          background: theme.colors.primary,
          color: theme.colors.bg,
          borderRadius: 8,
        }}
      >
        {theme.name === 'light' ? 'Dark' : 'Light'}
      </button>
      {children}
    </StyledThemeProvider>
  )
}
