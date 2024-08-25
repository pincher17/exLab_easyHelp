export interface ApplicantType {
  applicantId: number
  firstName: string
  lastName: string
  email: string
  password: string
  repeatPassword: string
  role: { roleId: number; roleName: string }
  status: string
}
