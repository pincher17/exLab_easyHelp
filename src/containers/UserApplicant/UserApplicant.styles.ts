import styled from 'styled-components'

import { ReactComponent as CloseIcon } from '../../assets/icons/Color.svg'
import noAvatar from '../../assets/icons/noAvatar.svg'

import { Container } from 'providers/ThemeProvider'

export const ApplicantContainer = styled(Container)`
  padding-top: 80px;
  padding-bottom: 80px;
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

export const ApplicantWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 80px 88px;
  background-color: ${(props) => props.theme.bgColor.white};

  @media screen and (max-width: 1024px) {
    padding: 40px 54px 80px 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 40px 54px 80px 40px;
    gap: 28px;
  }
  @media screen and (max-width: 425px) {
    gap: 0;
    padding: 54px 0px 80px;
    border-radius: 8px;
  }
`
// ------------------------ Heading ---------------------------------
export const HeadingWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 64px;
  max-width: 1080px;
  @media screen and (max-width: 1024px) {
    gap: 30px;
  }
  @media screen and (max-width: 768px) {
    padding-bottom: 10px;
  }
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
  & > span {
    line-height: 33px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 14px;
  }
`

export const UserTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  & > h3 {
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;

    text-transform: uppercase;

    color: ${(props) => props.theme.color.black};
    @media screen and (max-width: 768px) {
      gap: 15px;
    }
  }
`
export const UserAvatar = styled.div<{ avatar: string }>`
  background-image: url(${(props) => (props.avatar !== '' ? props.avatar : noAvatar)});
  background-repeat: none;
  background-size: cover;
  width: 173px;
  height: 173px;
  border-radius: 8px;
  @media screen and (max-width: 425px) {
    width: 328px;
    height: 328px;
    justify-self: center;
  }
`
// ------------------------ Heading ---------------------------------
// ------------------------ Buttons ---------------------------------
export const ButtonIcon = styled(CloseIcon)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 28px;
  right: 28px;
  @media screen and (max-width: 768px) {
    top: 16px;
    right: 16px;
  }
  @media screen and (max-width: 425px) {
    width: 14px;
    height: 14px;
  }
  cursor: pointer;

  & path {
    transition: fill 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
    fill: ${(props) => props.theme.button.palette.gray};
  }

  &:hover {
    & path {
      fill: ${(props) => props.theme.button.palette.hover};
    }
  }
  &:active {
    & path {
      fill: ${(props) => props.theme.button.palette.active};
    }
  }
`

// ------------------------ Buttons ---------------------------------
// ------------------------ Description ---------------------------------
export const DescriptionWrapper = styled.div`
  max-width: 1080px;
  padding-right: 58px;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 425px) {
    padding: 20px 14px;
  }
`
export const DescriptionText = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`

// ------------------------ Description ---------------------------------
// ------------------------ Contacts ------------------------------------
export const ContactsWrapper = styled.div`
  max-width: 1080px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    padding: 0 14px;
  }
`
// ------------------------ Contacts ------------------------------------
export const SubTitle = styled.h4`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 12px;

  color: ${(props) => props.theme.color.black};

  & ~ p {
    @media screen and (max-width: 425px) {
      font-size: 20px;
    }
  }
`
