import styled from 'styled-components'

import { ButtonProps } from './Button.types'

export const ButtonStyled = styled.button<Pick<ButtonProps, 'variant' | 'disabled' | 'size'>>`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  height: 65px;
  width: ${(props) => {
    if (typeof props.size === 'number') {
      return `${props.size}px`
    }
    switch (props.size) {
      case 'fullwidth':
        return '100%'
      case 'small':
        return props.theme.button.width.s
      case 'medium':
        return props.theme.button.width.m
      case 'large':
        return props.theme.button.width.l
      case 'extraLarge':
        return props.theme.button.width.xl
      default:
        return 'max-content'
    }
  }};

  padding: ${(props) => (props.variant === 'text' ? '10px' : '16px 24px')};

  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;

  opacity: ${(props) => (props.disabled ? '0.2' : '1')};
  background: ${(props) => (props.variant === 'text' ? 'transparent' : props.theme.button.palette.white)};

  text-decoration: none;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: ${(props) => (props.variant === 'text' ? '300' : '500')};
  font-size: 22px;
  line-height: 33px;

  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};

  transition: all 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);

  ${(props) => {
    switch (props.variant) {
      case 'contained':
        if (props.disabled) {
          return `
            color: ${props.theme.button.palette.white};
            background: ${props.theme.button.palette.disabled};
          `
        }

        return `
          color: ${props.theme.button.palette.white};
          background: ${props.theme.button.palette.default};
          &:hover {
            background: ${props.theme.button.palette.hover};
          };
          &:active {
            background: ${props.theme.button.palette.active};
          }
        `

      case 'outlined':
        if (props.disabled) {
          return `
            color: ${props.theme.button.palette.disabled};
            background: ${props.theme.button.palette.white};
            border-color: ${props.theme.button.palette.gray};  
          `
        }

        return `
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
        `

      case 'text':
        if (props.disabled) {
          return `color: ${props.theme.button.palette.black};`
        }

        return `
          color: ${props.theme.button.palette.black};
          &:hover {
            color: ${props.theme.button.palette.hover};
          };
          &:active {
            color: ${props.theme.button.palette.active};
          }
        `
      default:
        if (props.disabled) {
          return `
              color: ${props.theme.button.palette.white};
              background: ${props.theme.button.palette.disabled};
            `
        }

        return `
            color: ${props.theme.button.palette.white};
            background: ${props.theme.button.palette.default};
            &:hover {
              background: ${props.theme.button.palette.hover};
            };
            &:active {
              background: ${props.theme.button.palette.active};
            }
          `
    }
  }};
`
