import styled from 'styled-components'

import check from '../../assets/icons/Check.png'

import { StyledLabelProps } from './CheckBox.types'

export const Checkbox = styled('input')`
  display: none;
  &:checked + label::before {
    border-color: #23becb;
    background-color: #23becb;
    background-image: url(${check});
  }
`

export const Label = styled.label<StyledLabelProps>`
  cursor: pointer;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  max-width: max-content;
  color: ${(props) => (props.gray ? '#A2A5B6' : '#1D1D1D')};
  display: inline-flex;
  align-items: center;
  user-select: none;
  position: relative;
  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 0.25em;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
  }
`
