import React, { useState } from 'react'

import { RegistrationWrapper, TabLeft, TabList, TabRight } from './Registration.styles'

import { LinkStyle, Heading, LoginWrapper as WrapperRegistration } from 'containers/Login'
import RegistrationEmployer from 'containers/RegistrationEmployer'
import RegistrationWorker from 'containers/RegistrationWorker'
import { Container } from 'providers/ThemeProvider'

const Registration: React.FC = () => {
  const [registrationRole, setRegistrationRole] = useState<string | undefined>('worker')

  const handleChangeRegistrationRole = (event: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    setRegistrationRole(event.currentTarget.attributes.item(0)?.value)
  }

  return (
    <WrapperRegistration>
      <Container>
        <RegistrationWrapper>
          <Heading>Регистрация</Heading>
          <TabList>
            <TabLeft value="worker" regRole={registrationRole === 'worker'} onClick={handleChangeRegistrationRole}>
              Я ищу работу
            </TabLeft>
            <TabRight value="employer" regRole={registrationRole === 'employer'} onClick={handleChangeRegistrationRole}>
              Я нанимаю
            </TabRight>
          </TabList>
          {registrationRole === 'employer' && <RegistrationEmployer />}
          {registrationRole === 'worker' && <RegistrationWorker />}
          <p>
            Уже есть аккаунт?
            <LinkStyle to="/login">Войти</LinkStyle>
          </p>
        </RegistrationWrapper>
      </Container>
    </WrapperRegistration>
  )
}

export default Registration
