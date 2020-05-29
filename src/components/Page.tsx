import React, { SFC, ReactNode } from "react"
import Head from "next/head"

type Props = {
  children: ReactNode
  title: string
}

const Page: SFC<Props> = ({ children, title }: Props) => (
  <div className="page">
    <Head>
      <title>{title}</title>
    </Head>
    {children}
    <style jsx>{`
      .page {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 100px auto;
      }
    `}</style>
  </div>
)

export default Page
