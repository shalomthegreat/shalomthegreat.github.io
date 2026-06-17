import { ChefHat, NotebookPen, ArrowUpRight } from 'lucide-react'
import { PageWrapper, Reveal } from '../components/motion'
import { playground } from '../data/content'

const iconMap = { 'chef-hat': ChefHat, 'notebook-pen': NotebookPen }

export default function Playground() {
  return (
    <PageWrapper>
      <Reveal className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Playground</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Welcome to my space</h1>
        <p className="mt-4 max-w-2xl text-muted">
          In my spare time, I like to create serverless mini-apps that can be easily transferred and used
          offline. Here are a few of my favorites.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {playground.map((app, i) => {
          const Icon = iconMap[app.icon] || ChefHat
          return (
            <Reveal key={app.title} delay={i * 0.06}>
              <a
                href={app.url}
                target="_blank"
                rel="noreferrer"
                className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-contrast">
                    <Icon size={22} />
                  </span>
                  <ArrowUpRight size={18} className="text-muted transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{app.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{app.description}</p>
                <span className="mt-4 text-sm font-medium text-accent">Launch app</span>
              </a>
            </Reveal>
          )
        })}
      </div>
    </PageWrapper>
  )
}
