import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export const ACCENTS = [
  { id: 'violet', label: 'Violet', from: '#7c3aed', to: '#d946ef' },
  { id: 'ocean', label: 'Ocean', from: '#0ea5e9', to: '#06b6d4' },
  { id: 'emerald', label: 'Emerald', from: '#10b981', to: '#84cc16' },
  { id: 'sunset', label: 'Sunset', from: '#f43f5e', to: '#f97316' },
  { id: 'amber', label: 'Amber', from: '#eab308', to: '#f59e0b' },
]

const STORAGE_KEY = 'theme'
const ThemeContext = createContext(null)

function readStored() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

export function ThemeProvider({ children }) {
  const stored = readStored()
  const [mode, setMode] = useState(stored.mode || 'system') // 'light' | 'dark' | 'system'
  const [accent, setAccent] = useState(stored.accent || 'violet')

  const applyMode = useCallback((nextMode) => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = nextMode === 'dark' || (nextMode === 'system' && prefersDark)
    document.documentElement.classList.toggle('dark', isDark)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', isDark ? '#09090f' : '#fafafc')
  }, [])

  useEffect(() => {
    applyMode(mode)
    document.documentElement.setAttribute('data-accent', accent)
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode, accent }))
  }, [mode, accent, applyMode])

  // React to OS theme changes while in 'system' mode.
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => mode === 'system' && applyMode('system')
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [mode, applyMode])

  const isDark = useMemo(() => {
    if (mode === 'system') {
      return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return mode === 'dark'
  }, [mode])

  const toggleMode = useCallback(() => {
    setMode((m) => (m === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({ mode, setMode, toggleMode, accent, setAccent, isDark, accents: ACCENTS }),
    [mode, toggleMode, accent, isDark]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
