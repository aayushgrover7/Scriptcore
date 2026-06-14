/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Light "yellow & white" theme.
        // `white` is intentionally remapped to a dark ink so the many
        // `text-white` / `bg-white/x` (glass) utilities flip to a light theme
        // in one shot. Use the `paper` token where a genuinely white surface
        // is needed.
        white: '#1c1917',
        paper: '#ffffff',
        // `navy.*` now represents light surfaces (formerly dark backgrounds).
        navy: {
          DEFAULT: '#ffffff',
          50: '#1c1917',
          800: '#fef9c3',
          900: '#ffffff',
          950: '#fffdf5',
        },
        // Body / secondary text scale, flipped to dark grays for a white bg.
        slate: {
          200: '#1c1917',
          300: '#292524',
          400: '#57534e',
          500: '#78716c',
          600: '#a8a29e',
        },
        brand: {
          blue: '#eab308', // yellow-500 — fills / gradient partner
          cyan: '#ca8a04', // yellow-600 — legible accents, icons, links
        },
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(234, 179, 8, 0.5)',
        'glow-blue': '0 0 50px -12px rgba(245, 158, 11, 0.5)',
        card: '0 20px 45px -25px rgba(202, 138, 4, 0.35)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-24px) translateX(12px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 12s ease infinite',
        float: 'float 8s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        blink: 'blink 1.1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
