import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { CTASection } from './Home.jsx'
import { TIMELINE } from '../data/site.js'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About ScriptCore"
        title="Making computer science education accessible to every student."
        subtitle="We're a student-led organization on a mission to open the door to technology — no prior experience required."
      />

      {/* OUR STORY */}
      <section className="py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-brand-blue/20 to-brand-cyan/20 blur-2xl" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-950">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <Icon name="users" className="h-12 w-12 text-brand-cyan/60" />
                  <p className="font-mono text-sm text-slate-500">workshop in session</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">From one classroom to a community</h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              ScriptCore was founded with a simple mission: to provide students with opportunities to explore computer
              science regardless of prior experience.
            </p>
            <p className="mt-4 leading-relaxed text-slate-400">
              Through workshops, mentorship programs, and community outreach, we aim to inspire the next generation of
              innovators and problem-solvers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="border-y border-white/10 bg-navy-950/40 py-24">
        <div className="container-px grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-cyan/15 text-brand-cyan">
                <Icon name="compass" className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 text-lg leading-relaxed text-slate-400">
                To provide accessible, engaging, and impactful computer science education.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue/15 text-brand-blue">
                <Icon name="spark" className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Our Vision</h3>
              <p className="mt-3 text-lg leading-relaxed text-slate-400">
                A future where every student has the opportunity to explore technology and innovation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Our Journey" title="How far we've come" />
          <div className="relative mx-auto mt-16 max-w-2xl pl-8 sm:pl-10">
            {/* vertical rail */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-cyan/70 via-brand-blue/40 to-transparent sm:left-[9px]" />
            <div className="space-y-8">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-8 top-2 h-4 w-4 rounded-full border-2 border-brand-cyan bg-navy-900 sm:-left-10" />
                    <div className="card hover:border-brand-cyan/40">
                      <span className="font-display text-2xl font-extrabold gradient-text">{item.year}</span>
                      <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
