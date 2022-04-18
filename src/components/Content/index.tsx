import React from 'react'

import { Container } from './styles'

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const Content = ({ children }: Props) => (
  <Container>
    {children}
  </Container>
)

export { Content }
