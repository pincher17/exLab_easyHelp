export interface HeaderProps {
  auth: boolean
}

export interface BurgerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open: boolean
  toggleBurgerOpen: () => void
}
