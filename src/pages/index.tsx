import { NextPage } from "next"
import React from "react"

import Page from "../components/Page"

const Index: NextPage = () => (
  <Page title="Nest.js Starter">
    <p>
      This is Next.js + Preact app <br />
      Based on{" "}
      <a
        href="https://github.com/zeit/next.js/tree/canary/examples/using-preact"
        target="_blank"
        rel="noreferrer"
      >
        using-preact{" "}
      </a>
      example
    </p>
  </Page>
)

export default Index
