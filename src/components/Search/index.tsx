import { Icon } from '@components/Icon'

import { Wrapper, Input } from './styles'

interface SearchProps {
  className?: string;
  placeholder: string;
  fill?: boolean
}

const Search = ({ className, placeholder, fill }: SearchProps) => (
  <Wrapper className={className} fill={fill}>
    <Icon icon="search" />
    <Input
      autoComplete="off"
      placeholder={placeholder}
    />
  </Wrapper>
)

export { Search }
