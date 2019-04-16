import styles from './style.scss'
import { IPage } from './types'

export default function Page({ title }: IPage) {
  return (
    <div className="page">
      <h1>{title}</h1>
      <p>Hover...</p>
      <style jsx>{styles}</style>
    </div>
  )
}
