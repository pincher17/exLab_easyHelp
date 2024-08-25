export interface HeaderProps {
  isOpen: boolean
  itemName: string
  itemContent: string
}

export interface HeaderIconProps {
  isOpen: boolean
  itemName: string
  itemContent: string
  children: string
  id: any
  className: string
}

export interface ContentsType {
  color: string
  itemContent: string
  itemName: string
  children: any
  isOpen: boolean
}

export interface InnerType {
  itemContent: string
  itemName: string
  children: any
}
