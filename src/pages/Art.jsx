import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ImageOff, Music, Sparkles, X } from 'lucide-react'
import { PageWrapper, Reveal } from '../components/motion'
import LinkCard from '../components/LinkCard'
import { aiProfiles, artGallery } from '../data/content'

const profileIcons = {
  MidJourney: Sparkles,
  Suno: Music,
}

function GalleryImage({ src, alt, onOpen }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="flex aspect-square items-center justify-center rounded-xl border border-dashed border-border bg-surface/40 text-muted">
        <ImageOff size={22} />
      </div>
    )
  }

  return (
    <motion.button
      onClick={(e) => onOpen(src, e)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`View ${alt} full size`}
      className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-surface/40"
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setErrored(true)}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.button>
  )
}

export default function Art() {
  const [active, setActive] = useState(null)
  const closeRef = useRef(null)
  const triggerRef = useRef(null)

  function openLightbox(src, e) {
    triggerRef.current = e.currentTarget
    setActive(src)
  }

  function closeLightbox() {
    setActive(null)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    if (!active) return
    closeRef.current?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'Tab') {
        e.preventDefault()
        closeRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [active])

  return (
    <PageWrapper>
      <Reveal className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">AI Art</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">AI Creations Gallery</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Exploration into AI prompting in the artistic arena, for the purpose of exploring the boundaries of what is possible, and to explore it's possible applications.
        </p>
      </Reveal>

      <div className="mb-14 grid gap-5 sm:grid-cols-2">
        {aiProfiles.map((profile, i) => {
          const Icon = profileIcons[profile.title] || Sparkles
          return (
            <Reveal key={profile.title} delay={Math.min(i * 0.05, 0.2)} className="h-full">
              <LinkCard
                href={profile.url}
                title={profile.title}
                description={profile.description}
                icon={Icon}
                ctaText="View profile"
                // category={profile.category}
                tags={profile.tags}
                iconSize={20}
                showTopArrow={true}
              />
            </Reveal>
          )
        })}
      </div>

      <div className="space-y-12">
        {artGallery.map((set, i) => (
          <Reveal key={set.title} delay={Math.min(i * 0.03, 0.2)}>
            <h2 className="mb-4 font-display text-xl font-semibold">{set.title}</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {set.images.map((src, j) => (
                <GalleryImage key={src} src={src} alt={`${set.title} ${j + 1}`} onOpen={openLightbox} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged artwork"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          >
            <button
              ref={closeRef}
              aria-label="Close lightbox"
              onClick={closeLightbox}
              className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X size={20} aria-hidden="true" />
            </button>
            <motion.img
              key={active}
              src={active}
              alt="Enlarged artwork"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  )
}
