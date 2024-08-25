import { useState } from 'react'

import { useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'

import {
  MainLogo,
  Navigation,
  NavigationLink,
  UserDetails,
  Avatar,
  UserName,
  DropDown,
  NavItem,
  LinkForLi,
  BurgerLogo,
  DropList,
  Logo,
  Title,
  UserDetailsWrapper,
  ButtonsBlock,
  Menu,
  BurgerOverlay,
  HeaderWrapper,
  HeaderGrid,
} from './Header.styles'

import avatar from 'assets/icons/Avatar.svg'
import Button from 'components/Button'
import useGetEmployerInfo from 'hooks/useGetInfoEmployer'
import { Container } from 'providers/ThemeProvider'
import { getRole } from 'services/api/role'
import axiosInstance from 'services/axios'
import useApplicantInfoStore from 'store/applicantInfo/applicantInfo.store'
import useEmployerInfoStore from 'store/employerInfo/employerInfo.store'
import useUserStore from 'store/user/user.store'

const Header: React.FC = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [burgerOpen, setBurgerOpen] = useState<boolean>(false)
  const logout = useUserStore((state) => state.logout)
  const isSingInUpPage = pathname === '/login' || pathname === '/register'
  const isAuth = useUserStore((state) => state.isAuth)
  const setRole = useUserStore((store) => store.setRole)
  const nameCompany = useEmployerInfoStore((store) => store.nameCompany)
  const firstName = useApplicantInfoStore((store) => store.firstName)
  const roleName = useUserStore((store) => store.roleName)
  // const isAuth = false
  const isEmployer = false
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  useQuery('get_role', getRole, {
    enabled: !!axiosInstance.defaults.headers.common.Authorization,
    onSuccess(data) {
      setRole(data)
    },
  })

  useGetEmployerInfo(roleName)

  const closeBurger = (): void => {
    setBurgerOpen(false)

    document.body.style.removeProperty('overflow-y')
    document.body.style.removeProperty('padding-right')
  }

  const toggleBurgerOpen = (): void => {
    if (!burgerOpen) {
      document.body.style.overflowY = 'hidden'
      if (!isMobile) {
        document.body.style.paddingRight = '17px'
      }
    } else {
      return closeBurger()
    }
    setBurgerOpen((prev) => !prev)
  }

  const navigateTo = (to: string): void => {
    navigate(to)
    closeBurger()
  }

  const handleLogout = (): void => {
    logout()
    navigateTo('/login')
  }

  return (
    <>
      <HeaderWrapper auth={isSingInUpPage}>
        <Container>
          <HeaderGrid>
            <MainLogo>
              {!isSingInUpPage && <BurgerLogo open={burgerOpen} onClick={toggleBurgerOpen} />}
              <NavigationLink to="/" onClick={closeBurger}>
                <Logo />
                <Title>
                  <span>easy</span>
                  <span>help</span>
                </Title>
              </NavigationLink>
            </MainLogo>
            {!isSingInUpPage && (
              <>
                <Menu hidden={burgerOpen} auth={isAuth}>
                  <Navigation auth={isAuth}>
                    <NavItem>
                      <LinkForLi to="/vacancies" onClick={closeBurger}>
                        Вакансии
                      </LinkForLi>
                    </NavItem>
                    <NavItem hidden={!isAuth}>
                      <LinkForLi to="/applicants" onClick={closeBurger}>
                        Анкеты соискателей
                      </LinkForLi>
                    </NavItem>
                    <NavItem>
                      <LinkForLi to="/register" onClick={closeBurger}>
                        О проекте
                      </LinkForLi>
                    </NavItem>
                    <NavItem>
                      <LinkForLi to="/faq" onClick={closeBurger}>
                        Вопрос-ответ
                      </LinkForLi>
                    </NavItem>
                  </Navigation>
                  <ButtonsBlock hidden={isAuth}>
                    <Button size="fullwidth" variant="outlined" onClick={handleLogout}>
                      Выйти
                    </Button>
                    <Button size="medium" onClick={() => navigateTo('/register')}>
                      Зарегистрироваться
                    </Button>
                    <Button variant="text" onClick={() => navigateTo('/login')}>
                      Войти
                    </Button>
                  </ButtonsBlock>
                </Menu>
                {isAuth && (
                  <UserDetailsWrapper>
                    <UserDetails>
                      <Avatar url={avatar} />
                      {roleName === 'ROLE_EMPLOYER' ? <UserName>{nameCompany}</UserName> : ''}
                      {roleName === 'ROLE_APPLICANT' ? <UserName>{firstName}</UserName> : ''}
                      <DropDown>
                        <DropList onClick={closeBurger}>
                          <NavItem>
                            <LinkForLi to="/account">Личные данные</LinkForLi>
                          </NavItem>
                          <NavItem>
                            {isEmployer ? (
                              <LinkForLi to="/register">Мои вакансии</LinkForLi>
                            ) : (
                              <LinkForLi to="/applicant">Моя анкета</LinkForLi>
                            )}
                          </NavItem>
                          <NavItem>
                            <LinkForLi onClick={handleLogout} to="/login">
                              Выйти
                            </LinkForLi>
                          </NavItem>
                        </DropList>
                      </DropDown>
                    </UserDetails>
                  </UserDetailsWrapper>
                )}
              </>
            )}
          </HeaderGrid>
        </Container>
      </HeaderWrapper>
      <BurgerOverlay open={burgerOpen} onClick={closeBurger} />
    </>
  )
}

export default Header
