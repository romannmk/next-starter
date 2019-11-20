import App from "next/app"
import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"

export default class DefaultApp extends App {
  public componentDidMount() {
    NProgress.configure({ speed: 300, minimum: 0.3 })

    Router.events.on("routeChangeStart", () => {
      NProgress.start()
    })

    Router.events.on("routeChangeComplete", () => {
      NProgress.done()
    })

    Router.events.on("routeChangeError", () => {
      NProgress.done()
    })
  }

  public render() {
    const {
      Component,
      pageProps,
      router: { asPath, pathname, query },
    } = this.props

    const router = {
      asPath,
      pathname,
      query,
    }

    return (
      <>
        <Head>
          <link rel="stylesheet" href="/styles/reboot.css" />
          <link rel="stylesheet" href="/styles/nprogress.css" />
        </Head>
        <Component {...pageProps} {...router} />
      </>
    )
  }
}
