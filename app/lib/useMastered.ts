import { useEffect, useState } from 'react'

export function useMastered(key: string) {
  const [mastered, setMastered] = useState<Set<number>>(new Set())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    try {
      const raw = window.localStorage.getItem(key)
      setMastered(raw ? new Set(JSON.parse(raw)) : new Set())
    } catch {
      // ignore corrupt/missing storage
    } finally {
      setLoaded(true)
    }
  }, [key])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(key, JSON.stringify([...mastered]))
    } catch {
      // storage unavailable — progress just won't persist
    }
  }, [mastered, loaded, key])

  function toggle(n: number) {
    setMastered((prev) => {
      const next = new Set(prev)
      next.has(n) ? next.delete(n) : next.add(n)
      return next
    })
  }

  function reset() {
    setMastered(new Set())
  }

  return { mastered, toggle, reset }
}
