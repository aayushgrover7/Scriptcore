import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { CTASection } from './Home.jsx'
import { EVENTS_PAST } from '../data/site.js'

export default function Events() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Workshops, hackathons & competitions"
        subtitle="A look back at what our community has built and celebrated together."
      />

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
