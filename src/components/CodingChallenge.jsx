import { useState } from 'react'
import Icon from './Icon.jsx'

const QUESTIONS = [
  {
    prompt: 'What does this Python code print?',
    code: 'nums = [1, 2, 3]\nprint(len(nums) * 2)',
    options: ['3', '6', '[1, 2, 3, 1, 2, 3]', 'Error'],
    answer: 1,
    explain: 'len(nums) is 3, and 3 * 2 = 6.',
  },
  {
    prompt: 'Which loop runs exactly 5 times?',
    code: 'for i in range(?):\n    print(i)',
    options: ['range(4)', 'range(5)', 'range(1, 5)', 'range(6)'],
    answer: 1,
    explain: 'range(5) produces 0,1,2,3,4 — five iterations.',
  },
  {
    prompt: 'What is the value of x?',
    code: 'x = "code"\nx = x + "core"',
    options: ['code', 'core', 'codecore', 'Error'],
    answer: 2,
    explain: 'Strings concatenate with +, giving "codecore".',
  },
]

export default function CodingChallenge() {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = QUESTIONS[index]
  const isCorrect = picked === q.answer

  function choose(i) {
    if (picked !== null) return
    setPicked(i)
    if (i === q.answer) setScore((s) => s + 1)
  }

  function next() {
    if (index + 1 >= QUESTIONS.length) {
      setFinished(true)
    } else {
      setIndex((i) => i + 1)
      setPicked(null)
    }
  }

  function restart() {
    setIndex(0)
    setPicked(null)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    return (
      <div className="card text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-cyan/15 text-brand-cyan">
          <Icon name="trophy" />
        </div>
        <h3 className="text-2xl font-bold">Nice work!</h3>
        <p className="mt-2 text-slate-400">
          You scored <span className="font-bold text-brand-cyan">{score}</span> / {QUESTIONS.length}
        </p>
        <p className="mt-1 text-sm text-slate-500">This is the kind of hands-on practice you'll get in our workshops.</p>
        <button onClick={restart} className="btn-ghost mt-6">
          Try again
        </button>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="mb-4 flex items-center justify-between">
        <span className="chip">Challenge {index + 1} / {QUESTIONS.length}</span>
        <span className="font-mono text-sm text-slate-500">score: {score}</span>
      </div>

      <h3 className="text-lg font-semibold text-white">{q.prompt}</h3>

      <pre className="mt-3 overflow-x-auto rounded-xl border border-zinc-700/60 bg-[#0f172a] p-4 font-mono text-sm text-sky-200">
        {q.code}
      </pre>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {q.options.map((opt, i) => {
          const reveal = picked !== null
          const correct = i === q.answer
          const chosenWrong = picked === i && !correct
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={reveal}
              className={[
                'flex items-center justify-between rounded-xl border px-4 py-3 text-left font-mono text-sm transition-all',
                !reveal && 'border-white/10 bg-white/5 hover:border-brand-cyan/50 hover:bg-white/10',
                reveal && correct && 'border-emerald-400/60 bg-emerald-400/10 text-emerald-200',
                reveal && chosenWrong && 'border-red-400/60 bg-red-400/10 text-red-200',
                reveal && !correct && !chosenWrong && 'border-white/10 bg-white/5 opacity-50',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <span>{opt}</span>
              {reveal && correct && <Icon name="check" className="h-4 w-4" />}
            </button>
          )
        })}
      </div>

      {picked !== null && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className={`text-sm ${isCorrect ? 'text-emerald-300' : 'text-slate-400'}`}>
            {isCorrect ? '✓ Correct! ' : '✗ Not quite. '}
            {q.explain}
          </p>
          <button onClick={next} className="btn-primary shrink-0">
            {index + 1 >= QUESTIONS.length ? 'See result' : 'Next'}
            <Icon name="arrow" className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}
