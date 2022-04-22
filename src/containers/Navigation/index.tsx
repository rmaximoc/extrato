import { useContext, useState } from 'react'

import { Button } from '@components/Button'
import { Search } from '@components/Search'
import { FilterContext } from '@contexts/filterContext'

import { Wrapper, ButtonWrapper } from './styles'

const initialFilterValues = {
  Tudo: false,
  Entrada: false,
  Saída: false,
  Futuro: false
}

const Navigation = () => {
  const [buttonOptions, setButtonOptions] = useState({
    Tudo: true,
    Entrada: false,
    Saída: false,
    Futuro: false
  })
  const context = useContext(FilterContext)

  const handleClick = (name: string) => {
    setButtonOptions(initialFilterValues)

    const selectedObject = {
      ...initialFilterValues,
      [name]: true
    }

    setButtonOptions(selectedObject)
    context?.setFilter(name)
  }

  return (
    <Wrapper>
      <ButtonWrapper>
        {Object
          .entries(buttonOptions)
          .map(([name, isActive]) => (
            <Button key={name} isActive={isActive} onClick={() => handleClick(name)}>
              {name}
            </Button>
          ))}
      </ButtonWrapper>

      <Search fill placeholder="Pesquisar" />
    </Wrapper>
  )
}

export { Navigation }
