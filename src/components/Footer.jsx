import { Link } from 'react-router-dom'
import { navLinks, profile, socials } from '../data/content'
import SocialIcon from './SocialIcon'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link to="/" className="font-display text-xl font-bold">
              Shalom<span className="text-accent">.</span>
            </Link>
            <p className="mt-3 text-sm text-muted">{profile.tagline}</p>
          </div>

          <nav aria-label="Site pages" className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted" aria-hidden="true">Explore</span>
            {navLinks.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted transition-colors hover:text-accent">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted" aria-hidden="true">Connect</span>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.type}
                  href={s.url}
                  target={s.type === 'Email' ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={s.type}
                  className="btn-ghost h-10 w-10 !px-0"
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <span>
            &copy; {year} {profile.name} | Built with React, Tailwind, and a little playfulness.
          </span>
          <span className="font-mono">a.k.a. {profile.alias}</span>
        </div>
      </div>
    </footer>
  )
}
