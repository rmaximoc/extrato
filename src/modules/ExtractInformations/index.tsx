import React from 'react'

import { Paper } from '@components/Paper'
import { formatPTBRDate } from 'src/helpers/formatDate'
import { formatMoney } from 'src/helpers/formatMoney'

import { ExtractItems } from '../ExtractItems'
import { Wrapper, PaperWrapper, DayAmount, TransactionsDay, DataWrapper } from './styles'

interface ExtractInformationsProps {
  data: any
}

const ExtractInformations = ({ data }: ExtractInformationsProps) => (
  <Wrapper>
    {data?.results?.map((content: any, index: number) => (
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
            {`saldo do dia ${formatMoney(content?.amountTotal)}`}
          </DayAmount>
        </DataWrapper>
      </>
    ))}
  </Wrapper>
)


export { ExtractInformations }
