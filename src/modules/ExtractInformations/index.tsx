import React from 'react'

import { Paper } from '@components/Paper'
import { ExtractResults } from 'src/@types'
import { formatPTBRDate } from 'src/helpers/formatDate'
import { formatMoney } from 'src/helpers/formatMoney'

import { ExtractItems } from '../ExtractItems'
import { Wrapper, PaperWrapper, DayAmount, TransactionsDay, DataWrapper } from './styles'

interface ExtractInformationsProps {
  data: ExtractResults
}

const ExtractInformations = ({ data }: ExtractInformationsProps) => (
  <Wrapper>
    {data?.results?.map((content, index) => (
      <>
        <PaperWrapper>
          <Paper>
            <ExtractItems data={content.items} />
          </Paper>
        </PaperWrapper>
        <DataWrapper>
          <TransactionsDay>
            {formatPTBRDate({ date: data.results[index + 1]?.date })}
          </TransactionsDay>
          <DayAmount>
            saldo do dia
            {' '}
            <b>
              {formatMoney(content?.amountTotal)}
            </b>
          </DayAmount>
        </DataWrapper>
      </>
    ))}
  </Wrapper>
)


export { ExtractInformations }
