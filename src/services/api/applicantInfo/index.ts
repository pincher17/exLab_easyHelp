import axiosInstance from '../../axios'

import { ApplicantType } from './argument.types'

export const getApplicantInfo = async (): Promise<ApplicantType> => {
  const response = await axiosInstance.get<any>(`applicant_personal_account`)

  return response.data
}
