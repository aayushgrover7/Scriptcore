import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 text-center">
      <div>
        <p className="font-mono text-sm text-brand-cyan">404 · not found</p>
        <h1 className="mt-3 font-mono text-6xl font-bold text-white">
          {'{ }'}
        </h1>
        <h2 className="mt-4 text-2xl font-bold">This page returned undefined</h2>
        <p className="mx-auto mt-3 max-w-md text-slate-400">
          The page you're looking for doesn't exist — but there's plenty more to explore.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back home <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
