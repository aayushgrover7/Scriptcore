import { Link } from 'react-router-dom'
import { NAV_LINKS, SOCIALS, CONTACT_EMAIL } from '../data/site.js'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-navy-950/60">
      <div className="container-px grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-display text-lg font-bold text-white">
              Script<span className="text-brand-cyan">Core</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
            Empowering the next generation of innovators through accessible computer science education, hands-on projects, and mentorship.
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan"
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Explore</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-slate-400 transition-colors hover:text-brand-cyan">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Get in touch</h4>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-brand-cyan"
          >
            <Icon name="mail" className="h-5 w-5" />
            {CONTACT_EMAIL}
          </a>
          <Link to="/get-involved" className="btn-ghost mt-5 w-full sm:w-auto">
            Start a chapter
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} ScriptCore. Learn. Build. Inspire.</p>
          <p>Built by students, for students.</p>
        </div>
      </div>
    </footer>
  )
}
