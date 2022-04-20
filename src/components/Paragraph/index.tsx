import React from 'react'

import { StyledParagraph } from './styles'

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  textAlign?: 'center' | 'end' | 'left' | 'unset';
}

const Paragraph = ({ children, className, textAlign = 'unset' }: ParagraphProps) =>
  <StyledParagraph className={className} textAlign={textAlign}>{children}</StyledParagraph>

export { Paragraph }
