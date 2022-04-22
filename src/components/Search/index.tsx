import { useRef, useContext } from 'react'

import { Icon } from '@components/Icon'
import { FilterContext } from '@contexts/filterContext'

import { Wrapper, Input } from './styles'

interface SearchProps {
  className?: string;
  placeholder: string;
  fill?: boolean;
}

const Search = ({ className, placeholder, fill }: SearchProps) => {
  const inputRef = useRef()
  const context = useContext(FilterContext)

  return (
    <Wrapper className={className} fill={fill} onClick={() => inputRef?.current?.focus()}>
      <Icon icon="search" />
      <Input
        autoComplete="off"
        placeholder={placeholder}
        type="search"
        ref={inputRef}
        onChange={event => context?.setSearchInputString(event.target.value)}
      />
    </Wrapper>
  )
}

export { Search }
