import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-[2.6rem]">{title}</h2>
      {subtitle && <p className="text-base leading-relaxed text-slate-400 sm:text-lg">{subtitle}</p>}
    </Reveal>
  )
}
