import { Paragraph } from '@components/Paragraph'
import styled from 'styled-components'

export const Wrapper = styled.div``

export const PaperWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DayAmount = styled(Paragraph)`
  text-align: end;
  margin: 24px 0;
`

export const TransactionsDay = styled(Paragraph)`

`

export const DataWrapper = styled.div`
  padding-left: 21px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
