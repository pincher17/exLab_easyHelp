import React from 'react'

import { useLocation } from 'react-router-dom'

import {
  FooterWrapper,
  Wrapper,
  FooterLinksWrapper,
  Titles,
  Links,
  Email,
  Sections,
  LinksWrapperInner,
  Logo,
  Сopyright,
  СopyrightText,
  WrapperLinksСopyright,
  LinkСopyright,
} from './Footer.styles'

const Footer: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <div>
      {pathname !== '/login' && pathname !== '/register' && (
        <FooterWrapper>
          <Wrapper>
            <Logo />
            <FooterLinksWrapper>
              <LinksWrapperInner>
                <Links to="/register">О проекте</Links>
                <Links to="/register">Вопрос-ответ</Links>
              </LinksWrapperInner>
              <Sections>
                <Titles style={{ marginBottom: '4px' }}>Служба поддержки</Titles>
                <Email href="mailto: editor@easyhelp.by">editor@easyhelp.by</Email>
              </Sections>
            </FooterLinksWrapper>
          </Wrapper>
          <Сopyright>
            <СopyrightText>© 2022 EasyHelp. Все права защищены.</СopyrightText>
            <WrapperLinksСopyright>
              <LinkСopyright to="">Согласие на обработку персональных данных</LinkСopyright>
              <LinkСopyright to="">Политика конфиденциальности</LinkСopyright>
            </WrapperLinksСopyright>
          </Сopyright>
        </FooterWrapper>
      )}
    </div>
  )
}

export default Footer
