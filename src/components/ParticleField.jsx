import { useMemo } from 'react'

// Decorative floating code snippets used behind the hero.
const SNIPPETS = ['def', '{ }', '</>', '01', 'for', '#!', '()', '=>', '[ ]', 'AI', '++', '::', 'if', 'fn']

export default function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        text: SNIPPETS[i % SNIPPETS.length],
        top: Math.random() * 90 + 2,
        left: Math.random() * 92 + 2,
        size: Math.random() * 0.9 + 0.7,
        delay: Math.random() * 8,
        duration: Math.random() * 6 + 7,
        opacity: Math.random() * 0.25 + 0.08,
      })),
    [],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none font-mono font-medium text-brand-cyan"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        >
          {p.text}
        </span>
      ))}
    </div>
  )
}
