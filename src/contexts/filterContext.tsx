import React, { createContext, useState } from 'react'

interface FilterContextProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

const FilterContext = createContext(null)

const FilterContextProvider = ({ children }: FilterContextProviderProps) => {
  const [filter, setFilter] = useState('Tudo')

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export { FilterContextProvider, FilterContext }
