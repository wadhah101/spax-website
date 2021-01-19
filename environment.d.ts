import { defaultTheme } from './styles/theme'
import 'styled-components'
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production'
    }
  }
}

type MyTheme = typeof defaultTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyTheme {}
}
