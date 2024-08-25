import styled from 'styled-components'

export const WarningNotificationWrapper = styled('div')`
  align-items: center;
  text-align: center;
  width: 462px;
  min-height: 251px;
  gap: 20px;
  margin: 180px auto;
  background: #ffffff;
  border-radius: 8px;
  padding: 40px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 600px) {
    width: 328px;
    padding: 24px 34px;
    gap: 24px;
    min-height: 192px;
  }
`

export const WarningMessageTitle = styled('h1')`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`
export const WarningMessage = styled('p')`
  color: #757575;
  font-weight: 300;
  line-height: 30px;
  font-size: 20px;
`
export const Buttons = styled('div')`
  display: flex;
  flex-direction: row;
`

export const NotAgryButton = styled('button')`
  background: #21bdcb;
  color: #ffffff;
  gap: 10px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  transition: 0.2s;
  height: 65px;
  width: 150px;
  align-items: center;
  padding: 8px 24px;
  border: 1px solid #21bdcb;
  &:hover {
    background: #1c9da9;
    color: #ffffff;
  }
  &:active {
    background: #46c8d4;
  }
  @media screen and (max-width: 600px) {
    width: 124px;
    height: 50px;
  }
`

export const AgryButton = styled(NotAgryButton)`
  color: #21bdcb;
  background: #ffffff;
  margin-right: 24px;
  @media screen and (max-width: 600px) {
    margin-right: 14px;
  }
`
