import React, { ReactNode, FC } from "react"

interface Props {
  children: ReactNode
}

const Page: FC<Props> = ({ children }) => (
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

export default Page
