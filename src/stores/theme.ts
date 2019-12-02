import { IObservableObject, action, observable, reaction } from "mobx"

export interface IThemeStore {
  theme: string
  toggle: () => void
}
export function createThemeStore({ theme = "day" }: Partial<IThemeStore> = {}) {
  const store = observable({ theme }) as IObservableObject & IThemeStore

  store.toggle = action(() => {
    if (store.theme === "day") {
      store.theme = "night"
    } else if (store.theme === "night") {
      store.theme = "day"
    }
  })

  reaction(
    () => store.theme,
    () => {
      const root = document.documentElement

      if (store.theme === "day") {
        root.style.setProperty("--text-color", "#000")
        root.style.setProperty("--bg-color", "#fff")
      } else if (store.theme === "night") {
        root.style.setProperty("--text-color", "#fff")
        root.style.setProperty("--bg-color", "#000")
      }
    },
  )

  return store
}
