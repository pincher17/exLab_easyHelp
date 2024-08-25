import styled from 'styled-components'

import { StyledInputProps, StyledTooltipProps } from './Input.types'

export const InputWrapper = styled.div<StyledInputProps>`
  position: relative;
  & > label {
    font-style: normal;
    line-height: 24px;
    color: ${(props) => props.theme.color.label};
    display: block;
  }
  & > input,
  textarea {
    display: block;
    position: relative;
    width: 100%;
    margin-top: 14px;
    height: 56px;
    background-color: ${(props) => props.theme.bgColor.white};
    border-radius: 8px;
    border: 1px solid ${(props) => (props.error ? props.theme.color.error : props.theme.color.info)};
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 300;
    font-size: ${(props) => (props.type === 'password' ? '32px' : '20px')};
    line-height: 24px;
    box-sizing: border-box;
    padding-left: 32px;
    padding-right: ${(props) => (props.type === 'password' ? '61px' : '15px')};

    &:hover {
      border-color: ${(props) =>
        // eslint-disable-next-line no-nested-ternary
        props.error ? props.theme.color.error : props.disabled ? props.theme.color.gray : props.theme.color.hover};
    }
    &:focus {
      box-shadow: 0px 4px 40px rgba(33, 189, 203, 0.1);
      border-color: ${(props) => (props.error ? props.theme.color.error : props.theme.color.active)};
    }
    &:focus-visible {
      outline: none;
    }
  }
  & > textarea {
    height: 406px;
  }
  & > span {
    display: inline-block;
    cursor: pointer;
    width: 22px;
    height: 19px;
    position: absolute;
    right: 33px;
    top: 57px;
    color: ${(props) => props.theme.color.primary};
  }
  & > p {
    position: absolute;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.error && props.theme.color.error};
  }
  &::placeholder {
    color: ${(props) => props.theme.color.gray};
  }
`

export const Tooltip = styled.div<StyledTooltipProps>`
  display: ${(props) => !props.tooltip && 'none'};
  width: 280px;
  background-color: ${(props) => props.theme.color.white};
  position: absolute;
  left: 105%;
  top: -14px;
  padding: 20px 14px;
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 8px;
  box-shadow: 0px 4px 40px rgba(33, 189, 203, 0.1);
  font-weight: 300;
  line-height: 30px;
  @media screen and (max-width: 990px) {
    left: 50%;
    top: 0;
    transform: translate(-50%, -100%);
  }
  &::before,
  &::after {
    content: ' ';
    position: absolute;
    top: 40%;
    left: -31px;
    border-width: 15px;
    border-style: solid;
    border-color: transparent ${(props) => props.theme.color.primary} transparent transparent;
    @media screen and (max-width: 990px) {
      left: 50%;
      top: 100%;
      transform: translateX(-50%) rotate(-90deg);
    }
  }
  &::after {
    left: -30px;
    border-color: transparent ${(props) => props.theme.color.white} transparent transparent;
    @media screen and (max-width: 990px) {
      left: 50%;
      top: calc(100% - 1px);
    }
  }
`
