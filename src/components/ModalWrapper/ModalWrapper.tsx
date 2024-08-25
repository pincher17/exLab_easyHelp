import React from 'react'

import { ModalOverlay } from './ModalWrapper.styles'
import { ModalWrapperProps } from './ModalWrapper.types'

const ModalWrapper: React.FC<ModalWrapperProps> = ({ closeModal, children }) => {
  return <ModalOverlay onClick={closeModal}>{children}</ModalOverlay>
}

export default ModalWrapper
