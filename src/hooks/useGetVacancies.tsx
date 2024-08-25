import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'

import { getVacancies } from 'services/api/vacancies'
import { VacancyType } from 'services/api/vacancies/argument.types'

const useGetVacancies = (
  options?:
    | Omit<UseQueryOptions<VacancyType[], unknown, VacancyType[], 'vacancies'>, 'queryKey' | 'queryFn'>
    | undefined
): UseQueryResult<VacancyType[], unknown> => {
  const vacanciesQuery = useQuery('vacancies', getVacancies, { ...options })

  return vacanciesQuery
}

export default useGetVacancies
