import styles from './style.scss'
import { IPage } from './types'

export default function Page({ title, children }: IPage) {
  return (
    <div className={styles.page}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
