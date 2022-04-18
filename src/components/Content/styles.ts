import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15%;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: 1%;
  }
`
