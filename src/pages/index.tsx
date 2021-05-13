import { NextPage } from "next"
import React from "react"

import Page from "../components/Page"

const Index: NextPage = () => (
  <Page title="Hello World">
    <p>
      This is Next.js + Preact app <br />
      Based on{" "}
      <a
        href="https://github.com/zeit/next.js/tree/canary/examples/using-preact"
        rel="noopener noreferrer"
        target="_blank"
      >
        using-preact{" "}
      </a>
      example
    </p>
  </Page>
)

export default Index
