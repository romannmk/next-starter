import "../styles/reboot.css"

import React from "react"
import { storiesOf } from "@storybook/react"
import Page from "../components/Page"

storiesOf("Page", module).add("with text", () => {
  return (
    <Page title="Storybook">
      <h1>Hello Storybook</h1>
    </Page>
  )
})
