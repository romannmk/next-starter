import React from "react"
import { NextPage } from "next"
import Link from "next/link"

import Page from "components/Page"
import Todos from "components/Todos"

const About: NextPage = () => (
  <Page>
    <h1>Other Page</h1>
    <Todos />
    <Link href="/">
      <a>Navigate</a>
    </Link>
  </Page>
)

export default About
