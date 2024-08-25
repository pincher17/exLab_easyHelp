import styled from 'styled-components'

import { HeaderIconProps, HeaderProps, InnerType, ContentsType } from './Accordion.types'

export const AccordionContainer = styled.div`
  color: #757575;
  max-width: 630px;
`
export const Inner: any = styled.div<InnerType>`
  & > div > ul > li {
    margin-left: 38px;
    /* list-style: none; */
  }

  & > div > ul > li::marker {
    font-size: 0.7em;
  }
`

export const TitleQuestion: any = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  color: ${(props) => (props.isOpen ? '#21BDCB' : '#1d1d1d')};
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;

  text-transform: uppercase;
`
export const TitleQuestionIcon: any = styled.span<HeaderIconProps>`
  transform: rotate(${(props) => (props.isOpen ? -45 : 0)}deg);
  transition: all 0.35s;
  cursor: pointer;
  font-size: 40px;
  color: ${(props) => (props.isOpen ? '#21BDCB' : '#1d1d1d')};
`

export const Contents: any = styled.div<ContentsType>`
  /* padding-right: 30px; */
  font-size: 24px;
  line-height: 36px;
  padding-top: 16px;
`
export const ItemWraper: any = styled.div<ContentsType>`
  border-bottom: solid 3px #d7def0;
  padding-bottom: 24px;
  padding-top: 24px;
`
