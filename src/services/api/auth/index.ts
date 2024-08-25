import axiosInstance from '../../axios'

import { LoginForm, RequestApplicant, RequestEmployer, ResponseApplicant, ResponseEmployer } from './argument.types'

export const registerApplicant = async (requestApplicant: RequestApplicant): Promise<ResponseApplicant> => {
  const response = await axiosInstance.post<any>('applicants', { ...requestApplicant })

  return response.data
}

export const registerEmployer = async (requestEmployer: RequestEmployer): Promise<ResponseEmployer> => {
  const response = await axiosInstance.post<any>('employers', { ...requestEmployer })

  return response.data
}

export const loginUser = async (loginForm: LoginForm): Promise<any> => {
  const response = await axiosInstance.post<any>('auth/login', { ...loginForm })

  return response.data
}
