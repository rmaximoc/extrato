import React from 'react'

import { Wrapper } from './styles'

interface PaperProps {
  children: React.ReactNode | React.ReactNode[]
}

const Paper = ({ children }: PaperProps) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export { Paper }
