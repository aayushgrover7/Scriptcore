export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="url(#lg-grad)" />
      <path d="M24 22 L15 32 L24 42" fill="none" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 22 L49 32 L40 42" fill="none" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="35" y1="18" x2="29" y2="46" stroke="#1c1917" strokeWidth="4" strokeLinecap="round" />
      <defs>
        <linearGradient id="lg-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FACC15" />
          <stop offset="1" stopColor="#EAB308" />
        </linearGradient>
      </defs>
    </svg>
  )
}
