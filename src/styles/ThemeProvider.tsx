import React from 'react'

import { node } from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { theme } from './theme'

interface Props {
  children: React.ReactNode,
}

const ThemeProvider: React.FC<Props> = ({ children }) =>
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>

ThemeProvider.propTypes = {
  children: node.isRequired
}

export { ThemeProvider }
