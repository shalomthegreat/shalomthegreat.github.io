import { ArrowUpRight } from 'lucide-react'

export default function LinkCard({
  href,
  title,
  description,
  icon: Icon,
  ctaText = 'Visit',
  category,
  tags = [],
  iconSize = 22,
  showTopArrow = false,
}) {
  const containerSize = iconSize === 20 ? 'h-11 w-11' : 'h-12 w-12'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="card group relative flex h-full flex-col p-6 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
    >
      <div className="flex items-center justify-between">
        {Icon && (
          <span className={`grid ${containerSize} place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-contrast`}>
            <Icon size={iconSize} />
          </span>
        )}
        {showTopArrow && (
          <ArrowUpRight size={18} className="text-muted transition-colors group-hover:text-accent" />
        )}
      </div>

      {category && (
        <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">{category}</span>
      )}

      <h3 className={`${category ? 'mt-1' : 'mt-4'} font-display text-xl font-semibold`}>
        {title}
      </h3>

      <p className="mt-2 flex-1 text-sm text-muted">{description}</p>

      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>
      )}

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
        {ctaText}{' '}
        {!showTopArrow && (
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
      </span>
    </a>
  )
}
