import React from 'react'

import ModalWrapper from '../ModalWrapper/ModalWrapper'

import {
  WarningNotificationWrapper,
  WarningMessageTitle,
  WarningMessage,
  Buttons,
  AgryButton,
  NotAgryButton,
} from './ExitJobCreatNotif.styles'
import { WarningMessageType } from './ExitJobCreatNotif.types'

const ExitJobCreatNotif: React.FC<WarningMessageType> = ({ closeExitJobCreatNotif }) => {
  return (
    <ModalWrapper closeModal={closeExitJobCreatNotif}>
      <WarningNotificationWrapper
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <WarningMessageTitle>Выйти без сохранения?</WarningMessageTitle>
        <WarningMessage>Ваши данные не будут сохранены</WarningMessage>
        <Buttons>
          <AgryButton>Да</AgryButton>
          <NotAgryButton onClick={closeExitJobCreatNotif}>Нет</NotAgryButton>
        </Buttons>
      </WarningNotificationWrapper>
    </ModalWrapper>
  )
}

export default ExitJobCreatNotif
