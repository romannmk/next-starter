import * as React from 'react'
import styles from './style.module.scss'
import { IPage } from './types'

export default function Page({
  title,
  children,
}: IPage): React.ReactElement<IPage> {
  return (
    <div className={styles.page}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}
