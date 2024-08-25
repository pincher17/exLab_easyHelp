import React from 'react'

import {
  City,
  CloseWindow,
  CloseWindowMobile,
  Contact,
  ContactsTitle,
  JobDescription,
  JobPreview,
  JobPreviewContent,
  Name,
  NameCompany,
  Salary,
  Title,
  TitleJobDescription,
} from './WindowJobPreview.styles'
import { WindowJobPreviewProps } from './WindowJobPreview.types'

import { ReactComponent as IconCloseWindow } from 'assets/icons/close_job_preview.svg'
import { ReactComponent as IconCloseWindowMobile } from 'assets/icons/close_job_previewMobile.svg'
import ModalWrapper from 'components/ModalWrapper'

const WindowJobPreview: React.FC<WindowJobPreviewProps> = (props) => {
  const { cityJob, contactPerson, email, jobDescription, jobTitle, phone, salary, closeJobPreview, showPhone } = props

  return (
    <ModalWrapper closeModal={closeJobPreview}>
      <JobPreview>
        <JobPreviewContent
          onClick={(event) => {
            event.stopPropagation()
          }}
        >
          <Title>{jobTitle}</Title>
          <Salary>до {salary} бел. руб.</Salary>
          <NameCompany>Эврика</NameCompany>
          <City>{cityJob}</City>
          <TitleJobDescription>Описание вакансии</TitleJobDescription>
          <JobDescription>{jobDescription}</JobDescription>
          <ContactsTitle>Контактные данные</ContactsTitle>
          <Name>{contactPerson}</Name>
          {showPhone === 'show' ? <Contact>{phone}</Contact> : ''}
          <Contact>{email}</Contact>
        </JobPreviewContent>
        <CloseWindow onClick={closeJobPreview}>
          <IconCloseWindow />
        </CloseWindow>
        <CloseWindowMobile onClick={closeJobPreview}>
          <IconCloseWindowMobile />
        </CloseWindowMobile>
      </JobPreview>
    </ModalWrapper>
  )
}

export default WindowJobPreview
