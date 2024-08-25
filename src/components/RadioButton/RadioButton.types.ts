export interface RadioButtonProps {
  id: string
  value: string
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  selectedOption: string
}
