import React, { useContext, useEffect, useState } from 'react'

import { Paragraph } from '@components/Paragraph'
import { FilterContext } from '@contexts/filterContext'
import { formatPTBRDate } from '@helpers/formatDate'
import { ExtractInformations } from '@modules/ExtractInformations'
import { getExtracts } from '@services/getExtracts'
import { CREDIT, DEBIT } from '@utils/TransactionEntry'
import { ExtractResults } from 'src/@types'

import { Wrapper, ExtractHeader, DataParagraph, TransactionTypeParagraph } from './styles'

const mapping = {
  Saída: DEBIT,
  Entrada: CREDIT
}

const Extract = () => {
  const [extracts, setExtracts] = useState<ExtractResults | null>(null)
  const [filteredItems, setFilteredItems] = useState(extracts)
  const { filter } = useContext(FilterContext)

  const extractsFiltered = () => {
    const filterResult = extracts?.results.map(result => {
      const newArray = result.items.filter(item => {
        if (item.scheduled === false) {
          return item.entry === mapping[filter]
        }

        return item.scheduled === true
      })

      if (newArray.length > 0) {
        return {
          ...result,
          items: newArray
        }
      }
    })

    if (filter === 'Tudo') {
      return extracts
    }

    return filterResult?.filter(values => values !== undefined)
  }

  useEffect(() => {
    const fetchExtracts = async () => {
      const data = await getExtracts()

      setExtracts(data)
      setFilteredItems(data)
    }

    fetchExtracts()
  }, [])

  useEffect(() => {
    const filtered = extractsFiltered()

    if (filter === 'Tudo') return setFilteredItems(extracts)

    const mergedFilteredItems = {
      ...extracts,
      results: filtered
    }

    setFilteredItems(mergedFilteredItems)
  }, [filter])

  return (
    <Wrapper>
      <ExtractHeader>
        <Paragraph>{filteredItems?.results?.length && formatPTBRDate({ date: filteredItems?.results[0].date })}</Paragraph>
        <TransactionTypeParagraph>Tipo de transação</TransactionTypeParagraph>
        <DataParagraph>Data</DataParagraph>
        <Paragraph textAlign="end">Valor</Paragraph>
      </ExtractHeader>
      <ExtractInformations data={filteredItems} />
    </Wrapper>
  )
}

export { Extract }
