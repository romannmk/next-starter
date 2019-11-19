import App from 'next/app'
import Head from 'next/head'

export default class MyDocument extends App {
  public render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/styles/reboot.css" />
          <link rel="stylesheet" href="/styles/nprogress.css" />
        </Head>
        <Component {...pageProps} />
      </>
    )
  }
}
