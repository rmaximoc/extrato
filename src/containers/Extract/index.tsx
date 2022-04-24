import React, { useContext, useEffect, useState } from 'react'

import { Paragraph } from '@components/Paragraph'
import { FilterContext } from '@contexts/filterContext'
import { formatPTBRDate } from '@helpers/formatDate'
import { ExtractInformations } from '@modules/ExtractInformations'
import { getExtracts } from '@services/getExtracts'
import { CREDIT, DEBIT } from '@utils/TransactionEntry'
import { ExtractResults } from 'src/@types'

import { Wrapper, ExtractHeader, DataParagraph, TransactionTypeParagraph } from './styles'

const Extract = () => {
  const [extracts, setExtracts] = useState<ExtractResults | null>(null)
  const [filteredItems, setFilteredItems] = useState(extracts)
  const context = useContext(FilterContext)

  const actionButtonsFilter = () => {
    const filterResult = extracts?.results.map(result => {
      const filterItems = {
        Futuro: result.items.filter(item => item.scheduled),
        Entrada: result.items.filter(item => !item.scheduled && item.entry === CREDIT),
        Saída: result.items.filter(item => !item.scheduled && item.entry === DEBIT),
        Todos: result
      }

      if (filterItems[context?.filter].length) {
        return {
          ...result,
          items: filterItems[context?.filter]
        }
      }

      return undefined
    })

    return filterResult?.filter(values => !!values)
  }

  const searchInputFilter = () => {
    const searchResult = extracts?.results.map(result => {
      const newArray = result.items.filter(item => item.actor.toLowerCase().includes(context?.searchInputString.toLowerCase()))

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
    if (context?.filter === 'Tudo') return setFilteredItems(extracts)

    const newResultNode = {
      results: actionButtonsFilter()
    }

    setFilteredItems(newResultNode)
  }, [context?.filter])

  useEffect(() => {
    const newResult = {
      results: searchInputFilter()
    }

    if (!context?.searchInputString) {
      return setFilteredItems(extracts)
    }

    setFilteredItems(newResult)
  }, [context?.searchInputString])

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
