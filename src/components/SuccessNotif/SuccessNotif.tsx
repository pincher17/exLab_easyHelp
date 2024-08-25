import React from 'react'

import ModalWrapper from '../ModalWrapper/ModalWrapper'

import {
  NotificationWrapper,
  CloseButton,
  SuccessImg,
  SuccessMessageTitle,
  SuccessMessage,
  LinkStyle,
} from './SuccessNotif.styles'
import { SuccessMessageType } from './SuccessNotif.types'

const SuccessNotif: React.FC<SuccessMessageType> = ({ closeSuccessNotif }) => {
  return (
    <ModalWrapper closeModal={closeSuccessNotif}>
      <NotificationWrapper
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <CloseButton onClick={closeSuccessNotif} />
        <SuccessImg />
        <SuccessMessageTitle>Ваша вакансия опубликована!</SuccessMessageTitle>
        <SuccessMessage>
          Отредактировать или удалить вакансию вы можете в личном кабинете в разделе
          <LinkStyle to="/register"> Мои вакансии</LinkStyle>
        </SuccessMessage>
      </NotificationWrapper>
    </ModalWrapper>
  )
}

export default SuccessNotif
