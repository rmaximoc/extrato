import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 28px 16px;
  border: ${({ theme }) => `1px solid ${theme.pallete.grays.gray2}`};
  border-radius: 16px;
  width: 100%;
`
