import axiosInstance from '../../axios'

import { VacancyType } from './argument.types'

export const getVacancies = async (): Promise<VacancyType[]> => {
  const response = await axiosInstance.get<any>('vacancies')

  return response.data
}
