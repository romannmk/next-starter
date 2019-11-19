import Link from "next/link"

import Page from "../components/Page"

export default () => (
  <Page title="About Page">
    <Link href="/" prefetch={true}>
      <a>Go to main page</a>
    </Link>
  </Page>
)
