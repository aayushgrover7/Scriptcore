import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { SOCIALS, CONTACT_EMAIL } from '../data/site.js'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        subtitle="Questions, ideas, or just want to say hi? Send us a message and we'll get back to you."
      />

      <section className="py-24">
        <div className="container-px max-w-lg">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold">Reach out directly</h2>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition-colors hover:border-brand-cyan/50"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-cyan/15 text-brand-cyan">
                    <Icon name="mail" className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-slate-500">Email</span>
                    <span className="font-medium text-white">{CONTACT_EMAIL}</span>
                  </span>
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Follow along</h3>
                <div className="mt-4 flex gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan"
                    >
                      <Icon name={s.icon} className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand-cyan/20 bg-brand-cyan/[0.06] p-6">
                <p className="font-display font-semibold text-white">Want to learn or volunteer?</p>
                <p className="mt-1 text-sm text-slate-400">
                  Head to <Link to="/get-involved" className="text-brand-cyan underline-offset-2 hover:underline">Get Involved</Link> to sign up directly.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
