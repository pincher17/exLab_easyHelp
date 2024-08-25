import styled from 'styled-components'

import { TabStyles } from './Registration.types'

import { Wrapper } from 'containers/Login'

export const RegistrationWrapper = styled(Wrapper)`
  @media screen and (max-width: 768px) {
    padding-top: 230px;
  }
  @media screen and (max-width: 430px) {
    padding-top: 200px;
  }
`

export const Heading = styled('h1')`
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 32px;
`

export const TabList = styled('div')`
  display: flex;
  position: relative;
  max-width: 630px;
  height: 65px;
  justify-content: space-between;
  margin-bottom: 23px;
  border-bottom: 4px solid ${(props) => props.theme.color.primary};
`

export const TabLeft = styled('div')<TabStyles>`
  width: 50%;
  padding-top: 2px;
  border-radius: 8px 0px 0px 0px;
  text-align: center;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 56px;
  border-color: ${(props) => props.regRole && props.theme.color.primary};
  background-color: ${(props) => (props.regRole ? props.theme.bgColor.primary : props.theme.bgColor.white)};
  color: ${(props) => (props.regRole ? props.theme.color.mainLight : props.theme.color.gray)};
  cursor: pointer;
`

export const TabRight = styled(TabLeft)<TabStyles>`
  border-radius: 0px 8px 0px 0px;
`
