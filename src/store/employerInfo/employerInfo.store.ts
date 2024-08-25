import { create } from 'zustand'

import { EmployerStoreType } from './employerInfo.types'

import { EmployerType } from 'services/api/employerInfo/argument.types'

const useEmployerInfoStore = create<EmployerStoreType>((set) => ({
  employerId: null,
  nameCompany: '',
  email: '',
  password: '',
  repeatPassword: '',
  location: '',
  role: { roleId: null, roleName: '', permissions: [] },
  status: '',
  setEmployerInfo: (data: EmployerType) =>
    set(() => ({
      employerId: data.employerId,
      nameCompany: data.nameCompany,
      email: data.email,
      location: data.location,
      role: data.role,
      status: data.status,
    })),
}))

export default useEmployerInfoStore
