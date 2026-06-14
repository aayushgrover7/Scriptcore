import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { PROGRAMS, LEARNING_PATH, WHY_PROGRAMS } from '../data/site.js'

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Explore Our Programs"
        subtitle="From coding and robotics to leadership and communication, ScriptCore equips students with the skills needed to succeed in the modern world."
      >
        <Link to="/get-involved" className="btn-primary">
          Join a Program <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* PROGRAM GRID */}
      <section className="py-24">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                <article className="card group flex h-full flex-col hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-glow">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 text-brand-cyan">
                      <Icon name={p.icon} className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
                      {p.level}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {p.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">Outcome</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{p.outcome}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="border-y border-white/10 bg-navy-950/40 py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Learning Path"
            title="A clear route from beginner to leader"
            subtitle="Start anywhere. Progress at your own pace through three tiers of growth."
          />
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {LEARNING_PATH.map((stage, i) => (
              <Reveal key={stage.tier} delay={i * 0.1}>
                <div className="relative h-full">
                  <div className="card h-full">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue font-display text-sm font-bold text-stone-900">
                        {i + 1}
                      </span>
                      <h3 className="text-xl font-bold">{stage.tier}</h3>
                    </div>
                    <ul className="mt-5 space-y-2.5">
                      {stage.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-slate-300">
                          <Icon name="arrow" className="h-4 w-4 text-brand-cyan" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {i < LEARNING_PATH.length - 1 && (
                    <div className="absolute -bottom-5 left-1/2 hidden -translate-x-1/2 text-brand-cyan/60 lg:block lg:-right-5 lg:bottom-1/2 lg:left-auto lg:translate-x-0 lg:translate-y-1/2">
                      <Icon name="arrow" className="h-6 w-6" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OUR PROGRAMS */}
      <section className="py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Our Programs?"
              title="Designed to actually stick"
              subtitle="We focus on doing, not just watching — taught by passionate student instructors who've been in your seat."
              align="start"
            />
            <Link to="/get-involved" className="btn-primary mt-8">
              Get Started <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {WHY_PROGRAMS.map((reason) => (
                <div key={reason} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-slate-200">{reason}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-brand-cyan/30 bg-brand-cyan/10 px-5 py-4 text-center">
              <p className="font-display font-semibold text-brand-cyan">Low cost or no cost :)</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
