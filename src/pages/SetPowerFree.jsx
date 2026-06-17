import { Link } from 'react-router-dom'
import { Apple, ArrowLeft, ArrowUpRight, Download, Leaf, Monitor, Terminal } from 'lucide-react'
import { PageWrapper, Reveal } from '../components/motion'
import { setPowerFree } from '../data/content'

const osIcon = { Mac: Apple, Windows: Monitor, Linux: Terminal }

export default function SetPowerFree() {
  return (
    <PageWrapper className="max-w-3xl">
      <Reveal>
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
          <ArrowLeft size={15} /> Back to projects
        </Link>
        <div className="mt-6 flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
            <Leaf size={24} />
          </span>
          <div>
            <h1 className="font-display text-3xl font-bold">{setPowerFree.title}</h1>
            <p className="text-sm text-muted">{setPowerFree.date}</p>
          </div>
        </div>
        <p className="mt-6 leading-relaxed text-muted">{setPowerFree.intro}</p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {setPowerFree.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.05}>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-sm font-bold text-accent-contrast">
                  {i + 1}
                </span>
                <h2 className="font-display text-lg font-semibold">{step.title}</h2>
              </div>
              <p className="mt-3 text-muted">{step.body}</p>

              {step.link && (
                <a
                  href={step.link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  {step.link.label} <ArrowUpRight size={14} />
                </a>
              )}

              {step.downloads && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.downloads.map((d) => {
                    const Icon = osIcon[d.os] || Download
                    return (
                      <a key={d.os} href={d.url} className="btn-ghost">
                        <Icon size={16} /> {d.os}
                      </a>
                    )
                  })}
                </div>
              )}

              {step.tip && (
                <div className="mt-4 rounded-xl border border-accent/30 bg-accent/5 p-4 text-sm">
                  <span className="font-semibold text-accent">Pro tip: </span>
                  <span className="text-muted">{step.tip}</span>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </PageWrapper>
  )
}
