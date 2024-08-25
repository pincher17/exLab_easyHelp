interface RegistrationFormValues {
  confirmReg: boolean
  password: string
  repeatPassword: string
  email: string
}
export interface RegistrationEmployerFormValues extends RegistrationFormValues {
  companyName: string
  city: string
}
export interface RegistrationWorkerFormValues extends RegistrationFormValues {
  firstName: string
  lastName: string
  confirmAge: boolean
}

export interface TabStyles {
  regRole: boolean
  value: string
}
