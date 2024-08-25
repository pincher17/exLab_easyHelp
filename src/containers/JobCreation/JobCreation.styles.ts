import styled from 'styled-components'

import { LinkStyle } from 'containers/Login'

// -----------------------------Wrappers--------------------------------
export const JobCreationWrapper = styled('div')`
  padding: 80px 0 180px;
`

export const WrapperBurgerCity = styled('div')`
  position: absolute;
  top: 16px;
  right: 32px;
  cursor: pointer;
`

export const InputWrapper = styled('div')`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

export const TextareaWrapper = styled('div')`
  max-width: 1280px;
  & > p,
  a {
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`

export const DescriptionHelpIconWrapper = styled('div')`
  & > p,
  a {
    @media screen and (max-width: 640px) {
      display: block;
    }
  }
`

export const RadioButtonWrapper = styled('div')`
  margin-top: 14px;
`

export const ButtonWrapper = styled('div')`
  margin-top: 85px;
  display: flex;
  align-items: center;
  gap: 34px;
  @media screen and (max-width: 640px) {
    flex-direction: column-reverse;
    & button {
      width: 100%;
    }
  }
`
// -----------------------------Wrappers--------------------------------
// -----------------------------Inputs----------------------------------
export const NameInput = styled('div')`
  padding-right: 15px;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  margin-top: 40px;
  min-width: 320px;
  color: ${(props) => props.theme.color.black};
  @media screen and (max-width: 640px) {
    margin-top: 10px;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: ${(props) => props.theme.color.gray};
  }
`
export const InputInner = styled('div')`
  width: 700px;
  position: relative;
  @media screen and (max-width: 768px) {
    width: auto;
  }
`
// -----------------------------Inputs----------------------------------
// -----------------------------Salary----------------------------------
export const NameInputSalary = styled(NameInput)`
  @media screen and (max-width: 768px) {
    font-weight: 400;
  }
`
export const InputInnerSalary = styled(InputInner)`
  width: 775px;

  & div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 18px;
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }
`

// -----------------------------Salary----------------------------------
// -----------------------------Description-----------------------------
export const NameInputDescription = styled(NameInput)`
  & > div {
    display: none;
    @media screen and (max-width: 640px) {
      display: inline-block;
    }
  }
`

export const Description = styled('p')`
  max-width: 630px;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: ${(props) => props.theme.color.gray};
`

export const LinkDescription = styled(LinkStyle)`
  margin-left: 0;
`
// -----------------------------Description-----------------------------

export const NameInputCompany = styled(NameInput)`
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  color: ${(props) => props.theme.color.black};
  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`

export const ShowLink = styled(LinkStyle)`
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
  margin-left: 34px;
  @media screen and (max-width: 640px) {
    text-align: center;
    display: block;
    margin-left: 0;
    margin-top: 20px;
  }
`
