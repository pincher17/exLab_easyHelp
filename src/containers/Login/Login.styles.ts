import { Link } from 'react-router-dom'
import styled from 'styled-components'

import pictureAuthorization from 'assets/img/pictureAuthorization.png'
import { Tooltip } from 'components/Input'

export const LoginWrapper = styled.main`
  background-color: ${(props) => props.theme.bgColor.main};
  font-size: 20px;
  font-weight: 300;
  min-height: calc(100vh - 100px);
`

export const Wrapper = styled.div`
  background: url(${pictureAuthorization}) no-repeat left 99.3% top 75px;
  background-size: 55%;
  padding: 72px 0 180px;
  @media screen and (max-width: 768px) {
    padding-top: 200px;
    background-position: 50% 0;
    background-size: 380px;
  }
  @media screen and (max-width: 430px) {
    background-size: 300px;
  }
`

export const Heading = styled('h1')`
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  font-size: 74px;
  line-height: 93px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.primary};
  margin-bottom: 40px;
  @media screen and (max-width: 640px) {
    font-size: 36px;
    margin-bottom: 24px;
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 630px;
  margin-bottom: 10px;
  @media screen and (max-width: 640px) {
    & button {
      width: 100%;
    }
  }
`

export const SubmitButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 27px;
  margin-top: 16px;
  @media screen and (max-width: 640px) {
    flex-direction: column-reverse;
    gap: 24px;
    & button {
      width: 100%;
    }
  }
`

export const LinkStyle = styled(Link)`
  margin-left: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.color.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const TooltipForEmail = styled(Tooltip)`
  top: 0;
`

export const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
`
