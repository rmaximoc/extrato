import React from 'react'

import { ColoredMoneyValue } from '@components/ColoredMoneyValue'
import { Icon } from '@components/Icon'
import { Paragraph } from '@components/Paragraph'
import { CREDIT, DEBIT } from '@utils/TransactionEntry'
import { REFUNDED } from '@utils/TransactionStatus'
import { formatExtractDate } from 'src/helpers/formatDate'
import { formatMoney } from 'src/helpers/formatMoney'
import { transactionType } from 'src/helpers/transactionType'

import { Wrapper, DataWrapper, TransactionTypeParagraph, DateParagraph } from './styles'

interface ExtractItemsProps {
  data: any
}

interface formatTransactionSignProps {
  transactionEntry: string;
  transactionStatus: string;
}

const ExtractItems = ({ data }: ExtractItemsProps) => {
  const formatTransactionSign = ({ transactionEntry, transactionStatus }: formatTransactionSignProps) => {
    if (transactionStatus === REFUNDED) return

    if (transactionEntry === CREDIT) {
      return '+'
    }

    if (transactionEntry === DEBIT) {
      return '-'
    }
  }

  return (
    <Wrapper>
      {data.map((item: any) => (
        <DataWrapper key={item.dateEvent}>
          <Icon width={32} height={32} icon={item.icon} />
          <Paragraph>{item.actor}</Paragraph>
          <TransactionTypeParagraph>
            {transactionType({ status: item.status, entry: item.entry, source: item.source })}
          </TransactionTypeParagraph>
          <DateParagraph>{formatExtractDate({ date: item.dateEvent })}</DateParagraph>
          <ColoredMoneyValue
            transactionStatus={item.status}
            transactionEntry={item.entry}
            textAlign="end"
          >
            <>
              {formatTransactionSign({ transactionEntry: item.entry, transactionStatus: item.status })}
              {' '}
              {formatMoney(item.amount)}
            </>
          </ColoredMoneyValue>
        </DataWrapper>
      ))}
    </Wrapper>
  )
}

export { ExtractItems }