import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { CHAPTERS } from '../data/site.js'

const CHAPTER_COORDS = {
  'South Windsor, CT': [41.861, -72.582],
  'Glastonbury, CT':   [41.703, -72.608],
  'Shrewsbury, MA':    [42.295, -71.719],
  'Rockville, MD':     [39.084, -77.153],
}

function haversine([lat1, lon1], [lat2, lon2]) {
  const R = 3958.8
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

function findNearest(lat, lon) {
  let best = null
  let bestDist = Infinity
  for (const c of CHAPTERS) {
    const coords = CHAPTER_COORDS[c.name]
    if (!coords) continue
    const dist = haversine([lat, lon], coords)
    if (dist < bestDist) {
      bestDist = dist
      best = { ...c, miles: Math.round(dist) }
    }
  }
  return best
}

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
  const [finderStatus, setFinderStatus] = useState('idle')
  const [nearestChapter, setNearestChapter] = useState(null)
  const [zip, setZip] = useState('')

  function handlePathClick(key) {
    setRole(key)
    if (key !== 'students') {
      setFinderStatus('idle')
      setNearestChapter(null)
      setZip('')
    }
  }

  function reset() {
    setFinderStatus('idle')
    setNearestChapter(null)
    setZip('')
  }

  function resolveChapter(lat, lon) {
    const chapter = findNearest(lat, lon)
    setNearestChapter(chapter)
    setFinderStatus('found')
  }

  function handleUseLocation() {
    if (!navigator.geolocation) { setFinderStatus('error'); return }
    setFinderStatus('loading')
    navigator.geolocation.getCurrentPosition(
      (pos) => resolveChapter(pos.coords.latitude, pos.coords.longitude),
      () => setFinderStatus('error'),
      { timeout: 10000, enableHighAccuracy: true },
    )
  }

  async function handleZipSubmit(e) {
    e.preventDefault()
    if (!zip.trim()) return
    setFinderStatus('loading')
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(zip.trim())}&countrycodes=us&format=json&limit=1`,
        { headers: { 'Accept-Language': 'en' } },
      )
      const data = await res.json()
      if (!data.length) { setFinderStatus('error'); return }
      resolveChapter(parseFloat(data[0].lat), parseFloat(data[0].lon))
    } catch {
      setFinderStatus('error')
    }
  }

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
                  onClick={() => handlePathClick(p.key)}
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

          {/* CHAPTER FINDER — shown when Students is selected */}
          {role === 'students' && (
            <Reveal delay={0.05}>
              <div className="mt-10 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/[0.04] p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
                    <Icon name="compass" className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">Find your nearest chapter</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Use your device location or enter your zip code to find the closest ScriptCore chapter.
                    </p>

                    {finderStatus === 'idle' && (
                      <div className="mt-5 flex flex-wrap items-center gap-4">
                        <button onClick={handleUseLocation} className="btn-primary">
                          <Icon name="compass" className="h-4 w-4" /> Use my location
                        </button>
                        <span className="text-xs text-slate-500">or</span>
                        <form onSubmit={handleZipSubmit} className="flex gap-2">
                          <input
                            type="text"
                            value={zip}
                            onChange={(e) => setZip(e.target.value)}
                            placeholder="Enter zip code"
                            maxLength={10}
                            className="w-36 rounded-xl border border-white/10 bg-navy-950/60 px-4 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-brand-cyan/60"
                          />
                          <button type="submit" className="btn-ghost py-2.5">Go</button>
                        </form>
                      </div>
                    )}

                    {finderStatus === 'loading' && (
                      <p className="mt-5 text-sm text-slate-400">Looking up your location…</p>
                    )}

                    {finderStatus === 'found' && nearestChapter && (
                      <div className="mt-5 flex items-center gap-5">
                        <div className="rounded-xl border border-brand-cyan/30 bg-navy-900/60 px-6 py-4">
                          <p className="text-xs font-semibold uppercase tracking-wider text-brand-cyan">
                            Nearest chapter
                          </p>
                          <p className="mt-1 text-xl font-bold">{nearestChapter.name}</p>
                          {nearestChapter.home && (
                            <p className="mt-0.5 text-xs font-semibold text-brand-cyan">Home Base</p>
                          )}
                          <p className="mt-1 text-sm text-slate-400">{nearestChapter.miles} miles away</p>
                        </div>
                        <button
                          onClick={reset}
                          className="text-xs text-slate-500 underline underline-offset-2 hover:text-slate-300"
                        >
                          Search again
                        </button>
                      </div>
                    )}

                    {finderStatus === 'error' && (
                      <div className="mt-5">
                        <p className="text-sm text-red-400">
                          Couldn't find that location — try entering your zip code instead.
                        </p>
                        <button onClick={reset} className="btn-ghost mt-3">Try again</button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* TOWNS CONTACT — shown when Towns is selected */}
          {role === 'schools' && (
            <Reveal delay={0.05}>
              <div className="mt-10 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/[0.04] p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
                    <Icon name="school" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Interested in partnering with us?</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Email us and we'll get back to you with available opportunities.
                    </p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=scriptcore1@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline"
                    >
                      scriptcore1@gmail.com <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {/* VOLUNTEER CONTACT — shown when Volunteers is selected */}
          {role === 'volunteers' && (
            <Reveal delay={0.05}>
              <div className="mt-10 rounded-2xl border border-brand-cyan/20 bg-brand-cyan/[0.04] p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan">
                    <Icon name="star" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Interested in volunteering?</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Email us and we'll get back to you with available opportunities.
                    </p>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=scriptcore1@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan hover:underline"
                    >
                      scriptcore1@gmail.com <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* SIGN-UP FORM */}
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
