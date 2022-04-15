import { GlobalStyle } from '@styles/globalStyles'
import { ThemeProvider } from '@styles/ThemeProvider'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
