import styled from 'styled-components'

interface StyledParagraphProps {
  textAlign: string;
}

export const StyledParagraph = styled.p`
  text-align: ${({ textAlign }: StyledParagraphProps) => textAlign};
`
