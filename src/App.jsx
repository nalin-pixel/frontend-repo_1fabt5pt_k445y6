import React from 'react'
import Spline from '@splinetool/react-spline'
import { Github, Linkedin, Mail, ExternalLink, ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-lg">
          <a href="#home" className="text-sm font-semibold tracking-tight text-white">Your Name</a>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:scale-105 hover:text-white">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:scale-105 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a href="#contact" className="rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:scale-105 hover:text-white">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-40 text-center sm:pt-48">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Open to collaborations & new opportunities
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Hi, I’m Your Name — building modern, interactive experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-4 max-w-2xl text-pretty text-base text-white/70 sm:text-lg"
        >
          Frontend-focused full‑stack developer with a love for delightful UI, performance, and playful 3D on the web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="group rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-400">
            View Projects
          </a>
          <a href="#contact" className="group rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 hidden items-center gap-2 text-white/70 sm:flex"
        >
          <ArrowDown className="animate-bounce" size={18} />
          Scroll to explore
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />
    </section>
  )
}

const SectionTitle = ({ eyebrow, title, desc }) => (
  <div className="mx-auto mb-10 max-w-3xl px-6 text-center">
    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-emerald-400/90">{eyebrow}</p>
    <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    {desc && <p className="mt-3 text-white/70">{desc}</p>}
  </div>
)

const ProjectCard = ({ title, desc, tags = [], link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    whileHover={{ y: -4 }}
    className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/30 hover:bg-white/[0.06]"
  >
    <div className="flex items-start justify-between">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ExternalLink className="text-white/40 transition group-hover:text-emerald-300" size={18} />
    </div>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-white/70">
          {t}
        </span>
      ))}
    </div>
  </motion.a>
)

const Projects = () => {
  const items = [
    {
      title: 'Interactive 3D Landing',
      desc: 'A playful, high‑performance hero built with Spline and React.',
      tags: ['React', 'Spline', 'Framer Motion'],
      link: 'https://example.com'
    },
    {
      title: 'Realtime Dashboard',
      desc: 'Beautiful charts, blazing‑fast updates, and a11y‑first design.',
      tags: ['Vite', 'Tailwind', 'WebSockets'],
      link: 'https://example.com'
    },
    {
      title: 'Design System Kit',
      desc: 'Composable components with tokens, variants, and docs.',
      tags: ['Design Systems', 'Radix UI', 'Docs'],
      link: 'https://example.com'
    },
    {
      title: 'AI Notes App',
      desc: 'Clean editor, embeddings search, and offline‑first sync.',
      tags: ['AI', 'PWA', 'TypeScript'],
      link: 'https://example.com'
    }
  ]

  return (
    <section id="projects" className="relative bg-slate-950 py-20 text-white">
      <SectionTitle eyebrow="Featured Work" title="Selected Projects" desc="A few highlights that reflect my focus on craft, performance, and interactivity." />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}

const About = () => {
  const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Tailwind', 'Framer Motion', 'Spline', 'MongoDB']
  return (
    <section id="about" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <SectionTitle eyebrow="About" title="A bit about me" desc="I craft human‑centered interfaces and robust foundations that scale." />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="text-white/80">
            I’m a developer and designer who loves building expressive, fast, and accessible products.
            I collaborate with teams to turn ideas into refined, production‑ready experiences.
          </p>
          <p className="mt-4 text-white/70">
            When I’m not shipping features, you’ll find me exploring motion design, tinkering with 3D, or teaching others how to build for the web.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-sm font-semibold text-white">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const Contact = () => {
  const mail = () => {
    const subject = encodeURIComponent('Hello from your portfolio')
    const body = encodeURIComponent("Hi! I saw your portfolio and would love to chat.")
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`
  }
  return (
    <section id="contact" className="relative bg-slate-900 py-20 text-white">
      <SectionTitle eyebrow="Get in touch" title="Let’s build something great" desc="Whether it’s a new product, a polish pass, or a bold idea — I’d love to hear about it." />
      <div className="mx-auto max-w-xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Your name" />
            <input className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Email" />
          </div>
          <textarea className="mt-4 h-28 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Tell me about your project..." />
          <div className="mt-4 flex items-center justify-between">
            <button onClick={mail} className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-400">Send Email</button>
            <div className="flex items-center gap-2 text-white/70">
              <Github size={18} />
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="underline-offset-4 hover:underline">github.com/yourname</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="bg-slate-950 py-10 text-center text-sm text-white/50">
    <div className="mx-auto max-w-7xl px-6">
      © {new Date().getFullYear()} Your Name — Crafted with React, Tailwind, and Spline.
    </div>
  </footer>
)

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
