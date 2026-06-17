// Static gradient background — zero per-frame work, no animation, no will-change.
// Accent colors come from CSS variables so it still responds to theme/palette
// changes instantly.
//
// TEST TOGGLE: flip VARIANT between 'static' (minimal) and 'dynamic' (layered)
// to compare looks. Both are static; animation comes later.
const VARIANT = 'static' // 'static' | 'dynamic'

export default function AnimatedBackground() {
  const variantClass = VARIANT === 'dynamic' ? 'bg-gradient-dynamic' : 'bg-gradient-static'
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className={`absolute inset-0 ${variantClass}`} />
      {/* vignette toward footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />
    </div>
  )
}
