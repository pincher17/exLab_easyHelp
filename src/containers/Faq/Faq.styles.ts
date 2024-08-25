import { Link } from 'react-router-dom'
import styled from 'styled-components'

import pictureFaqPage from 'assets/img/illustrationFaq.png'
import { Wrapper } from 'containers/Login'
import { Heading } from 'containers/Login/Login.styles'

export const WrapperFaq = styled('div')``

export const FaqWrapper = styled(Wrapper)`
  background: url(${pictureFaqPage}) no-repeat left 100% top 60px;
  padding: 40px 0 180px;
  @media screen and (max-width: 1275px) {
    background: url(${pictureFaqPage}) no-repeat center top 0;
  }
  @media screen and (max-width: 800px) {
    background-size: 500px;
  }
  @media screen and (max-width: 472px) {
    background-size: 320px;
  }
`
export const FaqWrapperInner = styled('div')`
  @media screen and (max-width: 1275px) {
    margin-top: 500px;
    width: 630px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 300px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 215px;
  }
  @media screen and (max-width: 472px) {
    margin-top: 80px;
  }
`

export const HeadingWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  /* @media screen and (max-width: 1024px) {
    grid-column: 1/4;
  }
  @media screen and (max-width: 768px) {
    grid-column: span 4;
  } */
`
export const Title = styled(Heading)`
  margin: 0;
  padding-bottom: 40px;
  color: #1d1d1d;

  @media screen and (max-width: 768px) {
    font-size: calc(2.25rem + 34 * (100vw - 360px) / 408);
    line-height: calc(2.8125rem + 9 * (100vw - 360px) / 408);
  }
`
export const LinkStyleFaq = styled(Link)`
  color: ${(props) => props.theme.color.primary};
`
