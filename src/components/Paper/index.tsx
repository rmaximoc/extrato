import React from 'react'

import { Wrapper } from './styles'

interface PaperProps {
  children: React.ReactChild | React.ReactChild[]
}

const Paper = ({ children }: PaperProps) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export { Paper }
