import styled from 'styled-components'

interface WrapperProps {
  width: number;
  height: number;
}

export const Wrapper = styled('div')<WrapperProps>`
  display: flex;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`
