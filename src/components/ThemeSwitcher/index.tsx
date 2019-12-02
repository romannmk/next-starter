import { useObserver } from "mobx-react-lite"
import * as React from "react"
import { useStore } from "../../stores"

export default React.memo(function ThemeSwitcher() {
  const store = useStore("themeStore")

  return (
    <div>
      {useObserver(() => (
        <p>Theme: {store.theme}</p>
      ))}
      <button onClick={store.toggle}>Click to switch theme</button>
    </div>
  )
})
