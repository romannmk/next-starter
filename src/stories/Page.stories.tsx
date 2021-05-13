import "../styles/reboot.css"

import { storiesOf } from "@storybook/react"
import React from "react"

import Page from "../components/Page"

storiesOf("Page", module).add("with text", () => {
  return <Page title="Hello Storybook"></Page>
})
