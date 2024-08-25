import styled from 'styled-components'

import { CircleProps } from './Main.types'

import abstract from 'assets/img/abstract.png'
import abstract2 from 'assets/img/abstract2.png'
import abstract3 from 'assets/img/abstract3.png'
import backgroundMainPage from 'assets/img/backgroundMainPage.png'
import backgroundMainPage2 from 'assets/img/backgroundMainPage2.png'
import pictureMainPage from 'assets/img/mainPage.png'
import { Wrapper } from 'containers/Login'
import { Heading } from 'containers/Registration'
import { Container } from 'providers/ThemeProvider'

export const MainWrapper = styled('div')`
  background-color: ${(props) => props.theme.color.white};
`

export const MainScreenWrapper = styled('div')`
  background: url(${backgroundMainPage}) no-repeat center top 70%, #effeff;
  @media screen and (max-width: 1275px) {
    background: url(${backgroundMainPage}) no-repeat center top 100%, #effeff;
  }
  @media screen and (max-width: 640px) {
    background: ${(props) => props.theme.bgColor.main};
  }
`
export const MainScreen = styled(Wrapper)`
  background-color: ${(props) => props.theme.bgColor.main};
  background: url(${pictureMainPage}) no-repeat left 110% top 0px;
  @media screen and (max-width: 1275px) {
    background: url(${pictureMainPage}) no-repeat center top 0;
  }
  @media screen and (max-width: 800px) {
    background-size: 500px;
  }
  @media screen and (max-width: 472px) {
    background-size: 320px;
  }
`
export const MainWrapperInner = styled('div')`
  @media screen and (max-width: 1275px) {
    margin-top: 500px;
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

export const MainHeading = styled(Heading)`
  font-weight: 700;
  font-size: 74px;
  line-height: 93px;
  @media screen and (max-width: 650px) {
    font-size: 60px;
  }
  @media screen and (max-width: 640px) {
    font-size: 36px;
    line-height: 45px;
  }
`

export const Text = styled.p`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  color: #232f48;
  max-width: 608px;
  text-transform: initial;
  @media screen and (max-width: 640px) {
    font-size: 20px;
    line-height: 30px;
  }
`

export const WrapperButton = styled.div`
  display: flex;
  max-width: 690px;
  justify-content: space-between;
  align-items: baseline;
  margin-top: 110px;
  @media screen and (max-width: 809px) {
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }
`

export const HowFindJobBackground = styled(Wrapper)`
  background: url(${abstract}) no-repeat left 100% top 80px, url(${abstract2}) no-repeat right 100% top 120px;
  margin: 0 auto;
  padding-bottom: 100px;
  @media screen and (max-width: 1110px) {
    background: none;
  }
  @media screen and (max-width: 768px) {
    padding-top: 50px;
  }
`

export const WrapperCards = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media screen and (max-width: 809px) {
    /* overflow-x: scroll; */
    /*  display: -webkit-box; */
    overflow: auto;
    gap: 10px;
    padding: 27px 20px;
    scroll-snap-type: x mandatory;
  }
`

export const ContainerCards = styled(Container)`
  @media screen and (max-width: 809px) {
    padding-right: 0;
  }
`

export const CardInstruction = styled('div')`
  width: 413px;
  height: 282px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 40px rgba(29, 153, 165, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 24px;
  gap: 8px;
  position: relative;
  @media screen and (max-width: 1189px) {
    width: 301px;
  }
  @media screen and (max-width: 809px) {
    width: 244px;
    scroll-snap-align: start;
  }
  & > div {
    position: relative;
    margin-left: 19px;
  }
`

export const WrapCircleNumber = styled('div')`
  position: relative;
  margin-left: 19px;
`

export const Circle = styled('div')<CircleProps>`
  width: 45px;
  height: 45px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: -105%;
`

export const HeadCardText = styled('p')`
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #1d1d1d;
  @media screen and (max-width: 955px) {
    font-size: 24px;
    line-height: 30px;
    width: 190px;
  }
  @media screen and (max-width: 809px) {
    width: 190px;
  }
`

export const CardNumber = styled(HeadCardText)`
  font-size: 64px;
  line-height: 81px;
  position: relative;
  width: auto;
`

export const CardText = styled(Text)`
  font-weight: 200;
  font-size: 20px;
  line-height: 30px;
`

export const WrapperButtonGoToRegister = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  @media screen and (max-width: 809px) {
    margin-right: 16px;
  }
`
export const InfoScreenWrapper = styled('div')`
  background: url(${backgroundMainPage2}) no-repeat center top -16%, ${(props) => props.theme.bgColor.main};
  @media screen and (max-width: 1300px) {
    background: url(${backgroundMainPage2}) no-repeat center top -10%, ${(props) => props.theme.bgColor.main};
  }
  @media screen and (max-width: 1275px) {
    background: url(${backgroundMainPage2}) no-repeat center top 0%, ${(props) => props.theme.bgColor.main};
  }
  @media screen and (max-width: 640px) {
    background: ${(props) => props.theme.bgColor.main};
  }
`

export const InfoScreen = styled('div')`
  display: flex;
  justify-content: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 100px;
  @media screen and (max-width: 1275px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 640px) {
    padding-top: 60px;
  }
  & img {
    @media screen and (max-width: 525px) {
      width: 320px;
    }
  }
`
export const InfoTextWrapper = styled('div')`
  max-width: 700px;
  & > button {
    margin-top: 80px;
  }
`

export const WrapperButtonInfoScreen = styled('div')`
  margin-top: 80px;
  @media screen and (max-width: 1275px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
`

export const VacancyScreen = styled(MainScreen)`
  background-color: #effeff;
  background: url(${abstract3}) no-repeat left 100% top -170px;
  padding-bottom: 100px;
  @media screen and (max-width: 768px) {
    padding-top: 50px;
  }
  @media screen and (max-width: 900px) {
    background: none;
  }
`

export const WrapperVacancyCards = styled(WrapperCards)`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
  }
  & > div {
    @media screen and (max-width: 1024px) {
      scroll-snap-align: start;
      min-width: 305px;
    }
    @media screen and (max-width: 860px) {
      min-width: 236px;
    }
  }
`
