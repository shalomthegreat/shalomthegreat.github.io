// Pure CSS animated gradient background — no JS per frame, no blur layers,
// single GPU-composited paint. The mesh shifts slowly via background-position,
// driven by a CSS keyframe animation. Accent colors come from CSS variables so
// it still responds to theme/palette changes instantly.
export default function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="animated-mesh absolute inset-0" />
      {/* vignette toward footer */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />
    </div>
  )
}
