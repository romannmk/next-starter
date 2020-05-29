import React from "react"
import { NextPage } from "next"
import Page from "components/Page"

type Props = { attributes: { title: string }; html: string }
const Home: NextPage<Props> = ({ attributes: { title }, html }: Props) => (
  <Page title={title}>
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  </Page>
)

export const getStaticProps = async (): Promise<object> => {
  const content = await require("../../content/home.md")

  return { props: { ...content } }
}

export default Home
