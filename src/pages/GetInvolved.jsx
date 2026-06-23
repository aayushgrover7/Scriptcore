import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'

const PATHS = [
  {
    key: 'students',
    icon: 'users',
    title: 'Students',
    text: 'Join classes and workshops to learn coding, robotics, and more — for free or low cost.',
    cta: 'Join classes',
  },
  {
    key: 'volunteers',
    icon: 'star',
    title: 'Volunteers',
    text: 'Teach or mentor the next generation. Share your skills and build leadership experience.',
    cta: 'Teach or mentor',
  },
  {
    key: 'schools',
    icon: 'school',
    title: 'Towns',
    text: 'Partner with ScriptCore to bring accessible CS education to your students.',
    cta: 'Partner with us',
  },
]

export default function GetInvolved() {
  const [role, setRole] = useState('students')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="There's a place for you at ScriptCore"
        subtitle="Whether you want to learn, teach, or partner with us, getting started takes just a minute."
      />

      {/* THREE PATHS */}
      <section className="py-24">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-3">
            {PATHS.map((p, i) => (
              <Reveal key={p.key} delay={i * 0.1}>
                <button
                  onClick={() => setRole(p.key)}
                  className={`card h-full w-full text-left transition-all hover:-translate-y-1.5 hover:border-brand-cyan/40 ${
                    role === p.key ? 'border-brand-cyan/60 shadow-glow' : ''
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-blue/20 text-brand-cyan">
                    <Icon name={p.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-400">{p.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan">
                    {p.cta} <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SIGN-UP FORM (Google Form stand-in) */}
      <section className="border-t border-white/10 bg-navy-950/40 py-24">
        <div className="container-px grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Sign Up"
              title="Tell us a little about you"
              subtitle="Fill out the form and our team will reach out with next steps. Prefer Google Forms? Use the button below."
              align="start"
            />
            <a href="#" className="btn-ghost mt-8">
              <Icon name="arrow" className="h-4 w-4" /> Open the Google Form
            </a>
            <div className="mt-8 space-y-3 text-sm text-slate-400">
              {['Free or low-cost programs', 'Beginner friendly — no experience needed', 'Flexible online & in-person options'].map((t) => (
                <p key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {t}
                </p>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="card">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
                    <Icon name="check" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Thanks for signing up!</h3>
                  <p className="mt-2 text-slate-400">We'll be in touch soon with next steps for {labelFor(role)}.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-ghost mt-6">
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Full name" name="name" placeholder="Jane Doe" required />
                  <Field label="Email" name="email" type="email" placeholder="jane@email.com" required />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">I'm interested as a…</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-brand-cyan/60"
                    >
                      <option value="students">Student</option>
                      <option value="volunteers">Volunteer / Mentor</option>
                      <option value="schools">Town / Partner</option>
                    </select>
                  </div>
                  <Field label="Town (optional)" name="school" placeholder="Your town" />
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-300">Anything you'd like us to know?</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us about your interests or experience…"
                      className="w-full resize-none rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-brand-cyan/60"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Submit <Icon name="arrow" className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-brand-cyan/60"
      />
    </div>
  )
}

function labelFor(role) {
  return role === 'students' ? 'students' : role === 'volunteers' ? 'volunteers' : 'town partners'
}
