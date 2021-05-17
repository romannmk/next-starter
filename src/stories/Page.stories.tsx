import "../styles/reboot.css"

import React, { FC } from "react"

import Page from "../components/common/Page"

export default { title: "Page" }

export const withTitle: FC = () => <Page title="Hello Storybook" />
