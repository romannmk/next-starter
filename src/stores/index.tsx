import { useStaticRendering } from "mobx-react-lite"
import * as React from "react"
import { isServer } from "../lib/isServer"
import { ICounterStore, createCounterStore } from "./counter"
import { IThemeStore, createThemeStore } from "./theme"

useStaticRendering(isServer)

interface IStoreProvider {
  children: React.ReactNode
  initialData?: IRootStore
}

export interface IRootStore {
  counterStore: ICounterStore
  themeStore: IThemeStore
}

export const StoreContext = React.createContext<any | null>(null)

let rootStore = {}

export const initializeStore = (initialData?: Partial<IRootStore>) => {
  const stores = {
    counterStore: createCounterStore(
      initialData ? initialData.counterStore : {},
    ),
    themeStore: createThemeStore(initialData ? initialData.themeStore : {}),
  }

  if (isServer) {
    return stores
  }

  if (!Object.keys(rootStore).length) {
    rootStore = stores
  }

  return rootStore
}

export const StoreProvider = ({ initialData, children }: IStoreProvider) => {
  const store = initializeStore(initialData)
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useStore = (storeName: string) => {
  const store = React.useContext(StoreContext)[storeName]
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.")
  }
  return store
}
