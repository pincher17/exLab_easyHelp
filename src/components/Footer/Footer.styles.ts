import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from 'assets/icons/mainLogo.svg'

export const FooterWrapper = styled.div`
  height: 164px;
  background: #ffffff;
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 40px;
`
export const Wrapper = styled.div`
  display: flex;
  gap: 54px;
  padding: 32px 0;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    display: block;
  }
`
export const Logo = styled.div`
  height: 84px;
  min-width: 186px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 450px) {
    width: 88px;
    height: 32px;
  }
`

export const LinksWrapperInner = styled.div`
  display: flex;
  gap: 50px;
  @media screen and (max-width: 640px) {
    display: block;
    margin-bottom: 40px;
  }
`

export const Titles = styled.h5`
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: #757575;
`
export const Sections = styled.div`
  display: flex;
  gap: 14px;
  @media screen and (max-width: 640px) {
    display: block;
    margin-bottom: 24px;
  }
`
export const Links = styled(Link)`
  text-decoration: none;
  align-self: center;
  color: #1d1d1d;
  font-weight: 300;
  font-size: 22px;
  display: block;
  margin-bottom: 4px;
  &:hover {
    text-decoration: underline;
  }
`
export const Email = styled.a`
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: #1d1d1d;
  &:hover {
    color: gray;
  }
`
export const MediaWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 14px;
  @media screen and (max-width: 640px) {
    display: block;
  }
`
export const LogoItem = styled.img`
  width: 32px;
  height: 32px;
`

export const Сopyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  @media screen and (max-width: 809px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 640px) {
    align-items: flex-start;
    height: auto;
  }
`
export const СopyrightText = styled.div`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #1d1d1d;
  @media screen and (max-width: 640px) {
    margin-bottom: 42px;
  }
`
export const WrapperLinksСopyright = styled.div`
  display: flex;
  gap: 32px;
  @media screen and (max-width: 640px) {
    display: block;
    margin-bottom: 50px;
  }
`

export const LinkСopyright = styled(Links)`
  color: #757575;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 0;
  @media screen and (max-width: 640px) {
    margin-bottom: 20px;
  }
`

export const Border = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: #e6e6e6;
  position: absolute;
  left: 0;
  right: 0;
  @media screen and (max-width: 640px) {
    display: none;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 1013px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: auto;
    max-width: 1013px;
    margin-top: 25px;
  }
  @media screen and (max-width: 640px) {
    display: block;
    margin-top: 42px;
  }
`
