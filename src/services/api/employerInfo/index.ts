import axiosInstance from '../../axios'

import { EmployerType } from './argument.types'

export const getEmployerInfo = async (): Promise<EmployerType> => {
  const response = await axiosInstance.get<any>(`employer_personal_account`)

  return response.data
}
