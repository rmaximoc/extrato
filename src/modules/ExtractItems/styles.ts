import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DataWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 0.3fr 1.5fr 2fr 2fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . .";

  :not(:last-child) {
    margin-bottom: 34px;
  }
`
