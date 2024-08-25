import styled from 'styled-components'

import { StyledCityProps } from './InputSearch.types'

export const Wrapper = styled('div')`
  width: 100%;
  position: relative;
  & > input {
    width: 100%;
    position: relative;
  }
`

export const List = styled('div')`
  width: 100%;
  background-color: white;
  position: absolute;
  z-index: 5;
  padding: 24px 26px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 14px 20px rgba(162, 165, 182, 0.25), -4px 4px 20px rgba(162, 165, 182, 0.25);
  border-radius: 8px;
  max-height: 212px;
  overflow-y: scroll;
  top: 96px;
`

export const OverallInput = styled('div')`
  display: flex;
  align-items: flex-end;
  margin-top: 14px;
  &:hover {
    & input {
      border-color: ${(props) => props.theme.color.hover};
    }
    & > div {
      border-color: ${(props) => props.theme.color.hover};
    }
  }
`

export const Label = styled('span')`
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  color: #757575;
`

export const SelectedCities = styled('div')`
  display: flex;
  background-color: white;
  align-items: center;
  height: 56px;
  padding-left: 24px;
  border-radius: 8px 0 0 8px;
  border: 1px solid #e6e6e6;
  border-right: none;
  gap: 10px;
`
export const City = styled('div')<StyledCityProps>`
  background-color: #e6e6e6;
  border: 1px solid #a2a5b6;
  border-radius: 8px;
  padding: 7px 12px;
  color: #1d1d1d;
  height: 38px;
  display: flex;
  white-space: nowrap;
  & > div {
    display: flex;
    padding-left: 10px;
    align-items: center;
    cursor: pointer;
  }
`

export const InputWrapper = styled('div')`
  width: 100%;
  & > div > input {
    border-left: none;
    border-radius: 0 8px 8px 0;
    margin-top: 0;
    padding-left: 14px;
  }
`

export const WrapperRegion = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
`

export const Cities = styled('div')`
  margin-left: 50px;
`
