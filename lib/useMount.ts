import { useEffect, useState } from 'react'

type IUseMount = () => void

export const useMount = async (onMount: IUseMount) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!mounted) {
      onMount()
      setMounted(true)
    }
  }, [mounted])
}
