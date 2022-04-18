import { ControlledSelectWrapper } from '@components/ControlledSelectWrapper'
import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  gap: 46px;
  margin: 40px 0;

  ${({ theme }) => theme.mediaQuery.md} {
    flex-direction: column;
  }
`

export const ButtonWrapper = styled(ControlledSelectWrapper)`
  display: flex;
  align-items: center;
  gap: 46px;
`
