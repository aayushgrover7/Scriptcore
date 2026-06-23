export default function Logo({ className = 'h-9 w-9' }) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}scriptcore-logo.png`}
      alt="ScriptCore Academy"
      className={`rounded-xl object-cover ${className}`}
    />
  )
}
