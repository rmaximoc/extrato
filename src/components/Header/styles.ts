import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 0 15%;
  min-height: 80px;
  border-bottom: 1px solid ${({ theme }) => theme.pallete.grays.gray3};
  align-items: center;

  ${({ theme }) => theme.mediaQuery.md} {
    padding: 0 1%;
  };
`
