export interface ButtonProps {
  children: React.ReactNode
  variant?: 'contained' | 'outlined' | 'text'
  type?: 'button' | 'reset' | 'submit'
  size?: 'small' | 'medium' | 'large' | 'extraLarge' | 'fullwidth' | number
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  style?: object
}
