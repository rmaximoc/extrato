import React, { useLayoutEffect, useState } from 'react'

import { Paragraph } from '@components/Paragraph'
import { formatPTBRDate } from 'src/helpers/formatDate'
import { ExtractInformations } from 'src/modules/ExtractInformations'

import { Wrapper, ExtractHeader, DataParagraph, TransactionTypeParagraph } from './styles'

const Extract: React.FC = () => {
  const [extracts, setExtracts] = useState({})

  const getExtracts = async () => {
    try {
      const response = await fetch('api/extract')
      const { data } = await response.json()

      return data
    } catch (error) {
      console.error({
        context: 'extract call',
        message: error
      })
    }
  }

  useLayoutEffect(() => {
    const fetchExtracts = async () => {
      const data = await getExtracts()

      setExtracts(data)
    }

    fetchExtracts()
  }, [])

  return (
    <Wrapper>
      <ExtractHeader>
        <Paragraph>{extracts.results && formatPTBRDate({ date: extracts.results[0].date })}</Paragraph>
        <TransactionTypeParagraph>Tipo de transação</TransactionTypeParagraph>
        <DataParagraph>Data</DataParagraph>
        <Paragraph textAlign="end">Valor</Paragraph>
      </ExtractHeader>
      <ExtractInformations data={extracts} />
    </Wrapper>
  )
}

export { Extract }
