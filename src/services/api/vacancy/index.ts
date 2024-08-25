import axiosInstance from '../../axios'

import { CreateVacancyFunc } from './vacancy.types'

export const createVacancy: CreateVacancyFunc = async (params) => {
  const response = await axiosInstance.post<any>('vacancies', { ...params })

  return response.data
}
