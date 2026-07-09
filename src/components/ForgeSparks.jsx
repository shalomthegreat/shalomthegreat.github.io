import { useEffect, useRef, useState } from 'react'
import { Flame } from 'lucide-react'

// ForgeSparks - An ultra-premium, highly immersive ambient animation.
// Inspired by the fiery warm, magenta, hot pink, and golden glow of avi.jpg.
//
// Features:
// 1. Continuous elegant embers: Slow, delicate, glowing particles that constantly drift
//    upward in turbulent thermal/convection currents, rising high up the viewport.
// 2. Minimalist Taller Heat Glow: A soft, linear gradient at the bottom of the screen (reaching
//    260px high but with very low opacity) representing the distant, warm glow of furnace coals.
// 3. Beautiful Color Lifecycle: Particles transition through white-hot gold, blazing orange,
//    radiant hot pink/magenta, and deep cherry red as they age, matching the inspiration image.
// 4. Interactive Cursor Draft: Moving the mouse creates thermal drafts that push and swirl
//    the embers organically.
// 5. Dynamic Heat Settings (Low, Medium, High): Toggleable temperature setting that adjusts
//    the spawn rate, convection draft speed, and background glow intensity dynamically without
//    tearing down the active canvas simulation.
// 6. Component-level Show/Hide Controls: Pass `showControls={false}` to hide the floating UI control bar.
// 7. Extreme performance: Low overhead, DPR capping, visibility detection, and automatic
//    reduced motion compliance.

