import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Star } from 'lucide-react'
import { PageWrapper, Reveal } from '../../components/motion'
import { projects } from '../../data/content'

const categories = ['All', 'Featured', 'Web', 'Desktop', 'Mobile']

function ProjectCard({ p, index }) {
  const isInternal = Boolean(p.to)
  const hasLink = Boolean(p.url) || isInternal ? true : false
  const Wrapper = isInternal ? Link : 'a'
  const wrapperProps = isInternal
    ? { to: p.to }
    : { href: p.url, target: '_blank', rel: 'noreferrer' }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`card group relative flex h-full flex-col overflow-hidden p-6 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow ${p.featured ? 'card-featured' : ''}`}
    >
      {p.featured && (
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent2">
          <Star size={10} fill="currentColor" />
          Featured
        </span>
      )}
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">{p.category}</span>
      <h3 className="mt-2 font-display text-xl font-semibold">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.tags.map((t) => (
          <span key={t} className={hasLink || Boolean(p.links?.length) ? 'tag-pill' : 'tag-pill-soft'}>{t}</span>
        ))}
      </div>

      {p.links && (
        <div className="mt-4 flex flex-col gap-1">
          {p.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-xs text-muted hover:text-accent"
            >
              <ArrowUpRight size={12} /> {l.label}
            </a>
          ))}
        </div>
      )}

      {hasLink && (<Wrapper
        {...wrapperProps}
        className="mt-5 inline-flex justify-end items-center gap-1 text-sm font-medium text-accent2"
      >
        {isInternal ? 'Read more' : 'Visit'}{' '}
        {isInternal ? (
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        ) : (
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </Wrapper>)}
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(() => {
    if (filter === 'All') return projects
    if (filter === 'Featured') return projects.filter((p) => p.featured)
    return projects.filter((p) => p.category === filter)
  }, [filter])

  return (
    <PageWrapper>
      <Reveal className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Projects</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Software I've helped build</h1>
        <p className="mt-4 max-w-2xl text-muted">
          A selection of apps I've played a key role in building — across web, desktop, and mobile.
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === c
                ? 'bg-gradient-to-r from-accent to-accent2 text-accent-contrast shadow-glow'
                : 'border border-border text-muted hover:border-accent/50 hover:text-fg'
            }`}
          >
            {c}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {filtered.map((p, i) => (
          <ProjectCard key={`${filter}-${p.title}`} p={p} index={i} />
        ))}
      </div>
    </PageWrapper>
  )
}
