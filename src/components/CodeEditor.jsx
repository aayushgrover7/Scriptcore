import { useEffect, useState } from 'react'

// Mock coding editor that types out the ScriptCore snippet, then "runs" it.
const LINES = [
  [{ t: 'def ', c: 'text-yellow-400' }, { t: 'scriptcore', c: 'text-sky-300' }, { t: '():', c: 'text-zinc-400' }],
  [{ t: '    return ', c: 'text-yellow-400 pl-0' }, { t: '"Learn. Build. Inspire."', c: 'text-emerald-300' }],
  [],
  [{ t: 'print', c: 'text-sky-300' }, { t: '(', c: 'text-zinc-400' }, { t: 'scriptcore', c: 'text-sky-300' }, { t: '())', c: 'text-zinc-400' }],
]

export default function CodeEditor() {
  const flat = LINES.flatMap((line, li) => [...line.map((seg) => ({ ...seg, li })), { newline: true, li }])
  const [count, setCount] = useState(0)
  const totalChars = flat.reduce((n, seg) => n + (seg.newline ? 1 : seg.t.length), 0)
  const done = count >= totalChars

  useEffect(() => {
    if (done) return
    const id = setTimeout(() => setCount((c) => c + 1), 38)
    return () => clearTimeout(id)
  }, [count, done])

  // Build the visible lines based on how many characters have been "typed".
  let remaining = count
  const rendered = LINES.map(() => [])
  for (const seg of flat) {
    if (remaining <= 0) break
    if (seg.newline) {
      remaining -= 1
      continue
    }
    const take = Math.min(seg.t.length, remaining)
    rendered[seg.li].push({ t: seg.t.slice(0, take), c: seg.c })
    remaining -= take
  }

  return (
    <div className="relative w-full rounded-2xl border border-zinc-700/60 bg-[#0f172a] shadow-glow-blue backdrop-blur">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-zinc-700/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-zinc-400">scriptcore.py</span>
      </div>

      <div className="space-y-1 px-5 py-5 font-mono text-sm leading-relaxed sm:text-[0.95rem]">
        {rendered.map((line, i) => (
          <div key={i} className="flex min-h-[1.4em] gap-4">
            <span className="w-4 select-none text-right text-zinc-600">{i + 1}</span>
            <span className="whitespace-pre">
              {line.map((seg, j) => (
                <span key={j} className={seg.c}>
                  {seg.t}
                </span>
              ))}
              {!done && i === activeLine(rendered) && <span className="ml-px inline-block h-4 w-2 animate-blink bg-yellow-400 align-middle" />}
            </span>
          </div>
        ))}

        <div className="mt-4 border-t border-zinc-700/60 pt-4">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <span className="font-semibold text-emerald-400">▸ output</span>
          </div>
          <div className="mt-1 h-5 font-mono text-emerald-300">
            {done ? 'Learn. Build. Inspire.' : ''}
          </div>
        </div>
      </div>
    </div>
  )
}

// Find the last non-empty rendered line to place the cursor.
function activeLine(rendered) {
  for (let i = rendered.length - 1; i >= 0; i--) {
    if (rendered[i].length) return i
  }
  return 0
}
