import Link from 'next/link'
import { ReactElement } from 'react'
import { apiCaller } from '../../lib/apiCaller'
import { IShow } from './[id]'

interface IShowsPage {
  shows: IShow[]
}

/**
 * Shows page is example for fetching data and render from server (SSR)
 * @param {Array} shows set data from API
 * @return {ReactElement}
 */
export default function Shows({ shows = [] }: IShowsPage): ReactElement {
  return (
    <>
      <div>
        <Link href="/">
          <a>Back</a>
        </Link>
      </div>
      <h1>Shows</h1>
      <ul>
        {shows.map(({ id, name }) => (
          <li key={id}>
            <Link href="/shows/[id]" as={`/shows/${id}`}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

/**
 * Static method for set props to component from server
 * @return {Promise<IShowsPage>} data from server || NextContext
 */
Shows.getInitialProps = async (): Promise<IShowsPage> => {
  const shows = await apiCaller({
    url: 'https://api.tvmaze.com/search/shows?q=spider-man',
  })

  return { shows: shows.map(({ show }: { show: IShow }) => show) }
}
