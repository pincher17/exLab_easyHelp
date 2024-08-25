import React from 'react'

import { useNavigate } from 'react-router-dom'

import { userData } from './data'
import {
  ApplicantWrapper,
  HeadingWrapper,
  ContactsWrapper,
  DescriptionWrapper,
  ApplicantContainer,
  UserTitle,
  UserAvatar,
  UserInfo,
  SubTitle,
  DescriptionText,
  ButtonIcon,
} from './UserApplicant.styles'

import { LoginWrapper as WrapperRegistration } from 'containers/Login'

const UserApplicant: React.FC = () => {
  const navigate = useNavigate()

  const { avatar, name, surname, birthday, city, description, contacts } = userData

  return (
    <WrapperRegistration>
      <ApplicantContainer>
        <ApplicantWrapper>
          <ButtonIcon onClick={() => navigate(-1)} />
          <HeadingWrapper>
            <UserAvatar avatar={avatar} />
            {/* <UserAvatar avatar={''} /> */}
            <UserInfo>
              <UserTitle>
                <h3>{name}</h3>
                <h3>{surname}</h3>
              </UserTitle>
              <span>{birthday}</span>
              <span>{city}</span>
            </UserInfo>
          </HeadingWrapper>
          <DescriptionWrapper>
            <SubTitle>О себе</SubTitle>
            <DescriptionText>{description}</DescriptionText>
            <DescriptionText>{description}</DescriptionText>
            <DescriptionText>{description}</DescriptionText>
          </DescriptionWrapper>
          <ContactsWrapper>
            <SubTitle>Контактные данные</SubTitle>
            <span>{contacts.phone}</span>
            <span>{contacts.email}</span>
          </ContactsWrapper>
        </ApplicantWrapper>
      </ApplicantContainer>
    </WrapperRegistration>
  )
}

export default UserApplicant
