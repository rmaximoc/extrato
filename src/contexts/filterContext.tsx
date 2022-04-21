import React, { createContext, useState } from 'react'

interface ValueItemType {
  filter: string;
  setFilter: (_filter: string) => void;
  searchInputString: string;
  setSearchInputString: (_searchInputString: string) => void;
}
interface FilterContextProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

const FilterContext = createContext<ValueItemType | null>(null)

const FilterContextProvider = ({ children }: FilterContextProviderProps) => {
  const [filter, setFilter] = useState('Tudo')
  const [searchInputString, setSearchInputString] = useState('')

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FilterContext.Provider value={{ filter, setFilter, searchInputString, setSearchInputString }}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContextProvider, FilterContext }
