import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/projects/Projects'
import Playground from './pages/Playground'
import Art from './pages/Art'
import Articles from './pages/articles/Articles'
import Article from './pages/articles/Article'
import SetPowerFree from './pages/projects/SetPowerFree'
import Web3Pioneers from './pages/projects/Web3Pioneers'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent focus:shadow-soft focus:outline-none"
      >
        Skip to main content
      </a>
      <AnimatedBackground />
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/setpowerfree" element={<SetPowerFree />} />
            <Route path="/projects/web3-pioneers" element={<Web3Pioneers />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<Article />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/art" element={<Art />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}
