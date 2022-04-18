import React from 'react'

import { Wrapper } from './styles'

interface ControlledSelectWrapperProps {
  children: React.ReactChild | React.ReactChild[];
  className?: string;
}

const ControlledSelectWrapper = ({ children, className }: ControlledSelectWrapperProps) => (
  <Wrapper className={className}>
    {children}
  </Wrapper>
)

export { ControlledSelectWrapper }
