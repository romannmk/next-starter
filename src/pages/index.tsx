import React from "react"
import { NextPage } from "next"
import Link from "next/link"
import { getSnapshot } from "mobx-state-tree"

import Page from "components/Page"
import Todos from "components/Todos"
import { initializeStore } from "stores"

const Index: NextPage = () => (
  <Page>
    <h1>Todo example with MST</h1>
    <Todos />
    <Link href="/other">
      <a>Navigate</a>
    </Link>
  </Page>
)

export const getServerSideProps = (): unknown => {
  const store = initializeStore()

  return { props: { initialState: getSnapshot(store) } }
}

export default Index
