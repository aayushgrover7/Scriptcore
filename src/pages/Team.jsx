import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { CTASection } from './Home.jsx'
import { TEAM } from '../data/site.js'

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Meet the students behind ScriptCore"
        subtitle="Every workshop, program, and event is led by passionate student volunteers who believe in making CS accessible."
      />

      <section className="py-24">
        <div className="container-px">
          <SectionHeading eyebrow="Leadership" title="The people making it happen" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={(i % 3) * 0.08}>
                <article className="card group h-full text-center hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:shadow-glow">
                  <div className="relative mx-auto h-24 w-24">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue blur-md opacity-60 transition-opacity group-hover:opacity-90" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue font-display text-2xl font-extrabold text-stone-900">
                      {member.initials}
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{member.name}</h3>
                  <p className="text-sm font-medium text-brand-cyan">{member.role}</p>
                  <p className="mt-1 text-sm text-slate-400">{member.focus}</p>
                  <a
                    href="#"
                    aria-label={`${member.name} on LinkedIn`}
                    className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan"
                  >
                    <Icon name="linkedin" className="h-5 w-5" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
              <h3 className="text-2xl font-bold">Want to join the team?</h3>
              <p className="mx-auto mt-3 max-w-xl text-slate-400">
                We're always looking for students who want to teach, mentor, and help lead. No experience required — just enthusiasm.
              </p>
              <a href="/get-involved" className="btn-primary mt-6">
                Become a volunteer <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
