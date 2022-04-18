import { Wrapper } from './styles'

interface IconProps {
  className?: string;
  icon: 'search';
  height?: number;
  width?: number;
}

const Icon = ({ icon, className, width = 16, height = 16 }: IconProps) => (
  <Wrapper className={className} width={width} height={height} icon={icon} />
)

export { Icon }
