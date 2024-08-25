import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components'

import { lightTheme } from './constants'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Oswald', sans-serif;
  }
  * {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
  }
`

interface ThemeContextType {
  theme?: string
  toggleTheme?: () => void
}

interface ThemeProviderProps {
  children: JSX.Element
}

const ThemeContext = createContext<ThemeContextType>({})

export const useTheme = (): ThemeContextType => useContext(ThemeContext)
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('light')
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [])
  const memoizedValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return (
    <StyledThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <ThemeContext.Provider value={memoizedValue}>{children}</ThemeContext.Provider>
    </StyledThemeProvider>
  )
}

export default ThemeProvider
