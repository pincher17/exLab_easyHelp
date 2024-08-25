import React, { useReducer } from 'react'

import { HelpIconStyled, HelpIconTooltip } from './HelpIcon.styles'
import { HelpIconProps } from './HelpIcon.types'

const HelpIcon: React.FC<HelpIconProps> = (props) => {
  const { tooltipText, children } = props
  const [tooltip, toggleTooltip] = useReducer((prev: boolean) => !prev, false)

  return (
    <HelpIconStyled onMouseEnter={toggleTooltip} onMouseLeave={toggleTooltip}>
      <HelpIconTooltip tooltip={tooltip}>{tooltipText || children}</HelpIconTooltip>
    </HelpIconStyled>
  )
}

export default HelpIcon
