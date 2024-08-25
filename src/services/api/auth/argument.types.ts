import { Role } from '../role/argument.types'

export interface CommonRequestParams {
  email: string
  password: string
  repeatPassword: string
}

export interface RequestEmployer extends CommonRequestParams {
  companyName: string
  city: string
}

export interface RequestApplicant extends CommonRequestParams {
  firstName: string
  lastName: string
}

export interface CommonResponseParams {
  email: string
  password: string
  repeatPassword: string
}

export interface LoginForm {
  email: string
  password: string
}

export interface ResponseApplicant extends CommonResponseParams {
  firstName: string
  lastName: string
}

export interface ResponseEmployer extends CommonResponseParams {
  nameCompany: string
  location: string
}

export interface Employer extends CommonResponseParams {
  employerId: number
  role: Role
  status: string
}
