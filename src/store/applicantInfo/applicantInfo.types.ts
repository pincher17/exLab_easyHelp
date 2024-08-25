import { ApplicantType } from 'services/api/applicantInfo/argument.types'

export interface ApplicantStoreType {
  applicantId: number | null
  firstName: string
  lastName: string
  email: string
  password: string
  repeatPassword: string
  role: { roleId: number | null; roleName: string }
  status: string
  setApplicantInfo: (data: ApplicantType) => void
}
