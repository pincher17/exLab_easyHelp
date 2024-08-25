import { JobCreationFormValues } from '../../../containers/JobCreation'

export interface ResponseVacancyCreate {
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
}

export type CreateVacancyFunc = (params: JobCreationFormValues) => Promise<ResponseVacancyCreate>
