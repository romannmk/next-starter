import React, { SFC, useContext } from "react"
import { useObserver } from "mobx-react-lite"
import { ICounterStore } from "stores/counter"
import { StoreContext } from "stores"

const Counter: SFC = () => {
  const store = useContext(StoreContext) as ICounterStore

  return useObserver(() => (
    <p onClick={store.increment}>Click here to increment: {store.count}</p>
  ))
}

export default Counter
