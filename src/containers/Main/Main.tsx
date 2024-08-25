import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import Illustration from '../../assets/img/Illustration3.png'

import {
  CardInstruction,
  CardNumber,
  CardText,
  Circle,
  ContainerCards,
  HeadCardText,
  HowFindJobBackground,
  InfoScreen,
  InfoScreenWrapper,
  InfoTextWrapper,
  MainHeading,
  MainScreen,
  MainScreenWrapper,
  MainWrapper,
  MainWrapperInner,
  Text,
  VacancyScreen,
  WrapperButton,
  WrapperButtonInfoScreen,
  WrapperCards,
  WrapperVacancyCards,
  WrapperButtonGoToRegister,
} from './Main.styles'

import Button from 'components/Button'
import SliderVacancy from 'components/SliderVacancy'
import { Container } from 'providers/ThemeProvider'

const cards = [
  { id: 1, head: 'зарегистрируй аккаунт', text: 'Cначала вам нужно создать учетную запись', color: '#AD95E1' },
  { id: 2, head: 'cоздай анкету', text: 'Затем вам нужно заполнить анкету о себе', color: '#FFD35C' },
  { id: 3, head: 'найди работу', text: 'Можно приступить к поиску подработки', color: '#FE744F' },
]

const Main: FC = () => {
  const navigate = useNavigate()

  return (
    <MainWrapper>
      <MainScreenWrapper>
        <Container>
          <MainScreen>
            <MainWrapperInner>
              <MainHeading>Работа для подростков 14&#8209;17&nbsp;лет</MainHeading>
              <Text>
                Найти первую работу легко!
                <br />
                Выбирай и зарабатывай.
              </Text>
              <WrapperButton>
                <Button onClick={() => navigate('/register')}>Подберите сотрудника</Button>
                <Text>Или</Text>
                <Button onClick={() => navigate('/vacancies')} variant="outlined">
                  Найдите работу
                </Button>
              </WrapperButton>
            </MainWrapperInner>
          </MainScreen>
        </Container>
      </MainScreenWrapper>

      <MainWrapper>
        <HowFindJobBackground>
          <ContainerCards>
            <MainHeading>как найти работу с easyhelp?</MainHeading>
            <WrapperCards>
              {cards.map((item, index) => (
                <CardInstruction key={item.id}>
                  <div>
                    <Circle color={item.color} />
                    <CardNumber>{index + 1}</CardNumber>
                  </div>
                  <HeadCardText>{item.head}</HeadCardText>
                  <CardText>{item.text}</CardText>
                </CardInstruction>
              ))}
            </WrapperCards>
          </ContainerCards>
        </HowFindJobBackground>
      </MainWrapper>

      <InfoScreenWrapper>
        <Container>
          <InfoScreen>
            <div>
              <img alt="" src={Illustration} />
            </div>
            <InfoTextWrapper>
              <MainHeading>мы сотрудничаем с известными белорусскими компаниями</MainHeading>
              <Text>
                Все наши пользователи проходят верификацию на сайте, что позволяет избежать мошенничества со стороны
                работодателей и обезопасить соискателей. Профиль каждого работодателя и соскателя проверяется нашей
                платформой.
              </Text>
              <WrapperButtonInfoScreen>
                <Button onClick={() => navigate('/vacancies')}>Начать поиск</Button>
              </WrapperButtonInfoScreen>
            </InfoTextWrapper>
          </InfoScreen>
        </Container>
      </InfoScreenWrapper>

      <MainWrapper>
        <VacancyScreen>
          <Container>
            <MainHeading>новые вакансии</MainHeading>
            <WrapperVacancyCards>
              <SliderVacancy />
            </WrapperVacancyCards>
            <WrapperButtonGoToRegister>
              <Button onClick={() => navigate('/vacancies')} variant="outlined">
                Смотреть еще
              </Button>
            </WrapperButtonGoToRegister>
          </Container>
        </VacancyScreen>
      </MainWrapper>
    </MainWrapper>
  )
}

export default Main
