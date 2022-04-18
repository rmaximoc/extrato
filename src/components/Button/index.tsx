import React from 'react'

import { StyledButton } from './styles'

interface ButtonProps {
  children: string | React.ReactNode;
  className?: string;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, isActive = false, onClick }: ButtonProps) => (
  <StyledButton
    className={className}
    type="button"
    isActive={isActive}
    onClick={onClick}
  >
    {children}
  </StyledButton>
)

export { Button }
