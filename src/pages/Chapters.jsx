import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { CHAPTERS } from '../data/site.js'
import ChapterMap from '../components/ChapterMap.jsx'

const STEPS = [
  { title: 'Apply', text: 'Tell us about your town and why you want to bring ScriptCore there.' },
  { title: 'Onboard', text: 'We set you up with curriculum, slides, and mentor support to get going.' },
  { title: 'Launch', text: 'Host your first workshop and start building your local community.' },
]

export default function Chapters() {
  return (
    <>
      <PageHero
        eyebrow="Chapters"
        title="Bring ScriptCore to your town"
        subtitle="Our chapters are student-run hubs of learning. Join an existing one — or start your own and lead the way."
      >
        <Link to="/get-involved" className="btn-primary">
          Start a chapter <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* CHAPTER GRID */}
      <section className="py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Our Network" title="Where we are" align="start" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CHAPTERS.map((c, i) => {
              const open = c.status === 'Open'
              return (
                <Reveal key={c.name} delay={i * 0.08}>
                  <div
                    className={`card h-full ${open ? 'border-dashed border-brand-cyan/40 bg-brand-cyan/[0.04]' : 'hover:-translate-y-1 hover:border-brand-cyan/40'} transition-all`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/15 text-brand-cyan">
                        <Icon name="school" className="h-6 w-6" />
                      </span>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${open ? 'bg-brand-cyan/15 text-brand-cyan' : 'bg-emerald-400/10 text-emerald-300'}`}>
                        {c.status}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{c.name}</h3>
                    {c.city && (
                      <p className={`text-sm font-semibold ${c.home ? 'text-brand-cyan' : 'text-slate-400'}`}>{c.city}</p>
                    )}
                    {open && (
                      <Link to="/get-involved" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan">
                        Could be you <Icon name="arrow" className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
          <div className="mt-12">
            <ChapterMap chapters={CHAPTERS} />
          </div>
        </div>
      </section>

      {/* HOW TO START */}
      <section className="border-y border-white/10 bg-navy-950/40 py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Start a Chapter" title="Three steps to launch" subtitle="We'll support you the whole way." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="card h-full">
                  <span className="font-display text-5xl font-extrabold text-brand-cyan/20">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
