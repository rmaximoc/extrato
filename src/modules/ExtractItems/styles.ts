import { Paragraph } from '@components/Paragraph'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DataWrapper = styled.div`
  width: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: 0.3fr 1.5fr 2fr 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . .";

  :not(:last-child) {
    margin-bottom: 34px;
  }
`

export const TransactionTypeParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.pallete.grays.gray1};
`

export const DateParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.pallete.grays.gray1};
`
