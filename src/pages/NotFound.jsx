import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import { PageWrapper } from '../components/motion'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <PageWrapper>
      <SEO title="Page Not Found" description="This page drifted off into the gradient. Let's get you back home." />
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="gradient-text font-display text-7xl font-bold sm:text-8xl"
        >
          404
        </motion.h1>
        <p className="mt-4 max-w-md text-muted">
          This page drifted off into the gradient. Let's get you back home.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <Home size={16} /> Back home
        </Link>
      </div>
    </PageWrapper>
  )
}
