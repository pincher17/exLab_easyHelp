import {
  ApplicantsWrapper,
  HeadingWrapper,
  ButtonWrapper,
  FilterWrapper,
  ListWrapper,
  Title,
  CardList,
} from './Applicants.styles'
import { cardsInfo } from './data'

import ApplicantCard from 'components/ApplicantCard'
import Button from 'components/Button'
import { LoginWrapper as WrapperRegistration } from 'containers/Login'
import { Container } from 'providers/ThemeProvider'

const Applicants: React.FC = () => {
  return (
    <WrapperRegistration>
      <Container>
        <ApplicantsWrapper>
          <HeadingWrapper>
            <Title>анкеты соискателей</Title>
          </HeadingWrapper>
          <ButtonWrapper>
            <Button size="fullwidth">фильтры</Button>
          </ButtonWrapper>
          <FilterWrapper>
            <div>filter</div>
          </FilterWrapper>
          <ListWrapper>
            <CardList>
              {cardsInfo
                .sort((a, b) => b.date - a.date)
                .map((el) => (
                  <li key={el.id}>
                    <ApplicantCard data={el} />
                  </li>
                ))}
            </CardList>
          </ListWrapper>
        </ApplicantsWrapper>
      </Container>
    </WrapperRegistration>
  )
}

export default Applicants
