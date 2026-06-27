import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FlaskConical, MapPin, Sparkles, Wand2 } from 'lucide-react'
import { PageWrapper, Reveal, staggerContainer, staggerItem } from '../components/motion'
import { profile, skills, socials } from '../data/content/mainPageContent'
import SocialIcon from '../components/SocialIcon'
import SEO from '../components/SEO'

const highlights = [
  {
    to: '/projects',
    icon: Sparkles,
    title: 'Projects',
    desc: 'Enteprise Web, desktop & mobile apps — from CRMs to blockchain mining software.',
  },
  {
    to: '/playground',
    icon: FlaskConical,
    title: 'Playground',
    desc: 'Serverless mini-apps you can use offline, built for fun and utility.',
  },
  {
    to: '/art',
    icon: Wand2,
    title: 'AI Art',
    desc: 'A curated MidJourney gallery exploring characters, light and color.',
  },
]

export default function Home() {
  return (
    <PageWrapper>
      <SEO title="Shalom R. — Software Engineer" exactTitle={true} description={profile.tagline} />
      <section className="flex flex-col items-center gap-10 py-8 sm:py-16 md:flex-row md:gap-14">
        <div className="flex-1 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="tag-pill"
          >
            <MapPin size={13} className="mr-1.5" aria-hidden="true" /> {profile.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
          >
            Hi, I'm <span className="gradient-text">{profile.name}</span>
            <br />
            <span className="text-fg">{profile.role}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-balance text-base text-muted sm:text-lg md:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.19 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
          >
            <Link to="/projects" className="btn-primary">
              View my work <ArrowRight size={16} />
            </Link>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              Get in touch
            </a>
            <div className="ml-1 flex gap-2">
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0"
        >
          <div aria-hidden="true" className="absolute inset-0 -z-1 animate-breathe rounded-full bg-gradient-to-br from-accent to-accent2" />
          <img
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            className="h-44 w-44 rounded-3xl border border-border object-cover shadow-glow opacity-90 sm:h-56 sm:w-56 md:h-64 md:w-64"
            loading="eager"
          />
        </motion.div>
      </section>

      {/* Skills row */}
      <Reveal className="mt-4">
        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
          {skills.map((s) => (
            <span key={s} className="tag-pill-soft">
              {s}
            </span>
          ))}
        </div>
      </Reveal>

      {/* Highlights */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-16 grid gap-5 sm:grid-cols-3"
      >
        {highlights.map((h) => (
          <motion.div key={h.to} variants={staggerItem}>
            <Link
              to={h.to}
              className="card group flex h-full flex-col p-6 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-contrast">
                <h.icon size={20} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{h.title}</h3>
              <p className="mt-1.5 flex-1 text-sm text-muted">{h.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.section>
    </PageWrapper>
  )
}
