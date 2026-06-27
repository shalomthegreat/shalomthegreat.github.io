import { Apple, ArrowUpRight, Download, Leaf, Monitor, Terminal } from 'lucide-react'
import { PageWrapper, Reveal } from '../../components/motion'
import ProjectDetailHeader from '../../components/ProjectDetailHeader'
import { setPowerFree } from '../../data/content/mainPageContent'
import SEO from '../../components/SEO'

const osIcon = { Mac: Apple, Windows: Monitor, Linux: Terminal }

export default function SetPowerFree() {
  return (
    <PageWrapper className="max-w-3xl">
      <SEO
        title="The SetPowerFree Initiative"
        description="GREEN is a digital reward of the Green Blockchain that measures energy contribution to blockchain technologies. Supported by a modern cross-platform desktop mining dashboard, analytics, and an auto-update system."
      />
      <Reveal>
        <ProjectDetailHeader
          icon={Leaf}
          title={setPowerFree.title}
          subtitle={setPowerFree.date}
        />
        <p className="mt-6 leading-relaxed text-muted">{setPowerFree.intro}</p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {setPowerFree.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.05}>
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 text-sm font-bold text-accent-contrast">
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
                  {step.link.label} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}

              {step.downloads && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.downloads.map((d) => {
                    const Icon = osIcon[d.os] || Download
                    return (
                      <a key={d.os} href={d.url} aria-label={`Download for ${d.os}`} className="btn-ghost">
                        <Icon size={16} aria-hidden="true" /> {d.os}
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
