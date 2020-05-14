import React from "react"
import { NextPage } from "next"
import Link from "next/link"
import { getSnapshot, ModelSnapshotType, ISimpleType } from "mobx-state-tree"

import Page from "components/Page"
import Counter from "components/Counter"
import { initializeStore } from "stores"

const Index: NextPage = () => (
  <Page>
    <h1>MobX State Tree example</h1>
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
    <Counter />
    <Link href="/other">
      <a>Navigate</a>
    </Link>
  </Page>
)

export const getServerSideProps = (): {
  props: { initialState: ModelSnapshotType<{ count: ISimpleType<number> }> }
} => {
  const store = initializeStore()

  store.increment()

  return { props: { initialState: getSnapshot(store) } }
}

export default Index
