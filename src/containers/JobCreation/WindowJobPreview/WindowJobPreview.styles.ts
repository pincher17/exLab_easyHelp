import styled from 'styled-components'

import { Heading } from 'containers/Login'

export const JobPreview = styled('div')`
  width: 90%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 10%);
  display: flex;
  justify-content: space-between;
  z-index: 5;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: block;
    transform: initial;
    left: 0;
    height: 100%;
  }
`

export const JobPreviewContent = styled('div')`
  background-color: white;
  padding: 80px 80px;
  margin-bottom: 10px;
  cursor: default;
  @media screen and (max-width: 768px) {
    padding: 92px 16px;
  }
`

export const Title = styled(Heading)`
  color: #1d1d1d;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 0px;
`

export const Salary = styled('div')`
  margin-bottom: 26px;
  font-weight: 300;
  font-size: 22px;
  line-height: 33px;
`
export const NameCompany = styled(Heading)`
  font-weight: 700;
  font-size: 36px;
  margin-bottom: -7px;
`

export const City = styled('div')`
  margin-bottom: 40px;
  font-weight: 300;
  font-size: 22px;
  line-height: 33px;
`
export const TitleJobDescription = styled('div')`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`

export const JobDescription = styled('div')`
  max-width: 846px;
  white-space: pre-wrap;
  margin-bottom: 40px;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
`

export const ContactsTitle = styled('div')`
  margin-bottom: 24px;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`

export const Name = styled('div')`
  margin-bottom: 14px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`
export const Contact = styled('div')`
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
`

export const CloseWindow = styled('div')`
  z-index: 5;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const CloseWindowMobile = styled('div')`
  display: none;
  z-index: 5;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 14px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`
