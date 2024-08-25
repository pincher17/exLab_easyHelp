import styled from 'styled-components'

import { GridWrapper } from 'containers/Header/Header.styles'
import { Heading } from 'containers/Login/Login.styles'

export const ApplicantsWrapper = styled(GridWrapper)`
  grid-template-rows: 80px 88px auto auto;
  row-gap: 0;
`

export const HeadingWrapper = styled.div`
  grid-column: 1/7;
  grid-row: 2/3;

  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1024px) {
    grid-column: 1/4;
  }
  @media screen and (max-width: 768px) {
    grid-column: span 4;
  }
`
export const Title = styled(Heading)`
  margin: 0;
  font-size: 70px;
  line-height: 88px;
  @media screen and (max-width: 768px) {
    font-size: calc(2.25rem + 34 * (100vw - 360px) / 408);
    line-height: calc(2.8125rem + 9 * (100vw - 360px) / 408);
  }
`
export const ButtonWrapper = styled.div`
  display: grid;
  grid-column: 10/14;
  grid-row: 2/3;
  align-items: center;
  justify-content: end;

  @media screen and (max-width: 1024px) {
    grid-column: 4/5;
  }

  @media screen and (max-width: 768px) {
    grid-column: span 4;
    grid-row: 3/4;
    display: flex;
  }
`
export const FilterWrapper = styled.div`
  grid-column: 7/13;
  grid-row: 3/4;

  display: none;
  @media screen and (max-width: 1024px) {
    grid-column: span 4;
  }
`

export const ListWrapper = styled.div`
  grid-column: span 13;
  grid-row: 4/5;
  padding: 40px 0;
  @media screen and (max-width: 1024px) {
    grid-column: span 4;
  }
`

// ---------------------------------------CardList-------------------------------------------
export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`
