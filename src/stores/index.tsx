import React, { useMemo, ReactElement, ReactNode } from "react"
import { createContext } from "react"
import { applySnapshot } from "mobx-state-tree"
import { CounterStore, ICounterStore } from "./counter"

export const StoreContext = createContext({})

let store: ICounterStore | undefined

export function initializeStore(snapshot = null): ICounterStore {
  const _store = store ?? CounterStore.create({ count: 0 })

  // If your page has Next.js data fetching methods that use a Mobx store,
  // it will get hydrated here
  if (snapshot) {
    applySnapshot(_store, snapshot)
  }

  // For SSG and SSR create a new store
  if (typeof window === "undefined") return _store

  // Create the store once in the client
  if (!store) store = _store

  return store
}

export const StoreProvider = ({
  children,
  initialState,
}: {
  children: ReactNode
  initialState: ICounterStore
}): ReactElement => {
  return (
    <StoreContext.Provider value={initialState}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = (initialState: null): ICounterStore => {
  return useMemo(() => initializeStore(initialState), [store])
}
