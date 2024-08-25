import { Link } from 'react-router-dom'
import styled from 'styled-components'

import done from 'assets/icons/check-circle.svg'
import close from 'assets/icons/CloseButton.svg'

export const NotificationWrapper = styled('div')`
  align-items: center;
  text-align: center;
  width: 521px;
  margin: 200px auto;
  background: linear-gradient(0deg, rgba(134, 222, 169, 0.2), rgba(134, 222, 169, 0.2)), #ffffff;
  border-radius: 8px;
  padding: 40px 80px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    width: 300px;
    padding: 30px 30px;
  }
`
export const CloseButton = styled('div')`
  align-self: flex-end;
  margin-right: -30px;
  background-image: url(${close});
  width: 14px;
  height: 14px;
  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
  @media screen and (max-width: 600px) {
    margin-right: 0;
  }
`
export const SuccessImg = styled('div')`
  background-image: url(${done});
  width: 100px;
  height: 100px;
  margin-bottom: 32px;
`
export const SuccessMessageTitle = styled('h1')`
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 7px;
`
export const SuccessMessage = styled('p')`
  color: #757575;
  font-weight: 300;
`
export const LinkStyle = styled(Link)`
  color: #21bdcb;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    color: #1c9da9;
  }
`
