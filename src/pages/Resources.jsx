import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { CTASection } from './Home.jsx'
import { RESOURCES } from '../data/site.js'

export default function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Free learning materials for everyone"
        subtitle="Every workshop we run becomes a free resource. Browse slides, lesson plans, challenges, and recordings — no membership required."
      />

      <section className="py-24">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2">
            {RESOURCES.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.08}>
                <article className="card group flex h-full items-start gap-5 hover:-translate-y-1 hover:border-brand-cyan/40">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 text-brand-cyan">
                    <Icon name={r.icon} className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{r.title}</h3>
                    <p className="mt-2 leading-relaxed text-slate-400">{r.text}</p>
                    <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition-transform group-hover:translate-x-1">
                      Browse {r.title.toLowerCase()} <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Workshop archive callout */}
          <Reveal delay={0.1}>
            <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950 p-8 sm:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
                <div>
                  <span className="chip">Workshop Archive</span>
                  <h3 className="mt-4 text-2xl font-bold sm:text-3xl">Catch up on any session, anytime</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-slate-400">
                    Missed a workshop or want to review? Our archive pairs every recording with its slides and starter
                    files so you can learn at your own pace.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                  {['video', 'slides', 'plan'].map((icon, idx) => (
                    <div
                      key={icon}
                      className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-brand-cyan"
                      style={{ transform: `translateY(${idx % 2 ? '12px' : '-12px'})` }}
                    >
                      <Icon name={icon} className="h-8 w-8" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
