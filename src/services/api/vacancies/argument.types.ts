import { Employer } from '../auth/argument.types'

export interface ResponseVacancies {
  data: VacancyType[]
}

export type VacancyType = {
  vacancyId: number
  nameCompany: string
  emailVacancy: string
  jobTitle: string
  salary: number
  describeVacancy: string
  contactPerson: string
  phoneNumber: string
  address: string
  status: string
  createdDate: string
  employerDto: Employer
}
