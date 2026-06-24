import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ParticleField from '../components/ParticleField.jsx'
import CodeEditor from '../components/CodeEditor.jsx'
import Counter from '../components/Counter.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import CodingChallenge from '../components/CodingChallenge.jsx'
import Icon from '../components/Icon.jsx'
import {
  IMPACT_STATS,
  WHAT_WE_DO,
  FEATURED_PROGRAMS,
  SUCCESS_STORIES,
} from '../data/site.js'

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen items-center overflow-hidden hero-gradient animate-gradient-shift">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <ParticleField />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl" />

        <div className="container-px relative grid items-center gap-12 py-28 lg:grid-cols-2 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              Student-led CS education
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[3.7rem]">
              Empowering the Next Generation of <span className="gradient-text">Innovators</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              ScriptCore provides students with accessible computer science education, hands-on projects, and mentorship
              opportunities that prepare them for the future.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/get-involved" className="btn-primary">
                Join ScriptCore <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/programs" className="btn-ghost">
                Learn More
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-brand-cyan" /> No Cost</span>
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-brand-cyan" /> Beginner friendly</span>
              <span className="flex items-center gap-2"><Icon name="check" className="h-4 w-4 text-brand-cyan" /> Project based</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-blue/20 to-brand-cyan/20 blur-2xl" />
            <div className="relative animate-float">
              <CodeEditor />
            </div>
          </motion.div>
        </div>

        <a href="#impact" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 lg:block" aria-label="Scroll down">
          <svg viewBox="0 0 24 24" className="h-6 w-6 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </a>
      </section>

      {/* ============ IMPACT / LIVE DASHBOARD ============ */}
      <section id="impact" className="relative border-y border-white/10 bg-navy-950/40 py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Our Impact"
            title="A growing community of student innovators"
            subtitle="Real numbers from our live impact dashboard — and counting."
          />
          <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {IMPACT_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="card group h-full text-center hover:-translate-y-1 hover:border-brand-cyan/40">
                  <div className="font-display text-4xl font-extrabold gradient-text sm:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="py-24">
        <div className="container-px">
          <SectionHeading eyebrow="What We Do" title="Learn. Build. Lead." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {WHAT_WE_DO.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="card group relative h-full overflow-hidden hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-glow">
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-brand-cyan/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 text-brand-cyan">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-400">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROGRAMS ============ */}
      <section className="py-12">
        <div className="container-px">
          <SectionHeading eyebrow="Featured Programs" title="Where students get started" align="start" />
          <div className="mt-12 space-y-5">
            {FEATURED_PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <Link
                  to="/programs"
                  className="card group flex flex-col gap-4 hover:-translate-y-1 hover:border-brand-cyan/40 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-blue/15 font-display text-lg font-bold text-brand-cyan">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <span className="chip mb-2">{p.tag}</span>
                      <h3 className="text-xl font-bold">{p.title}</h3>
                      <p className="mt-1 text-slate-400">{p.text}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-2 text-sm font-semibold text-brand-cyan transition-transform group-hover:translate-x-1">
                    Explore <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTERACTIVE CODING CHALLENGE ============ */}
      <section className="py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Try it yourself"
              title="Think you can crack the code?"
              subtitle="Take a quick, interactive coding challenge — no setup required. It's a taste of how our hands-on workshops work."
              align="start"
            />
            <ul className="mt-8 space-y-3">
              {['Instant feedback on every answer', 'Beginner-friendly Python questions', 'Learn the reasoning, not just the answer'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-slate-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <CodingChallenge />
          </Reveal>
        </div>
      </section>

      {/* ============ SUCCESS STORIES ============ */}
      <section className="py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Success Stories" title="Students who grew with ScriptCore" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SUCCESS_STORIES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.1}>
                <figure className="card flex h-full flex-col">
                  <div className="text-5xl leading-none text-brand-cyan/30 font-display">“</div>
                  <blockquote className="-mt-3 flex-1 leading-relaxed text-slate-300">{s.quote}</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue text-sm font-bold text-stone-900">
                      {s.name.split(' ').map((w) => w[0]).join('')}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{s.name}</p>
                      <p className="text-xs text-slate-400">{s.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTASection />
    </>
  )
}

export function CTASection() {
  return (
    <section className="py-12">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-blue/20 via-navy-900 to-brand-cyan/15 px-6 py-16 text-center sm:px-16">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-brand-cyan/20 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-brand-blue/20 blur-3xl" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to Start Learning?</h2>
              <p className="mt-4 text-lg text-slate-300">
                Join hundreds of students building their future through computer science.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/get-involved" className="btn-primary">
                  Become a Member <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link to="/programs" className="btn-ghost">
                  View Programs
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
