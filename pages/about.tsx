import Link from 'next/link'
import Page from '../components/Page'

export default () => {
  return (
    <Page title="About Page">
      <Link href="/">
        <a>Go to main page</a>
      </Link>
    </Page>
  )
}