import { Link } from 'react-router-dom'
import { ArrowUpRight, Leaf } from 'lucide-react'
import { PageWrapper, Reveal } from '../components/motion'
import { profile, story } from '../data/content'

function PageHeader({ eyebrow, title, children }) {
  return (
    <Reveal className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
      <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{title}</h1>
      {children && <p className="mt-4 max-w-2xl text-muted">{children}</p>}
    </Reveal>
  )
}

export default function About() {
  return (
    <PageWrapper>
      <PageHeader eyebrow="About" title="A bit about me">
        {profile.intro.split('using technology in')[0]}
        using technology in{' '}
        <a href={profile.sustainabilityLink} target="_blank" rel="noreferrer" className="text-accent underline-offset-2 hover:underline">
          a sustainable and responsible way
        </a>
        .
      </PageHeader>

      {/* <Reveal delay={0.05} className="overflow-hidden rounded-2xl border border-border shadow-soft">
        <img
          src="/img/slc.jpeg"
          alt="The Salt Lake Valley during sunset"
          className="h-56 w-full object-cover sm:h-80"
          loading="lazy"
        />
      </Reveal> */}

      {/* Timeline */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold">My journey</h2>
        <div className="mt-8 space-y-8 border-l border-border pl-6 sm:pl-8">
          {story.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className="relative">
              <span aria-hidden="true" className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-br from-accent to-accent2 shadow-glow sm:-left-[39px]" />
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">{item.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Web3 ecosystems */}
      <section className="mt-16">
        <Reveal>
          <Link to="/projects/web3-pioneers" className="group inline-flex items-center gap-2 text-lg font-semibold hover:text-accent">
            Web 3.0 pioneers I helped launch
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <p className="mt-2 text-muted">
            With a small but mighty team, we shipped eight complete blockchain ecosystems.
          </p>
        </Reveal>
      </section>

      <Reveal className="mt-12">
        <div className="card flex items-center gap-3 p-5 text-sm text-muted">
          <Leaf size={18} aria-hidden="true" className="shrink-0 text-accent" />
          Passionate about building technology that's sustainable, responsible, and genuinely helpful.
        </div>
      </Reveal>
    </PageWrapper>
  )
}
