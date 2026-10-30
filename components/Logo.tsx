import Link from "next/link";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="SANVEX home">
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9 10l7-4 7 4v6l-7 4-7-4z M9 22l7 4 7-4" fill="none" stroke="#176BFF" strokeWidth="2.5" strokeLinejoin="round" />
        <circle cx="16" cy="13" r="2" fill="#42C8FF" />
      </svg>
      <span className="font-display text-xl font-bold tracking-[0.18em]">SANVEX</span>
    </Link>
  );
}
