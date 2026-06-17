import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Rocket } from 'lucide-react'
import { PageWrapper, Reveal } from '../components/motion'
import { web3Companies } from '../data/content'

export default function Web3Pioneers() {
  const technologies = ['Blockchain Infrastructure', 'Non-Custodial Wallet', 'Back Office (Web App)', 'Mining Applications (Desktop App)']

  return (
    <PageWrapper className="max-w-3xl">
      <Reveal>
        <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-accent">
          <ArrowLeft size={15} /> View All Projects
        </Link>
        <div className="mt-6 flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
            <Rocket size={24} />
          </span>
          <div>
            <h1 className="font-display text-3xl font-bold">Web 3.0 pioneers I helped launch</h1>
            <p className="text-sm text-muted">2021 – 2023</p>
          </div>
        </div>
        <p className="mt-6 leading-relaxed text-muted">
          With a small but mighty team, we shipped eight complete blockchain ecosystems, each including:
        </p>
        <p className='leading-relaxed'>
          {technologies.map((tech, i) => (
            <span key={tech} className="tag-pill ml-2 mt-4 text-accent2">
              {tech}
            </span>
          ))}
        </p>
        <p className="mt-6 leading-relaxed text-muted">
          Check out these pioneers:
        </p>
      </Reveal>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {web3Companies.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.04}>
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="card group flex items-center justify-between gap-3 p-4 hover:-translate-y-0.5 hover:border-accent/50"
            >
              <div>
                <span className="font-medium text-accent">{c.name}</span>
                {c.note && <span className="block text-xs text-muted">{c.note}</span>}
              </div>
              <ArrowUpRight size={18} className="shrink-0 text-muted transition-colors group-hover:text-accent" />
            </a>
          </Reveal>
        ))}
      </div>
    </PageWrapper>
  )
}
