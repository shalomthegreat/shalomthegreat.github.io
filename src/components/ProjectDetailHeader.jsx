import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function ProjectDetailHeader({
  title,
  subtitle,
  icon: Icon,
  backLabel = 'Back to projects',
  backTo = '/projects',
}) {
  return (
    <>
      <Link to={backTo} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
        <ArrowLeft size={15} /> {backLabel}
      </Link>
      <div className="mt-6 flex items-center gap-3">
        {Icon && (
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
            <Icon size={24} />
          </span>
        )}
        <div>
          <h1 className="font-display text-3xl font-bold">{title}</h1>
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
      </div>
    </>
  )
}
