import React from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { theme } from './theme'

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) =>
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>


export { ThemeProvider }
