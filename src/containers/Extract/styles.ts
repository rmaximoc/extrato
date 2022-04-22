import React from 'react'

import { Paragraph } from '@components/Paragraph'
import styled from 'styled-components'

interface WrapperProps {
  children: React.ReactNode | React.ReactNode[]
}

export const Wrapper = styled('div')<WrapperProps>`
  display: flex;
  flex-direction: column;
`

export const ExtractHeader = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 2fr 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . .";
  margin-bottom: 24px;
  padding: 0 21px;
`

export const DataParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.pallete.main.primary};
  font-weight: bolder;
`

export const TransactionTypeParagraph = styled(Paragraph)`
  color: ${({ theme }) => theme.pallete.grays.gray1};
`
