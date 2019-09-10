import { NextPageContext } from 'next'
import Link from 'next/link'
import NProgress from 'nprogress'
import { memo, ReactElement, useState } from 'react'
import { apiCaller } from '../../lib/apiCaller'
import { useMount } from '../../lib/useMount'

export interface IShow {
  id?: number
  image: string
  name: string
  rating: number
  premiered: string
  summary: string
}

/**
 * Show page is example for fetching data from client side
 * @param {Object} show set data from API
 * @return {ReactElement}
 */
function Show({ query: { id } }: NextPageContext): ReactElement {
  const [show, setShow] = useState()

  useMount(async () => {
    NProgress.start()
    try {
      const { name, premiered, rating, image, summary } = await apiCaller({
        url: `https://api.tvmaze.com/shows/${id}`,
      })

      setShow({
        name,
        premiered,
        rating: rating.average,
        image: image && image.medium,
        summary: summary.replace(/<[/]?[p|b|i]>/g, ''), // Remove html tags
      })

      NProgress.done()
    } catch (e) {
      NProgress.done()
      throw e
    }
  })

  const renderShow = () => {
    if (!show) {
      return null
    }

    const { image, name, premiered, rating, summary }: IShow = show

    return (
      <>
        <h1>{name}</h1>
        {image && <img src={image} alt="" />}
        <p>Premiered {premiered}</p>
        <p>Rating {rating}</p>
        <p>{summary}</p>
      </>
    )
  }

  return (
    <>
      <div>
        <Link href="/shows">
          <a>Back</a>
        </Link>
      </div>
      {renderShow()}
    </>
  )
}

export default memo(Show)
