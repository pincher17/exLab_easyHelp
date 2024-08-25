import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'

import { getApplicantInfo } from 'services/api/applicantInfo'
import { ApplicantType } from 'services/api/applicantInfo/argument.types'
import { getEmployerInfo } from 'services/api/employerInfo'
import { EmployerType } from 'services/api/employerInfo/argument.types'
import useApplicantInfoStore from 'store/applicantInfo/applicantInfo.store'
import useEmployerInfoStore from 'store/employerInfo/employerInfo.store'

const useGetEmployerInfo = (
  roleName: string,
  options?:
    | Omit<
        UseQueryOptions<EmployerType | ApplicantType, unknown, EmployerType | ApplicantType, 'userInfo'>,
        'queryKey' | 'queryFn'
      >
    | undefined
): UseQueryResult<EmployerType | ApplicantType, unknown> => {
  const setEmployerInfo = useEmployerInfoStore((store) => store.setEmployerInfo)
  const setApplicantInfo = useApplicantInfoStore((store) => store.setApplicantInfo)
  const getEmployerInfoQuery = useQuery(
    `userInfo`,
    async () => {
      if (roleName === 'ROLE_APPLICANT') {
        const info = await getApplicantInfo()

        setApplicantInfo(info)

        return info as ApplicantType
      }
      if (roleName === 'ROLE_EMPLOYER') {
        const info = await getEmployerInfo()

        setEmployerInfo(info)

        return info as EmployerType
      }
      throw new Error('Invalid roleName')
    },
    { ...options }
  )

  return getEmployerInfoQuery
}

export default useGetEmployerInfo
