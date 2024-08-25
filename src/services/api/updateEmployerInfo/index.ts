import axiosInstance from '../../axios'
import { EmployerType } from '../employerInfo/argument.types'

export const updateEmployerInfo = async (data: EmployerType): Promise<number> => {
  const response = await axiosInstance.patch<any>(`employer_personal_account`, { ...data })

  return response.data
}
