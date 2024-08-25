export interface Option {
  id: number
  region: string
  cities: string[]
}

export interface InputSearchProps {
  options: Option[]
  valueCities: string[]
  onChangeCity: (newValue: string[]) => void
  selectedCities: string[]
}

export interface StyledCityProps {
  visibility?: boolean
}
