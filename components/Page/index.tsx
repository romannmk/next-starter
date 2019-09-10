import styles from './style.scss'
import { IPage } from './types'

export default function Page({ children }: IPage) {
  return <div className={styles.page}>{children}</div>
}
