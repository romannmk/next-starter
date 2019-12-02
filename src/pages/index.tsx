import Link from "next/link"
import Page from "../components/Page"
import { IRootStore } from "../stores"

export default function Index() {
  return (
    <Page title="initialData from server page">
      <Link href="/other">
        <a>Go to other page</a>
      </Link>
    </Page>
  )
}

Index.getInitialProps = async ({
  stores: {
    counterStore: { count, increment },
  },
}: {
  stores: IRootStore
}) => {
  if (count === 0) {
    increment()
  }
  return {}
}
