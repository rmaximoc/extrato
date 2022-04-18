import styled from 'styled-components'

interface InternalButtonProps {
  isActive: boolean
}

export const StyledButton = styled('button')<InternalButtonProps>`
  display: block;
  height: 32px;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.pallete.main.primary : 'transparent'};
  padding: 4px 16px;
  border-radius: 32px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.pallete.grays.white : theme.pallete.main.primary};
  cursor: pointer;
  transition: 0.3s;

  :hover {
    color: ${({ theme }) => theme.pallete.grays.offBlack};
    background-color: ${({ theme }) => theme.pallete.softFills.light.softBlue};
    transition: 0.3s;
  }
`
