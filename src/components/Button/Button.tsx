import React from 'react'

import { ButtonStyled } from './Button.styles'
import { ButtonProps } from './Button.types'

const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'contained',
  disabled,
  onClick,
  style,
  size,
}) => {
  return (
    <ButtonStyled disabled={disabled} onClick={onClick} variant={variant} type={type} style={style} size={size}>
      {children}
    </ButtonStyled>
  )
}

export default Button
