import { ChefHat, NotebookPen } from 'lucide-react'
import { PageWrapper, Reveal } from '../components/motion'
import LinkCard from '../components/LinkCard'
import { playground } from '../data/content'

const iconMap = { 'chef-hat': ChefHat, 'notebook-pen': NotebookPen }

export default function Playground() {
  return (
    <PageWrapper>
      <Reveal className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Playground</p>
        <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Welcome to my space</h1>
        <p className="mt-4 max-w-2xl text-muted">
          In my spare time, I like to create mini-apps that can be easily transferred and used
          offline to accomplish some utility. Here are a few of my favorites.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2">
        {playground.map((app, i) => {
          const Icon = iconMap[app.icon] || ChefHat
          return (
            <Reveal key={app.title} delay={i * 0.06}>
              <LinkCard
                href={app.url}
                title={app.title}
                description={app.description}
                icon={Icon}
                tags={app.tags}
                ctaText="Launch app"
                showTopArrow={true}
              />
            </Reveal>
          )
        })}
      </div>
    </PageWrapper>
  )
}
