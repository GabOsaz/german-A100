import { useEffect, useState } from 'react'

const KEY = 'german100:mastered'

export function useMastered() {
  const [mastered, setMastered] = useState<Set<number>>(new Set())
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(KEY)
      if (raw) setMastered(new Set(JSON.parse(raw)))
    } catch {
      // ignore corrupt/missing storage
    } finally {
      setLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.localStorage.setItem(KEY, JSON.stringify([...mastered]))
    } catch {
      // storage unavailable — progress just won't persist
    }
  }, [mastered, loaded])

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
