import "../styles/reboot.css"

import { NextPage } from "next"
import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"

// Init preact devtools on client side
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  require("preact/debug")
}

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Preact App</title>
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
