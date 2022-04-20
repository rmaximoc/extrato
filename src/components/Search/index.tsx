import { useState, useRef } from 'react'

import { Icon } from '@components/Icon'

import { Wrapper, Input } from './styles'

interface SearchProps {
  className?: string;
  placeholder: string;
  fill?: boolean
}

const Search = ({ className, placeholder, fill }: SearchProps) => {
  const inputRef = useRef()
  const [inputValue, setInputValue] = useState('')

  return (
    <Wrapper className={className} fill={fill} onClick={() => inputRef.current.focus()}>
      <Icon icon="search" />
      <Input
        autoComplete="off"
        placeholder={placeholder}
        type="search"
        onChange={event => setInputValue(event.target.value)}
        ref={inputRef}
      />
    </Wrapper>
  )
}

export { Search }
