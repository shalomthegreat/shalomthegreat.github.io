import { ArrowUpRight, Rocket } from 'lucide-react'
import { PageWrapper, Reveal } from '../../components/motion'
import ProjectDetailHeader from '../../components/ProjectDetailHeader'
import { web3Companies } from '../../data/content/mainPageContent'
import SEO from '../../components/SEO'

export default function Web3Pioneers() {
  const technologies = ['Blockchain Infrastructure', 'Non-Custodial Wallet', 'Back Office (Web App)', 'Mining Applications (Desktop App)']

  return (
    <PageWrapper className="max-w-3xl">
      <SEO
        title="Blockchain Web3 Platforms"
        description="Platforms for Web3 pioneers to host wallets, provide utility tokens, and grow communities. Shalom R. successfully helped ship eight complete blockchain ecosystems to market."
      />
      <Reveal>
        <ProjectDetailHeader
          icon={Rocket}
          title="Web 3.0 pioneers I helped launch"
          subtitle="2021 – 2023"
          backLabel="View All Projects"
        />
        <p className="mt-6 leading-relaxed text-muted">
          Successfully shipped eight complete blockchain ecosystems to market, ensuring customer retention during transition, and infastructure support for growing customer base.  I was a key contributor during each phase, from backend infrastructure to frontend applications, contributing to team growth and project success.
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
