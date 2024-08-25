import React from 'react'

import { Input, Label } from './RadioButton.styles'
import { RadioButtonProps } from './RadioButton.types'

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { id, value, selectedOption, onChange, label } = props

  return (
    <Label>
      <Input id={id} type="radio" value={value} checked={selectedOption === value} onChange={onChange} />
      {label}
    </Label>
  )
}

export default RadioButton
