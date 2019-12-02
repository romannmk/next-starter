import { NextComponentType } from "next"
import App from "next/app"
import Head from "next/head"
import Router from "next/router"
import NProgress from "nprogress"
import { IRootStore, StoreProvider, initializeStore } from "../stores"

interface IDefaultApp {
  initialStoreData: IRootStore
}

export default class DefaultApp extends App<IDefaultApp> {
  public static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: NextComponentType
    ctx: any
  }) {
    let pageProps = {}
    const initialStoreData = initializeStore()
    ctx.stores = initialStoreData

    // Provide the store to getInitialProps of pages
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx, initialStoreData })
    }

    return {
      pageProps,
      initialStoreData,
    }
  }

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
      initialStoreData,
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
        <StoreProvider initialData={initialStoreData}>
          <Component {...pageProps} {...router} />
        </StoreProvider>
      </>
    )
  }
}
