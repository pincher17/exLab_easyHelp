import { ThemeType } from './constants'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
