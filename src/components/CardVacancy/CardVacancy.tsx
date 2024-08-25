import React from 'react'

import {
  Card,
  City,
  DateVacancy,
  NameCompany,
  NameVacancy,
  Salary,
  WrapperCityAndSalary,
  WrapperInfo,
} from './CardVacancy.styles'
import { CardVacancyProps } from './CardVacancy.types'

const CardVacancy: React.FC<CardVacancyProps> = ({ vacancy }) => {
  const { createdDate, nameCompany, salary, jobTitle, address } = vacancy

  return (
    <Card>
      <WrapperInfo>
        <DateVacancy>{createdDate}</DateVacancy>
        <NameVacancy>{jobTitle}</NameVacancy>
        <NameCompany>{nameCompany}</NameCompany>
      </WrapperInfo>
      <WrapperCityAndSalary>
        <City>{address}</City>
        <Salary>{salary} BYN</Salary>
      </WrapperCityAndSalary>
    </Card>
  )
}

export default CardVacancy
