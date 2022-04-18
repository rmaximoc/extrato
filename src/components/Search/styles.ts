import styled from 'styled-components'

interface SearchProps {
  fill?: boolean;
}

export const Wrapper = styled('div')<SearchProps>`
  display: flex;
  background-color: ${({ theme }) => theme.pallete.grays.gray4};
  border-radius: 16px;
  padding: 20px;
  width: ${({ fill }) => fill ? '100%' : 'unset'};
  cursor: text;
`

export const Input = styled.input`
  width: 100%;
`
