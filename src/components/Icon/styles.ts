import styled from 'styled-components'

interface WrapperProps {
  width: number;
  height: number;
  icon: string;
}

export const Wrapper = styled('div')<WrapperProps>`
  display: flex;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background-image: ${({ theme, icon }) => `url("${theme.icons[icon]}")`};
`
