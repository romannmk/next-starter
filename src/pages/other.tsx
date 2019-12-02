import Link from "next/link"
import Page from "../components/Page"

export default () => (
  <Page title="no initialData page">
    <Link href="/">
      <a>Go to main page</a>
    </Link>
  </Page>
)