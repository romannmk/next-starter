import { useObserver } from "mobx-react-lite"
import * as React from "react"
import { useStore } from "../../stores"
import ThemeSwitcher from "../ThemeSwitcher"
import styles from "./styles.module.css"

interface IPage {
  title: string
  children: React.ReactNode
}

export default React.memo(function Page({
  title,
  children,
}: IPage): React.ReactElement<IPage> {
  const store = useStore("counterStore")
  return (
    <div className={styles.page}>
      <h1>{title}</h1>
      <div>
        {useObserver(() => (
          <>Count: {store.count}</>
        ))}
      </div>
      <button onClick={store.decrement}>-</button>
      <button onClick={store.increment}>+</button>

      <br />
      <br />
      <ThemeSwitcher />
      <br />
      {children}
    </div>
  )
})
