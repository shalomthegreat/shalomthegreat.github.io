import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, Clock } from 'lucide-react'
import { PageWrapper, Reveal } from '../../components/motion'
import Markdown, { renderInline } from '../../lib/markdown'
import { getArticle } from '../../data/articles'

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  if (Number.isNaN(d.getTime())) return date
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function Article() {
  const { slug } = useParams()
  const article = getArticle(slug)

  if (!article) {
    return (
      <PageWrapper className="max-w-2xl">
        <h1 className="font-display text-2xl font-bold">Article not found</h1>
        <p className="mt-3 text-muted">This article doesn't exist or may have been moved.</p>
        <Link to="/articles" className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
          <ArrowLeft size={15} /> Back to articles
        </Link>
      </PageWrapper>
    )
  }

  return (
    <PageWrapper className="max-w-3xl">
      <Reveal>
        <Link to="/articles" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
          <ArrowLeft size={15} /> Back to articles
        </Link>

        <header className="mt-8 border-b border-border pb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{article.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
            {renderInline(article.title, 'title')}
          </h1>
          {article.subtitle && (
            <p className="mt-4 max-w-2xl text-lg italic text-muted">{article.subtitle}</p>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
            {article.date && (
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays size={13} /> {formatDate(article.date)}
              </span>
            )}
            {article.readingTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock size={13} /> {article.readingTime}
              </span>
            )}
          </div>
        </header>
      </Reveal>

      <Reveal delay={0.05} className="mt-10">
        <Markdown>{article.body}</Markdown>
      </Reveal>
    </PageWrapper>
  )
}
