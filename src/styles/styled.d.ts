import 'styled-components'
import { lightTheme } from './theme'


declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} 
}

export type ThemeType = typeof lightTheme