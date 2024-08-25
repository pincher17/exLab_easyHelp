import React from 'react'

import { AccountWrapper, AccountTitle } from './Account.styles'

import EmployerAccount from 'containers/EmployerAccount'
import { LoginWrapper as WrapperRegistration } from 'containers/Login'
import WorkerAccount from 'containers/WorkerAccount'
import { Container } from 'providers/ThemeProvider'
import useUserStore from 'store/user/user.store'

const Account: React.FC = () => {
  const roleName = useUserStore((store) => store.roleName)

  return (
    <WrapperRegistration>
      <Container>
        <AccountWrapper>
          <AccountTitle>личные данные</AccountTitle>
          {roleName === 'ROLE_EMPLOYER' && <EmployerAccount />}
          {roleName === 'ROLE_APPLICANT' && <WorkerAccount />}
        </AccountWrapper>
      </Container>
    </WrapperRegistration>
  )
}

export default Account
