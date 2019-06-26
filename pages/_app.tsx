import { NextComponentType, NextContext } from 'next'
import App, { Container } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'


Router.onRouteChangeStart = () => {
  NProgress.start()
}

Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

NProgress.configure({ speed: 300, minimum: 0.3 })

export default class MainApp extends App {
  public static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: NextComponentType
    ctx: NextContext
  }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <link rel="stylesheet" href="/static/styles/reboot.css" />
        </Head>
        <style jsx global>{`
          #nprogress {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            height: 10px;
            background: transparent;
            opacity: 1;
            z-index: 1000;
          }

          #nprogress .bar {
            width: 100%;
            height: 1px;
            position: fixed;
            border-radius: 50%;
            background: #000;
            box-shadow: 0 0 20px #000;
          }
        `}</style>
        <Component {...pageProps} />
      </Container>
    )
  }
}
