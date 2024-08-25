export interface ApplicantCardInfo {
  id: number
  name: string
  surname: string
  date: number
  city: string
  description: string
}

export interface ApplicantCardProps {
  data: ApplicantCardInfo
}
