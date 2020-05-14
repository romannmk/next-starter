import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

export const CounterStore = types
  .model({
    count: types.number,
  })
  .actions((self) => {
    const increment = (): void => {
      self.count++
    }

    return { increment }
  })

export type ICounterStore = Instance<typeof CounterStore>
export type ICounterStoreSnapshotIn = SnapshotIn<typeof CounterStore>
export type ICounterStoreSnapshotOut = SnapshotOut<typeof CounterStore>
