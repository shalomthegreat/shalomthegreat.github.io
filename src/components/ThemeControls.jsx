import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Monitor, Moon, Palette, Sun } from 'lucide-react'
import { useTheme } from '../theme/ThemeContext'

function ModeToggle() {
  const { isDark, toggleMode } = useTheme()
  return (
    <button
      onClick={toggleMode}
      aria-label="Toggle light and dark mode"
      className="btn-ghost h-10 w-10 !px-0"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {isDark ? <Moon size={18} /> : <Sun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}

function AccentPicker() {
  const { accent, setAccent, accents, mode, setMode } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => ref.current && !ref.current.contains(e.target) && setOpen(false)
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const modes = [
    { id: 'light', icon: Sun, label: 'Light' },
    { id: 'dark', icon: Moon, label: 'Dark' },
    { id: 'system', icon: Monitor, label: 'System' },
  ]

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Customize color scheme"
        aria-expanded={open}
        className="btn-ghost h-10 w-10 !px-0"
      >
        <Palette size={18} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 z-50 mt-2 w-56 rounded-2xl border border-border bg-surface p-4 shadow-soft"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Appearance</p>
            <div className="mb-4 grid grid-cols-3 gap-1.5">
              {modes.map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setMode(id)}
                  className={`flex flex-col items-center gap-1 rounded-xl border px-2 py-2 text-[11px] font-medium transition-colors ${
                    mode === id
                      ? 'border-accent/60 bg-accent/10 text-accent'
                      : 'border-border text-muted hover:text-fg'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>

            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Accent</p>
            <div className="flex flex-wrap gap-2">
              {accents.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setAccent(a.id)}
                  aria-label={`Use ${a.label} accent`}
                  className={`h-8 w-8 rounded-full ring-2 ring-offset-2 ring-offset-card transition-transform hover:scale-110 ${
                    accent === a.id ? 'ring-fg/60' : 'ring-transparent'
                  }`}
                  style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ThemeControls() {
  return (
    <div className="flex items-center gap-2">
      <AccentPicker />
      <ModeToggle />
    </div>
  )
}
