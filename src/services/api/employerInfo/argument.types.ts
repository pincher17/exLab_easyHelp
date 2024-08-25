import { Role } from '../role/argument.types'

export interface EmployerType {
  employerId: number
  nameCompany: string
  email: string
  password: string
  repeatPassword: string
  location: string
  role: Role
  status: string
}
