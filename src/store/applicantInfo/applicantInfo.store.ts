import { create } from 'zustand'

import { ApplicantStoreType } from './applicantInfo.types'

import { ApplicantType } from 'services/api/applicantInfo/argument.types'

const useApplicantInfoStore = create<ApplicantStoreType>((set) => ({
  applicantId: null,
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  role: { roleId: null, roleName: '' },
  status: '',
  setApplicantInfo: (data: ApplicantType) =>
    set(() => ({
      applicantId: data.applicantId,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
      status: data.status,
    })),
}))

export default useApplicantInfoStore
