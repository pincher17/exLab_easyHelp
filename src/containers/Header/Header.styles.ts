import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { ReactComponent as LogoNew } from '../../assets/icons/logo.svg'

import { BurgerProps, HeaderProps } from './Header.types'

import burgerClosed from 'assets/icons/burgerMenu.svg'
import burgerOpened from 'assets/icons/BurgerOpened.svg'

export const HeaderWrapper = styled.header<HeaderProps>`
  background-color: ${(props) => props.auth && props.theme.bgColor.main};
  position: relative;
  padding: 8px 0;
  @media screen and (max-width: 1024px) {
    padding: 10px 0;
  }
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(44px, 88px));
  gap: 20px;
  width: 100%;
  font-size: 22px;
  font-weight: 300;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(30px, 301px));
    gap: 30px;
  }
`
export const HeaderGrid = styled(GridWrapper)`
  height: 100px;
  @media screen and (max-width: 390px) {
    height: 52px;
  }
`

// ---------------------------Logotypes-------------------------------
export const BurgerLogo = styled.div<Pick<BurgerProps, 'open'>>`
  display: none;
  background-image: ${(props) => (props.open ? `url(${burgerOpened})` : `url(${burgerClosed})`)};
  width: 26px;
  height: 26px;
  align-self: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.15s ease;
  @media screen and (max-width: 1024px) {
    display: block;
    margin-right: 16.9%;
  }
`
export const MainLogo = styled.div`
  grid-column: 1/3;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  @media screen and (max-width: 1024px) {
    gap: 5px;
  }
`
export const Logo = styled(LogoNew)`
  width: 84px;
  height: 84px;
  @media screen and (max-width: 768px) {
    width: calc(2rem + 52 * (100vw - 390px) / 408);
    height: calc(2rem + 52 * (100vw - 390px) / 408);
  }
`
export const Title = styled.h1`
  font-family: 'Amatic SC';
  font-style: normal;
  font-size: 40px;
  font-weight: 700;
  line-height: 50px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.black};

  & > span {
    &:last-child {
      color: ${(props) => props.theme.color.primary};
    }
  }
  @media screen and (max-width: 1024px) {
    font-size: calc(1.375rem + 18 * (100vw - 390px) / 408);
    line-height: calc(1.75rem + 22 * (100vw - 390px) / 408);
  }
`
// ---------------------------Logotypes--------------------------------

// ---------------------------Menu-------------------------------------
export const Menu = styled.div<HeaderProps>`
  grid-column: 3 / ${(props) => (props.auth ? 10 : 13)};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow: auto;
    background-color: ${(props) => props.theme.bgColor.white};
    height: 100vh;
    width: 320px;
    top: 100px;
    z-index: 2;
    padding: 62px 10px 128px;
    gap: 3.7em;
    left: -100%;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${(props) =>
      props.hidden &&
      css`
        left: 0;
      `}
  }
  @media screen and (max-width: 390px) {
    top: 51px;
  }
`
export const Navigation = styled.ul<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  max-width: 681px;
  width: 100%;
  ${(props) =>
    props.auth
      ? `
      justify-content: space-evenly;`
      : `padding-left: 5.5%;
       justify-content: flex-start;
       gap: 10%`};
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 0.6em;
    padding-left: 0px;
    & > li {
      border-bottom: 1px solid ${(props) => props.theme.color.info};
      width: 100%;
      height: 48px;
    }
  }
`
export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  width: 100%;
  display: contents;
  color: ${(props) => props.theme.color.black};
  &:hover {
    color: ${(props) => props.theme.color.hover};
  }
`

export const NavItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  min-width: max-content;
  & > a {
    font-size: 22px;
    display: block;
  }
  @media screen and (max-width: 1024px) {
    align-self: flex-start;
    width: 100%;
    padding: 10px 1px 1px 16px;
  }
`

export const LinkForLi = styled(NavLink)`
  text-decoration: none;
  align-self: center;
  font-size: 22px;
  font-weight: 300;
  line-height: 32.6px;
  color: ${(props) => props.theme.color.black};
  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    color: ${(props) => props.theme.color.hover};
  }
  &.active {
    color: ${(props) => props.theme.color.primary};
  }
  @media screen and (max-width: 390px) {
    font-size: 20px;
  }
  &.active {
    color: ${(props) => props.theme.color.primary};
  }
`
// ---------------------------Menu-------------------------------------

// ----------------------------User--------------------------------------
export const UserDetailsWrapper = styled.div`
  grid-column: 10/13;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    grid-column: 4;
    justify-content: flex-end;
    padding-right: 17%;
  }
`

export const UserDetails = styled.div`
  position: relative;
  display: flex;
  gap: 27px;

  &:hover {
    & > nav {
      display: block;
    }
  }
`

export const Avatar = styled.div<{ url: string }>`
  background-image: url(${(props) => props.url});
  height: 40px;
  width: 40px;
  background-size: 100%;
  align-self: center;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    display: block;
  }
  @media screen and (max-width: 390px) {
    height: 32px;
    width: 32px;
  }
`

export const UserName = styled.div`
  align-self: center;
  cursor: pointer;

  transition: color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: ${(props) => props.theme.color.hover};
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`
// ----------------------------User------------------------------------

// ----------------------------DropDown--------------------------------
export const DropDown = styled.nav`
  display: none;
  position: absolute;
  width: 212px;
  background-color: ${(props) => props.theme.bgColor.white};
  top: 92%;
  right: -55%;
  box-shadow: 0px 20px 20px 0px rgb(162 165 182 / 25%), 0px 20px 20px 0px rgb(162 165 182 / 25%);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 3;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    display: block;
  }
  @media screen and (max-width: 1024px) {
    right: -50%;
    top: 75%;
  }
  @media screen and (max-width: 560px) {
    right: -10%;
  }
  @media screen and (max-width: 390px) {
    padding-top: 0;
    top: 100%;
    right: -25%;
  }
`
export const DropList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  & > li {
    padding: 9px 0 6px 34px;
    &:nth-child(2) {
      padding-top: 7px;
    }
    &:last-child {
      border-top: 1px solid ${(props) => props.theme.color.gray};
      padding-bottom: 10px;
      padding-left: 24px;
    }
  }
`
// ----------------------------DropDown--------------------------------

export const ButtonsBlock = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  flex-direction: row;
  align-items: center;
  gap: 25px;
  & > button {
    height: 49px;
    padding: 8px;
  }
  & > button:first-child {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 24px;
    & > button {
      width: 100%;
    }
    & > button:last-child {
      font-weight: 500;
      ${(props) => `
          color: ${props.theme.button.palette.default};
          background: ${props.theme.button.palette.white};
          border-color: ${props.theme.button.palette.default};
          &:hover {
            color: ${props.theme.button.palette.white};
            background: ${props.theme.button.palette.hover};
          };
          &:active {
            color: ${props.theme.button.palette.white};
            background: ${props.theme.button.palette.active};
          }
        `}
    }
    & > button:first-child {
      display: ${(props) => (props.hidden ? 'block' : 'none')};
    }
    & > button:not(:first-child) {
      display: ${(props) => (props.hidden ? 'none' : 'block')};
    }
  }
`
export const BurgerOverlay = styled.div<Pick<BurgerProps, 'open'>>`
  position: absolute;
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  opacity: 1;
  z-index: 1;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
  @media screen and (min-width: 1024px) {
    display: none;
  }
`
