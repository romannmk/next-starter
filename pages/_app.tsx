import { NextComponentType, NextPageContext } from 'next'
import App from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import Page from '../components/Page'
import { isServer } from '../lib/isServer'

if (!isServer) {
  NProgress.configure({ speed: 300, minimum: 0.3 })

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
}

export default class MainApp extends App {
  public static async getInitialProps({
    Component,
    ctx,
  }: {
    Component: NextComponentType
    ctx: NextPageContext
  }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render() {
    const { Component, pageProps, router } = this.props

    const defaultProps = {
      ...pageProps,
      ...router
    }
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/styles/reboot.css" />
        </Head>
        <style jsx global>{`
          @keyframes spin {
            from {
              transform: rotate(0);
            }

            to {
              transform: rotate(360deg);
            }
          }

          #nprogress .spinner {
            width: 26px;
            height: 26px;
            border: 4px solid #000;
            border-right-color: transparent;
            border-radius: 50%;
            right: 1rem;
            bottom: 1rem;
            position: fixed;
            animation: spin 0.5s infinite linear;
          }
        `}</style>
        <Page>
          <Component {...defaultProps} />
        </Page>
      </>
    )
  }
}
