import Income from '@assets/icons/income.svg'
import Outcome from '@assets/icons/outcome.svg'
import Schedulle from '@assets/icons/schedulle.svg'
import Search from '@assets/icons/search.svg'

import { Wrapper } from './styles'

interface IconProps {
  className?: string;
  icon: 'search' | 'income' | 'outcome' | 'schedulle' | string;
  height?: number;
  width?: number;
}

const iconTypes = {
  search: Search,
  income: Income,
  outcome: Outcome,
  schedulle: Schedulle
}

const Icon = ({ icon, className, width = 16, height = 16 }: IconProps) => {
  const IconComponent = iconTypes[icon]

  return (
    <Wrapper className={className} width={width} height={height}>
      <IconComponent />
    </Wrapper>
  )
}

export { Icon }
