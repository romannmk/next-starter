import React, { SFC, ReactNode } from "react"

type TPage = {
  children: ReactNode
}

const Page: SFC<TPage> = ({ children }: TPage) => {
  return (
    <div className="page">
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
}

export default Page
