import { AppProps } from "next/app"
import { NextPage } from "next"

// Init preact devtools on client side
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  require("preact/debug")
}

const App: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

export default App
