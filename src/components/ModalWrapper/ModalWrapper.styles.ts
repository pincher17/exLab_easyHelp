import styled from 'styled-components'

export const ModalOverlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: scroll;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
`
