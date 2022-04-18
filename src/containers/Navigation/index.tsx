import React from 'react'

import { Button } from '@components/Button'
import { Search } from '@components/Search'

import { Wrapper, ButtonWrapper } from './styles'

const buttonOptions = {
  Tudo: true,
  Entrada: false,
  Saída: false,
  Futuro: false
}

const Navigation: React.FC = () => (
  <Wrapper>
    <ButtonWrapper>
      {Object
        .entries(buttonOptions)
        .map(([name, isActive]) => (
          <Button key={name} isActive={isActive}>
            {name}
          </Button>
        ))}
    </ButtonWrapper>

    <Search fill placeholder="Pesquisar" />
  </Wrapper>
)

export { Navigation }
