import styled from 'styled-components'

export const Input = styled('input')`
  appearance: none;
  -webkit-appearance: none;
  border-radius: 50%;
  background: #21bdcb00;
  outline: 2px solid #a2a5b6;
  width: 24px;
  height: 24px;
  margin-right: 14px;
  &:checked {
    appearance: none;
    -webkit-appearance: none;
    border-radius: 50%;
    background: #21bdcb;
    border: 4px solid #f9f9f9;
    outline: 2px solid #21bdcb;
    width: 24px;
    height: 24px;
  }
`

export const Label = styled('label')`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 36px;
  color: #1d1d1d;
  cursor: pointer;
  display: block;
  margin-bottom: 14px;
`
