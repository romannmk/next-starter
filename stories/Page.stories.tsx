import "../src/styles/reboot.css"

import React from "react"
import { storiesOf } from "@storybook/react"
import Page from "../src/components/Page"

storiesOf("Page", module).add("with text", () => {
  return <Page>Hello Storybook</Page>
})
