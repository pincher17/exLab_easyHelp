import styled from 'styled-components'

import { Heading } from 'containers/Registration'

export const WrapperHead = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 205px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: normal;
    & > div {
      width: 100%;
      margin-top: 20px;
    }
  }
`

export const Title = styled(Heading)`
  font-weight: 700;
  font-size: 70px;
  line-height: 88px;
  margin-bottom: 0;
  @media screen and (max-width: 650px) {
    font-size: 60px;
  }
  @media screen and (max-width: 640px) {
    font-size: 36px;
    line-height: 45px;
  }
`

export const Wrapper = styled('div')`
  padding-top: 80px;
  padding-bottom: 20px;
  background: ${(props) => props.theme.bgColor.main};
`

export const WrapperFilters = styled('div')`
  width: 630px;
  margin-top: 40px;
`

export const WrapperVacancies = styled('div')`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(305px, 1fr));
  margin: 0 auto;
  justify-items: center;
  grid-row-gap: 21px;
  padding: 40px 0;
  & > div {
    width: 305px;
  }
`
