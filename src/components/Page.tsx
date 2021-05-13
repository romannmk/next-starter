import { FC } from "react"

interface Props {
  title: string
}

const Page: FC<Props> = ({ title, children }) => (
  <div className="page">
    <h1>{title}</h1>
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
