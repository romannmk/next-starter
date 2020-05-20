import "../styles/reboot.css"

import React from "react"
import { AppProps } from "next/app"
import Head from "next/head"
import { NextPage } from "next"

import { injectStore, StoreProvider } from "stores"

// Init preact devtools on client side
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  require("preact/debug")
}

const App: NextPage<AppProps> = ({ Component, pageProps = {} }: AppProps) => (
  <>
    <Head>
      <title>Preact App</title>
    </Head>

    <StoreProvider initialState={injectStore(pageProps.initialState)}>
      <Component {...pageProps} />
    </StoreProvider>
  </>
)

export default App
