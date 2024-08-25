import axiosInstance from '../../axios'
import { ApplicantType } from '../applicantInfo/argument.types'

export const updateApplicantInfo = async (data: ApplicantType): Promise<number> => {
  const response = await axiosInstance.patch<any>(`applicant_personal_account`, { ...data })

  return response.data
}
