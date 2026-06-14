import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../data/site.js'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-navy-950/80 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label="ScriptCore home">
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Script<span className="text-brand-cyan">Core</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-cyan' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/get-involved" className="btn-primary hidden sm:inline-flex">
            Join Us
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`overflow-hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-xl lg:hidden ${open ? 'max-h-[34rem]' : 'max-h-0'} transition-all duration-300`}>
        <ul className="container-px flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium ${isActive ? 'bg-white/5 text-brand-cyan' : 'text-slate-300'}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-2">
            <Link to="/get-involved" className="btn-primary w-full">
              Join Us <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
