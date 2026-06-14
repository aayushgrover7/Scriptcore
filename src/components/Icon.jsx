// Lightweight inline icon set (stroke-based, inherits currentColor).
const paths = {
  book: <><path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" /><path d="M4 19a2 2 0 0 0 2 2h12" /></>,
  hammer: <><path d="m14 7 5 5-2 2-5-5z" /><path d="m12 9-7.5 7.5a2.1 2.1 0 0 0 3 3L15 12" /><path d="M14.5 5.5 18 2l4 4-3.5 3.5" /></>,
  star: <path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.2l1-5.8L3.5 9.2l5.9-.9z" />,
  python: <><path d="M12 3c-3 0-3 2-3 2v2h6" /><path d="M9 7H6s-2 0-2 3 2 3 2 3h3v-2s0-2 2-2h2s2 0 2-2V6s0-3-3-3" /><path d="M12 21c3 0 3-2 3-2v-2H9" /><path d="M15 17h3s2 0 2-3-2-3-2-3h-3" /></>,
  java: <><path d="M8 18c0 1.5 2 2 4 2s4-.5 4-2" /><path d="M9 14c-1 .6-2 1.2-2 2 0 1.3 2 2 5 2" /><path d="M12 3c2 2.5-2 3.5-2 6 0 1.2 1 2 2 2.7" /><path d="M15 8c1.5 1-1 3-3 3.5" /></>,
  web: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" /></>,
  robot: <><rect x="6" y="9" width="12" height="9" rx="2" /><path d="M12 9V5" /><circle cx="12" cy="4" r="1" /><path d="M9 13h.01M15 13h.01" /><path d="M4 13v3M20 13v3" /></>,
  trophy: <><path d="M7 4h10v4a5 5 0 0 1-10 0z" /><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" /><path d="M10 14h4v3h-4z" /><path d="M8 20h8" /></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="m15 9-2 5-4 2 2-5z" /></>,
  slides: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" /></>,
  plan: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
  puzzle: <path d="M10 4a2 2 0 1 1 4 0v1h3a1 1 0 0 1 1 1v3h1a2 2 0 1 1 0 4h-1v3a1 1 0 0 1-1 1h-3v-1a2 2 0 1 0-4 0v1H6a1 1 0 0 1-1-1v-3H4a2 2 0 1 1 0-4h1V6a1 1 0 0 1 1-1h4z" />,
  video: <><rect x="3" y="6" width="12" height="12" rx="2" /><path d="m15 10 6-3v10l-6-3z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12 5 5L20 7" />,
  spark: <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 5.5a3 3 0 0 1 0 5M21 20a6 6 0 0 0-5-5.9" /></>,
  school: <><path d="m12 3 9 5-9 5-9-5z" /><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" /></>,
  github: <path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.7 2.6 5.6 2.9 5.6 2.9a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.3c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  youtube: <><rect x="3" y="6" width="18" height="12" rx="4" /><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" /></>,
}

export default function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.7 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? null}
    </svg>
  )
}
