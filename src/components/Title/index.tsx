import React from 'react'

import { StyledTitle } from './styles'

interface TitleProps {
  children?: React.ReactChild | React.ReactChild[];
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title = ({ children, as }: TitleProps) =>
  <StyledTitle as={as}>{children}</StyledTitle>

export { Title }
