import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { CTASection } from './Home.jsx'
import { EVENTS_UPCOMING, EVENTS_PAST } from '../data/site.js'

const TYPE_STYLES = {
  Workshop: 'text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10',
  Hackathon: 'text-brand-blue border-brand-blue/30 bg-brand-blue/10',
  Competition: 'text-amber-300 border-amber-400/30 bg-amber-400/10',
}

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Workshops, hackathons & competitions"
        subtitle="There's always something happening at ScriptCore. Join an upcoming event or relive the highlights from past ones."
      />

      {/* UPCOMING */}
      <section className="py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Upcoming" title="Mark your calendar" align="start" />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {EVENTS_UPCOMING.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <article className="card group flex h-full flex-col hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-glow">
                  <span className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${TYPE_STYLES[e.type]}`}>
                    {e.type}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{e.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{e.text}</p>
                  <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-slate-300">
                    <p className="flex items-center gap-2">
                      <Icon name="spark" className="h-4 w-4 text-brand-cyan" /> {e.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="compass" className="h-4 w-4 text-brand-cyan" /> {e.location}
                    </p>
                  </div>
                  <button className="btn-ghost mt-5 w-full">Register interest</button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PAST / RECAPS */}
      <section className="border-t border-white/10 bg-navy-950/40 py-24">
        <div className="container-px">
          <SectionHeading
            eyebrow="Past Events"
            title="Photos & recaps"
            subtitle="A look back at what our community has built together."
            align="start"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {EVENTS_PAST.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-1 hover:border-brand-cyan/40">
                  <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <Icon name="video" className="h-10 w-10 text-brand-cyan/40" />
                    <span className="absolute bottom-3 right-3 rounded-md bg-stone-900/70 px-2 py-1 text-xs text-zinc-100">{e.date}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{e.recap}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
