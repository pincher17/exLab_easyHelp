import { useState } from 'react'

import dataCities from './dataCities'
import { Title, Wrapper, WrapperFilters, WrapperHead, WrapperVacancies } from './Vacancies.styles'

import Button from 'components/Button'
import CardVacancy from 'components/CardVacancy'
import InputSearch from 'components/InputSearch'
import useGetVacancies from 'hooks/useGetVacancies'
import { Container } from 'providers/ThemeProvider'

const Vacancies: React.FC = () => {
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState<boolean>(false)

  const handleFilters = (): void => {
    setShowFilters(!showFilters)
  }

  const handleCitySelect = (selectedCities: string[]): void => {
    setSelectedCities(selectedCities)
  }

  const { data } = useGetVacancies()

  return (
    <Wrapper>
      <Container>
        <WrapperHead>
          <Title>вакансии</Title>
          <div>
            <Button onClick={handleFilters} size="fullwidth" variant={showFilters ? 'contained' : 'outlined'}>
              {showFilters ? 'Скрыть фильтры' : 'Фильтры'}
            </Button>
          </div>
        </WrapperHead>
        {showFilters && (
          <WrapperFilters>
            <InputSearch
              options={dataCities}
              valueCities={selectedCities}
              onChangeCity={handleCitySelect}
              selectedCities={selectedCities}
            />
          </WrapperFilters>
        )}

        <WrapperVacancies>
          {data && data.map((item) => <CardVacancy key={item.vacancyId} vacancy={item} />)}
        </WrapperVacancies>
      </Container>
    </Wrapper>
  )
}

export default Vacancies
