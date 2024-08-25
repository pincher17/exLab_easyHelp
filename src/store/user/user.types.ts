import { Role } from 'services/api/role/argument.types'

export interface UserState {
  token: string
  isAuth: boolean
  signIn: (token: string) => void
  logout: () => void
  getAccess: () => string
  setIsAuthTrue: () => void
  roleId: null | number
  roleName: string
  permissions: []
  setRole: (data: Role) => void
}
