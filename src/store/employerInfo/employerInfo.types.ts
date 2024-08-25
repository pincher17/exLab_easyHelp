import { EmployerType } from 'services/api/employerInfo/argument.types'

export interface EmployerStoreType {
  employerId: number | null
  nameCompany: string
  email: string
  password: string
  repeatPassword: string
  location: string
  role: { roleId: number | null; roleName: string; permissions: [] }
  status: string
  setEmployerInfo: (data: EmployerType) => void
}
