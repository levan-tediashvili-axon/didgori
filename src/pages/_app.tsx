import '@/styles/globals.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '@/styles/theme'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(App)
