import React, { useMemo, ReactElement, ReactNode, createContext } from "react"
import { types, applySnapshot } from "mobx-state-tree"
import { Todos, ITodos } from "./todos"

export const StoreContext = createContext({})

let store: {}

const RootStore = types
  .model({
    todosStore: Todos,
  })
  .create({ todosStore: {} })

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function initializeStore(snapshot: Partial<IRootStore> | null = null) {
  const _store = store ?? RootStore

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
  initialState: IRootStore
}): ReactElement => {
  return (
    <StoreContext.Provider value={initialState}>
      {children}
    </StoreContext.Provider>
  )
}

export const injectStore = (initialState: Partial<IRootStore>): IRootStore => {
  return useMemo(() => initializeStore(initialState), []) as IRootStore
}

export type IRootStore = {
  todosStore: ITodos
}