export default function ForgeSparks({ showControls = true }) {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000, active: false, lastActive: 0 })

  // Persistent heat level settings: Low, Medium, High (defaults to 'medium')
  const [heat, setHeat] = useState(() => {
    try {
      return localStorage.getItem('forge_heat_level') || 'medium'
    } catch {
      return 'medium'
    }
  })

  // Configuration settings for each temperature setting (initialized to 'medium')
  const configRef = useRef({
    spawnRate: 18,
    thermalLift: 160,
    glowMultiplier: 1.3,
    maxLifeMin: 3.2,
    maxLifeMax: 5.0,
    launchVyMin: 70,
    launchVyMax: 110,
  })

  useEffect(() => {
    if (heat === 'low') {
      configRef.current = {
        spawnRate: 6,
        thermalLift: 80,
        glowMultiplier: 0.7,
        maxLifeMin: 1.8,
        maxLifeMax: 3.0,
        launchVyMin: 30,
        launchVyMax: 55,
      }
    } else if (heat === 'medium') {
      configRef.current = {
        spawnRate: 18,
        thermalLift: 160,
        glowMultiplier: 1.3,
        maxLifeMin: 3.2,
        maxLifeMax: 5.0,
        launchVyMin: 70,
        launchVyMax: 110,
      }
    } else {
      configRef.current = {
        spawnRate: 38,
        thermalLift: 260,
        glowMultiplier: 2.0,
        maxLifeMin: 4.5,
        maxLifeMax: 7.2,
        launchVyMin: 120,
        launchVyMax: 200,
      }
    }
  }, [heat])

  useEffect(() => {
    // 1. Check for reduced motion
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (reduceMotion?.matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const cores = navigator.hardwareConcurrency || 4
    const perfFactor = cores <= 4 ? 0.6 : 1.0

    let width = 0
    let height = 0
    let sparks = []
    let ambientAccumulator = 0

    // Handle mouse movement for draft force
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
      mouseRef.current.lastActive = performance.now()
    }

    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    const setSize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    // Colors mapping to the avi.jpg inspiration
    // White-hot gold -> Vibrant orange -> Hot pink/magenta -> Cherry red/maroon -> Fade
    const getSparkColor = (t, alpha) => {
      let coreR, coreG, coreB, glowR, glowG, glowB

      if (t < 0.12) {
        // White-hot Gold
        const ratio = t / 0.12
        coreR = 255; coreG = 255; coreB = 255
        glowR = 255; glowG = 210 + Math.floor(ratio * 45); glowB = 80 + Math.floor(ratio * 120)
      } else if (t < 0.4) {
        // Blazing Orange
        const ratio = (t - 0.12) / 0.28
        coreR = 255; coreG = 255 - Math.floor(ratio * 75); coreB = 200 - Math.floor(ratio * 180)
        glowR = 255; glowG = 120 - Math.floor(ratio * 60); glowB = 10
      } else if (t < 0.75) {
        // Radiant Hot Pink / Magenta (the signature avi.jpg colors)
        const ratio = (t - 0.4) / 0.35
        coreR = 255; coreG = Math.floor(ratio * 40); coreB = 150 + Math.floor(ratio * 105)
        glowR = 230 - Math.floor(ratio * 30); glowG = 15 + Math.floor(ratio * 20); glowB = 180 + Math.floor(ratio * 50)
      } else {
        // Deep Cherry Red / Crimson
        const ratio = (t - 0.75) / 0.25
        coreR = 220 - Math.floor(ratio * 120); coreG = 10; coreB = 180 - Math.floor(ratio * 120)
        glowR = 150 - Math.floor(ratio * 100); glowG = 5; glowB = 80 - Math.floor(ratio * 60)
      }

      return {
        core: `rgba(${coreR}, ${coreG}, ${coreB}, ${alpha})`,
        glow: `rgba(${glowR}, ${glowG}, ${glowB}, ${alpha * 0.22})`
      }
    }

    const createSpark = (x, y) => {
      const cfg = configRef.current
      // Gentle rising ambient embers with varying sizes
      const size = 0.55 + Math.random() * 0.95
      // Lifetimes scale dynamically based on selected temperature setting
      const maxLife = cfg.maxLifeMin + Math.random() * (cfg.maxLifeMax - cfg.maxLifeMin)
      // Launch velocity scales dynamically as well
      const launchVy = cfg.launchVyMin + Math.random() * (cfg.launchVyMax - cfg.launchVyMin)

      return {
        x,
        y,
        px: x,
        py: y,
        vx: (Math.random() * 2 - 1) * 20,
        vy: -launchVy, // constant gentle upward velocity
        life: 0,
        maxLife,
        size,
        // Thermal turbulence parameters for drifting
        wobbleFreq: 0.8 + Math.random() * 1.5,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleAmp: 8 + Math.random() * 12,
      }
    }

    setSize()

    let raf = 0
    let lastTime = performance.now()

    const draw = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05) // clamp
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      // --- 1. AMBIENT HEAT GLOW (The breathing forge bed) ---
      // Extended further up the page (260px), and scales dynamically with the heat level
      const glowPulse = 1.0 + 0.15 * Math.sin(now / 1100)
      const mul = configRef.current.glowMultiplier
      const bedHeight = 260
      const bedGrad = ctx.createLinearGradient(0, height - bedHeight, 0, height)
      // Colors blending standard fire and the gorgeous pink/magenta from avi.jpg
      bedGrad.addColorStop(0, 'rgba(120, 10, 80, 0)')
      bedGrad.addColorStop(0.4, `rgba(200, 15, 90, ${0.015 * glowPulse * mul})`)
      bedGrad.addColorStop(0.75, `rgba(255, 60, 20, ${0.04 * glowPulse * mul})`)
      bedGrad.addColorStop(1.0, `rgba(255, 140, 0, ${0.07 * glowPulse * mul})`)

      ctx.fillStyle = bedGrad
      ctx.fillRect(0, height - bedHeight, width, bedHeight)

      // --- 2. SPAWN CONTINUOUS AMBIENT EMBERS ---
      ctx.globalCompositeOperation = 'lighter'
      ambientAccumulator += dt
      const spawnInterval = 1 / (configRef.current.spawnRate * perfFactor)
      while (ambientAccumulator >= spawnInterval) {
        ambientAccumulator -= spawnInterval
        // Spawn evenly across the bottom with randomized clustering
        const spawnX = Math.random() * width
        sparks.push(createSpark(spawnX, height + 4))
      }

      // --- 3. UPDATE AND RENDER PARTICLES ---
      ctx.lineCap = 'round'

      // Mouse draft settings
      const m = mouseRef.current
      const isMouseActive = m.active && (now - m.lastActive < 2000)

      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i]
        p.px = p.x
        p.py = p.y
        p.life += dt

        const t = p.life / p.maxLife
        if (t >= 1 || p.y > height + 20 || p.x < -10 || p.x > width + 10) {
          sparks.splice(i, 1)
          continue
        }

        // Apply physics
        // Thermal lift pushes them gently upward (scales dynamically with selected heat level)
        p.vy -= configRef.current.thermalLift * 0.15 * dt

        // Drag/friction (reduced to allow sparks to float beautifully high up the page)
        const drag = Math.pow(0.982, dt * 60)
        p.vx *= drag
        p.vy *= drag

        // Horizontal turbulence (gentle sine-wave draft)
        const wobble = Math.sin(p.life * p.wobbleFreq + p.wobblePhase) * p.wobbleAmp
        p.vx += wobble * dt

        // Interactive Mouse Force (draft/convection currents)
        if (isMouseActive) {
          const dx = p.x - m.x
          const dy = p.y - m.y
          const distSq = dx * dx + dy * dy
          const maxDist = 180
          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq)
            const force = (1 - dist / maxDist) * 2.0

            // 1. Heat draft: pushes sparks upwards away from the cursor
            p.vy -= force * 100 * dt

            // 2. Swirling wind draft (horizontal displacement)
            const dirX = dx / (dist || 1)
            p.vx += dirX * force * 80 * dt
          }
        }

        // Apply movement
        p.x += p.vx * dt
        p.y += p.vy * dt

        // Draw particle trail
        // Smooth fade-in, gradual ease-out
        const lifeAlpha = t < 0.1 ? t / 0.1 : 1 - ((t - 0.1) / 0.9) ** 1.8
        const flicker = 0.85 + 0.15 * Math.sin(p.life * 22 + p.wobblePhase)
        const alpha = Math.max(0, lifeAlpha * flicker)

        const colors = getSparkColor(t, alpha)

        // Make trails longer for faster-moving particles
        const motionScale = 0.75
        const trailX = p.px + (p.px - p.x) * (motionScale - 1)
        const trailY = p.py + (p.py - p.y) * (motionScale - 1)

        // Draw outer soft glow trail
        ctx.beginPath()
        ctx.moveTo(trailX, trailY)
        ctx.lineTo(p.x, p.y)
        ctx.strokeStyle = colors.glow
        ctx.lineWidth = p.size * 2.6
        ctx.stroke()

        // Draw crisp core trail
        ctx.beginPath()
        ctx.moveTo(trailX, trailY)
        ctx.lineTo(p.x, p.y)
        ctx.strokeStyle = colors.core
        ctx.lineWidth = p.size
        ctx.stroke()
      }

      ctx.globalCompositeOperation = 'source-over'
      raf = requestAnimationFrame(draw)
    }

    const start = () => {
      if (raf) return
      lastTime = performance.now()
      raf = requestAnimationFrame(draw)
    }

    const stop = () => {
      if (!raf) return
      cancelAnimationFrame(raf)
      raf = 0
    }

    const isDark = () => document.documentElement.classList.contains('dark')

    const sync = () => {
      if (!document.hidden && isDark()) {
        start()
      } else {
        stop()
        sparks = []
        ctx.clearRect(0, 0, width, height)
      }
    }

    let resizeTimer = 0
    const onResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(setSize, 150)
    }

    const observer = new MutationObserver(() => {
      sync()
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('visibilitychange', sync)

    sync()

    return () => {
      stop()
      clearTimeout(resizeTimer)
      observer.disconnect()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('visibilitychange', sync)
    }
  }, [])

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-[5] h-full w-full"
      />

      {showControls && (
        /* Persistent floating control bar for the forge temperature */
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-border/80 bg-surface/80 p-1.5 shadow-glow backdrop-blur-md transition-all duration-300 hover:border-accent/40">
          <div className="pl-2 pr-1 text-muted flex items-center gap-1.5 selection:bg-transparent">
            <Flame
              size={14}
              className={`transition-all duration-500 ${
                heat === 'low'
                  ? 'text-orange-500 drop-shadow-[0_0_4px_rgba(249,115,22,0.4)]'
                  : heat === 'medium'
                  ? 'text-pink-500 animate-pulse drop-shadow-[0_0_6px_rgba(236,72,153,0.6)]'
                  : 'text-amber-400 animate-bounce drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]'
              }`}
            />
            <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline select-none">Forge Temp</span>
          </div>
          <div className="flex gap-1">
            {['low', 'medium', 'high'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  setHeat(lvl)
                  try {
                    localStorage.setItem('forge_heat_level', lvl)
                  } catch (e) {}
                }}
                className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider transition-all duration-300 select-none ${
                  heat === lvl
                    ? lvl === 'low'
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30 shadow-[0_0_8px_rgba(249,115,22,0.15)]'
                      : lvl === 'medium'
                      ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30 shadow-[0_0_10px_rgba(236,72,153,0.15)]'
                      : 'bg-amber-400/20 text-amber-300 border border-amber-400/30 shadow-[0_0_12px_rgba(251,191,36,0.2)] animate-pulse'
                    : 'text-muted hover:text-fg border border-transparent'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
