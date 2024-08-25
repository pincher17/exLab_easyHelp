import { WorkerBlankFormValues } from '../../../containers/WorkerBlank'
import axiosInstance from '../../axios'

import { ResponseCreateBlankApplicant } from './blank.types'

export const createBlankApplicant = async (params: WorkerBlankFormValues): Promise<ResponseCreateBlankApplicant> => {
  const response = await axiosInstance.post<any>('applicant_forms', { ...params })

  return response.data
}
