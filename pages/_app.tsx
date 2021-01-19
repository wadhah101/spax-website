import '../styles/index.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/theme'
import { AnalyticsProvider } from 'use-analytics'
import { defaultAnalytics } from '../lib/analytics'
import React, { createContext, useState } from 'react'
import AppHead from '../components/app/AppHead'
import Header from '../components/app/Header'
import '../styles/scss/index.scss'
import Footer from '../components/app/Footer'

interface IGlobalState {
  videoOpen: boolean
  setVideoOpen: React.Dispatch<React.SetStateAction<boolean>>
}

// TODO proper context api implimentation
export const appContext = createContext<IGlobalState>({
  videoOpen: false,
  setVideoOpen: null,
})

const stopScroll = (
  <style>
    {`
body {
overflow : hidden;
}
`}
  </style>
)

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const [videoOpen, setVideoOpen] = useState(false)
  return (
    <AnalyticsProvider instance={defaultAnalytics}>
      <ThemeProvider theme={defaultTheme}>
        <AppHead />
        <Header />
        {videoOpen && stopScroll}
        <appContext.Provider value={{ videoOpen, setVideoOpen }}>
          <Component {...pageProps} />
        </appContext.Provider>
        <Footer />
      </ThemeProvider>
    </AnalyticsProvider>
  )
}

export default MyApp

export const placeholder = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quaerat in iste ad sit odit alias fugiat cum doloribus aperiam, unde numquam quod laboriosam. Ex provident nemo modi magni necessitatibus?`
