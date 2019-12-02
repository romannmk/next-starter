import { IObservableObject, action, observable } from "mobx"

export interface ICounterStore {
  count: number
  increment: () => void
  decrement: () => void
}

export function createCounterStore({ count = 0 }: Partial<ICounterStore> = {}) {
  const store = observable({
    count,
  }) as IObservableObject & ICounterStore

  store.increment = action(() => {
    store.count++
  })

  store.decrement = action(() => {
    store.count--
  })

  return store
}
