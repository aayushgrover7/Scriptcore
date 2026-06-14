import Reveal from './Reveal.jsx'

// Compact hero used at the top of inner pages.
export default function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 hero-gradient animate-gradient-shift">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="container-px relative py-28 sm:py-32">
        <Reveal className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] sm:text-5xl md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  )
}
