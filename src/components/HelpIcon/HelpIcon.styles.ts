import styled from 'styled-components'

import helpIcon from 'assets/icons/helpСircle.svg'
import { Tooltip } from 'components/Input'

export const HelpIconStyled = styled('div')`
  position: relative;
  height: 20px;
  width: 20px;
  background-image: url(${helpIcon});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 16px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  top: -2px;
`

export const HelpIconTooltip = styled(Tooltip)`
  top: -70px;
  left: 48px;
  z-index: 10;
  font-size: 20px;
  @media screen and (max-width: 990px) {
    top: -22px;
    left: 9px;
  }
  @media screen and (max-width: 768px) {
    left: -90px;
  }
  &::before,
  &::after {
    @media screen and (max-width: 768px) {
      left: 86%;
    }
  }
`
