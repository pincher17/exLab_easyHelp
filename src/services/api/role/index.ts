import axiosInstance from '../../axios'

import { Role } from './argument.types'

export const getRole = async (): Promise<Role> => {
  const response = await axiosInstance.get<any>('get_role')

  return response.data
}
