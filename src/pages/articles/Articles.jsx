import { Link } from 'react-router-dom'
import { ArrowRight, CalendarDays, Clock, Star } from 'lucide-react'
import { PageWrapper, Reveal } from '../../components/motion'
import { renderInline } from '../../components/Markdown'
import { articles } from '../../data/articlesProvider'
import SEO from '../../components/SEO'

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return date
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Articles() {
  return (
    <PageWrapper className="max-w-3xl">
      <SEO
        title="Articles"
        description="Essays by Shalom R. on technology, consensus systems, blockchain, AI, human behavior, and great UX."
      />
      <Reveal className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Articles</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Writing &amp; essays</h1>
        <p className="mt-4 max-w-2xl text-muted">
          Long-form thinking on technology, systems, and the human side of building things.
        </p>
      </Reveal>

      <div className="space-y-5">
        {articles.map((a, i) => (
          <Reveal key={a.slug} delay={i * 0.05}>
            <Link
              to={`/articles/${a.slug}`}
              className="card group block p-6 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                <span className="font-semibold uppercase tracking-widest text-accent">{a.eyebrow}</span>
                {a.featured && (
                  <span className="inline-flex items-center gap-1 text-accent2">
                    <Star size={11} fill="currentColor" /> Featured
                  </span>
                )}
              </div>

              <h2 className="mt-2 font-display text-xl font-semibold sm:text-2xl">
                {renderInline(a.title, `t-${a.slug}`)}
              </h2>

              {a.subtitle && <p className="mt-2 text-muted">{a.subtitle}</p>}
              {a.excerpt && <p className="mt-3 text-sm leading-relaxed text-muted">{a.excerpt}</p>}

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
                {a.date && (
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={13} /> {formatDate(a.date)}
                  </span>
                )}
                {a.readingTime && (
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} /> {a.readingTime}
                  </span>
                )}
                <span className="ml-auto inline-flex items-center gap-1 font-medium text-accent2">
                  Read article
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </PageWrapper>
  )
}
