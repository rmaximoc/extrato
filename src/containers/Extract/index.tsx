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
  const { filter, searchInputString } = useContext(FilterContext)

  const actionButtonsFilter = () => {
    const filterResult = extracts?.results.map(result => {
      const newArray = result.items.filter(item => {
        if (!item.scheduled && item.entry === mapping[filter]) {
          return item.entry
        }

        return item.scheduled
      })

      if (newArray.length) {
        return {
          ...result,
          items: newArray
        }
      }

      return undefined
    })

    return filterResult?.filter(values => !!values)
  }

  const searchInputFilter = () => {
    const searchResult = extracts?.results.map(result => {
      const newArray = result.items.filter(item => item.actor.toLowerCase().includes(searchInputString.toLowerCase()))

      if (newArray.length > 0) {
        return {
          items: newArray
        }
      }

      return undefined
    })

    return searchResult?.filter(values => !!values)
  }

  useEffect(() => {
    const setExtractFetchToStates = async () => {
      const data = await getExtracts()

      setExtracts(data)
      setFilteredItems(data)
    }

    setExtractFetchToStates()
  }, [])

  useEffect(() => {
    if (filter === 'Tudo') return setFilteredItems(prevState => prevState !== extracts)

    const mergedFilteredItems = {
      ...extracts,
      results: actionButtonsFilter()
    }

    console.log({ mergedFilteredItems })

    return setFilteredItems(mergedFilteredItems)
  }, [filter])

  useEffect(() => {
    const newResult = {
      results: searchInputFilter()
    }

    if (!searchInputString) {
      return setFilteredItems(extracts)
    }

    setFilteredItems(newResult)
  }, [searchInputString])

  return (
    <Wrapper>
      <ExtractHeader>
        <Paragraph>{filteredItems?.results?.length && formatPTBRDate({ date: filteredItems?.results[0].date })}</Paragraph>
        <TransactionTypeParagraph>Tipo de transação</TransactionTypeParagraph>
        <DataParagraph>Data</DataParagraph>
        <Paragraph textAlign="end">Valor</Paragraph>
      </ExtractHeader>
      {filteredItems?.results?.length
        ? <ExtractInformations data={filteredItems} />
        : <Paragraph>Não foram econtrados itens</Paragraph>}
    </Wrapper>
  )
}

export { Extract }
